import { theme } from "../theme";

export const MouseCursor: React.FC<{
  x: number;
  y: number;
  opacity: number;
  scale?: number;
}> = ({ x, y, opacity, scale = 1 }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x - 6,
        top: y - 4,
        opacity,
        scale,
        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
      }}
    >
      <svg width={34} height={34} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 2L20 10.5L12.5 12.5L10 20L4 2Z"
          fill={theme.paper}
          stroke={theme.ink}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
