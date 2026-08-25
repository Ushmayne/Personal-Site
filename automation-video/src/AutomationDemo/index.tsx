import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { headingFont, monoFont } from "../fonts";
import { TaskRow } from "./TaskRow";
import { Cursor } from "./Cursor";
import { AutomateButton } from "./AutomateButton";
import { CARD_HEIGHT, CARD_LEFT, CARD_TOP, CARD_WIDTH, TASKS, TIMING } from "./constants";

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

export const AutomationDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = fadeClamp(frame, [0, 12, TIMING.holdEnd, TIMING.fadeOutEnd], [0, 1, 1, 0]);

  const manualKickerOpacity = fadeClamp(
    frame,
    [0, TIMING.headerShiftStart, TIMING.headerOutEnd],
    [1, 1, 0],
  );
  const autoKickerOpacity = fadeClamp(
    frame,
    [TIMING.headerInStart, TIMING.headerShiftEnd],
    [0, 1],
  );

  const manualMinutes = Math.round(fadeClamp(frame, [15, 100], [0, 45]));
  const manualTimerOpacity = fadeClamp(
    frame,
    [15, 20, TIMING.headerShiftStart, TIMING.headerOutEnd],
    [0, 1, 1, 0],
  );

  const autoSeconds = fadeClamp(frame, [TIMING.buttonPress, 152], [0, 1.2]).toFixed(1);
  const autoTimerOpacity = fadeClamp(
    frame,
    [TIMING.headerInStart, TIMING.headerInStart + 6],
    [0, 1],
  );

  const progressInput = [0, 48, 54, 78, 84, 122, 128, 133, 139, 144, 150];
  const progressOutput = [0, 0, 20, 20, 40, 40, 60, 60, 80, 80, 100];
  const progress = fadeClamp(frame, progressInput, progressOutput);

  const badgeOpacity = fadeClamp(frame, [TIMING.badgeStart, TIMING.badgeStart + 6], [0, 1]);
  const badgeScale = fadeClamp(
    frame,
    [TIMING.badgeStart, TIMING.badgeBounce, TIMING.badgeSettle],
    [0, 1.15, 1],
    Easing.bezier(0.34, 1.56, 0.64, 1),
  );

  const statOpacity = fadeClamp(frame, [TIMING.statStart, TIMING.statEnd], [0, 1]);
  const statY = fadeClamp(frame, [TIMING.statStart, TIMING.statEnd], [12, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.ink }}>
      <Interactive.Div name="Scene" style={{ opacity: sceneOpacity, width: "100%", height: "100%" }}>
        {/* Kicker label, crossfades from manual to automated */}
        <div style={{ position: "absolute", top: 140, left: 0, right: 0, textAlign: "center" }}>
          <Interactive.Div
            name="Manual kicker"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              opacity: manualKickerOpacity,
              fontFamily: monoFont,
              fontSize: 24,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: theme.dim2,
            }}
          >
            Manual workflow
          </Interactive.Div>
          <Interactive.Div
            name="Automated kicker"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              opacity: autoKickerOpacity,
              fontFamily: monoFont,
              fontSize: 24,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: theme.spark,
            }}
          >
            Automated workflow
          </Interactive.Div>
        </div>

        {/* Timer, top-right of card */}
        <div
          style={{
            position: "absolute",
            top: CARD_TOP - 78,
            left: CARD_LEFT,
            width: CARD_WIDTH,
            height: 36,
            textAlign: "right",
            fontFamily: monoFont,
            fontSize: 24,
          }}
        >
          <Interactive.Div
            name="Manual timer"
            style={{ position: "absolute", right: 0, opacity: manualTimerOpacity, color: theme.dim }}
          >
            {manualMinutes} min elapsed
          </Interactive.Div>
          <Interactive.Div
            name="Automated timer"
            style={{ position: "absolute", right: 0, opacity: autoTimerOpacity, color: theme.spark }}
          >
            {autoSeconds}s elapsed
          </Interactive.Div>
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            top: CARD_TOP - 30,
            left: CARD_LEFT,
            width: CARD_WIDTH,
            height: 6,
            borderRadius: 999,
            background: theme.panel2,
            overflow: "hidden",
          }}
        >
          <Interactive.Div
            name="Progress fill"
            style={{
              height: "100%",
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${theme.azure}, ${theme.spark})`,
            }}
          />
        </div>

        {/* Card with task rows */}
        <Interactive.Div
          name="Task card"
          style={{
            position: "absolute",
            top: CARD_TOP,
            left: CARD_LEFT,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderRadius: 20,
            background: theme.panel,
            border: `1px solid ${theme.line}`,
            boxSizing: "border-box",
            padding: 44,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {TASKS.map((task, i) => (
            <TaskRow key={task.label} index={i} label={task.label} checkFrame={task.checkFrame} auto={task.auto} />
          ))}
        </Interactive.Div>

        <Cursor />
        <AutomateButton />

        {/* Result badge + stat comparison, below the card */}
        <div
          style={{
            position: "absolute",
            top: CARD_TOP + CARD_HEIGHT + 46,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
          }}
        >
          <Interactive.Div
            name="Automated badge"
            style={{
              opacity: badgeOpacity,
              scale: badgeScale,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 34px",
              borderRadius: 999,
              background: `color-mix(in srgb, ${theme.spark} 16%, ${theme.panel})`,
              border: `1px solid ${theme.spark}`,
            }}
          >
            <span style={{ fontSize: 26, color: theme.spark }}>✓</span>
            <span
              style={{
                fontFamily: headingFont,
                fontSize: 30,
                fontWeight: 600,
                color: theme.paper,
              }}
            >
              Automated
            </span>
          </Interactive.Div>

          <Interactive.Div
            name="Stat comparison"
            style={{
              opacity: statOpacity,
              translate: `0px ${statY}px`,
              fontFamily: monoFont,
              fontSize: 26,
              color: theme.dim,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span>45 min</span>
            <span style={{ color: theme.dim2 }}>→</span>
            <span style={{ color: theme.spark, fontWeight: 600 }}>1.2s</span>
          </Interactive.Div>
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
