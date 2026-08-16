type ToolProps = { className?: string };

export function Protractor({ className = '' }: ToolProps) {
  const cx = 100;
  const cy = 100;
  const rOuter = 92;
  const rMajorInner = 78;
  const rMinorInner = 84;

  const ticks = [];
  for (let deg = 0; deg <= 180; deg += 5) {
    const isMajor = deg % 30 === 0;
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x1 = cx - cos * rOuter;
    const y1 = cy - sin * rOuter;
    const x2 = cx - cos * (isMajor ? rMajorInner : rMinorInner);
    const y2 = cy - sin * (isMajor ? rMajorInner : rMinorInner);
    ticks.push(<line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />);
  }

  return (
    <svg
      className={className}
      viewBox="0 0 200 110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M8 100 A92 92 0 0 1 192 100" />
      <line x1="8" y1="100" x2="192" y2="100" />
      {ticks}
      <line x1={cx} y1={cy} x2={cx} y2={cy - rOuter} strokeDasharray="2 3" opacity="0.6" />
      <circle cx={cx} cy={cy} r="2.2" fill="currentColor" stroke="none" />
      <text x="8" y="98" className="mono" fontSize="8" stroke="none" fill="currentColor" textAnchor="start">0</text>
      <text x="100" y="24" className="mono" fontSize="8" stroke="none" fill="currentColor" textAnchor="middle">90</text>
      <text x="192" y="98" className="mono" fontSize="8" stroke="none" fill="currentColor" textAnchor="end">180</text>
    </svg>
  );
}

export function DraftingCompass({ className = '' }: ToolProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <line x1="60" y1="4" x2="60" y2="18" />
      <circle cx="60" cy="18" r="6" />
      <line x1="60" y1="18" x2="20" y2="150" />
      <line x1="60" y1="18" x2="100" y2="150" />
      <circle cx="20" cy="150" r="2" fill="currentColor" stroke="none" />
      <path d="M92 130 L100 150 L108 130" />
      <path d="M20 150 A80 80 0 0 1 100 70" strokeDasharray="2 4" opacity="0.6" />
    </svg>
  );
}

export function SetSquare({ className = '' }: ToolProps) {
  const ticks = Array.from({ length: 13 }, (_, i) => {
    const y = 150 - i * 10;
    const len = i % 5 === 0 ? 14 : 8;
    return <line key={i} x1="10" y1={y} x2={10 + len} y2={y} />;
  });

  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M10 150 L10 10 L150 150 Z" />
      <circle cx="30" cy="130" r="10" />
      {ticks}
      <text x="26" y="142" className="mono" fontSize="9" stroke="none" fill="currentColor" textAnchor="middle">45°</text>
    </svg>
  );
}
