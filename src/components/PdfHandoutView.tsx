import React from 'react';
import { questionsData } from '../data/questionsData';
import { paket2QuestionsData } from '../data/paket2QuestionsData';
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
  VisualPaket2Soal8,
  VisualPaket2Soal10,
  VisualPaket2Soal12,
  VisualPaket2Soal14,
  VisualPaket2Soal15,
  VisualPaket2Soal16,
  VisualPaket2Soal22,
  VisualPaket2Soal23,
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
    case 'p2-soal-8':
      return <VisualPaket2Soal8 />;
    case 'p2-soal-10':
      return <VisualPaket2Soal10 />;
    case 'p2-soal-12':
      return <VisualPaket2Soal12 />;
    case 'p2-soal-14':
      return <VisualPaket2Soal14 />;
    case 'p2-soal-15':
      return <VisualPaket2Soal15 />;
    case 'p2-soal-16':
      return <VisualPaket2Soal16 />;
    case 'p2-soal-22':
      return <VisualPaket2Soal22 />;
    case 'p2-soal-23':
      return <VisualPaket2Soal23 />;
    default:
      return null;
  }
};

interface PageSpec {
  pageNumber: number;
  leftIds: number[];
  rightIds: number[];
}

const PAGES_PAKET_1: PageSpec[] = [
  { pageNumber: 1, leftIds: [1, 2, 3], rightIds: [4, 5, 6] },
  { pageNumber: 2, leftIds: [7, 8, 9], rightIds: [10, 11, 12] },
  { pageNumber: 3, leftIds: [13, 14, 15], rightIds: [16, 17, 18] },
  { pageNumber: 4, leftIds: [19, 20, 21, 22], rightIds: [23, 24, 25] },
];

const PAGES_PAKET_2: PageSpec[] = [
  { pageNumber: 1, leftIds: [8, 10], rightIds: [] },
  { pageNumber: 2, leftIds: [12, 14], rightIds: [] },
  { pageNumber: 3, leftIds: [15, 16, 17], rightIds: [] },
  { pageNumber: 4, leftIds: [22, 23], rightIds: [] },
];

const getVisualHeightClass = (id: number, isPaket2: boolean): string => {
  if (isPaket2) {
    if (id === 8) return '[&_svg]:!max-h-[212px]';
    if (id === 10) return '[&_svg]:!max-h-[155px]';
    if (id === 12) return '[&_svg]:!max-h-[212px]';
    if (id === 14) return '[&_svg]:!max-h-[202px]';
    if (id === 15) return '[&_svg]:!max-h-[122px]';
    if (id === 16) return '[&_svg]:!max-h-[118px]';
    if (id === 17) return '[&_svg]:!max-h-[110px]';
    if (id === 22) return '[&_svg]:!max-h-[198px]';
    if (id === 23) return '[&_svg]:!max-h-[185px]';
    return '[&_svg]:!max-h-[190px]';
  }
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

const PdfQuestionBlock: React.FC<{ q: QuestionItem; isPaket2: boolean }> = ({ q, isPaket2 }) => {
  const isLongMcOptions = q.id === 2 || (isPaket2 && q.id === 10);
  const isTwoColMcOptions = !isPaket2 && q.id === 5;
  const isThreeColMcOptions = isPaket2
    ? false
    : [1, 3, 10, 12, 13, 14, 15, 16, 21, 23, 24].includes(q.id);

  // Larger typography and spacing specifically for Paket 2 (4-page full-width maximized layout)
  const isPage3ThreeItemsP2 = isPaket2 && (q.id === 15 || q.id === 16 || q.id === 17);
  const blockTextClass = isPaket2
    ? isPage3ThreeItemsP2
      ? 'text-[12px] leading-[1.32] gap-0.5 px-3.5 py-1.5 flex-1 justify-between'
      : 'text-[14px] leading-[1.40] gap-1.5 px-4 py-2.5 flex-1 justify-between'
    : 'text-[10.8px] leading-[1.28] gap-0.5 px-2 py-1.5';

  return (
    <div
      data-pdf-question={q.id}
      className={`border border-slate-300 rounded-lg bg-white flex flex-col text-slate-900 ${blockTextClass}`}
    >
      {/* Question Number & Topic Header */}
      <div
        className={`flex items-center justify-between border-b border-slate-200 ${
          isPaket2 ? 'pb-1.5 mb-1' : 'pb-0.5 mb-0.5'
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`bg-slate-900 text-white font-extrabold rounded whitespace-nowrap flex-shrink-0 ${
              isPaket2 ? 'px-2.5 py-0.5 text-[13px]' : 'px-1.5 py-0.2 text-[10px]'
            }`}
          >
            NO. {q.id}
          </span>
          <span
            className={`font-bold text-slate-600 uppercase tracking-tight truncate ${
              isPaket2 ? 'text-[12px]' : 'text-[9.5px]'
            }`}
          >
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
          className={`w-full flex items-center justify-center overflow-hidden bg-slate-50/60 rounded-md border border-slate-200/90 ${
            isPaket2 ? 'my-1 py-2 px-2' : 'my-0.5 py-0.5 px-1'
          } ${getVisualHeightClass(
            q.id,
            isPaket2
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
        <div
          className={`italic font-semibold text-slate-600 ${
            isPaket2 ? 'text-[12px]' : 'text-[9.5px]'
          }`}
        >
          *{q.note}
        </div>
      )}

      {/* Options: Multiple Choice */}
      {q.type === 'multiple-choice' && q.options && (
        <div
          className={
            isLongMcOptions
              ? isPaket2
                ? 'grid grid-cols-1 gap-y-1.5 pt-1'
                : 'grid grid-cols-1 gap-y-0.5 pt-0.5'
              : isTwoColMcOptions
              ? 'grid grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5'
              : isThreeColMcOptions
              ? 'grid grid-cols-3 gap-x-1.5 gap-y-0.5 pt-0.5'
              : isPaket2
              ? 'grid grid-cols-5 gap-x-2 gap-y-1 pt-1'
              : 'grid grid-cols-5 gap-x-1 gap-y-0.5 pt-0.5'
          }
        >
          {q.options.map((opt) => (
            <div key={opt.key} className="flex items-baseline gap-1.5">
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
        <table
          className={`w-full border-collapse border border-slate-400 mt-1 ${
            isPaket2 ? 'text-[13.5px]' : 'text-[10px]'
          }`}
        >
          <thead>
            <tr className="bg-slate-100">
              <th
                className={`border border-slate-400 text-left font-bold ${
                  isPaket2 ? 'py-1.5 px-2.5' : 'py-0.5 px-1.5'
                }`}
              >
                {q.trueFalseHeaders?.[0] || 'Pernyataan'}
              </th>
              <th
                className={`border border-slate-400 text-center font-bold ${
                  isPaket2 ? 'py-1.5 px-2 w-14' : 'py-0.5 px-1 w-9'
                }`}
              >
                {q.trueFalseHeaders?.[1] || 'Benar'}
              </th>
              <th
                className={`border border-slate-400 text-center font-bold ${
                  isPaket2 ? 'py-1.5 px-2 w-14' : 'py-0.5 px-1 w-9'
                }`}
              >
                {q.trueFalseHeaders?.[2] || 'Salah'}
              </th>
            </tr>
          </thead>
          <tbody>
            {q.statements.map((stmt, idx) => (
              <tr key={idx}>
                <td
                  className={`border border-slate-400 leading-snug ${
                    isPaket2 ? 'py-2 px-2.5' : 'py-0.5 px-1.5 leading-tight'
                  }`}
                >
                  <MathRenderer content={stmt} />
                </td>
                <td
                  className={`border border-slate-400 text-center ${
                    isPaket2 ? 'py-2 px-2' : 'py-0.5 px-1'
                  }`}
                >
                  <span
                    className={`inline-block rounded-full border border-slate-600 ${
                      isPaket2 ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'
                    }`}
                  />
                </td>
                <td
                  className={`border border-slate-400 text-center ${
                    isPaket2 ? 'py-2 px-2' : 'py-0.5 px-1'
                  }`}
                >
                  <span
                    className={`inline-block rounded-full border border-slate-600 ${
                      isPaket2 ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'
                    }`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export const PdfHandoutView: React.FC<{ paket?: 1 | 2 }> = ({ paket = 1 }) => {
  const isPaket2 = paket === 2;
  const activeData = isPaket2 ? paket2QuestionsData : questionsData;
  const activePages = isPaket2 ? PAGES_PAKET_2 : PAGES_PAKET_1;
  const totalPages = activePages.length;

  const getQuestion = (id: number) => activeData.find((q) => q.id === id)!;

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

      {activePages.map((page) => (
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
                  {isPaket2
                    ? 'Naskah Soal Latihan H-1 — TKA Matematika Wajib (Paket 2 / Susulan)'
                    : 'Naskah Soal Latihan H-1 — TKA Matematika Wajib (Gelombang 1)'}
                </h1>
                <p className="text-[10px] font-semibold text-slate-600">
                  {isPaket2
                    ? 'Jumlah Soal: 9 Butir (No. 8, 10, 12, 14, 15, 16, 17, 22, 23) • Pilihan Ganda & Tabel Benar/Salah'
                    : 'Jumlah Soal: 25 Butir • Tipe Soal: Pilihan Ganda, PG Kompleks, & Tabel Benar/Salah'}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2 py-0.5 bg-slate-900 text-white font-extrabold text-[10px] rounded">
                  Halaman {page.pageNumber} / {totalPages}
                </span>
              </div>
            </div>
          ) : (
            <div className="border-b border-slate-400 pb-1 mb-1.5 flex items-center justify-between flex-shrink-0 text-[9.5px] font-bold text-slate-600">
              <span>
                {isPaket2
                  ? 'NASKAH SOAL LATIHAN H-1 — TKA MATEMATIKA WAJIB (PAKET 2: NO. 8, 10, 12, 14, 15, 16, 17, 22, 23)'
                  : 'NASKAH SOAL LATIHAN H-1 — TKA MATEMATIKA WAJIB (GELOMBANG 1)'}
              </span>
              <span className="text-slate-900 font-extrabold">
                Halaman {page.pageNumber} / {totalPages}
              </span>
            </div>
          )}

          {/* Exam Body: Full-Width 1-Column for Paket 2, Two-Column for Paket 1 */}
          {isPaket2 ? (
            <div className="flex-1 flex flex-col justify-between h-full gap-2.5 min-h-0" data-pdf-col="full">
              {page.leftIds.map((id) => (
                <PdfQuestionBlock key={id} q={getQuestion(id)} isPaket2={true} />
              ))}
            </div>
          ) : (
            <div className="flex-1 grid grid-cols-2 gap-x-[3.5mm] min-h-0">
              {/* Left Column */}
              <div className="flex flex-col justify-start h-full gap-1.5" data-pdf-col="left">
                {page.leftIds.map((id) => (
                  <PdfQuestionBlock key={id} q={getQuestion(id)} isPaket2={false} />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-start h-full gap-1.5" data-pdf-col="right">
                {page.rightIds.map((id) => (
                  <PdfQuestionBlock key={id} q={getQuestion(id)} isPaket2={false} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
