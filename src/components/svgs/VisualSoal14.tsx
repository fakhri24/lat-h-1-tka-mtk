import React from 'react';

export const VisualSoal14: React.FC = () => {
  // Pie chart sectors around (390, 365), radius R = 105
  // Angles (0 deg = top 12 o'clock, clockwise):
  // Futsal: 35% -> 0 to 126 deg
  // Basket: 40% -> 126 to 270 deg
  // Voli: 15% -> 270 to 324 deg
  // Hand Ball: 10% -> 324 to 360 deg
  const cx = 390;
  const cy = 365;
  const r = 108;

  const polar = (deg: number, rad = r) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
  };

  const arcPath = (startDeg: number, endDeg: number) => {
    const [x1, y1] = polar(startDeg);
    const [x2, y2] = polar(endDeg);
    const largeArc = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 760 520"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Tabel dan Diagram Lingkaran Ekstrakurikuler Kelas X"
      >
        <rect
          x="6"
          y="6"
          width="748"
          height="508"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Top Table: Ekstrakurikuler & Jumlah Siswa */}
        <g transform="translate(185, 22)">
          <line x1="0" y1="0" x2="390" y2="0" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="3" />
          <text x="15" y="28" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
            Ekstrakurikuler
          </text>
          <text x="300" y="28" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[20px]">
            Jumlah Siswa
          </text>
          <line x1="0" y1="40" x2="390" y2="40" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="2" />

          {[
            ['Tari', '48'],
            ['PMR', '30'],
            ['Paskibraka', '37'],
            ['Olahraga', '?'],
          ].map(([eks, jml], idx) => (
            <g key={eks} transform={`translate(0, ${68 + idx * 30})`}>
              <text x="15" y="0" className="fill-slate-800 dark:fill-slate-200 font-semibold text-[19px]">
                {eks}
              </text>
              <text x="300" y="0" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-bold text-[19px]">
                {jml}
              </text>
            </g>
          ))}
          <line x1="0" y1="172" x2="390" y2="172" className="stroke-slate-900 dark:stroke-slate-100" strokeWidth="3" />
        </g>

        <defs>
          <marker id="arrow-s14" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Bottom Pie Chart */}
        {/* Futsal: 0..126 deg */}
        <path d={arcPath(0, 126)} fill="#1d4ed8" stroke="#ffffff" strokeWidth="2.5" />
        {/* Basket: 126..270 deg */}
        <path d={arcPath(126, 270)} fill="#ea8c4c" stroke="#ffffff" strokeWidth="2.5" />
        {/* Voli: 270..324 deg */}
        <path d={arcPath(270, 324)} fill="#9ca3af" stroke="#ffffff" strokeWidth="2.5" />
        {/* Hand Ball: 324..360 deg */}
        <path d={arcPath(324, 360)} fill="#eab308" stroke="#ffffff" strokeWidth="2.5" />

        {/* Percentages inside Pie */}
        <text x={polar(63, 62)[0]} y={polar(63, 62)[1] + 6} textAnchor="middle" fill="#ffffff" className="font-black text-[18px]">
          35%
        </text>
        <text x={polar(198, 62)[0]} y={polar(198, 62)[1] + 6} textAnchor="middle" fill="#0f172a" className="font-black text-[18px]">
          40%
        </text>
        <text x={polar(342, 68)[0]} y={polar(342, 68)[1] + 6} textAnchor="middle" fill="#0f172a" className="font-black text-[17px]">
          10%
        </text>

        {/* Pointer Arrows & Labels */}
        {/* Futsal */}
        <polyline
          points="492,338 545,338 545,310 585,310"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2"
          markerEnd="url(#arrow-s14)"
        />
        <text x="596" y="316" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          Futsal
        </text>

        {/* Basket */}
        <polyline
          points="335,456 275,456 275,486 225,486"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2"
          markerEnd="url(#arrow-s14)"
        />
        <text x="215" y="492" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          Basket
        </text>

        {/* Voli */}
        <polyline
          points="292,335 235,335 235,308 190,308"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2"
          markerEnd="url(#arrow-s14)"
        />
        <text x="180" y="314" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          Voli
        </text>

        {/* Hand Ball */}
        <polyline
          points="356,264 316,264 316,238 272,238"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2"
          markerEnd="url(#arrow-s14)"
        />
        <text x="262" y="244" textAnchor="end" className="italic fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          Hand Ball
        </text>
      </svg>
    </div>
  );
};
