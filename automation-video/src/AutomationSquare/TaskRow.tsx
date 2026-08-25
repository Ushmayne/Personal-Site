import { Easing, Interactive, interpolate, interpolateColors, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { monoFont } from "../fonts";
import { CHECKBOX_SIZE, ROW_HEIGHT } from "./constants";

export const TaskRow: React.FC<{
  index: number;
  label: string;
  checkFrame: number;
  auto: boolean;
}> = ({ index, label, checkFrame, auto }) => {
  const frame = useCurrentFrame();
  const accent = auto ? theme.spark : theme.azure;

  const checked = frame >= checkFrame;

  const checkScale = interpolate(
    frame,
    [checkFrame, checkFrame + 4, checkFrame + 9],
    [0, 1.35, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    },
  );

  const boxColor = interpolateColors(
    frame,
    [checkFrame - 1, checkFrame],
    [theme.panel2, accent],
  );

  const labelOpacity = interpolate(frame, [checkFrame, checkFrame + 14], [1, 0.62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const tagOpacity = interpolate(frame, [checkFrame + 2, checkFrame + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Interactive.Div
      name={`Task ${index + 1}`}
      style={{
        height: ROW_HEIGHT,
        display: "flex",
        alignItems: "center",
        gap: 22,
      }}
    >
      <div
        style={{
          width: CHECKBOX_SIZE,
          height: CHECKBOX_SIZE,
          flex: "none",
          borderRadius: "50%",
          border: `2px solid ${checked ? accent : theme.dim2}`,
          background: theme.panel2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={26}
          height={26}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            scale: checkScale,
            opacity: checked ? 1 : 0,
          }}
        >
          <circle cx="12" cy="12" r="12" fill={boxColor} />
          <path
            d="M7 12.5L10.2 15.7L17 8.5"
            stroke={theme.ink}
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span
        style={{
          fontFamily: monoFont,
          fontSize: 34,
          color: theme.paper,
          opacity: labelOpacity,
          textDecoration: checked ? "line-through" : "none",
          textDecorationColor: theme.dim2,
        }}
      >
        {label}
      </span>

      {auto ? (
        <span
          style={{
            fontFamily: monoFont,
            fontSize: 20,
            letterSpacing: "0.08em",
            color: theme.spark,
            opacity: tagOpacity,
            marginLeft: "auto",
            border: `1px solid ${theme.spark}`,
            borderRadius: 999,
            padding: "4px 12px",
          }}
        >
          AUTO
        </span>
      ) : null}
    </Interactive.Div>
  );
};
