import { theme } from "../theme";
import { headingFont } from "../fonts";

export const Badge: React.FC<{
  opacity: number;
  scale: number;
  label: string;
  accent: string;
  icon?: string;
}> = ({ opacity, scale, label, accent, icon = "✓" }) => {
  return (
    <div
      style={{
        opacity,
        scale,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "18px 38px",
        borderRadius: 999,
        background: `color-mix(in srgb, ${accent} 16%, ${theme.panel})`,
        border: `1px solid ${accent}`,
      }}
    >
      <span style={{ fontSize: 28, color: accent }}>{icon}</span>
      <span
        style={{
          fontFamily: headingFont,
          fontSize: 34,
          fontWeight: 600,
          color: theme.paper,
        }}
      >
        {label}
      </span>
    </div>
  );
};
