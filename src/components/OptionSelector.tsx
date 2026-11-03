import React from 'react';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { RotateCcw, Eye, CheckCircle2 } from 'lucide-react';

interface OptionSelectorProps {
  question: QuestionItem;
  selectedOption?: string;
  selectedCheckboxes?: number[];
  trueFalseAnswers?: { [index: number]: 'Benar' | 'Salah' };
  onSelectOption: (key: string) => void;
  onToggleCheckbox: (idx: number) => void;
  onSelectTrueFalse: (statementIndex: number, choice: 'Benar' | 'Salah') => void;
  onResetQuestionAnswer: () => void;
  fontSizeClass: string;
  hideOptions: boolean;
  onToggleHideOptions: () => void;
  showAnswerKey: boolean;
  forceSingleColumn?: boolean;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  question,
  selectedOption,
  selectedCheckboxes = [],
  trueFalseAnswers = {},
  onSelectOption,
  onToggleCheckbox,
  onSelectTrueFalse,
  onResetQuestionAnswer,
  fontSizeClass,
  hideOptions,
  onToggleHideOptions,
  showAnswerKey,
  forceSingleColumn = false,
}) => {
  const hasAnswer =
    Boolean(selectedOption) ||
    selectedCheckboxes.length > 0 ||
    Object.keys(trueFalseAnswers).length > 0;

  if (hideOptions) {
    return (
      <div className="mt-3 p-4 bg-amber-50/90 dark:bg-amber-950/40 border border-dashed border-amber-300 dark:border-amber-700/60 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3 text-amber-800 dark:text-amber-200">
          <Eye className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-base md:text-lg">
            Pilihan jawaban disembunyikan sementara.
          </span>
        </div>
        <button
          type="button"
          onClick={onToggleHideOptions}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm transition active:scale-95 text-sm md:text-base"
        >
          Tampilkan Opsi
        </button>
      </div>
    );
  }

  // Determine whether MC options fit in 2 columns cleanly
  const isShortMcOptions =
    !forceSingleColumn &&
    Boolean(
      question.options &&
        question.options.every((opt) => opt.text.length <= 36)
    );

  const tfHeaders = question.trueFalseHeaders || ['Pernyataan', 'Benar', 'Salah'];

  return (
    <div className="mt-2.5 flex flex-col gap-2">
      {/* 1. Multiple Choice (A, B, C, D, E) */}
      {question.type === 'multiple-choice' && question.options && (
        <div
          className={`grid gap-2 ${
            isShortMcOptions ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {question.options.map((opt, idx) => {
            const isSelected = selectedOption === opt.key;
            const isCorrectKey = showAnswerKey && question.solution.correctOptionKey === opt.key;
            const isLastOfFive = isShortMcOptions && question.options!.length === 5 && idx === 4;

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => onSelectOption(opt.key)}
                className={`flex items-center gap-3 py-2 px-3.5 rounded-xl border-2 text-left transition-all duration-150 active:scale-[0.99] ${
                  isLastOfFive ? 'col-span-2' : ''
                } ${
                  isCorrectKey
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 shadow-md ring-2 ring-emerald-500/40'
                    : isSelected
                    ? 'border-brand-600 bg-sky-50 dark:bg-sky-950/40 text-brand-900 dark:text-sky-100 shadow-md ring-2 ring-brand-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                }`}
              >
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg transition-colors ${
                    isCorrectKey
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : isSelected
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.key}
                </span>
                <div className={`flex-1 ${fontSizeClass} font-medium leading-snug`}>
                  <MathRenderer content={opt.text} />
                </div>
                {isCorrectKey && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 2. Complex Multiple Choice (Checkboxes) */}
      {question.type === 'complex-multiple-choice' && question.checkboxOptions && (
        <div className="grid grid-cols-1 gap-2">
          {question.checkboxOptions.map((item, idx) => {
            const isChecked = selectedCheckboxes.includes(idx);
            const isCorrectBox =
              showAnswerKey && question.solution.correctCheckboxIndices?.includes(idx);

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onToggleCheckbox(idx)}
                className={`flex items-center gap-3.5 py-2.5 px-4 rounded-xl border-2 text-left transition-all duration-150 active:scale-[0.99] ${
                  isCorrectBox
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 shadow-md ring-2 ring-emerald-500/40'
                    : isChecked
                    ? 'border-brand-600 bg-sky-50 dark:bg-sky-950/40 text-brand-950 dark:text-sky-100 shadow-md ring-2 ring-brand-500/30'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    isCorrectBox
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : isChecked
                      ? 'border-brand-600 bg-brand-600 text-white'
                      : 'border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-800'
                  }`}
                >
                  {(isChecked || isCorrectBox) && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className={`flex-1 ${fontSizeClass} font-medium leading-snug`}>
                  <MathRenderer content={item} />
                </div>
                {isCorrectBox && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* 3. True / False Table */}
      {question.type === 'true-false-table' && question.statements && (
        <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
                <th className="py-2.5 px-4 font-extrabold text-base md:text-lg">{tfHeaders[0]}</th>
                <th className="py-2.5 px-3 font-extrabold text-base md:text-lg text-center w-28">{tfHeaders[1]}</th>
                <th className="py-2.5 px-3 font-extrabold text-base md:text-lg text-center w-28">{tfHeaders[2]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {question.statements.map((stmt, idx) => {
                const curAnswer = trueFalseAnswers[idx];
                const correctTF = showAnswerKey ? question.solution.correctTrueFalse?.[idx] : undefined;

                return (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                    <td className={`py-2.5 px-4 ${fontSizeClass} font-medium text-slate-800 dark:text-slate-200 leading-snug`}>
                      <MathRenderer content={stmt} />
                    </td>
                    <td className="py-2.5 px-2 text-center align-middle">
                      <button
                        type="button"
                        onClick={() => onSelectTrueFalse(idx, 'Benar')}
                        className={`w-full py-2 px-3 rounded-lg font-bold text-sm md:text-base transition-all active:scale-95 ${
                          correctTF === 'Benar'
                            ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400'
                            : curAnswer === 'Benar'
                            ? 'bg-brand-600 text-white shadow-md ring-2 ring-brand-400/50'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-100 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        Benar
                      </button>
                    </td>
                    <td className="py-2.5 px-2 text-center align-middle">
                      <button
                        type="button"
                        onClick={() => onSelectTrueFalse(idx, 'Salah')}
                        className={`w-full py-2 px-3 rounded-lg font-bold text-sm md:text-base transition-all active:scale-95 ${
                          correctTF === 'Salah'
                            ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400'
                            : curAnswer === 'Salah'
                            ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-400/50'
                            : 'bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950/40 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        Salah
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Reset Answer for Current Question */}
      {hasAnswer && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onResetQuestionAnswer}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition"
          >
            <RotateCcw className="w-3 h-3" />
            Reset Pilihan
          </button>
        </div>
      )}
    </div>
  );
};
