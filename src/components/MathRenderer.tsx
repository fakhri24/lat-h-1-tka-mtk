import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
}

/**
 * Renders inline string containing $...$ math expressions.
 */
const renderMathOnly = (text: string, keyPrefix: string): React.ReactNode => {
  const parts = text.split(/(\$[^$]+?\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1).trim();
      const html = katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      });
      return <span key={`${keyPrefix}-m-${idx}`} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <React.Fragment key={`${keyPrefix}-t-${idx}`}>{part}</React.Fragment>;
  });
};

/**
 * Renders a single line of text supporting **bold** (even containing $math$),
 * *italic* (even containing $math$), and standalone $math$.
 */
const renderInlineLine = (line: string, keyPrefix: string): React.ReactNode => {
  const tokenRegex = /(\*\*(?:[^*]|\$[^$]*\$)+?\*\*|\*(?:[^*$]|\$[^$]*\$)+?\*|\$[^$]+?\$)/g;
  const tokens = line.split(tokenRegex);

  return tokens.map((token, idx) => {
    if (!token) return null;

    if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
      const inner = token.slice(2, -2);
      return (
        <strong key={`${keyPrefix}-b-${idx}`} className="font-bold text-slate-950 dark:text-white">
          {renderMathOnly(inner, `${keyPrefix}-bi-${idx}`)}
        </strong>
      );
    }

    if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
      const inner = token.slice(1, -1);
      return (
        <em key={`${keyPrefix}-i-${idx}`} className="italic">
          {renderMathOnly(inner, `${keyPrefix}-ii-${idx}`)}
        </em>
      );
    }

    if (token.startsWith('$') && token.endsWith('$')) {
      const math = token.slice(1, -1).trim();
      const html = katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      });
      return <span key={`${keyPrefix}-k-${idx}`} dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <React.Fragment key={`${keyPrefix}-p-${idx}`}>{token}</React.Fragment>;
  });
};

/**
 * Renders a block of text lines, grouping consecutive "| ... |" lines into a styled HTML table.
 */
const renderLinesAndTables = (textBlock: string, keyPrefix: string): React.ReactNode => {
  const rawLines = textBlock.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();

    // Check if this line starts a markdown table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines: string[] = [];
      while (
        i < rawLines.length &&
        rawLines[i].trim().startsWith('|') &&
        rawLines[i].trim().endsWith('|')
      ) {
        tableLines.push(rawLines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const parseRow = (rowStr: string) =>
          rowStr
            .slice(1, -1)
            .split('|')
            .map((c) => c.trim());

        const headers = parseRow(tableLines[0]);
        const isSeparator = /^[:\-|\s]+$/.test(tableLines[1].slice(1, -1));
        const bodyRows = tableLines.slice(isSeparator ? 2 : 1).map(parseRow);

        const renderCellWithBreaks = (cellStr: string, cellPrefix: string) => {
          const subLines = cellStr.split(/<br\s*\/?>/gi);
          return subLines.map((sub, sIdx) => (
            <React.Fragment key={`${cellPrefix}-sub-${sIdx}`}>
              {sIdx > 0 && <br />}
              {renderInlineLine(sub.trim(), `${cellPrefix}-sl-${sIdx}`)}
            </React.Fragment>
          ));
        };

        elements.push(
          <span
            key={`${keyPrefix}-tbl-${i}`}
            className="block my-2.5 overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm"
          >
            <table className="w-full text-center border-collapse bg-white dark:bg-slate-900 text-base md:text-[18px]">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-b border-slate-300 dark:border-slate-700">
                  {headers.map((h, hIdx) => (
                    <th key={hIdx} className="py-2 px-3.5 font-extrabold border-r last:border-r-0 border-slate-200 dark:border-slate-700 leading-snug">
                      {renderCellWithBreaks(h, `${keyPrefix}-th-${hIdx}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {bodyRows.map((row, rIdx) => {
                  const isHighlightRow = row.some(
                    (cell) =>
                      cell.includes('Total') ||
                      cell.includes('Kelas Median') ||
                      cell === '**Memenuhi**' ||
                      cell.startsWith('**Stabil**')
                  );
                  return (
                    <tr
                      key={rIdx}
                      className={
                        isHighlightRow
                          ? 'bg-emerald-50/80 dark:bg-emerald-950/40 font-bold'
                          : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'
                      }
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className="py-2 px-3.5 border-r last:border-r-0 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-snug"
                        >
                          {renderCellWithBreaks(cell, `${keyPrefix}-td-${rIdx}-${cIdx}`)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </span>
        );
        continue;
      }
    }

    // Regular line
    const needsBreak = elements.length > 0;
    elements.push(
      <React.Fragment key={`${keyPrefix}-ln-${i}`}>
        {needsBreak && <br />}
        {renderInlineLine(rawLines[i], `${keyPrefix}-il-${i}`)}
      </React.Fragment>
    );
    i++;
  }

  return elements;
};

/**
 * Renders text mixed with block LaTeX ($$...$$), inline LaTeX ($...$),
 * markdown tables (| ... |), bold (**...**), italic (*...*), and line breaks (\n).
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // First split by display math $$...$$
  const blockTokens = content.split(/(\$\$[\s\S]+?\$\$)/g);

  return (
    <span className={className}>
      {blockTokens.map((token, idx) => {
        if (!token) return null;

        if (token.startsWith('$$') && token.endsWith('$$')) {
          const math = token.slice(2, -2).trim();
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
            strict: false,
          });
          return (
            <span
              key={`blk-${idx}`}
              className="block my-2 overflow-x-auto max-w-full"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        return (
          <React.Fragment key={`txt-${idx}`}>
            {renderLinesAndTables(token, `seg-${idx}`)}
          </React.Fragment>
        );
      })}
    </span>
  );
};
