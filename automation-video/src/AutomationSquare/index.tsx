import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { monoFont } from "../fonts";
import { TaskRow } from "./TaskRow";
import { AutomateButton } from "./AutomateButton";
import { MouseCursor } from "../shared/MouseCursor";
import { Badge } from "../shared/Badge";
import {
  CARD_HEIGHT,
  CARD_LEFT,
  CARD_TOP,
  CARD_WIDTH,
  CHECKBOX_CENTER_X,
  TASKS,
  TIMING,
  rowCenterY,
} from "./constants";

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

export const AutomationSquare: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = fadeClamp(frame, [0, 12, TIMING.holdEnd, TIMING.fadeOutEnd], [0, 1, 1, 0]);

  const manualKickerOpacity = fadeClamp(
    frame,
    [0, TIMING.headerShiftStart, TIMING.headerOutEnd],
    [1, 1, 0],
  );
  const autoKickerOpacity = fadeClamp(frame, [TIMING.headerInStart, TIMING.headerShiftEnd], [0, 1]);

  const manualMinutes = Math.round(fadeClamp(frame, [11, 84], [0, 45]));
  const manualTimerOpacity = fadeClamp(
    frame,
    [11, 17, TIMING.headerShiftStart, TIMING.headerOutEnd],
    [0, 1, 1, 0],
  );

  const autoSeconds = fadeClamp(frame, [TIMING.buttonPress, TIMING.buttonPress + 36], [0, 1.2]).toFixed(1);
  const autoTimerOpacity = fadeClamp(
    frame,
    [TIMING.headerInStart, TIMING.headerInStart + 6],
    [0, 1],
  );

  const progressInput = [0, 36, 42, 64, 70, 95, 99, 104, 109];
  const progressOutput = [0, 0, 33, 33, 66, 66, 100, 100, 100];
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

  const cursorOpacity = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd, TIMING.cursorFadeStart, TIMING.cursorFadeEnd],
    [0, 1, 1, 0],
  );
  const cursorX = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd],
    [CHECKBOX_CENTER_X - 80, CHECKBOX_CENTER_X],
    Easing.out(Easing.cubic),
  );
  const cursorY = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.moveStart, TIMING.moveEnd],
    [rowCenterY(0), rowCenterY(0), rowCenterY(1)],
    Easing.inOut(Easing.cubic),
  );
  const click1 = fadeClamp(frame, [TIMING.click1, TIMING.click1 + 4, TIMING.click1 + 8], [1, 0.72, 1]);
  const click2 = fadeClamp(frame, [TIMING.click2, TIMING.click2 + 4, TIMING.click2 + 8], [1, 0.72, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.ink }}>
      <Interactive.Div name="Scene" style={{ opacity: sceneOpacity, width: "100%", height: "100%" }}>
        <div style={{ position: "absolute", top: 48, left: 0, right: 0, textAlign: "center" }}>
          <Interactive.Div
            name="Manual kicker"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              opacity: manualKickerOpacity,
              fontFamily: monoFont,
              fontSize: 26,
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
              fontSize: 26,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: theme.spark,
            }}
          >
            Automated workflow
          </Interactive.Div>
        </div>

        <div
          style={{
            position: "absolute",
            top: CARD_TOP - 70,
            left: CARD_LEFT,
            width: CARD_WIDTH,
            height: 36,
            textAlign: "right",
            fontFamily: monoFont,
            fontSize: 26,
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

        <div
          style={{
            position: "absolute",
            top: CARD_TOP - 28,
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
            padding: 40,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {TASKS.map((task, i) => (
            <TaskRow key={task.label} index={i} label={task.label} checkFrame={task.checkFrame} auto={task.auto} />
          ))}
        </Interactive.Div>

        <MouseCursor x={cursorX} y={cursorY} opacity={cursorOpacity} scale={click1 * click2} />
        <AutomateButton />

        <div
          style={{
            position: "absolute",
            top: CARD_TOP + CARD_HEIGHT + 40,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <Badge opacity={badgeOpacity} scale={badgeScale} label="Automated" accent={theme.spark} />
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
