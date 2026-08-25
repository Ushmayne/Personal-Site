import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { CHECKBOX_CENTER_X, TIMING, rowCenterY } from "./constants";

export const Cursor: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd, TIMING.cursorFadeStart, TIMING.cursorFadeEnd],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const x = interpolate(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd],
    [CHECKBOX_CENTER_X - 90, CHECKBOX_CENTER_X],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    },
  );

  const y = interpolate(
    frame,
    [TIMING.cursorSlideStart, TIMING.moveStart, TIMING.moveEnd],
    [rowCenterY(0), rowCenterY(0), rowCenterY(1)],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: [Easing.linear, Easing.bezier(0.65, 0, 0.35, 1)],
    },
  );

  const click1 = interpolate(frame, [TIMING.click1, TIMING.click1 + 4, TIMING.click1 + 8], [1, 0.72, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const click2 = interpolate(frame, [TIMING.click2, TIMING.click2 + 4, TIMING.click2 + 8], [1, 0.72, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Interactive.Div
      name="Cursor"
      style={{
        position: "absolute",
        left: x - 6,
        top: y - 4,
        opacity,
        scale: click1 * click2,
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
    </Interactive.Div>
  );
};
