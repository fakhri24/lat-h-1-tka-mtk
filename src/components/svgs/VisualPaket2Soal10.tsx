import React from 'react';

export const VisualPaket2Soal10: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 680 420"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Permasalahan Kecukupan Data Parabola f(x) = ax^2 + b dan Garis g(x) = mx + 1"
      >
        {/* Outer Card */}
        <rect
          x="10"
          y="10"
          width="660"
          height="400"
          rx="22"
          className="fill-indigo-50/70 dark:fill-slate-900 stroke-indigo-200 dark:stroke-slate-700"
          strokeWidth="2.5"
        />

        {/* Problem Box Header */}
        <rect
          x="32"
          y="30"
          width="616"
          height="135"
          rx="16"
          className="fill-white dark:fill-slate-950 stroke-indigo-300 dark:stroke-slate-700"
          strokeWidth="2"
        />
        <text
          x="54"
          y="64"
          className="fill-indigo-950 dark:fill-indigo-300 font-black text-[20px]"
        >
          Permasalahan Fungsi Kuadrat &amp; Garis Lurus:
        </text>
        <text
          x="54"
          y="100"
          className="fill-slate-800 dark:fill-slate-200 font-bold text-[19px]"
        >
          Diketahui parabola f(x) = ax² + b dan garis g(x) = mx + 1.
        </text>
        <text
          x="54"
          y="136"
          className="fill-brand-700 dark:fill-sky-400 font-black text-[20px]"
        >
          Apakah f(x) dan g(x) saling berpotongan?
        </text>

        {/* Statements Box */}
        <rect
          x="32"
          y="182"
          width="616"
          height="204"
          rx="16"
          className="fill-white dark:fill-slate-950 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="1.8"
        />
        <text
          x="54"
          y="218"
          className="fill-slate-700 dark:fill-slate-300 font-bold text-[17px]"
        >
          Informasi Tambahan:
        </text>

        {/* Statement 1 Pill */}
        <rect
          x="54"
          y="236"
          width="572"
          height="56"
          rx="12"
          className="fill-sky-50 dark:fill-sky-950/50 stroke-sky-200 dark:stroke-sky-800"
          strokeWidth="1.5"
        />
        <circle cx="84" cy="264" r="16" className="fill-brand-600" />
        <text x="84" y="270" textAnchor="middle" fill="#ffffff" className="font-black text-[16px]">
          1
        </text>
        <text
          x="114"
          y="271"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[19px]"
        >
          Parabola f(x) melalui titik (2, 4).
        </text>

        {/* Statement 2 Pill */}
        <rect
          x="54"
          y="308"
          width="572"
          height="56"
          rx="12"
          className="fill-emerald-50 dark:fill-emerald-950/50 stroke-emerald-200 dark:stroke-emerald-800"
          strokeWidth="1.5"
        />
        <circle cx="84" cy="336" r="16" className="fill-emerald-600" />
        <text x="84" y="342" textAnchor="middle" fill="#ffffff" className="font-black text-[16px]">
          2
        </text>
        <text
          x="114"
          y="343"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[19px]"
        >
          Garis g(x) memiliki gradien 2.
        </text>
      </svg>
    </div>
  );
};
