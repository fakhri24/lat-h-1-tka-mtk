import React, { useState, useEffect, useCallback } from 'react';
import { questionsData } from './data/questionsData';
import { paket2QuestionsData } from './data/paket2QuestionsData';
import { UserAnswerState } from './types/question';
import { FloatingMenu } from './components/FloatingMenu';
import { QuestionView } from './components/QuestionView';
import { SolutionModal } from './components/SolutionModal';
import { PdfHandoutView } from './components/PdfHandoutView';

const STORAGE_KEY_P1 = 'tka_mtk_wajib_gel1_answers';
const STORAGE_KEY_P2 = 'tka_mtk_wajib_gel1_paket2_answers';

export const App: React.FC = () => {
  const searchParams =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const isPdfMode = searchParams?.get('mode') === 'pdf';
  const initialPaket: 1 | 2 = searchParams?.get('paket') === '2' ? 2 : 1;

  if (isPdfMode) {
    return <PdfHandoutView paket={initialPaket} />;
  }

  const [activePaket, setActivePaket] = useState<1 | 2>(initialPaket);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [answersP1, setAnswersP1] = useState<UserAnswerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_P1);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [answersP2, setAnswersP2] = useState<UserAnswerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_P2);
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

  const activeQuestions = activePaket === 2 ? paket2QuestionsData : questionsData;
  const answers = activePaket === 2 ? answersP2 : answersP1;
  const setAnswers = activePaket === 2 ? setAnswersP2 : setAnswersP1;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_P1, JSON.stringify(answersP1));
    } catch (e) {
      console.error('Failed to save Paket 1 answers to localStorage', e);
    }
  }, [answersP1]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_P2, JSON.stringify(answersP2));
    } catch (e) {
      console.error('Failed to save Paket 2 answers to localStorage', e);
    }
  }, [answersP2]);

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

  const handleChangePaket = useCallback((paket: 1 | 2) => {
    setShowSolutionModal(false);
    setActivePaket(paket);
    setCurrentIndex(0);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (paket === 2) {
        url.searchParams.set('paket', '2');
      } else {
        url.searchParams.delete('paket');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const goToNext = useCallback(() => {
    setShowSolutionModal(false);
    setCurrentIndex((prev) => (prev < activeQuestions.length - 1 ? prev + 1 : prev));
  }, [activeQuestions.length]);

  const goToPrev = useCallback(() => {
    setShowSolutionModal(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToQuestionId = useCallback(
    (questionId: number) => {
      const idx = activeQuestions.findIndex((q) => q.id === questionId);
      if (idx >= 0 && idx < activeQuestions.length) {
        setShowSolutionModal(false);
        setCurrentIndex(idx);
      }
    },
    [activeQuestions]
  );

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

  const safeIndex = Math.min(currentIndex, activeQuestions.length - 1);
  const currentQuestion = activeQuestions[safeIndex];
  const currentAnswer = answers[currentQuestion.id] || {};
  const questionIds = activeQuestions.map((q) => q.id);

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
    if (window.confirm(`Reset semua pilihan jawaban Paket ${activePaket} yang tersimpan?`)) {
      setAnswers({});
      localStorage.removeItem(activePaket === 2 ? STORAGE_KEY_P2 : STORAGE_KEY_P1);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 relative">
      {/* Floating Auto-Hide / Collapsible Control Pill (No permanent header/footer) */}
      <FloatingMenu
        activePaket={activePaket}
        onChangePaket={handleChangePaket}
        currentIndex={safeIndex}
        currentQuestionId={currentQuestion.id}
        questionIds={questionIds}
        onSelectQuestionId={goToQuestionId}
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
          key={`${activePaket}-${currentQuestion.id}`}
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
