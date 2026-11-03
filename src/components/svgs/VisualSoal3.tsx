import React from 'react';

export const VisualSoal3: React.FC = () => {
  const rings = [95, 145, 195, 245, 295, 345];
  const lines = [125, 165, 205, 245, 285, 325, 365];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 680 430"
        className="w-full max-h-[78vh] h-auto select-none"
        role="img"
        aria-label="Rekapitulasi Produksi Kaus Kaki"
      >
        {/* Purple Hardcover Back Shadow */}
        <rect x="98" y="48" width="510" height="350" rx="18" fill="#581c87" />

        {/* Yellow Notepad Page */}
        <rect
          x="84"
          y="34"
          width="506"
          height="348"
          rx="14"
          fill="#fef9c3"
          stroke="#ca8a04"
          strokeWidth="3"
        />

        {/* Ruled horizontal lines */}
        {lines.map((y, idx) => (
          <line
            key={idx}
            x1="120"
            y1={y}
            x2="560"
            y2={y}
            stroke="#fde047"
            strokeWidth="2.5"
          />
        ))}

        {/* Spiral Binder Rings */}
        {rings.map((y, idx) => (
          <g key={idx}>
            <circle cx="112" cy={y} r="7" fill="#78350f" />
            <rect x="56" y={y - 4} width="56" height="8" rx="4" fill="#dc2626" />
          </g>
        ))}

        {/* Notepad Title */}
        <text x="345" y="76" textAnchor="middle" fill="#1e293b" className="font-black text-[25px]">
          Rekapitulasi Produksi
        </text>
        <text x="345" y="106" textAnchor="middle" fill="#1e293b" className="font-black text-[25px]">
          Kaus Kaki
        </text>

        {/* Main Content */}
        <text x="155" y="158" fill="#0f172a" className="font-extrabold text-[23px]">
          1. Triwulan 1: 180 pasang
        </text>
        <text x="155" y="198" fill="#0f172a" className="font-extrabold text-[23px]">
          2. Triwulan 1 &amp; Triwulan 2
        </text>
        <text x="182" y="238" fill="#0f172a" className="font-extrabold text-[23px]">
          : 450 pasang
        </text>

        {/* Footnotes */}
        <text x="155" y="316" fill="#334155" className="italic font-bold text-[19px]">
          *triwulan 1 : Jan, Feb, Mar
        </text>
        <text x="155" y="352" fill="#334155" className="italic font-bold text-[19px]">
          *triwulan 2 : Apr, Mei, Jun
        </text>
      </svg>
    </div>
  );
};
