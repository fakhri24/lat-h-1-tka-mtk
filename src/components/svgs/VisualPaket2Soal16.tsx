import React from 'react';

export const VisualPaket2Soal16: React.FC = () => {
  // 3D Rectangular Box (10 cm x 8 cm x 20 cm):
  // Front face: (65, 115) to (205, 385) -> width 140, height 270
  // Back face offset: (+60, -45) -> (125, 70) to (265, 340)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 740 450"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Kotak Balok 10 cm x 8 cm x 20 cm dan Kapasitas Botol Jus Jeruk serta Semangka"
      >
        <rect
          x="6"
          y="6"
          width="728"
          height="438"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Left: 3D Cuboid Box (10 cm x 8 cm x 20 cm) */}
        {/* Shaded Faces */}
        <polygon
          points="65,115 205,115 265,70 125,70"
          fill="#e0f2fe"
          fillOpacity="0.6"
          className="dark:fill-sky-950/50"
        />
        <polygon
          points="205,115 265,70 265,340 205,385"
          fill="#bae6fd"
          fillOpacity="0.55"
          className="dark:fill-sky-900/40"
        />
        <rect
          x="65"
          y="115"
          width="140"
          height="270"
          fill="#f0f9ff"
          fillOpacity="0.6"
          className="dark:fill-slate-800/50"
        />

        {/* Hidden Back Dashed Edges */}
        <line
          x1="125"
          y1="70"
          x2="125"
          y2="340"
          className="stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2.4"
          strokeDasharray="8 6"
        />
        <line
          x1="125"
          y1="340"
          x2="65"
          y2="385"
          className="stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2.4"
          strokeDasharray="8 6"
        />
        <line
          x1="125"
          y1="340"
          x2="265"
          y2="340"
          className="stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="2.4"
          strokeDasharray="8 6"
        />

        {/* Solid Visible Cuboid Edges */}
        <rect
          x="65"
          y="115"
          width="140"
          height="270"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <polygon
          points="65,115 205,115 265,70 125,70"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
        <polygon
          points="205,115 265,70 265,340 205,385"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />

        {/* Cuboid Dimension Labels */}
        <text
          x="130"
          y="418"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
        >
          10 cm
        </text>
        <text
          x="248"
          y="386"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
        >
          8 cm
        </text>
        <text
          x="284"
          y="222"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
        >
          20 cm
        </text>

        {/* Right Top: Orange Juice Bottle (100 ml) */}
        <g transform="translate(390, 95)">
          {/* Bottle Cap */}
          <rect
            x="16"
            y="0"
            width="28"
            height="14"
            rx="3"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="2"
          />
          {/* Bottle Body */}
          <path
            d="M 18 14 L 42 14 L 54 48 L 54 136 Q 54 146 44 146 L 16 146 Q 6 146 6 136 L 6 48 Z"
            fill="#f59e0b"
            stroke="#334155"
            strokeWidth="2.5"
          />
          {/* Bottle Label */}
          <rect
            x="11"
            y="64"
            width="38"
            height="54"
            rx="4"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.2"
          />
          {/* Orange Slice Icon */}
          <circle cx="30" cy="94" r="14" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
          <circle cx="30" cy="94" r="11" fill="none" stroke="#fff7ed" strokeWidth="1.2" />
          <line x1="30" y1="81" x2="30" y2="107" stroke="#fff7ed" strokeWidth="1.2" />
          <line x1="17" y1="94" x2="43" y2="94" stroke="#fff7ed" strokeWidth="1.2" />
          <line x1="21" y1="85" x2="39" y2="103" stroke="#fff7ed" strokeWidth="1.2" />
          <line x1="39" y1="85" x2="21" y2="103" stroke="#fff7ed" strokeWidth="1.2" />
          <ellipse cx="26" cy="74" rx="5" ry="2.5" fill="#16a34a" />
          <ellipse cx="34" cy="74" rx="5" ry="2.5" fill="#16a34a" />

          {/* Text */}
          <text
            x="74"
            y="95"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
          >
            1 botol jus jeruk = 100 ml
          </text>
        </g>

        {/* Right Bottom: Watermelon Juice Bottle (75 ml) */}
        <g transform="translate(390, 265)">
          {/* Bottle Cap */}
          <rect
            x="16"
            y="0"
            width="28"
            height="13"
            rx="3"
            fill="#1e293b"
            stroke="#0f172a"
            strokeWidth="2"
          />
          {/* Bottle Body */}
          <path
            d="M 18 13 L 42 13 L 52 44 L 52 122 Q 52 132 42 132 L 18 132 Q 8 132 8 122 L 8 44 Z"
            fill="#dc2626"
            stroke="#334155"
            strokeWidth="2.5"
          />
          {/* Bottle Label */}
          <rect
            x="12"
            y="56"
            width="36"
            height="48"
            rx="4"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="1.2"
          />
          {/* Watermelon Slice Icon */}
          <path
            d="M 16 78 A 14 14 0 0 0 44 78 Z"
            fill="#ef4444"
            stroke="#15803d"
            strokeWidth="3"
          />
          <circle cx="25" cy="83" r="1.2" fill="#0f172a" />
          <circle cx="30" cy="86" r="1.2" fill="#0f172a" />
          <circle cx="35" cy="83" r="1.2" fill="#0f172a" />

          {/* Text */}
          <text
            x="74"
            y="84"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]"
          >
            1 botol jus semangka = 75 ml
          </text>
        </g>
      </svg>
    </div>
  );
};
