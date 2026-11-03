import React from 'react';

export const VisualSoal9: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 780 430"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Ilustrasi Pengujian Pantulan Bola Padel dari Ketinggian 240 cm"
      >
        <rect
          x="6"
          y="6"
          width="768"
          height="418"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Drop Apparatus Stand */}
        <line x1="150" y1="55" x2="150" y2="355" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="5" />
        <line x1="130" y1="72" x2="255" y2="72" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="4" />
        <line x1="255" y1="72" x2="255" y2="95" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="3.5" />
        <rect x="122" y="346" width="56" height="10" rx="3" className="fill-slate-600 dark:fill-slate-400" />

        {/* Concrete Ground Surface */}
        <rect x="105" y="356" width="590" height="12" rx="3" className="fill-slate-300 dark:fill-slate-700" />
        <line x1="105" y1="356" x2="695" y2="356" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="3" />

        {/* Vertical Height Indicator 240 cm */}
        <line x1="220" y1="112" x2="220" y2="356" stroke="#16a34a" strokeWidth="3" />
        <line x1="210" y1="112" x2="230" y2="112" stroke="#16a34a" strokeWidth="3" />
        <text x="210" y="242" textAnchor="end" fill="#15803d" className="dark:fill-emerald-400 font-black text-[21px]">
          240 cm
        </text>

        {/* Falling Padel Balls (Sequence) */}
        <line x1="255" y1="112" x2="255" y2="356" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="2" strokeDasharray="5 5" />

        {/* Top Ball (Solid) */}
        <circle cx="255" cy="112" r="15" fill="#bef264" stroke="#4d7c0f" strokeWidth="2.5" />
        <path d="M 244 105 Q 255 112 244 119 M 266 105 Q 255 112 266 119" fill="none" stroke="#4d7c0f" strokeWidth="1.5" />

        {/* Intermediate Ghost Balls */}
        {[178, 244, 310].map((cy, idx) => (
          <g key={idx} opacity={0.55}>
            <circle cx="255" cy={cy} r="15" fill="#d9f99d" stroke="#4d7c0f" strokeWidth="2" />
          </g>
        ))}

        {/* Bounce Parabolic Trajectories */}
        {/* Bounce 1 (Peak at y = 234 -> height 120 cm) */}
        <path
          d="M 255 356 Q 315 112 375 356"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.8"
          strokeDasharray="7 5"
        />
        {/* Bounce 2 (Peak height 60 cm) */}
        <path
          d="M 375 356 Q 422 234 470 356"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.8"
          strokeDasharray="7 5"
        />
        {/* Bounce 3 (Peak height 30 cm) */}
        <path
          d="M 470 356 Q 508 295 545 356"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.8"
          strokeDasharray="7 5"
        />
        {/* Bounce 4 */}
        <path
          d="M 545 356 Q 572 326 600 356"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.8"
          strokeDasharray="7 5"
        />

        {/* Label: arah pantulan */}
        <defs>
          <marker id="arrow-s9" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>
        <text x="368" y="166" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[19px]">
          arah pantulan
        </text>
        <line
          x1="358"
          y1="176"
          x2="322"
          y2="215"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s9)"
        />
      </svg>
    </div>
  );
};
