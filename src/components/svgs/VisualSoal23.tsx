import React from 'react';

export const VisualSoal23: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 780 450"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Ruang Kerja Balok 8 m x 4 m x 4 m dengan Lampu L(4,2,4) dan Saklar S(8,2,0)"
      >
        <rect
          x="6"
          y="6"
          width="768"
          height="438"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Ceiling Shaded Face */}
        <polygon
          points="130,160 490,160 580,104 220,104"
          fill="#fef9c3"
          fillOpacity="0.45"
        />

        {/* Right Wall Shaded Face */}
        <polygon
          points="490,360 580,304 580,104 490,160"
          fill="#f1f5f9"
          className="dark:fill-slate-800/50"
        />

        {/* Back Edges */}
        <line x1="220" y1="104" x2="220" y2="304" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="220" y1="304" x2="130" y2="360" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="2" />
        <line x1="220" y1="304" x2="580" y2="304" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="2" />

        {/* Outer Visible Cuboid Edges */}
        <polygon
          points="130,160 490,160 580,104 220,104"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <rect
          x="130"
          y="160"
          width="360"
          height="200"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <polygon
          points="490,360 580,304 580,104 490,160"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Red Cable Path from L(355, 132) -> (535, 132) -> S(535, 332) */}
        <polyline
          points="355,132 535,132 535,332"
          fill="none"
          stroke="#dc2626"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cable Segment Labels */}
        <text x="455" y="122" textAnchor="middle" fill="#dc2626" className="font-black text-[18px]">
          4 m
        </text>
        <rect x="542" y="218" width="44" height="26" rx="6" fill="rgba(255,255,255,0.9)" />
        <text x="564" y="237" textAnchor="middle" fill="#dc2626" className="font-black text-[18px]">
          4 m
        </text>

        {/* Lamp Point L(4, 2, 4) */}
        <circle cx="355" cy="132" r="8" fill="#facc15" stroke="#a16207" strokeWidth="2.5" />
        <text x="355" y="92" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          Lampu L(4, 2, 4)
        </text>

        {/* Switch Point S(8, 2, 0) */}
        <circle cx="535" cy="332" r="7" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
        <text x="556" y="338" className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          Saklar S(8, 2, 0)
        </text>

        {/* Room Dimension Labels */}
        <text x="112" y="255" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[18px]">
          Tinggi
        </text>
        <text x="112" y="278" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          4 m
        </text>

        <text x="310" y="405" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
          Panjang = 8 m
        </text>

        <text x="615" y="372" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          Lebar 4 m
        </text>
      </svg>
    </div>
  );
};
