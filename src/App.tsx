import React, { useState, useEffect, useCallback } from 'react';
import { questionsData } from './data/questionsData';
import { UserAnswerState } from './types/question';
import { FloatingMenu } from './components/FloatingMenu';
import { QuestionView } from './components/QuestionView';
import { SolutionModal } from './components/SolutionModal';
import { PdfHandoutView } from './components/PdfHandoutView';

const STORAGE_KEY = 'tka_mtk_wajib_gel1_answers';

export const App: React.FC = () => {
  const isPdfMode =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('mode') === 'pdf';

  if (isPdfMode) {
    return <PdfHandoutView />;
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [answers, setAnswers] = useState<UserAnswerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Projector display preferences
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0); // 0: 20px, 1: 22px, 2: 24px
  const [hideOptions, setHideOptions] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSolutionModal, setShowSolutionModal] = useState<boolean>(false);
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch (e) {
      console.error('Failed to save answers to localStorage', e);
    }
  }, [answers]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const goToNext = useCallback(() => {
    setShowSolutionModal(false);
    setCurrentIndex((prev) => (prev < questionsData.length - 1 ? prev + 1 : prev));
  }, []);

  const goToPrev = useCallback(() => {
    setShowSolutionModal(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToQuestion = useCallback((questionNumber: number) => {
    const idx = questionNumber - 1;
    if (idx >= 0 && idx < questionsData.length) {
      setShowSolutionModal(false);
      setCurrentIndex(idx);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  // Silent Keyboard Shortcuts for Classroom Projector Teaching
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'Escape' && showSolutionModal) {
        e.preventDefault();
        setShowSolutionModal(false);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setHideOptions((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setShowSolutionModal((prev) => !prev);
      } else if (e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        setShowAnswerKey((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, toggleFullscreen, showSolutionModal]);

  const currentQuestion = questionsData[currentIndex];
  const currentAnswer = answers[currentQuestion.id] || {};

  const handleSelectOption = (key: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        selectedOption: prev[currentQuestion.id]?.selectedOption === key ? undefined : key,
      },
    }));
  };

  const handleToggleCheckbox = (idx: number) => {
    const existing = currentAnswer.selectedCheckboxes || [];
    const updated = existing.includes(idx)
      ? existing.filter((c) => c !== idx)
      : [...existing, idx];

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        selectedCheckboxes: updated,
      },
    }));
  };

  const handleSelectTrueFalse = (statementIndex: number, choice: 'Benar' | 'Salah') => {
    const existing = currentAnswer.trueFalseAnswers || {};
    const updated = {
      ...existing,
      [statementIndex]: existing[statementIndex] === choice ? undefined : choice,
    };

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        trueFalseAnswers: updated as { [index: number]: 'Benar' | 'Salah' },
      },
    }));
  };

  const handleResetQuestionAnswer = () => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleResetAllAnswers = () => {
    if (window.confirm('Reset semua pilihan jawaban kelas yang tersimpan?')) {
      setAnswers({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 relative">
      {/* Floating Auto-Hide / Collapsible Control Pill (No permanent header/footer) */}
      <FloatingMenu
        currentQuestionId={currentQuestion.id}
        totalQuestions={questionsData.length}
        onSelectQuestion={goToQuestion}
        onPrev={goToPrev}
        onNext={goToNext}
        answers={answers}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={(delta) =>
          setFontSizeLevel((prev) => Math.max(0, Math.min(2, prev + delta)))
        }
        hideOptions={hideOptions}
        onToggleHideOptions={() => setHideOptions((prev) => !prev)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showSolutionModal={showSolutionModal}
        onToggleSolutionModal={() => setShowSolutionModal((prev) => !prev)}
        showAnswerKey={showAnswerKey}
        onToggleAnswerKey={() => setShowAnswerKey((prev) => !prev)}
        onResetAllAnswers={handleResetAllAnswers}
      />

      {/* Full-Screen Question Viewport */}
      <main className="flex-1 w-full h-full overflow-hidden relative">
        <QuestionView
          key={currentQuestion.id}
          question={currentQuestion}
          fontSizeLevel={fontSizeLevel}
          selectedOption={currentAnswer.selectedOption}
          selectedCheckboxes={currentAnswer.selectedCheckboxes}
          trueFalseAnswers={currentAnswer.trueFalseAnswers}
          onSelectOption={handleSelectOption}
          onToggleCheckbox={handleToggleCheckbox}
          onSelectTrueFalse={handleSelectTrueFalse}
          onResetQuestionAnswer={handleResetQuestionAnswer}
          hideOptions={hideOptions}
          onToggleHideOptions={() => setHideOptions((prev) => !prev)}
          showAnswerKey={showAnswerKey || showSolutionModal}
        />
      </main>

      {/* Modal Overlay for Pembahasan & Kunci Jawaban */}
      <SolutionModal
        question={currentQuestion}
        isOpen={showSolutionModal}
        onClose={() => setShowSolutionModal(false)}
        fontSizeLevel={fontSizeLevel}
      />
    </div>
  );
};

export default App;
