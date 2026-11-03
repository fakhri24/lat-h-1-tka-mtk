import React from 'react';

export const VisualSoal2: React.FC = () => {
  // Parallelogram ABCD
  // A(120, 220), B(410, 220), D(200, 75), C(490, 75)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 640 360"
        className="w-full max-h-[78vh] h-auto select-none"
        role="img"
        aria-label="Jajar Genjang ABCD dengan panjang AB 11 cm"
      >
        {/* Outer Problem Card */}
        <rect
          x="10"
          y="10"
          width="620"
          height="340"
          rx="20"
          className="fill-indigo-50/70 dark:fill-slate-900 stroke-indigo-200 dark:stroke-slate-700"
          strokeWidth="2.5"
        />

        <text x="36" y="48" className="fill-indigo-950 dark:fill-indigo-200 font-extrabold text-[20px]">
          Permasalahan Geometri:
        </text>
        <text x="36" y="78" className="fill-slate-800 dark:fill-slate-200 font-semibold text-[18px]">
          Panjang sisi AB dari jajar genjang ABCD berikut adalah 11 cm.
        </text>

        {/* Inner White Geometry Canvas */}
        <rect
          x="70"
          y="96"
          width="500"
          height="195"
          rx="14"
          className="fill-white dark:fill-slate-950 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="1.5"
        />

        {/* Diagonals AC and BD */}
        <line
          x1="155"
          y1="242"
          x2="485"
          y2="130"
          className="stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2.2"
        />
        <line
          x1="235"
          y1="130"
          x2="405"
          y2="242"
          className="stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2.2"
        />

        {/* Parallelogram ABCD */}
        <polygon
          points="155,242 405,242 485,130 235,130"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Vertex Labels */}
        <text x="136" y="252" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
          A
        </text>
        <text x="415" y="252" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
          B
        </text>
        <text x="495" y="132" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
          C
        </text>
        <text x="212" y="132" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
          D
        </text>

        {/* Side length 11 cm */}
        <text x="280" y="272" textAnchor="middle" className="fill-brand-700 dark:fill-sky-400 font-black text-[21px]">
          11 cm
        </text>

        {/* Footer Question inside Box */}
        <text x="36" y="324" className="fill-slate-900 dark:fill-white font-extrabold text-[20px]">
          Berapakah keliling jajar genjang tersebut?
        </text>
      </svg>
    </div>
  );
};
