import React from 'react';

export const VisualPaket2Soal14: React.FC = () => {
  const rows = [
    { day: 'Senin', sold: 50, kubis: 5, pare: 10, siomay: 5, highlight: true },
    { day: 'Selasa', sold: 51, kubis: 4, pare: 8, siomay: 6, highlight: false },
    { day: 'Rabu', sold: 50, kubis: 6, pare: 3, siomay: 2, highlight: false },
    { day: 'Kamis', sold: 53, kubis: 2, pare: 1, siomay: 1, highlight: false },
    { day: 'Jumat', sold: 50, kubis: 5, pare: 6, siomay: 3, highlight: false },
    { day: 'Sabtu', sold: 52, kubis: 7, pare: 10, siomay: 7, highlight: false },
    { day: 'Minggu', sold: 54, kubis: 1, pare: 5, siomay: 3, highlight: false },
  ];

  const colX = [35, 185, 345, 445, 545, 645];
  const headerTop = 32;
  const headerBottom = 112;
  const rowH = 44;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 680 460"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Tabel Penjualan Paket Makanan dalam Satu Minggu"
      >
        <rect
          x="6"
          y="6"
          width="668"
          height="448"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Table Header Background */}
        <rect
          x={colX[0]}
          y={headerTop}
          width={colX[5] - colX[0]}
          height={headerBottom - headerTop}
          className="fill-slate-200/80 dark:fill-slate-800"
        />

        {/* Rows Backgrounds */}
        {rows.map((r, i) => {
          const y = headerBottom + i * rowH;
          return (
            <rect
              key={r.day}
              x={colX[0]}
              y={y}
              width={colX[5] - colX[0]}
              height={rowH}
              className={
                r.highlight
                  ? 'fill-amber-50/90 dark:fill-amber-950/30'
                  : i % 2 === 1
                  ? 'fill-slate-50 dark:fill-slate-900/50'
                  : 'fill-white dark:fill-slate-900'
              }
            />
          );
        })}

        {/* Horizontal Lines */}
        <line
          x1={colX[0]}
          y1={headerTop}
          x2={colX[5]}
          y2={headerTop}
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.5"
        />
        <line
          x1={colX[2]}
          y1={headerTop + 46}
          x2={colX[5]}
          y2={headerTop + 46}
          className="stroke-slate-700 dark:stroke-slate-300"
          strokeWidth="1.8"
        />
        <line
          x1={colX[0]}
          y1={headerBottom}
          x2={colX[5]}
          y2={headerBottom}
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.2"
        />
        {rows.map((_, i) => {
          const y = headerBottom + (i + 1) * rowH;
          return (
            <line
              key={i}
              x1={colX[0]}
              y1={y}
              x2={colX[5]}
              y2={y}
              className="stroke-slate-400 dark:stroke-slate-700"
              strokeWidth={i === rows.length - 1 ? '2.5' : '1.5'}
            />
          );
        })}

        {/* Vertical Lines */}
        {[colX[0], colX[1], colX[2], colX[5]].map((x, idx) => (
          <line
            key={idx}
            x1={x}
            y1={headerTop}
            x2={x}
            y2={headerBottom + rows.length * rowH}
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2"
          />
        ))}
        {[colX[3], colX[4]].map((x, idx) => (
          <line
            key={idx}
            x1={x}
            y1={headerTop + 46}
            x2={x}
            y2={headerBottom + rows.length * rowH}
            className="stroke-slate-700 dark:stroke-slate-300"
            strokeWidth="1.6"
          />
        ))}

        {/* Header Titles */}
        <text
          x={(colX[0] + colX[1]) / 2}
          y={headerTop + 46}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]"
        >
          Hari
        </text>
        <text
          x={(colX[1] + colX[2]) / 2}
          y={headerTop + 34}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[17.5px]"
        >
          Jumlah paket
        </text>
        <text
          x={(colX[1] + colX[2]) / 2}
          y={headerTop + 58}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[17.5px]"
        >
          terjual
        </text>

        <text
          x={(colX[2] + colX[5]) / 2}
          y={headerTop + 21}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[16px]"
        >
          Banyak jenis yang tidak
        </text>
        <text
          x={(colX[2] + colX[5]) / 2}
          y={headerTop + 40}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[16px]"
        >
          dimakan pembeli
        </text>

        <text
          x={(colX[2] + colX[3]) / 2}
          y={headerTop + 70}
          textAnchor="middle"
          className="fill-emerald-800 dark:fill-emerald-300 font-black text-[17px]"
        >
          Kubis
        </text>
        <text
          x={(colX[3] + colX[4]) / 2}
          y={headerTop + 70}
          textAnchor="middle"
          className="fill-emerald-800 dark:fill-emerald-300 font-black text-[17px]"
        >
          Pare
        </text>
        <text
          x={(colX[4] + colX[5]) / 2}
          y={headerTop + 70}
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[17px]"
        >
          Siomay
        </text>

        {/* Row Data */}
        {rows.map((r, i) => {
          const cy = headerBottom + i * rowH + 29;
          return (
            <g key={r.day}>
              <text
                x={colX[0] + 18}
                y={cy}
                className="fill-slate-900 dark:fill-slate-100 font-bold text-[18px]"
              >
                {r.day}
              </text>
              <text
                x={(colX[1] + colX[2]) / 2}
                y={cy}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[18px]"
              >
                {r.sold}
              </text>
              <text
                x={(colX[2] + colX[3]) / 2}
                y={cy}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-bold text-[18px]"
              >
                {r.kubis}
              </text>
              <text
                x={(colX[3] + colX[4]) / 2}
                y={cy}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-bold text-[18px]"
              >
                {r.pare}
              </text>
              <text
                x={(colX[4] + colX[5]) / 2}
                y={cy}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-bold text-[18px]"
              >
                {r.siomay}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
