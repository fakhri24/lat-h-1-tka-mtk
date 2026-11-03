import React from 'react';

export const VisualPaket2Soal8: React.FC = () => {
  // Coordinate system:
  // x in [-3, 6] -> gx(x) = 215 + x * 48
  // y in [-5, 7] -> gy(y) = 275 - y * 34
  const gx = (x: number) => 215 + x * 48;
  const gy = (y: number) => 275 - y * 34;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 620 520"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Grafik Fungsi Linear f(x) dan g(x) pada Bidang Kartesius"
      >
        <rect
          x="6"
          y="6"
          width="608"
          height="508"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        <defs>
          <marker
            id="arrow-p2s8"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Subtle background grid */}
        {[-3, -2, -1, 1, 2, 3, 4, 5, 6].map((x) => (
          <line
            key={`gx-${x}`}
            x1={gx(x)}
            y1={gy(-5)}
            x2={gx(x)}
            y2={gy(7)}
            className="stroke-slate-100 dark:stroke-slate-800/70"
            strokeWidth="1"
          />
        ))}
        {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map((y) => (
          <line
            key={`gy-${y}`}
            x1={gx(-3)}
            y1={gy(y)}
            x2={gx(6)}
            y2={gy(y)}
            className="stroke-slate-100 dark:stroke-slate-800/70"
            strokeWidth="1"
          />
        ))}

        {/* Coordinate Helper Dashed / Solid Guides as in source diagram */}
        {/* (-2, 6) dashed guide */}
        <polyline
          points={`${gx(-2)},${gy(0)} ${gx(-2)},${gy(6)} ${gx(0)},${gy(6)}`}
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.2"
          strokeDasharray="7 6"
        />

        {/* (4, 4) dashed guide */}
        <polyline
          points={`${gx(0)},${gy(4)} ${gx(4)},${gy(4)} ${gx(4)},${gy(0)}`}
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="2.2"
          strokeDasharray="7 6"
        />

        {/* (1, -2) solid helper guide as in source diagram */}
        <polyline
          points={`${gx(1)},${gy(0)} ${gx(1)},${gy(-2)} ${gx(0)},${gy(-2)}`}
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.2"
        />

        {/* X and Y Axes */}
        <line
          x1={gx(-3.2)}
          y1={gy(0)}
          x2={gx(6.3)}
          y2={gy(0)}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-p2s8)"
        />
        <line
          x1={gx(0)}
          y1={gy(-5.3)}
          x2={gx(0)}
          y2={gy(7.2)}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-p2s8)"
        />

        {/* Axis names */}
        <text
          x={gx(6.55)}
          y={gy(0) + 6}
          className="fill-slate-900 dark:fill-slate-100 font-bold text-[19px] italic"
        >
          x
        </text>
        <text
          x={gx(0)}
          y={gy(7.5)}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-bold text-[19px] italic"
        >
          y
        </text>

        {/* Tick marks on X axis */}
        {[-2, -1, 1, 2, 3, 4, 5, 6].map((x) => (
          <line
            key={`tx-${x}`}
            x1={gx(x)}
            y1={gy(0) - 6}
            x2={gx(x)}
            y2={gy(0) + 6}
            className="stroke-slate-900 dark:stroke-slate-100"
            strokeWidth="2.2"
          />
        ))}

        {/* Tick marks on Y axis */}
        {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((y) => (
          <line
            key={`ty-${y}`}
            x1={gx(0) - 6}
            y1={gy(y)}
            x2={gx(0) + 6}
            y2={gy(y)}
            className="stroke-slate-900 dark:stroke-slate-100"
            strokeWidth="2.2"
          />
        ))}

        {/* Function f(x) = -x + 4: from (-2, 6) to (6, -2) */}
        <line
          x1={gx(-2)}
          y1={gy(6)}
          x2={gx(5.8)}
          y2={gy(-1.8)}
          stroke="#dc2626"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <text
          x={gx(5.95)}
          y={gy(-1.95) + 6}
          fill="#dc2626"
          className="font-black text-[19px] italic"
        >
          f(x)
        </text>

        {/* Function g(x) = 2x - 4: from (-0.4, -4.8) to (4.6, 5.2) */}
        <line
          x1={gx(-0.35)}
          y1={gy(-4.7)}
          x2={gx(4.55)}
          y2={gy(5.1)}
          stroke="#0284c7"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <text
          x={gx(4.68)}
          y={gy(5.2)}
          fill="#0284c7"
          className="font-black text-[19px] italic"
        >
          g(x)
        </text>

        {/* Key Coordinate Dots */}
        {[
          [-2, 6, '#dc2626'],
          [0, 4, '#dc2626'],
          [4, 0, '#dc2626'],
          [0, -4, '#0284c7'],
          [1, -2, '#0284c7'],
          [2, 0, '#0284c7'],
          [4, 4, '#0284c7'],
        ].map(([x, y, color], idx) => (
          <circle
            key={idx}
            cx={gx(x as number)}
            cy={gy(y as number)}
            r="5"
            fill={color as string}
            stroke="#ffffff"
            strokeWidth="1.8"
          />
        ))}

        {/* Axis Coordinate Labels */}
        <text
          x={gx(-2)}
          y={gy(0) + 25}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          -2
        </text>
        <text
          x={gx(1) - 8}
          y={gy(0) + 23}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          1
        </text>
        <text
          x={gx(2)}
          y={gy(0) + 25}
          textAnchor="middle"
          className="fill-slate-500 dark:fill-slate-400 font-bold text-[15px]"
        >
          2
        </text>
        <text
          x={gx(4)}
          y={gy(0) + 25}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          4
        </text>

        <text
          x={gx(0) + 14}
          y={gy(6) + 6}
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          6
        </text>
        <text
          x={gx(0) - 14}
          y={gy(4) + 6}
          textAnchor="end"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          4
        </text>
        <text
          x={gx(0) - 14}
          y={gy(-2) + 6}
          textAnchor="end"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          -2
        </text>
        <text
          x={gx(0) + 14}
          y={gy(-4) + 6}
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          -4
        </text>
      </svg>
    </div>
  );
};
