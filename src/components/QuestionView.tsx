import React from 'react';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { OptionSelector } from './OptionSelector';
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

interface QuestionViewProps {
  question: QuestionItem;
  fontSizeLevel: number;
  selectedOption?: string;
  selectedCheckboxes?: number[];
  trueFalseAnswers?: { [index: number]: 'Benar' | 'Salah' };
  onSelectOption: (key: string) => void;
  onToggleCheckbox: (idx: number) => void;
  onSelectTrueFalse: (statementIndex: number, choice: 'Benar' | 'Salah') => void;
  onResetQuestionAnswer: () => void;
  hideOptions: boolean;
  onToggleHideOptions: () => void;
  showAnswerKey: boolean;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  fontSizeLevel,
  selectedOption,
  selectedCheckboxes,
  trueFalseAnswers,
  onSelectOption,
  onToggleCheckbox,
  onSelectTrueFalse,
  onResetQuestionAnswer,
  hideOptions,
  onToggleHideOptions,
  showAnswerKey,
}) => {
  // Projector Font Size Standard:
  // Level 0 (Default): 20px, Level 1: 22px, Level 2: 24px
  const baseSize =
    fontSizeLevel === 2
      ? 'text-[24px]'
      : fontSizeLevel === 1
      ? 'text-[22px]'
      : 'text-[20px]';

  const typography = {
    stimulus: `${baseSize} font-normal leading-snug text-slate-800 dark:text-slate-200`,
    question: `${baseSize} font-bold leading-snug text-slate-900 dark:text-slate-50`,
    option: baseSize,
  };

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

  // CASE 1: Questions with SVG / HD Image Visual (Split Layout: Left Text 5 cols, Right Visual 7 cols = 58.3% width)
  if (question.visualId) {
    return (
      <div className="h-full w-full flex flex-col justify-center overflow-hidden px-6 lg:px-10 py-3">
        <div className="flex-1 grid grid-cols-12 gap-5 lg:gap-7 items-stretch min-h-0 h-full">
          {/* Left Column: Question Text & Options */}
          <div
            className="col-span-5 h-full overflow-y-auto pr-2 custom-scrollbar"
            data-text-column
          >
            <div className="min-h-full flex flex-col justify-center py-1">
              {/* Badge Nomor Soal */}
              <div className="flex items-center gap-2.5 mb-2 flex-shrink-0">
                <span className="px-3.5 py-1 bg-brand-600 text-white font-black rounded-xl text-base shadow-sm">
                  SOAL {question.id}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  {question.topic}
                </span>
              </div>

              {/* Stimulus / Story Context */}
              {question.storyContext && (
                <div data-stimulus className={`${typography.stimulus} mb-2.5`}>
                  <MathRenderer content={question.storyContext} />
                </div>
              )}

              {/* Main Question Text (Bold) */}
              <div data-question-text className={`${typography.question} mb-2`}>
                <MathRenderer content={question.questionText} />
              </div>

              {/* Optional Note */}
              {question.note && (
                <div className="text-sm md:text-base font-bold text-amber-600 dark:text-amber-400 italic mb-2">
                  {question.note}
                </div>
              )}

              {/* Answer Options */}
              <OptionSelector
                question={question}
                selectedOption={selectedOption}
                selectedCheckboxes={selectedCheckboxes}
                trueFalseAnswers={trueFalseAnswers}
                onSelectOption={onSelectOption}
                onToggleCheckbox={onToggleCheckbox}
                onSelectTrueFalse={onSelectTrueFalse}
                onResetQuestionAnswer={onResetQuestionAnswer}
                fontSizeClass={typography.option}
                hideOptions={hideOptions}
                onToggleHideOptions={onToggleHideOptions}
                showAnswerKey={showAnswerKey}
              />
            </div>
          </div>

          {/* Right Column: High-Definition Visual (col-span-7 = 58.3% width) */}
          <div
            className="col-span-7 h-full flex flex-col items-center justify-center p-1 min-h-0 overflow-hidden"
            data-photo-container
          >
            <div className="w-full h-full flex items-center justify-center">
              {renderVisual(question.visualId)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CASE 2: Pure Text / Algebraic Formula Questions (Centered Single-Column Layout)
  return (
    <div className="h-full w-full flex flex-col justify-center overflow-hidden px-6 lg:px-12 py-5">
      <div
        className="flex-1 max-w-5xl mx-auto w-full h-full overflow-y-auto pr-3 custom-scrollbar"
        data-text-column
      >
        <div className="min-h-full flex flex-col justify-center py-3">
          {/* Badge Nomor Soal */}
          <div className="flex items-center gap-2.5 mb-3.5 flex-shrink-0">
            <span className="px-4 py-1.5 bg-brand-600 text-white font-black rounded-xl text-lg shadow-sm">
              SOAL {question.id}
            </span>
            <span className="text-xs sm:text-sm uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-slate-200/80 dark:bg-slate-800 px-3 py-1 rounded-lg">
              {question.topic}
            </span>
          </div>

          {/* Stimulus / Story Context */}
          {question.storyContext && (
            <div data-stimulus className={`${typography.stimulus} mb-3.5`}>
              <MathRenderer content={question.storyContext} />
            </div>
          )}

          {/* Main Question Text (Bold) */}
          <div data-question-text className={`${typography.question} mb-3.5`}>
            <MathRenderer content={question.questionText} />
          </div>

          {/* Optional Note */}
          {question.note && (
            <div className="text-sm md:text-base font-bold text-amber-600 dark:text-amber-400 italic mb-3">
              {question.note}
            </div>
          )}

          {/* Answer Options */}
          <OptionSelector
            question={question}
            selectedOption={selectedOption}
            selectedCheckboxes={selectedCheckboxes}
            trueFalseAnswers={trueFalseAnswers}
            onSelectOption={onSelectOption}
            onToggleCheckbox={onToggleCheckbox}
            onSelectTrueFalse={onSelectTrueFalse}
            onResetQuestionAnswer={onResetQuestionAnswer}
            fontSizeClass={typography.option}
            hideOptions={hideOptions}
            onToggleHideOptions={onToggleHideOptions}
            showAnswerKey={showAnswerKey}
          />
        </div>
      </div>
    </div>
  );
};
