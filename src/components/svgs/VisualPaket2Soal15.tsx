import React from 'react';

export const VisualPaket2Soal15: React.FC = () => {
  const bars = [
    { label: '0 - 4', freq: 14, color: '#38bdf8' },
    { label: '5 - 9', freq: 12, color: '#60a5fa' },
    { label: '10 - 14', freq: 10, color: '#818cf8' },
    { label: '15 - 19', freq: 8, color: '#a78bfa' },
  ];

  const baseY = 395;
  const unitH = 19.5;
  const startX = 125;
  const barW = 108;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 700 475"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Histogram Durasi Olahraga Siswa SMA dalam Satu Minggu"
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

        <defs>
          <marker
            id="arrow-p2s15"
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

        {/* Chart Title */}
        <text
          x="350"
          y="50"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]"
        >
          Durasi Olahraga Siswa SMA dalam Satu Minggu
        </text>

        {/* Horizontal Guide Lines */}
        {[4, 8, 10, 12, 14].map((f) => {
          const y = baseY - f * unitH;
          return (
            <line
              key={f}
              x1={startX}
              y1={y}
              x2={startX + bars.length * barW + 25}
              y2={y}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.4"
              strokeDasharray="5 5"
            />
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
                fill={b.color}
                fillOpacity="0.85"
                className="stroke-slate-900 dark:stroke-slate-100"
                strokeWidth="2.5"
              />
              {/* Frequency Label on Top of Bar */}
              <text
                x={x + barW / 2}
                y={y - 12}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]"
              >
                {b.freq}
              </text>
              {/* Interval Label Below X-Axis */}
              <text
                x={x + barW / 2}
                y={baseY + 28}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[18px]"
              >
                {b.label}
              </text>
            </g>
          );
        })}

        {/* Y-Axis & X-Axis with Arrows */}
        <line
          x1={startX}
          y1={baseY + 22}
          x2={startX}
          y2={85}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-p2s15)"
        />
        <line
          x1={startX - 24}
          y1={baseY}
          x2={startX + bars.length * barW + 36}
          y2={baseY}
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-p2s15)"
        />

        {/* Axis Labels */}
        <text
          x={startX}
          y="72"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[18px]"
        >
          Frekuensi
        </text>
        <text
          x={startX + bars.length * barW + 48}
          y={baseY + 6}
          textAnchor="start"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17.5px]"
        >
          Waktu (jam)
        </text>
      </svg>
    </div>
  );
};
