import React from 'react';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { X, CheckCircle2, Sparkles, Info } from 'lucide-react';

interface SolutionModalProps {
  question: QuestionItem;
  isOpen: boolean;
  onClose: () => void;
  fontSizeLevel: number;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  question,
  isOpen,
  onClose,
  fontSizeLevel,
}) => {
  if (!isOpen) return null;

  const baseSize =
    fontSizeLevel === 2
      ? 'text-[24px]'
      : fontSizeLevel === 1
      ? 'text-[22px]'
      : 'text-[20px]';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      data-solution-modal
    >
      <div
        className="w-full max-w-4xl max-h-[88vh] flex flex-col bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-emerald-600 text-white font-black rounded-xl text-base shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              PEMBAHASAN SOAL #{question.id}
            </span>
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              {question.topic}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 hover:bg-rose-100 hover:text-rose-700 dark:hover:bg-rose-950 text-slate-600 dark:text-slate-300 transition"
            title="Tutup Pembahasan (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-5">
          {/* Answer Summary Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-500/40 flex items-center gap-3.5">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                Kunci Jawaban Terverifikasi
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-950 dark:text-emerald-100">
                <MathRenderer content={question.solution.answerSummary} />
              </div>
            </div>
          </div>

          {/* Step-by-Step Resolution */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Langkah Penyelesaian:
            </h4>
            {question.solution.steps.map((step, idx) => (
              <div
                key={idx}
                data-solution-step
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-brand-600 text-white font-black text-base flex items-center justify-center shadow-sm mt-0.5">
                  {idx + 1}
                </span>
                <div className={`flex-1 min-w-0 ${baseSize} leading-relaxed text-slate-800 dark:text-slate-100 font-medium`}>
                  <MathRenderer content={step} />
                </div>
              </div>
            ))}
          </div>

          {/* Optional Note (e.g., Soal 11) */}
          {question.solution.note && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-amber-900 dark:text-amber-200">
              <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-base sm:text-lg font-semibold leading-relaxed">
                <MathRenderer content={question.solution.note} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
