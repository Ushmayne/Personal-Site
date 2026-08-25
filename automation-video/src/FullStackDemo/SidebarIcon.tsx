import { theme } from "../theme";

type IconKind = "home" | "calendar" | "pill" | "notes";

export const SidebarIcon: React.FC<{ kind: IconKind; active: boolean }> = ({ kind, active }) => {
  const color = active ? theme.spark : theme.dim2;
  const common = {
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  return (
    <svg width={22} height={22} viewBox="0 0 24 24">
      {kind === "home" && (
        <>
          <path d="M4 11.5L12 4l8 7.5" {...common} />
          <path d="M6 10v8.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" {...common} />
        </>
      )}
      {kind === "calendar" && (
        <>
          <rect x={4} y={5} width={16} height={15} rx={2} {...common} />
          <path d="M4 9.5h16" {...common} />
          <path d="M8 3v3M16 3v3" {...common} />
          <circle cx={9} cy={14} r={1.4} fill={color} stroke="none" />
        </>
      )}
      {kind === "pill" && (
        <>
          <rect x={3.5} y={8.5} width={17} height={7} rx={3.5} transform="rotate(-40 12 12)" {...common} />
          <line x1={8.6} y1={11.2} x2={15.4} y2={12.8} stroke={color} strokeWidth={1.8} />
        </>
      )}
      {kind === "notes" && <path d="M6 5h12M6 10.5h12M6 16h8" {...common} />}
    </svg>
  );
};
