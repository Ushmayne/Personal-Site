import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { monoFont } from "../fonts";
import { Badge } from "../shared/Badge";
import { LINES, PANEL_HEIGHT, PANEL_LEFT, PANEL_TOP, PANEL_WIDTH, TIMING } from "./constants";

const fadeClamp = (
  frame: number,
  input: number[],
  output: number[],
  easing?: (t: number) => number,
) =>
  interpolate(frame, input, output, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing,
  });

export const AnythingDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = fadeClamp(frame, [0, TIMING.introEnd, TIMING.holdEnd, TIMING.fadeOutEnd], [0, 1, 1, 0]);
  const kickerOpacity = fadeClamp(frame, [0, 12], [0, 1]);

  const badgeOpacity = fadeClamp(frame, [...TIMING.badgeIn], [0, 1]);
  const badgeScale = fadeClamp(
    frame,
    [TIMING.badgeIn[0], TIMING.badgeIn[0] + 8, TIMING.badgeIn[1]],
    [0, 1.15, 1],
    Easing.bezier(0.34, 1.56, 0.64, 1),
  );
  const taglineOpacity = fadeClamp(frame, [...TIMING.taglineIn], [0, 1]);

  let activeLine = 0;
  for (let i = 0; i < LINES.length; i++) {
    if (frame >= LINES[i].reveal[0]) activeLine = i;
  }
  const blinkOn = Math.floor(Math.max(frame - TIMING.cursorBlinkStart, 0) / 15) % 2 === 0;
  const caretOpacity = frame < TIMING.cursorBlinkStart ? 1 : blinkOn ? 1 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.ink }}>
      <Interactive.Div name="Scene" style={{ opacity: sceneOpacity, width: "100%", height: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 0,
            right: 0,
            textAlign: "center",
            opacity: kickerOpacity,
            fontFamily: monoFont,
            fontSize: 26,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme.dim2,
          }}
        >
          Whatever you need
        </div>

        <Interactive.Div
          name="Editor panel"
          style={{
            position: "absolute",
            top: PANEL_TOP,
            left: PANEL_LEFT,
            width: PANEL_WIDTH,
            height: PANEL_HEIGHT,
            borderRadius: 18,
            background: theme.panel,
            border: `1px solid ${theme.line}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 46,
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "0 20px",
              borderBottom: `1px solid ${theme.lineSoft}`,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: theme.dim2 }} />
            ))}
            <div style={{ marginLeft: 16, fontFamily: monoFont, fontSize: 16, color: theme.dim2 }}>Solve.java</div>
          </div>

          <div style={{ padding: "34px 40px", fontFamily: monoFont, fontSize: 32, lineHeight: "50px" }}>
            {LINES.map((line, i) => {
              const revealPct = fadeClamp(frame, [...line.reveal], [0, 100]);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", paddingLeft: line.indent * 38 }}>
                  <span
                    style={{
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      color: theme.paper,
                      clipPath: `inset(0 ${100 - revealPct}% 0 0)`,
                    }}
                  >
                    {line.text}
                  </span>
                  {activeLine === i ? (
                    <span
                      style={{
                        width: 4,
                        height: 32,
                        marginLeft: 5,
                        background: theme.spark,
                        opacity: caretOpacity,
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </Interactive.Div>

        <div
          style={{
            position: "absolute",
            top: PANEL_TOP + PANEL_HEIGHT + 46,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Badge opacity={badgeOpacity} scale={badgeScale} label="Shipped" accent={theme.spark} icon="✓" />
          <div style={{ opacity: taglineOpacity, fontFamily: monoFont, fontSize: 24, color: theme.dim }}>
            Any stack. Any problem.
          </div>
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
