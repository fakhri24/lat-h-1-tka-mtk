import React from 'react';

export const VisualSoal1: React.FC = () => {
  // Graph coordinate helpers
  // x: 0..10 -> gx(x) = 85 + x * 38
  // y: 0..15 -> gy(y) = 435 - y * 24
  const gx = (x: number) => 85 + x * 38;
  const gy = (y: number) => 435 - y * 24;

  const points = [
    [0, 5],
    [1, 7],
    [2, 9],
    [3, 11],
    [4, 13],
    [5, 15],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 920 510"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Grafik Tarif Biaya Layanan dan Layar Ojek Online"
      >
        <rect x="4" y="4" width="912" height="502" rx="22" className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800" strokeWidth="2" />

        {/* Title */}
        <text x="290" y="38" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[22px]">
          Grafik Tarif Biaya Layanan
        </text>

        {/* Grid lines */}
        {Array.from({ length: 11 }, (_, i) => i).map((x) => (
          <g key={`vx-${x}`}>
            <line
              x1={gx(x)}
              y1={gy(0)}
              x2={gx(x)}
              y2={gy(15)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.2"
            />
            {x > 0 && (
              <text
                x={gx(x)}
                y={gy(0) + 24}
                textAnchor="middle"
                className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]"
              >
                {x}
              </text>
            )}
          </g>
        ))}

        {Array.from({ length: 16 }, (_, i) => i).map((y) => (
          <g key={`hy-${y}`}>
            <line
              x1={gx(0)}
              y1={gy(y)}
              x2={gx(10)}
              y2={gy(y)}
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="1.2"
            />
            {y > 0 && (
              <text
                x={gx(0) - 12}
                y={gy(y) + 5}
                textAnchor="end"
                className="fill-slate-700 dark:fill-slate-300 font-bold text-[14px]"
              >
                {y}
              </text>
            )}
          </g>
        ))}

        {/* Origin 0 */}
        <text x={gx(0) - 10} y={gy(0) + 22} textAnchor="end" className="fill-slate-700 dark:fill-slate-300 font-bold text-[15px]">
          0
        </text>

        {/* Axes */}
        <defs>
          <marker id="arrow-s1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-800 dark:fill-slate-200" />
          </marker>
        </defs>

        <line
          x1={gx(0)}
          y1={gy(0) + 12}
          x2={gx(0)}
          y2={gy(15) - 18}
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s1)"
        />
        <line
          x1={gx(0) - 12}
          y1={gy(0)}
          x2={gx(10) + 22}
          y2={gy(0)}
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2.5"
          markerEnd="url(#arrow-s1)"
        />

        {/* Axis labels */}
        <text x={gx(0)} y={gy(15) - 26} textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 italic font-bold text-[17px]">
          y
        </text>
        <text x={gx(10) + 34} y={gy(0) + 5} textAnchor="start" className="fill-slate-800 dark:fill-slate-200 italic font-bold text-[17px]">
          x
        </text>

        <text x={gx(5)} y={490} textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]">
          Jarak tempuh (dalam km)
        </text>
        <text
          x="32"
          y={gy(7.5)}
          textAnchor="middle"
          transform={`rotate(-90, 32, ${gy(7.5)})`}
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17px]"
        >
          Biaya (dalam ribu rupiah)
        </text>

        {/* Line y = 2x + 5 */}
        <line
          x1={gx(0)}
          y1={gy(5)}
          x2={gx(5)}
          y2={gy(15)}
          stroke="#1d4ed8"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Data points */}
        {points.map(([px, py], idx) => (
          <circle
            key={idx}
            cx={gx(px)}
            cy={gy(py)}
            r="5.5"
            fill="#1e3a8a"
            stroke="#ffffff"
            strokeWidth="2"
          />
        ))}

        {/* Right Side: Smartphone Frame with HD Map & Info */}
        <g transform="translate(565, 42)">
          {/* Phone Outer Body */}
          <rect x="0" y="0" width="315" height="428" rx="34" fill="#1e293b" stroke="#334155" strokeWidth="4" />
          {/* Speaker notch */}
          <rect x="115" y="14" width="85" height="6" rx="3" fill="#475569" />
          {/* Screen */}
          <rect x="14" y="32" width="287" height="368" rx="18" fill="#f8fafc" />

          {/* Clip path for map image */}
          <clipPath id="phone-map-clip">
            <rect x="14" y="32" width="287" height="232" rx="16" />
          </clipPath>
          <g clipPath="url(#phone-map-clip)">
            <image
              href={`${import.meta.env.BASE_URL}images/soal-1-hp.jpg`}
              x="14"
              y="26"
              width="287"
              height="245"
              preserveAspectRatio="xMidYMid slice"
            />
            {/* Map Labels Overlay */}
            <rect x="190" y="42" width="102" height="24" rx="6" fill="rgba(255,255,255,0.92)" stroke="#ef4444" strokeWidth="1.5" />
            <text x="241" y="58" textAnchor="middle" fill="#dc2626" className="font-extrabold text-[13px]">
              Perpustakaan
            </text>

            <rect x="22" y="226" width="76" height="24" rx="6" fill="rgba(255,255,255,0.92)" stroke="#16a34a" strokeWidth="1.5" />
            <text x="60" y="242" textAnchor="middle" fill="#15803d" className="font-extrabold text-[13px]">
              Rumah
            </text>
          </g>

          {/* Bottom Card inside phone */}
          <line x1="14" y1="264" x2="301" y2="264" stroke="#cbd5e1" strokeWidth="2" />
          <text x="157" y="294" textAnchor="middle" fill="#1e293b" className="font-extrabold text-[17px]">
            Layanan Ojek Online
          </text>
          <text x="157" y="322" textAnchor="middle" fill="#0f172a" className="font-black text-[19px]">
            Tarif: Rp45.000,00
          </text>

          {/* Green Button */}
          <rect x="38" y="340" width="239" height="44" rx="10" fill="#22c55e" />
          <text x="157" y="368" textAnchor="middle" fill="#ffffff" className="font-black text-[17px] tracking-wide">
            PESAN OJEK
          </text>
        </g>
      </svg>
    </div>
  );
};
