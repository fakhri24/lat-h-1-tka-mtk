import React from 'react';
import { questionsData } from '../data/questionsData';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
import {
  VisualSoal1,
  VisualSoal2,
  VisualSoal3,
  VisualSoal5,
  VisualSoal6,
  VisualSoal7,
  VisualSoal8,
  VisualSoal9,
  VisualSoal10,
  VisualSoal11,
  VisualSoal12,
  VisualSoal13,
  VisualSoal14,
  VisualSoal15,
  VisualSoal16,
  VisualSoal17,
  VisualSoal19,
  VisualSoal23,
} from './svgs';

const renderVisual = (visualId?: string) => {
  switch (visualId) {
    case 'soal-1':
      return <VisualSoal1 />;
    case 'soal-2':
      return <VisualSoal2 />;
    case 'soal-3':
      return <VisualSoal3 />;
    case 'soal-5':
      return <VisualSoal5 />;
    case 'soal-6':
      return <VisualSoal6 />;
    case 'soal-7':
      return <VisualSoal7 />;
    case 'soal-8':
      return <VisualSoal8 />;
    case 'soal-9':
      return <VisualSoal9 />;
    case 'soal-10':
      return <VisualSoal10 />;
    case 'soal-11':
      return <VisualSoal11 />;
    case 'soal-12':
      return <VisualSoal12 />;
    case 'soal-13':
      return <VisualSoal13 />;
    case 'soal-14':
      return <VisualSoal14 />;
    case 'soal-15':
      return <VisualSoal15 />;
    case 'soal-16':
      return <VisualSoal16 />;
    case 'soal-17':
      return <VisualSoal17 />;
    case 'soal-19':
      return <VisualSoal19 />;
    case 'soal-23':
      return <VisualSoal23 />;
    default:
      return null;
  }
};

interface PageSpec {
  pageNumber: number;
  leftIds: number[];
  rightIds: number[];
}

const PAGES: PageSpec[] = [
  { pageNumber: 1, leftIds: [1, 2, 3], rightIds: [4, 5, 6] },
  { pageNumber: 2, leftIds: [7, 8, 9], rightIds: [10, 11, 12] },
  { pageNumber: 3, leftIds: [13, 14, 15], rightIds: [16, 17, 18] },
  { pageNumber: 4, leftIds: [19, 20, 21, 22], rightIds: [23, 24, 25] },
];

const getVisualHeightClass = (id: number): string => {
  if (id === 2 || id === 7 || id === 8 || id === 9) return '[&_svg]:!max-h-[112px]';
  if (id === 10 || id === 11 || id === 12) return '[&_svg]:!max-h-[118px]';
  if (id === 13 || id === 14 || id === 15) return '[&_svg]:!max-h-[116px]';
  if (id === 1 || id === 3 || id === 5 || id === 6) return '[&_svg]:!max-h-[122px]';
  return '[&_svg]:!max-h-[130px]';
};

const compactNewlines = (text?: string): string => {
  if (!text) return '';
  return text.replace(/\n{2,}/g, '\n');
};

const PdfQuestionBlock: React.FC<{ q: QuestionItem }> = ({ q }) => {
  const isLongMcOptions = q.id === 2;
  const isTwoColMcOptions = q.id === 5;
  const isThreeColMcOptions = [1, 3, 10, 12, 13, 14, 15, 16, 21, 23, 24].includes(q.id);

  return (
    <div
      data-pdf-question={q.id}
      className="border border-slate-300 rounded-md px-2 py-1.5 bg-white flex flex-col gap-0.5 text-[10.8px] leading-[1.28] text-slate-900"
    >
      {/* Question Number & Topic Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-0.5 mb-0.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="px-1.5 py-0.2 bg-slate-900 text-white font-extrabold rounded text-[10px] whitespace-nowrap flex-shrink-0">
            NO. {q.id}
          </span>
          <span className="text-[9.5px] font-bold text-slate-600 uppercase tracking-tight truncate">
            {q.topic}
          </span>
        </div>
      </div>

      {/* Story Context */}
      {q.storyContext && (
        <div className="text-slate-800">
          <MathRenderer content={compactNewlines(q.storyContext)} />
        </div>
      )}

      {/* Visual SVG / HD Illustration */}
      {q.visualId && (
        <div
          className={`w-full flex items-center justify-center my-0.5 overflow-hidden bg-slate-50/50 rounded border border-slate-200/80 py-0.5 px-1 ${getVisualHeightClass(
            q.id
          )} [&_svg]:!w-auto [&_svg]:!max-w-full [&_svg]:mx-auto`}
        >
          {renderVisual(q.visualId)}
        </div>
      )}

      {/* Main Question Prompt */}
      <div className="font-bold text-slate-950">
        <MathRenderer content={compactNewlines(q.questionText)} />
      </div>

      {/* Optional Note */}
      {q.note && (
        <div className="text-[9.5px] italic font-semibold text-slate-600">
          *{q.note}
        </div>
      )}

      {/* Options: Multiple Choice */}
      {q.type === 'multiple-choice' && q.options && (
        <div
          className={
            isLongMcOptions
              ? 'grid grid-cols-1 gap-y-0.5 pt-0.5'
              : isTwoColMcOptions
              ? 'grid grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5'
              : isThreeColMcOptions
              ? 'grid grid-cols-3 gap-x-1.5 gap-y-0.5 pt-0.5'
              : 'grid grid-cols-5 gap-x-1 gap-y-0.5 pt-0.5'
          }
        >
          {q.options.map((opt) => (
            <div key={opt.key} className="flex items-baseline gap-1">
              <span className="font-extrabold text-slate-900">{opt.key}.</span>
              <span>
                <MathRenderer content={opt.text} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: Complex Multiple Choice (Checkboxes) */}
      {q.type === 'complex-multiple-choice' && q.checkboxOptions && (
        <div className="flex flex-col gap-0.5 pt-0.5">
          {q.checkboxOptions.map((optText, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="inline-block w-2.5 h-2.5 border border-slate-700 rounded-[2px] flex-shrink-0 mt-0.5" />
              <span className="flex-1">
                <MathRenderer content={optText} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: True / False Table */}
      {q.type === 'true-false-table' && q.statements && (
        <table className="w-full border-collapse border border-slate-400 text-[10px] mt-0.5">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-400 py-0.5 px-1.5 text-left font-bold">
                {q.trueFalseHeaders?.[0] || 'Pernyataan'}
              </th>
              <th className="border border-slate-400 py-0.5 px-1 text-center font-bold w-9">
                {q.trueFalseHeaders?.[1] || 'Benar'}
              </th>
              <th className="border border-slate-400 py-0.5 px-1 text-center font-bold w-9">
                {q.trueFalseHeaders?.[2] || 'Salah'}
              </th>
            </tr>
          </thead>
          <tbody>
            {q.statements.map((stmt, idx) => (
              <tr key={idx}>
                <td className="border border-slate-400 py-0.5 px-1.5 leading-tight">
                  <MathRenderer content={stmt} />
                </td>
                <td className="border border-slate-400 py-0.5 px-1 text-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full border border-slate-600" />
                </td>
                <td className="border border-slate-400 py-0.5 px-1 text-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full border border-slate-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export const PdfHandoutView: React.FC = () => {
  const getQuestion = (id: number) => questionsData.find((q) => q.id === id)!;

  return (
    <div className="bg-slate-200 print:bg-white min-h-screen py-4 print:py-0 flex flex-col items-center gap-4 print:block">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0mm;
        }
        @media print {
          html, body {
            overflow: visible !important;
            height: auto !important;
            width: 210mm !important;
            background: #ffffff !important;
          }
        }
        .pdf-a4-sheet {
          width: 210mm;
          height: 297mm;
          padding: 6.5mm 7.5mm;
          box-sizing: border-box;
          background: #ffffff;
          page-break-after: always;
          break-after: page;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .pdf-a4-sheet:last-child {
          page-break-after: auto;
          break-after: auto;
        }
        .pdf-a4-sheet .katex {
          font-size: 1.0em !important;
        }
        .pdf-a4-sheet .katex-display {
          margin: 0.12em 0 !important;
        }
      `}</style>

      {PAGES.map((page) => (
        <div
          key={page.pageNumber}
          data-pdf-page={page.pageNumber}
          className="pdf-a4-sheet shadow-lg print:shadow-none"
        >
          {/* Page Header */}
          {page.pageNumber === 1 ? (
            <div className="border-b-2 border-slate-900 pb-1 mb-1.5 flex items-center justify-between flex-shrink-0">
              <div>
                <h1 className="text-[13.5px] font-black tracking-tight text-slate-950 uppercase">
                  Naskah Soal Latihan H-1 — TKA Matematika Wajib (Gelombang 1)
                </h1>
                <p className="text-[10px] font-semibold text-slate-600">
                  Jumlah Soal: 25 Butir &bull; Tipe Soal: Pilihan Ganda, PG Kompleks, &amp; Tabel Benar/Salah
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 bg-slate-900 text-white font-extrabold text-[10px] rounded">
                  Halaman {page.pageNumber} / 4
                </span>
              </div>
            </div>
          ) : (
            <div className="border-b border-slate-400 pb-1 mb-1.5 flex items-center justify-between flex-shrink-0 text-[9.5px] font-bold text-slate-600">
              <span>NASKAH SOAL LATIHAN H-1 — TKA MATEMATIKA WAJIB (GELOMBANG 1)</span>
              <span className="text-slate-900 font-extrabold">Halaman {page.pageNumber} / 4</span>
            </div>
          )}

          {/* Two-Column Exam Body */}
          <div className="flex-1 grid grid-cols-2 gap-x-[3.5mm] min-h-0">
            {/* Left Column */}
            <div className="flex flex-col justify-start h-full gap-1.5" data-pdf-col="left">
              {page.leftIds.map((id) => (
                <PdfQuestionBlock key={id} q={getQuestion(id)} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-start h-full gap-1.5" data-pdf-col="right">
              {page.rightIds.map((id) => (
                <PdfQuestionBlock key={id} q={getQuestion(id)} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
