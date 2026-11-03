import React from 'react';

export const VisualSoal19: React.FC = () => {
  // Graph coordinates:
  // Grid columns: c = 0..7 -> xPos(c) = 110 + c * 74
  // Let col 3 be x = 7 (xPos = 332), col 5 be x = 10 (xPos = 480)
  // Grid rows: y from 20 to 45 (every 5 units = 56px) -> gy(y) = 405 - ((y - 20) / 5) * 56
  const gy = (y: number) => 405 - ((y - 20) / 5) * 56;
  const x7 = 390;
  const x10 = 540;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 740 475"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Grafik Fungsi Linear y = f(x) dan y = g(x) pada Bidang Koordinat Kartesius"
      >
        <rect
          x="6"
          y="6"
          width="728"
          height="463"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Grid Vertical Lines */}
        {[90, 165, 240, 315, 390, 465, 540, 615, 680].map((vx, i) => (
          <line
            key={`v-${i}`}
            x1={vx}
            y1={gy(45)}
            x2={vx}
            y2={405}
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="1.3"
          />
        ))}

        {/* Grid Horizontal Lines & Y labels (25, 30, 35, 40, 45) */}
        {[25, 30, 35, 40, 45].map((yVal) => (
          <g key={`h-${yVal}`}>
            <line
              x1="90"
              y1={gy(yVal)}
              x2="680"
              y2={gy(yVal)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.3"
            />
            <text
              x="76"
              y={gy(yVal) + 6}
              textAnchor="end"
              className="fill-slate-800 dark:fill-slate-200 font-bold text-[16px]"
            >
              {yVal}
            </text>
          </g>
        ))}

        <defs>
          <marker id="arrow-s19" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1="90"
          y1="405"
          x2="90"
          y2="45"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-s19)"
        />
        <line
          x1="90"
          y1="405"
          x2="690"
          y2="405"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
        />
        <text x="76" y="42" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 italic font-black text-[19px]">
          y
        </text>

        {/* Dashed Projection Lines */}
        <line x1="90" y1={gy(39)} x2={x10} y2={gy(39)} className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="2" strokeDasharray="6 5" />
        <line x1="90" y1={gy(26)} x2={x7} y2={gy(26)} className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="2" strokeDasharray="6 5" />
        <line x1={x7} y1={gy(26)} x2={x7} y2="405" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="2" strokeDasharray="6 5" />
        <line x1={x10} y1={gy(39)} x2={x10} y2="405" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="2" strokeDasharray="6 5" />

        {/* X-Axis Labels 7 & 10 */}
        <text x={x7} y="434" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          7
        </text>
        <text x={x10} y="434" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          10
        </text>

        {/* Red Line y = f(x) passing through (7, 26) and (10, 39) */}
        {/* At x = 5.615 -> y = 20 (xPos = 390 - 1.385*50 = 321, yPos = 405) */}
        {/* At x = 11.38 -> y = 45 (xPos = 540 + 1.38*50 = 609, yPos = gy(45)) */}
        <line
          x1="321"
          y1="405"
          x2="609"
          y2={gy(45)}
          stroke="#dc2626"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Blue Line y = g(x) passing through (7, 23) and (10, 32) */}
        {/* At x = 6 -> y = 20 (xPos = 340, yPos = 405) */}
        {/* At x = 12.2 -> y = 38.6 (xPos = 650, yPos = gy(38.6)) */}
        <line
          x1="340"
          y1="405"
          x2="650"
          y2={gy(38.6)}
          stroke="#1d4ed8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Points & Coordinates */}
        <circle cx={x7} cy={gy(26)} r="6" fill="#b91c1c" stroke="#fff" strokeWidth="2" />
        <text x={x7 - 12} y={gy(26) - 12} textAnchor="end" className="fill-rose-700 dark:fill-rose-400 font-extrabold text-[16px]">
          (7, 26)
        </text>

        <circle cx={x10} cy={gy(39)} r="6" fill="#b91c1c" stroke="#fff" strokeWidth="2" />
        <text x={x10 - 12} y={gy(39) - 12} textAnchor="end" className="fill-rose-700 dark:fill-rose-400 font-extrabold text-[16px]">
          (10, 39)
        </text>

        <circle cx={x7} cy={gy(23)} r="6" fill="#1e40af" stroke="#fff" strokeWidth="2" />
        <text x={x7 + 12} y={gy(23) + 18} className="fill-brand-700 dark:fill-sky-400 font-extrabold text-[16px]">
          (7, 23)
        </text>

        <circle cx={x10} cy={gy(32)} r="6" fill="#1e40af" stroke="#fff" strokeWidth="2" />
        <text x={x10 + 14} y={gy(32) + 16} className="fill-brand-700 dark:fill-sky-400 font-extrabold text-[16px]">
          (10, 32)
        </text>

        {/* Legend Box */}
        <g transform="translate(115, 72)">
          <rect
            x="0"
            y="0"
            width="155"
            height="68"
            rx="10"
            className="fill-white/95 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600"
            strokeWidth="1.5"
          />
          <line x1="16" y1="22" x2="48" y2="22" stroke="#dc2626" strokeWidth="4" />
          <text x="58" y="27" className="fill-slate-800 dark:fill-slate-100 italic font-bold text-[16px]">
            y = f(x)
          </text>
          <line x1="16" y1="48" x2="48" y2="48" stroke="#1d4ed8" strokeWidth="4" />
          <text x="58" y="53" className="fill-slate-800 dark:fill-slate-100 italic font-bold text-[16px]">
            y = g(x)
          </text>
        </g>
      </svg>
    </div>
  );
};
