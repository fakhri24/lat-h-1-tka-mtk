import React from 'react';

export const VisualSoal17: React.FC = () => {
  // Kardus A: 10 packs (6 Balado red, 4 Barbeku yellow)
  // Row 1: 5 red (indices 0..4)
  // Row 2: 1 red (index 0) + 4 yellow (indices 1..4)
  const kardusA = [
    ['balado', 'balado', 'balado', 'balado', 'balado'],
    ['balado', 'barbeku', 'barbeku', 'barbeku', 'barbeku'],
  ];

  // Kardus B: 8 packs (5 Balado red, 3 Barbeku yellow)
  // Row 1: 5 red
  // Row 2: 3 yellow (centered)
  const kardusBTop = ['balado', 'balado', 'balado', 'balado', 'balado'];
  const kardusBBottom = ['barbeku', 'barbeku', 'barbeku'];

  const renderPack = (x: number, y: number, flavor: string, key: string) => {
    const isBalado = flavor === 'balado';
    const bg = isBalado ? '#b91c1c' : '#eab308';
    const border = isBalado ? '#7f1d1d' : '#a16207';
    const inner = isBalado ? '#f59e0b' : '#fde047';

    return (
      <g key={key} transform={`translate(${x}, ${y})`}>
        <rect x="0" y="0" width="60" height="78" rx="6" fill={bg} stroke={border} strokeWidth="2.5" />
        <text x="30" y="20" textAnchor="middle" fill="#ffffff" className="font-black text-[9px] tracking-tight">
          KRIPIK
        </text>
        <text x="30" y="31" textAnchor="middle" fill="#ffffff" className="font-black text-[8.5px] tracking-tight">
          KENTANG
        </text>
        <rect x="9" y="38" width="42" height="30" rx="4" fill={inner} stroke={border} strokeWidth="1.5" />
      </g>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 880 460"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Komposisi Kemasan Keripik Kentang Rasa Balado dan Barbeku di Kardus A dan Kardus B"
      >
        <rect
          x="6"
          y="6"
          width="868"
          height="448"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        <defs>
          <marker id="arrow-s17" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Top Label: Rasa Balado */}
        <rect x="345" y="22" width="190" height="42" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
        <text x="440" y="50" textAnchor="middle" fill="#991b1b" className="font-black text-[22px]">
          Rasa Balado
        </text>

        {/* Left Box: Kardus A */}
        <text x="215" y="112" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          Kardus A
        </text>
        <rect
          x="32"
          y="126"
          width="366"
          height="204"
          rx="10"
          fill="#fed7aa"
          stroke="#431407"
          strokeWidth="3.5"
        />
        {kardusA.map((row, rIdx) =>
          row.map((flavor, cIdx) =>
            renderPack(49 + cIdx * 68, 140 + rIdx * 94, flavor, `A-${rIdx}-${cIdx}`)
          )
        )}

        {/* Right Box: Kardus B */}
        <text x="665" y="112" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          Kardus B
        </text>
        <rect
          x="482"
          y="126"
          width="366"
          height="204"
          rx="10"
          fill="#fed7aa"
          stroke="#431407"
          strokeWidth="3.5"
        />
        {kardusBTop.map((flavor, cIdx) =>
          renderPack(499 + cIdx * 68, 140, flavor, `B-0-${cIdx}`)
        )}
        {kardusBBottom.map((flavor, cIdx) =>
          renderPack(567 + cIdx * 68, 234, flavor, `B-1-${cIdx}`)
        )}

        {/* Bottom Label: Rasa Barbeku */}
        <rect x="340" y="392" width="200" height="42" rx="10" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
        <text x="440" y="420" textAnchor="middle" fill="#854d0e" className="font-black text-[22px]">
          Rasa Barbeku
        </text>

        {/* Pointer Arrows for Rasa Balado */}
        <line
          x1="315"
          y1="152"
          x2="410"
          y2="68"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-s17)"
        />
        <line
          x1="565"
          y1="152"
          x2="470"
          y2="68"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-s17)"
        />

        {/* Pointer Arrows for Rasa Barbeku */}
        <line
          x1="230"
          y1="295"
          x2="405"
          y2="388"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-s17)"
        />
        <line
          x1="650"
          y1="295"
          x2="475"
          y2="388"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.8"
          markerEnd="url(#arrow-s17)"
        />
      </svg>
    </div>
  );
};
