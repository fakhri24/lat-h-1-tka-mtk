import React from 'react';

export const VisualPaket2Soal22: React.FC = () => {
  // Pie chart sectors around (375, 365), radius R = 104
  // Clockwise from top (0 deg):
  // Pemrograman: 15% (0 to 54 deg)
  // Keamanan Siber: 30% (54 to 162 deg)
  // Desain Grafis: 20% (162 to 234 deg)
  // Digital Marketing: 15% (234 to 288 deg)
  // Animasi: 20% (288 to 360 deg)
  const cx = 375;
  const cy = 365;
  const r = 104;

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

  const tableRows = [
    ['0 – 2', '150'],
    ['2 – 5', '....'],
    ['6 – 10', '60'],
    ['> 10', '....'],
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 750 520"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Tabel Masa Kerja Peserta dan Diagram Lingkaran Bidang Pelatihan Lanjutan"
      >
        <rect
          x="6"
          y="6"
          width="738"
          height="508"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Top Table: Masa Kerja & Banyak Peserta */}
        <g transform="translate(155, 20)">
          <rect
            x="0"
            y="0"
            width="440"
            height="48"
            className="fill-slate-200/80 dark:fill-slate-800"
          />
          {tableRows.map(([masa, jml], idx) => (
            <g key={masa} transform={`translate(0, ${48 + idx * 33})`}>
              <rect
                x="0"
                y="0"
                width="440"
                height="33"
                className={
                  idx === 1
                    ? 'fill-amber-50/80 dark:fill-amber-950/30'
                    : idx % 2 === 1
                    ? 'fill-slate-50 dark:fill-slate-900/50'
                    : 'fill-white dark:fill-slate-900'
                }
              />
              <text
                x="22"
                y="23"
                className="fill-slate-800 dark:fill-slate-200 font-bold text-[17.5px]"
              >
                {masa}
              </text>
              <text
                x="330"
                y="23"
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[17.5px]"
              >
                {jml}
              </text>
              <line
                x1="0"
                y1="33"
                x2="440"
                y2="33"
                className="stroke-slate-400 dark:stroke-slate-700"
                strokeWidth="1.5"
              />
            </g>
          ))}

          {/* Table Outer Border & Column Divider */}
          <rect
            x="0"
            y="0"
            width="440"
            height="180"
            fill="none"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.2"
          />
          <line
            x1="0"
            y1="48"
            x2="440"
            y2="48"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2"
          />
          <line
            x1="220"
            y1="0"
            x2="220"
            y2="180"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2"
          />

          <text
            x="110"
            y="21"
            textAnchor="middle"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[16.5px]"
          >
            Masa kerja
          </text>
          <text
            x="110"
            y="40"
            textAnchor="middle"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[16.5px]"
          >
            (tahun)
          </text>
          <text
            x="330"
            y="21"
            textAnchor="middle"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[16.5px]"
          >
            Banyak peserta
          </text>
          <text
            x="330"
            y="40"
            textAnchor="middle"
            className="fill-slate-900 dark:fill-slate-100 font-black text-[16.5px]"
          >
            (orang)
          </text>
        </g>

        {/* Bottom Pie Chart: Bidang Pelatihan Lanjutan */}
        {/* Pemrograman: 0..54 */}
        <path d={arcPath(0, 54)} fill="#bae6fd" stroke="#0f172a" strokeWidth="2" />
        {/* Keamanan Siber: 54..162 */}
        <path d={arcPath(54, 162)} fill="#7dd3fc" stroke="#0f172a" strokeWidth="2" />
        {/* Desain Grafis: 162..234 */}
        <path d={arcPath(162, 234)} fill="#fde68a" stroke="#0f172a" strokeWidth="2" />
        {/* Digital Marketing: 234..288 */}
        <path d={arcPath(234, 288)} fill="#fca5a5" stroke="#0f172a" strokeWidth="2" />
        {/* Animasi: 288..360 */}
        <path d={arcPath(288, 360)} fill="#bbf7d0" stroke="#0f172a" strokeWidth="2" />

        {/* Percentage Texts inside Sectors */}
        <text x={polar(27, 65)[0]} y={polar(27, 65)[1] + 5} textAnchor="middle" fill="#0f172a" className="font-black text-[17px]">
          15%
        </text>
        <text x={polar(108, 62)[0]} y={polar(108, 62)[1] + 6} textAnchor="middle" fill="#0f172a" className="font-black text-[17.5px]">
          30%
        </text>
        <text x={polar(198, 64)[0]} y={polar(198, 64)[1] + 6} textAnchor="middle" fill="#0f172a" className="font-black text-[17px]">
          20%
        </text>
        <text x={polar(261, 66)[0]} y={polar(261, 66)[1] + 5} textAnchor="middle" fill="#0f172a" className="font-black text-[17px]">
          15%
        </text>
        <text x={polar(324, 64)[0]} y={polar(324, 64)[1] + 6} textAnchor="middle" fill="#0f172a" className="font-black text-[17px]">
          20%
        </text>

        {/* Elbow Pointer Lines & Labels */}
        {/* Pemrograman */}
        <polyline
          points="415,280 415,244 488,244"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2"
        />
        <text x="496" y="250" className="fill-slate-900 dark:fill-slate-100 font-black text-[17.5px]">
          Pemrograman
        </text>

        {/* Keamanan Siber */}
        <polyline
          points="460,400 525,400 525,365"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2"
        />
        <text x="530" y="335" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[17px]">
          Keamanan
        </text>
        <text x="530" y="356" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[17px]">
          Siber
        </text>

        {/* Desain Grafis */}
        <polyline
          points="355,455 355,488 292,488"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2"
        />
        <text x="282" y="476" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[17px]">
          Desain
        </text>
        <text x="282" y="497" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[17px]">
          Grafis
        </text>

        {/* Digital Marketing */}
        <polyline
          points="284,392 212,392 212,364"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2"
        />
        <text x="212" y="334" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 font-black text-[17px]">
          Digital
        </text>
        <text x="212" y="355" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 font-black text-[17px]">
          Marketing
        </text>

        {/* Animasi */}
        <polyline
          points="300,305 225,305 225,278"
          fill="none"
          className="stroke-slate-800 dark:stroke-slate-200"
          strokeWidth="2"
        />
        <text x="225" y="268" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[17.5px]">
          Animasi
        </text>
      </svg>
    </div>
  );
};
