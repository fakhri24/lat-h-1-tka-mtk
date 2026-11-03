import React from 'react';

export const VisualSoal6: React.FC = () => {
  // x: -3..7 -> gx(x) = 210 + x * 46
  // y: -2..6 -> gy(y) = 370 - y * 46
  const gx = (x: number) => 210 + x * 46;
  const gy = (y: number) => 370 - y * 46;

  const fPoints = [
    [-2, 0],
    [0, 2],
    [2, 4],
    [4, 6],
  ];

  const gPoints = [
    [-2, 6],
    [0, 4],
    [2, 2],
    [4, 0],
    [6, -2],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 650 510"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Grafik Fungsi Linear f dan g pada Bidang Koordinat Kartesius"
      >
        <rect x="6" y="6" width="638" height="498" rx="20" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800" strokeWidth="2" />

        {/* Grid vertical lines */}
        {[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map((x) => (
          <g key={`vx-${x}`}>
            <line
              x1={gx(x)}
              y1={gy(-2)}
              x2={gx(x)}
              y2={gy(6)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.2"
            />
            {x !== 0 && (
              <text
                x={gx(x)}
                y={gy(0) + 22}
                textAnchor="middle"
                className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]"
              >
                {x}
              </text>
            )}
          </g>
        ))}

        {/* Grid horizontal lines */}
        {[-2, -1, 0, 1, 2, 3, 4, 5, 6].map((y) => (
          <g key={`hy-${y}`}>
            <line
              x1={gx(-3)}
              y1={gy(y)}
              x2={gx(7)}
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

        <text x={gx(0) - 10} y={gy(0) + 20} textAnchor="end" className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]">
          0
        </text>

        <defs>
          <marker id="arrow-s6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-800 dark:fill-slate-200" />
          </marker>
        </defs>

        {/* Axes */}
        <line
          x1={gx(0)}
          y1={gy(-2) + 15}
          x2={gx(0)}
          y2={gy(6) - 22}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s6)"
        />
        <line
          x1={gx(-3) - 10}
          y1={gy(0)}
          x2={gx(7) + 22}
          y2={gy(0)}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s6)"
        />

        <text x={gx(0)} y={gy(6) - 30} textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 italic font-bold text-[18px]">
          y
        </text>
        <text x={gx(7) + 32} y={gy(0) + 5} className="fill-slate-900 dark:fill-slate-100 italic font-bold text-[18px]">
          x
        </text>

        {/* Function f(x) = x + 2 (Blue rising) from (-3, -1) to (4.4, 6.4) */}
        <line
          x1={gx(-3)}
          y1={gy(-1)}
          x2={gx(4.35)}
          y2={gy(6.35)}
          stroke="#0284c7"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <text x={gx(3.3)} y={gy(5.6)} fill="#0284c7" className="italic font-black text-[20px]">
          f
        </text>

        {/* Function g(x) = -x + 4 (Red falling) from (-2.3, 6.3) to (6.3, -2.3) */}
        <line
          x1={gx(-2.3)}
          y1={gy(6.3)}
          x2={gx(6.3)}
          y2={gy(-2.3)}
          stroke="#dc2626"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <text x={gx(5.1)} y={gy(-1.55)} fill="#dc2626" className="italic font-black text-[20px]">
          g
        </text>

        {/* Points & Coordinate Labels for f */}
        {fPoints.map(([x, y], i) => (
          <g key={`fp-${i}`}>
            <circle cx={gx(x)} cy={gy(y)} r="5.5" fill="#0369a1" stroke="#fff" strokeWidth="1.8" />
          </g>
        ))}

        {/* Points & Coordinate Labels for g */}
        {gPoints.map(([x, y], i) => (
          <g key={`gp-${i}`}>
            <circle cx={gx(x)} cy={gy(y)} r="5.5" fill="#b91c1c" stroke="#fff" strokeWidth="1.8" />
          </g>
        ))}

        {/* Coordinate text labels */}
        <text x={gx(-2) - 8} y={gy(0) - 10} textAnchor="end" className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (-2, 0)
        </text>
        <text x={gx(0) + 10} y={gy(2) + 16} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (0, 2)
        </text>
        <text x={gx(2) + 10} y={gy(4) + 5} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (2, 4)
        </text>
        <text x={gx(4) - 10} y={gy(6) + 4} textAnchor="end" className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (4, 6)
        </text>

        <text x={gx(-2) - 10} y={gy(6) + 5} textAnchor="end" className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (-2, 6)
        </text>
        <text x={gx(0) + 8} y={gy(4) - 8} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (0, 4)
        </text>
        <text x={gx(2) + 10} y={gy(2) - 8} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (2, 2)
        </text>
        <text x={gx(4) + 8} y={gy(0) - 10} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (4, 0)
        </text>
        <text x={gx(6) + 10} y={gy(-2) + 5} className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]">
          (6, -2)
        </text>

        {/* Legend Box */}
        <g transform="translate(425, 68)">
          <rect x="0" y="0" width="175" height="62" rx="8" className="fill-white/95 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.5" />
          <line x1="14" y1="20" x2="44" y2="20" stroke="#0284c7" strokeWidth="4" />
          <text x="54" y="25" className="fill-slate-800 dark:fill-slate-100 font-bold text-[15px]">
            f (menaik)
          </text>
          <line x1="14" y1="44" x2="44" y2="44" stroke="#dc2626" strokeWidth="4" />
          <text x="54" y="49" className="fill-slate-800 dark:fill-slate-100 font-bold text-[15px]">
            g (menurun)
          </text>
        </g>
      </svg>
    </div>
  );
};
