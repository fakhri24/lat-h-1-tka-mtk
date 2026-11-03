import React, { useState } from 'react';
import {
  Grid,
  BookOpen,
  Maximize,
  Minimize,
  Moon,
  Sun,
  Eye,
  EyeOff,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  X,
  PanelTopClose,
  FileDown,
  Layers,
} from 'lucide-react';
import { UserAnswerState } from '../types/question';

interface FloatingMenuProps {
  activePaket: 1 | 2;
  onChangePaket: (paket: 1 | 2) => void;
  currentIndex: number;
  currentQuestionId: number;
  questionIds: number[];
  onSelectQuestionId: (id: number) => void;
  onPrev: () => void;
  onNext: () => void;
  answers: UserAnswerState;
  fontSizeLevel: number;
  onChangeFontSize: (delta: number) => void;
  hideOptions: boolean;
  onToggleHideOptions: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showSolutionModal: boolean;
  onToggleSolutionModal: () => void;
  showAnswerKey: boolean;
  onToggleAnswerKey: () => void;
  onResetAllAnswers: () => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  activePaket,
  onChangePaket,
  currentIndex,
  currentQuestionId,
  questionIds,
  onSelectQuestionId,
  onPrev,
  onNext,
  answers,
  fontSizeLevel,
  onChangeFontSize,
  hideOptions,
  onToggleHideOptions,
  darkMode,
  onToggleDarkMode,
  isFullscreen,
  onToggleFullscreen,
  showSolutionModal,
  onToggleSolutionModal,
  showAnswerKey,
  onToggleAnswerKey,
  onResetAllAnswers,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimizedToCorner, setIsMinimizedToCorner] = useState<boolean>(false);

  const totalQuestions = questionIds.length;

  // If teacher hides even the floating pill, render a super subtle hover-reveal corner button
  if (isMinimizedToCorner && !isOpen) {
    return (
      <div className="fixed top-2 right-2 z-50 group">
        <button
          type="button"
          onClick={() => setIsMinimizedToCorner(false)}
          title="Tampilkan Tombol Menu Navigasi"
          className="w-8 h-8 rounded-full bg-slate-900/15 dark:bg-white/15 hover:bg-brand-600 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all opacity-30 group-hover:opacity-100 shadow-sm"
        >
          <Grid className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Compact Floating Trigger Pill in Top-Right Corner */}
      <div className="fixed top-3 right-4 z-40 flex items-center gap-1.5 select-none">
        {/* Quick Paket Switcher Pill */}
        <div className="flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full shadow-sm p-0.5">
          <button
            type="button"
            onClick={() => onChangePaket(1)}
            data-paket-btn="1"
            className={`px-2.5 py-1 rounded-full font-extrabold text-xs transition ${
              activePaket === 1
                ? 'bg-brand-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Paket 1 (25)
          </button>
          <button
            type="button"
            onClick={() => onChangePaket(2)}
            data-paket-btn="2"
            className={`px-2.5 py-1 rounded-full font-extrabold text-xs transition ${
              activePaket === 2
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Paket 2 (9)
          </button>
        </div>

        {/* Quick Prev / Next Arrows */}
        <div className="flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full shadow-sm p-0.5">
          <button
            type="button"
            disabled={currentIndex <= 0}
            onClick={onPrev}
            title="Soal Sebelumnya"
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            data-menu-trigger
            className="px-3 py-1 rounded-full font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 hover:bg-brand-50 dark:hover:bg-slate-800 flex items-center gap-1.5 transition"
          >
            <Grid className="w-3.5 h-3.5 text-brand-600 dark:text-sky-400" />
            <span>
              {activePaket === 2
                ? `No. ${currentQuestionId} (${currentIndex + 1}/${totalQuestions})`
                : `${currentQuestionId} / ${totalQuestions}`}
            </span>
          </button>
          <button
            type="button"
            disabled={currentIndex >= totalQuestions - 1}
            onClick={onNext}
            title="Soal Selanjutnya"
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 disabled:opacity-30 disabled:pointer-events-none transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Pembahasan Button */}
        <button
          type="button"
          onClick={onToggleSolutionModal}
          data-solution-trigger
          title="Buka Pembahasan & Kunci Jawaban"
          className={`px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm border backdrop-blur-md transition ${
            showSolutionModal || showAnswerKey
              ? 'bg-emerald-600 text-white border-emerald-500'
              : 'bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Pembahasan</span>
        </button>

        {/* Hide Pill Completely Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
            setIsMinimizedToCorner(true);
          }}
          title="Sembunyikan Tombol ke Pojok (Mode Fokus Penuh)"
          className="p-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/70 dark:border-slate-800 shadow-sm transition"
        >
          <PanelTopClose className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Popover / Drawer Panel for Jumping Questions & Projector Controls */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end p-4 bg-slate-950/20 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 mt-11 select-none animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="font-black text-base text-slate-900 dark:text-white">
                  {activePaket === 1
                    ? 'Navigasi Paket 1 — TKA Matematika (25 Soal)'
                    : 'Navigasi Paket 2 — TKA Matematika (9 Soal)'}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {activePaket === 1
                    ? 'Nomor urut 1–25'
                    : 'Nomor asli: 8, 10, 12, 14, 15, 16, 17, 22, 23'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Paket Switcher inside Drawer */}
            <div className="grid grid-cols-2 gap-2 mb-3.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                type="button"
                onClick={() => onChangePaket(1)}
                className={`py-2 px-3 rounded-lg font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                  activePaket === 1
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Paket 1 (25 Soal)</span>
              </button>
              <button
                type="button"
                onClick={() => onChangePaket(2)}
                className={`py-2 px-3 rounded-lg font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                  activePaket === 2
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Paket 2 (9 Soal Baru)</span>
              </button>
            </div>

            {/* Number Grid */}
            <div className="grid grid-cols-5 gap-2 mb-4" data-number-grid>
              {questionIds.map((num) => {
                const isActive = num === currentQuestionId;
                const ans = answers[num];
                const hasAnswer =
                  ans &&
                  (ans.selectedOption !== undefined ||
                    (ans.selectedCheckboxes && ans.selectedCheckboxes.length > 0) ||
                    (ans.trueFalseAnswers && Object.keys(ans.trueFalseAnswers).length > 0));

                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      onSelectQuestionId(num);
                      setIsOpen(false);
                    }}
                    className={`relative h-11 rounded-xl font-extrabold text-base flex items-center justify-center transition-all active:scale-95 ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-md ring-2 ring-brand-500/40'
                        : hasAnswer
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {num}
                    {hasAnswer && !isActive && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Projector Controls */}
            <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between gap-2">
                {/* Font Size Controls */}
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    disabled={fontSizeLevel <= 0}
                    onClick={() => onChangeFontSize(-1)}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 transition"
                    title="Perkecil Ukuran Teks"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2.5 text-xs font-extrabold text-slate-700 dark:text-slate-200">
                    Font {fontSizeLevel === 0 ? '20px' : fontSizeLevel === 1 ? '22px' : '24px'}
                  </span>
                  <button
                    type="button"
                    disabled={fontSizeLevel >= 2}
                    onClick={() => onChangeFontSize(1)}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 transition"
                    title="Perbesar Ukuran Teks"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Toggle Highlight Kunci pada Opsi */}
                <button
                  type="button"
                  onClick={onToggleAnswerKey}
                  className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition ${
                    showAnswerKey
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{showAnswerKey ? 'Kunci Tampil' : 'Tandai Kunci'}</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* Hide Options */}
                <button
                  type="button"
                  onClick={onToggleHideOptions}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition ${
                    hideOptions
                      ? 'bg-amber-100 border-amber-400 text-amber-900'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {hideOptions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{hideOptions ? 'Opsi Tutup' : 'Tutup Opsi'}</span>
                </button>

                {/* Dark Mode */}
                <button
                  type="button"
                  onClick={onToggleDarkMode}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                  <span>{darkMode ? 'Mode Terang' : 'Mode Gelap'}</span>
                </button>

                {/* Fullscreen */}
                <button
                  type="button"
                  onClick={onToggleFullscreen}
                  className="py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-sky-300"
                >
                  {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                  <span>Fullscreen</span>
                </button>
              </div>

              {/* Download PDF Handout Buttons */}
              {activePaket === 1 ? (
                <a
                  href={`${import.meta.env.BASE_URL}25-Soal-TKA-Matematika-Wajib-Gelombang-1.pdf`}
                  download="25-Soal-TKA-Matematika-Wajib-Gelombang-1.pdf"
                  data-download-pdf
                  className="w-full py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Unduh PDF Paket 1 — 25 Soal (4 Halaman A4)</span>
                </a>
              ) : (
                <a
                  href={`${import.meta.env.BASE_URL}9-Soal-Tambahan-TKA-Matematika-Wajib-Gelombang-1.pdf`}
                  download="9-Soal-Tambahan-TKA-Matematika-Wajib-Gelombang-1.pdf"
                  data-download-pdf
                  className="w-full py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Unduh PDF Paket 2 — 9 Soal (2 Halaman A4)</span>
                </a>
              )}

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onToggleSolutionModal();
                  }}
                  className="text-xs font-extrabold text-brand-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Buka Modal Pembahasan Lengkap
                </button>

                <button
                  type="button"
                  onClick={onResetAllAnswers}
                  className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Semua
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
