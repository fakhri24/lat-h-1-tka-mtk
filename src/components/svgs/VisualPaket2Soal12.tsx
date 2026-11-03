import React from 'react';

export const VisualPaket2Soal12: React.FC = () => {
  // Tower center X = 320, Ground Y = 415
  // Ring 3 (bottom): Y = 305 (5 m from ground)
  // Ring 2 (middle): Y = 215 (4 m above Ring 3 -> total 9 m)
  // Ring 1 (top):    Y = 75  (7 m above Ring 2 -> total 16 m)
  // Left peg: X = 120 (12 m left)
  // Right peg: X = 520 (12 m right)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 660 500"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Menara dengan Tiga Kawat Penyangga dan Pasak Penahan"
      >
        <rect
          x="6"
          y="6"
          width="648"
          height="488"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Ground Line */}
        <line
          x1="55"
          y1="415"
          x2="605"
          y2="415"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3.5"
        />

        {/* Tower Vertical Column */}
        <rect
          x="306"
          y="72"
          width="28"
          height="343"
          className="fill-slate-200 dark:fill-slate-700 stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
        />
        <ellipse
          cx="320"
          cy="72"
          rx="14"
          ry="4.5"
          className="fill-slate-300 dark:fill-slate-600 stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
        />

        {/* Guy Wires (Kawat Penyangga 1, 2, 3) */}
        {/* Kawat penyangga 1: from Left Peg (128, 392) to Top Ring (306, 75) */}
        <line
          x1="128"
          y1="392"
          x2="306"
          y2="75"
          stroke="#0284c7"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Kawat penyangga 2: from Left Peg (132, 395) to Middle Ring (306, 215) */}
        <line
          x1="132"
          y1="395"
          x2="306"
          y2="215"
          stroke="#16a34a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Kawat penyangga 3: from Right Peg (512, 395) to Bottom Ring (334, 305) */}
        <line
          x1="512"
          y1="395"
          x2="334"
          y2="305"
          stroke="#ea580c"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Anchor Rings on Tower (Titik ikat) */}
        {[75, 215, 305].map((ry, idx) => (
          <g key={idx}>
            <ellipse
              cx="320"
              cy={ry}
              rx="16"
              ry="4.5"
              className="fill-amber-200 dark:fill-amber-500 stroke-slate-900 dark:stroke-slate-100"
              strokeWidth="2.2"
            />
            <text
              x="345"
              y={ry + 6}
              className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
            >
              Titik ikat
            </text>
          </g>
        ))}

        {/* Height Labels along the right of the tower */}
        <text
          x="352"
          y="152"
          className="fill-sky-700 dark:fill-sky-300 font-black text-[20px]"
        >
          7 m
        </text>
        <text
          x="352"
          y="266"
          className="fill-emerald-700 dark:fill-emerald-300 font-black text-[20px]"
        >
          4 m
        </text>
        <text
          x="345"
          y="376"
          className="fill-orange-700 dark:fill-orange-300 font-black text-[20px]"
        >
          5 m
        </text>

        {/* Wire Slanted Labels */}
        <text
          x="202"
          y="222"
          textAnchor="middle"
          transform="rotate(-60.7, 202, 222)"
          fill="#0369a1"
          className="dark:fill-sky-300 font-black text-[17px]"
        >
          Kawat penyangga 1
        </text>
        <text
          x="232"
          y="314"
          textAnchor="middle"
          transform="rotate(-46, 232, 314)"
          fill="#15803d"
          className="dark:fill-emerald-300 font-black text-[16.5px]"
        >
          Kawat penyangga 2
        </text>
        <text
          x="418"
          y="368"
          textAnchor="middle"
          transform="rotate(27, 418, 368)"
          fill="#c2410c"
          className="dark:fill-orange-300 font-black text-[16.5px]"
        >
          Kawat penyangga 3
        </text>

        {/* Left Peg (Pasak Kiri) */}
        <polygon
          points="108,388 134,388 134,422 121,440 108,422"
          className="fill-slate-900 dark:fill-slate-100"
        />
        <text
          x="121"
          y="464"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
        >
          Pasak
        </text>

        {/* Right Peg (Pasak Kanan) */}
        <polygon
          points="506,388 532,388 532,422 519,440 506,422"
          className="fill-slate-900 dark:fill-slate-100"
        />
        <text
          x="519"
          y="464"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
        >
          Pasak
        </text>

        {/* Horizontal Distance Indicators (12 m left & 12 m right) */}
        <line
          x1="142"
          y1="435"
          x2="190"
          y2="435"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2"
        />
        <text
          x="220"
          y="441"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
        >
          12 m
        </text>
        <line
          x1="250"
          y1="435"
          x2="300"
          y2="435"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2"
        />

        <line
          x1="340"
          y1="435"
          x2="390"
          y2="435"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2"
        />
        <text
          x="420"
          y="441"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
        >
          12 m
        </text>
        <line
          x1="450"
          y1="435"
          x2="498"
          y2="435"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
