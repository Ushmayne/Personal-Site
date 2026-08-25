import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { monoFont } from "../fonts";
import { CARD_HEIGHT, CARD_LEFT, CARD_TOP, CARD_WIDTH, TIMING } from "./constants";

export const AutomateButton: React.FC = () => {
  const frame = useCurrentFrame();

  const backdropOpacity = interpolate(
    frame,
    [TIMING.buttonAppearStart, TIMING.buttonHoldStart, TIMING.buttonPress + 4, TIMING.buttonFadeEnd],
    [0, 0.88, 0.88, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const buttonOpacity = interpolate(
    frame,
    [TIMING.buttonAppearStart, TIMING.buttonHoldStart, TIMING.buttonPress + 6, TIMING.buttonFadeEnd],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const buttonScale = interpolate(
    frame,
    [TIMING.buttonAppearStart, TIMING.buttonHoldStart, TIMING.buttonPress, TIMING.buttonPress + 5],
    [0.8, 1, 1, 0.88],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.34, 1.56, 0.64, 1),
    },
  );

  const ringOpacity = interpolate(
    frame,
    [TIMING.buttonPress, TIMING.buttonPress + 1, TIMING.buttonFadeEnd],
    [0, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const ringScale = interpolate(frame, [TIMING.buttonPress, TIMING.buttonFadeEnd], [0.15, 3.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: CARD_TOP,
          left: CARD_LEFT,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          borderRadius: 20,
          background: theme.ink,
          opacity: backdropOpacity,
        }}
      />
      <Interactive.Div
        name="Automate button"
        style={{
          position: "absolute",
          top: CARD_TOP + CARD_HEIGHT / 2,
          left: CARD_LEFT + CARD_WIDTH / 2,
          translate: "-50% -50%",
          scale: buttonScale,
          opacity: buttonOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 90,
            height: 90,
            borderRadius: "50%",
            border: `2px solid ${theme.spark}`,
            opacity: ringOpacity,
            scale: ringScale,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "20px 40px",
            borderRadius: 999,
            background: theme.spark,
            boxShadow: `0 0 40px 4px color-mix(in srgb, ${theme.spark} 45%, transparent)`,
          }}
        >
          <span style={{ fontSize: 26 }}>⚡</span>
          <span
            style={{
              fontFamily: monoFont,
              fontWeight: 600,
              fontSize: 26,
              letterSpacing: "0.04em",
              color: theme.ink,
            }}
          >
            Run automation
          </span>
        </div>
      </Interactive.Div>
    </>
  );
};
