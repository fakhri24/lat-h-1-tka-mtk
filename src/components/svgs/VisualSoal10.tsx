import React from 'react';

export const VisualSoal10: React.FC = () => {
  // 3D Isometric Aquarium
  // Front face: Bottom-Left (180, 360), Bottom-Right (480, 360), Top-Right (480, 170), Top-Left (180, 170)
  // Back face shifted by (+95, -65):
  // Back-Bottom-Left (275, 295), Back-Bottom-Right (575, 295), Back-Top-Right (575, 105), Back-Top-Left (275, 105)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 760 460"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Akuarium Berbentuk Balok 150 cm x 80 cm x 130 cm dengan Selang Gelembung Oksigen Diagonal"
      >
        <rect
          x="6"
          y="6"
          width="748"
          height="448"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        <defs>
          <marker id="arrow-s10" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Top Lamp Hood */}
        <rect x="305" y="75" width="160" height="30" rx="4" fill="#1e293b" />

        {/* Back Water Fill */}
        <polygon points="180,170 480,170 575,105 275,105" fill="#38bdf8" fillOpacity="0.65" />
        <polygon points="180,360 480,360 480,170 180,170" fill="#7dd3fc" fillOpacity="0.45" />
        <polygon points="480,360 575,295 575,105 480,170" fill="#38bdf8" fillOpacity="0.55" />

        {/* Sandy Bottom Base */}
        <polygon
          points="180,360 480,360 575,295 275,295"
          fill="#94a3b8"
          stroke="#475569"
          strokeWidth="2"
        />

        {/* Hidden Back Edges */}
        <line x1="275" y1="105" x2="275" y2="295" stroke="#475569" strokeWidth="2" strokeDasharray="5 5" />
        <line x1="275" y1="295" x2="180" y2="360" stroke="#475569" strokeWidth="2" />
        <line x1="275" y1="295" x2="575" y2="295" stroke="#475569" strokeWidth="2" />

        {/* Diagonal Oxygen Bubble Tube across Bottom (from Front-Left 180,360 to Back-Right 575,295) */}
        <line
          x1="186"
          y1="356"
          x2="569"
          y2="296"
          stroke="#ffffff"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <line
          x1="186"
          y1="356"
          x2="569"
          y2="296"
          stroke="#0284c7"
          strokeWidth="3.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />

        {/* Air Bubbles Rising Along the Diagonal */}
        {[
          [240, 330],
          [285, 315],
          [340, 310],
          [395, 295],
          [450, 290],
          [505, 275],
          [535, 260],
        ].map(([bx, by], i) => (
          <circle key={i} cx={bx} cy={by} r="4.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
        ))}

        {/* Swimming Orange Fish */}
        {[
          [255, 255],
          [365, 230],
          [450, 265],
        ].map(([fx, fy], idx) => (
          <g key={idx} transform={`translate(${fx}, ${fy})`}>
            <ellipse cx="0" cy="0" rx="14" ry="7.5" fill="#f97316" stroke="#c2410c" strokeWidth="1.5" />
            <polygon points="-12,0 -22,-7 -22,7" fill="#ea580c" />
            <circle cx="7" cy="-2" r="1.8" fill="#0f172a" />
          </g>
        ))}

        {/* Outer Cuboid Wireframe */}
        <polygon
          points="180,170 480,170 575,105 275,105"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect
          x="180"
          y="170"
          width="300"
          height="190"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polygon
          points="480,360 575,295 575,105 480,170"
          fill="none"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Dimension Arrows & Labels */}
        {/* Length: 150 cm */}
        <line
          x1="184"
          y1="390"
          x2="476"
          y2="390"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerStart="url(#arrow-s10)"
          markerEnd="url(#arrow-s10)"
        />
        <text x="330" y="422" textAnchor="middle" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          150 cm
        </text>

        {/* Width: 80 cm */}
        <line
          x1="158"
          y1="156"
          x2="250"
          y2="93"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerStart="url(#arrow-s10)"
          markerEnd="url(#arrow-s10)"
        />
        <text x="180" y="114" textAnchor="end" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          80 cm
        </text>

        {/* Height: 130 cm */}
        <line
          x1="604"
          y1="108"
          x2="604"
          y2="292"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="2.5"
          markerStart="url(#arrow-s10)"
          markerEnd="url(#arrow-s10)"
        />
        <text x="622" y="208" className="fill-slate-900 dark:fill-slate-100 font-black text-[22px]">
          130 cm
        </text>
      </svg>
    </div>
  );
};
