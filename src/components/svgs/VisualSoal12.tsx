import React from 'react';

export const VisualSoal12: React.FC = () => {
  // Histogram bars:
  // 10-14: 2, 15-19: 6, 20-24: 7, 25-29: 7, 30-34: 1
  const bars = [
    { label: '10 - 14', freq: 2 },
    { label: '15 - 19', freq: 6 },
    { label: '20 - 24', freq: 7 },
    { label: '25 - 29', freq: 7 },
    { label: '30 - 34', freq: 1 },
  ];

  const baseY = 395;
  const unitH = 38;
  const startX = 140;
  const barW = 96;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 700 475"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Histogram Waktu Tempuh Siswa ke Sekolah"
      >
        <rect
          x="6"
          y="6"
          width="688"
          height="463"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Title */}
        <text x="380" y="54" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[25px]">
          Histogram
        </text>

        {/* Horizontal Grid Lines & Y-Axis Labels (0..8) */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((f) => {
          const y = baseY - f * unitH;
          return (
            <g key={f}>
              <line
                x1={startX - 20}
                y1={y}
                x2={startX + bars.length * barW + 25}
                y2={y}
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth={f === 0 ? '2.5' : '1.4'}
              />
              <text
                x={startX - 32}
                y={y + 6}
                textAnchor="end"
                className="fill-slate-800 dark:fill-slate-200 font-extrabold text-[17px]"
              >
                {f}
              </text>
            </g>
          );
        })}

        {/* Histogram Bars */}
        {bars.map((b, idx) => {
          const x = startX + idx * barW;
          const h = b.freq * unitH;
          const y = baseY - h;
          return (
            <g key={b.label}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={h}
                fill="#c27849"
                stroke="#5c2d16"
                strokeWidth="2.8"
              />
              <text
                x={x + barW / 2}
                y={baseY + 28}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
              >
                {b.label}
              </text>
            </g>
          );
        })}

        {/* Axis Titles */}
        <text
          x={startX + (bars.length * barW) / 2}
          y="454"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]"
        >
          Waktu Tempuh (menit)
        </text>

        <text
          x="52"
          y={baseY - 4 * unitH}
          textAnchor="middle"
          transform={`rotate(-90, 52, ${baseY - 4 * unitH})`}
          className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]"
        >
          Frekuensi
        </text>
      </svg>
    </div>
  );
};
