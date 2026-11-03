import React from 'react';

export const VisualSoal11: React.FC = () => {
  // X: -5..5 -> gx(x) = 330 + x * 48
  // Y: -1..5 -> gy(y) = 380 - y * 56
  const gx = (x: number) => 330 + x * 48;
  const gy = (y: number) => 380 - y * 56;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 660 490"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Segitiga PQR dan Bayangannya P'Q'R' pada Bidang Koordinat Kartesius"
      >
        <rect
          x="6"
          y="6"
          width="648"
          height="478"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Grid Vertical */}
        {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((x) => (
          <g key={`vx-${x}`}>
            <line
              x1={gx(x)}
              y1={gy(-1)}
              x2={gx(x)}
              y2={gy(5)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.2"
            />
            <text
              x={gx(x) - (x === 0 ? 12 : 0)}
              y={gy(0) + 22}
              textAnchor="middle"
              className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]"
            >
              {x}
            </text>
          </g>
        ))}

        {/* Grid Horizontal */}
        {[-1, 0, 1, 2, 3, 4, 5].map((y) => (
          <g key={`hy-${y}`}>
            <line
              x1={gx(-5)}
              y1={gy(y)}
              x2={gx(5)}
              y2={gy(y)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.2"
            />
            {y !== 0 && (
              <text
                x={gx(0) - 10}
                y={gy(y) + 5}
                textAnchor="end"
                className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]"
              >
                {y}
              </text>
            )}
          </g>
        ))}

        <defs>
          <marker id="arrow-s11" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1={gx(0)}
          y1={gy(-1) + 12}
          x2={gx(0)}
          y2={gy(5) - 24}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s11)"
        />
        <line
          x1={gx(-5) - 12}
          y1={gy(0)}
          x2={gx(5) + 24}
          y2={gy(0)}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s11)"
        />

        <text x={gx(0)} y={gy(5) - 34} textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          Y
        </text>
        <text x={gx(5) + 34} y={gy(0) + 6} className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]">
          X
        </text>

        {/* Original Triangle PQR: P(-4,2), Q(-2,1), R(-1,4) */}
        <polygon
          points={`${gx(-4)},${gy(2)} ${gx(-2)},${gy(1)} ${gx(-1)},${gy(4)}`}
          fill="rgba(244, 63, 94, 0.25)"
          stroke="#881337"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {[
          [-4, 2, 'P', -18, 5],
          [-2, 1, 'Q', 0, 26],
          [-1, 4, 'R', 12, -10],
        ].map(([x, y, label, dx, dy]) => (
          <g key={String(label)}>
            <circle cx={gx(Number(x))} cy={gy(Number(y))} r="5.5" fill="#1e293b" />
            <text
              x={gx(Number(x)) + Number(dx)}
              y={gy(Number(y)) + Number(dy)}
              textAnchor="middle"
              className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Image Triangle P'Q'R': P'(2,4), Q'(1,2), R'(4,1) */}
        <polygon
          points={`${gx(2)},${gy(4)} ${gx(1)},${gy(2)} ${gx(4)},${gy(1)}`}
          fill="rgba(59, 130, 246, 0.28)"
          stroke="#1e3a8a"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {[
          [2, 4, "P'", -14, -10],
          [1, 2, "Q'", -18, 16],
          [4, 1, "R'", 18, 20],
        ].map(([x, y, label, dx, dy]) => (
          <g key={String(label)}>
            <circle cx={gx(Number(x))} cy={gy(Number(y))} r="5.5" fill="#1e293b" />
            <text
              x={gx(Number(x)) + Number(dx)}
              y={gy(Number(y)) + Number(dy)}
              textAnchor="middle"
              className="fill-slate-900 dark:fill-slate-100 font-black text-[18px]"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
