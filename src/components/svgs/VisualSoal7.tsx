import React from 'react';

export const VisualSoal7: React.FC = () => {
  // Wing geometry diagram:
  // A(390, 290), B(640, 290) -> AB = 25 cm (250px)
  // C(790, 290) -> BC = 15 cm (150px)
  // F(390, 146), E(640, 146) -> AF = BE = 12 cm (144px)
  // D(790, 242) -> CD = 4 cm (48px), P(640, 242)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 900 410"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Pesawat Luncur Kayu Balsa dan Kerangka Bagian Sayap"
      >
        <rect
          x="6"
          y="6"
          width="888"
          height="398"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Left: HD Model Glider Photo */}
        <text x="155" y="54" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]">
          Pesawat Luncur
        </text>
        <clipPath id="glider-clip">
          <rect x="35" y="70" width="240" height="240" rx="14" />
        </clipPath>
        <g clipPath="url(#glider-clip)">
          <image
            href={`${import.meta.env.BASE_URL}images/soal-7-glider.jpg`}
            x="35"
            y="70"
            width="240"
            height="240"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
        <rect
          x="35"
          y="70"
          width="240"
          height="240"
          rx="14"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-400"
          strokeWidth="2.5"
        />
        <text x="155" y="334" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 italic font-semibold text-[14px]">
          Sumber: Model Glider Balsa
        </text>

        {/* Red Arrow */}
        <polygon points="295,176 322,176 322,160 348,190 322,220 322,204 295,204" fill="#b91c1c" />

        {/* Right: Technical Wing Frame Diagram */}
        <text x="605" y="72" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          Kerangka Bagian Sayap
        </text>

        {/* Wing Shaded Polygon A-B-C-D-E-F */}
        <polygon
          points="410,295 650,295 795,295 795,245 650,145 410,145"
          fill="#cbd5e1"
          className="dark:fill-slate-700"
          stroke="#0f172a"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Vertical rib BE */}
        <line x1="650" y1="145" x2="650" y2="295" stroke="#0f172a" strokeWidth="3.5" />

        {/* Dashed horizontal line PD */}
        <line
          x1="650"
          y1="245"
          x2="795"
          y2="245"
          stroke="#334155"
          strokeWidth="2.5"
          strokeDasharray="6 5"
        />

        {/* Vertex Labels */}
        <text x="410" y="324" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          A
        </text>
        <text x="650" y="324" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          B
        </text>
        <text x="795" y="324" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          C
        </text>
        <text x="815" y="250" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          D
        </text>
        <text x="650" y="132" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          E
        </text>
        <text x="410" y="132" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          F
        </text>
        <text x="633" y="251" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[19px]">
          P
        </text>

        {/* Dimension Labels */}
        <text x="396" y="225" textAnchor="end" className="fill-brand-700 dark:fill-sky-400 font-black text-[20px]">
          12 cm
        </text>
        <text x="530" y="324" textAnchor="middle" className="fill-brand-700 dark:fill-sky-400 font-black text-[20px]">
          25 cm
        </text>
        <text x="722" y="324" textAnchor="middle" className="fill-brand-700 dark:fill-sky-400 font-black text-[20px]">
          15 cm
        </text>
        <text x="812" y="280" className="fill-brand-700 dark:fill-sky-400 font-black text-[20px]">
          4 cm
        </text>
      </svg>
    </div>
  );
};
