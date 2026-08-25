import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { headingFont, monoFont } from "../fonts";
import { Badge } from "../shared/Badge";
import { MouseCursor } from "../shared/MouseCursor";
import { SidebarIcon } from "./SidebarIcon";
import { AppointmentRow } from "./AppointmentRow";
import {
  APPOINTMENTS,
  APPOINTMENTS_INDEX,
  BARS,
  CONTENT_LEFT,
  CONTENT_WIDTH,
  HOME_INDEX,
  SIDEBAR_CENTER_X,
  SIDEBAR_ITEMS,
  SIDEBAR_WIDTH,
  STATS,
  TIMING,
  sidebarIconCenterY,
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

export const FullStackDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = fadeClamp(frame, [0, TIMING.introEnd, TIMING.holdEnd, TIMING.fadeOutEnd], [0, 1, 1, 0]);
  const kickerOpacity = fadeClamp(frame, [0, 12], [0, 1]);

  const sidebarX = fadeClamp(frame, [...TIMING.sidebarIn], [-SIDEBAR_WIDTH, 0], Easing.out(Easing.cubic));
  const sidebarOpacity = fadeClamp(frame, [...TIMING.sidebarIn], [0, 1]);
  const activeIndex = frame < TIMING.cursorClick ? HOME_INDEX : APPOINTMENTS_INDEX;

  const headerOpacity = fadeClamp(frame, [...TIMING.headerIn], [0, 1]);
  const headerY = fadeClamp(frame, [...TIMING.headerIn], [10, 0], Easing.out(Easing.cubic));

  // dashboard ("home") page content fading/sliding out after the click
  const dashboardOpacity = fadeClamp(frame, [TIMING.dashboardOutStart, TIMING.dashboardOutEnd], [1, 0]);
  const dashboardY = fadeClamp(frame, [TIMING.dashboardOutStart, TIMING.dashboardOutEnd], [0, -16], Easing.in(Easing.cubic));

  // appointments page content fading/sliding in
  const scheduleOpacity = fadeClamp(frame, [TIMING.scheduleInStart, TIMING.scheduleInEnd], [0, 1]);
  const scheduleY = fadeClamp(frame, [TIMING.scheduleInStart, TIMING.scheduleInEnd], [16, 0], Easing.out(Easing.cubic));

  // cursor slides from the dashboard chart down to the "Appointments" icon
  const cursorOpacity = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideStart + 6, TIMING.cursorFadeStart, TIMING.cursorFadeEnd],
    [0, 1, 1, 0],
  );
  const cursorTargetY = sidebarIconCenterY(APPOINTMENTS_INDEX);
  const cursorX = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd],
    [CONTENT_LEFT + 260, SIDEBAR_CENTER_X],
    Easing.bezier(0.16, 1, 0.3, 1),
  );
  const cursorY = fadeClamp(
    frame,
    [TIMING.cursorSlideStart, TIMING.cursorSlideEnd],
    [420, cursorTargetY],
    Easing.bezier(0.16, 1, 0.3, 1),
  );
  const cursorClickScale = fadeClamp(
    frame,
    [TIMING.cursorClick, TIMING.cursorClick + 4, TIMING.cursorClick + 8],
    [1, 0.72, 1],
  );

  // header title swaps once, right as the pages cross-fade, with a quick
  // opacity dip instead of two overlapping text nodes fighting for layout
  const titleSwapFrame = Math.round((TIMING.dashboardOutStart + TIMING.scheduleInEnd) / 2);
  const titleOpacity = fadeClamp(
    frame,
    [titleSwapFrame - 10, titleSwapFrame, titleSwapFrame + 10],
    [1, 0.1, 1],
  );
  const titleText = frame < titleSwapFrame ? "Care dashboard" : "Appointments";

  const badgeOpacity = fadeClamp(frame, [...TIMING.badgeIn], [0, 1]);
  const badgeScale = fadeClamp(
    frame,
    [TIMING.badgeIn[0], TIMING.badgeIn[0] + 8, TIMING.badgeIn[1]],
    [0, 1.15, 1],
    Easing.bezier(0.34, 1.56, 0.64, 1),
  );

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
          Full stack apps &amp; tools
        </div>

        <Interactive.Div
          name="Sidebar"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: SIDEBAR_WIDTH,
            height: "100%",
            background: theme.panel,
            borderRight: `1px solid ${theme.line}`,
            opacity: sidebarOpacity,
            translate: `${sidebarX}px 0px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            paddingTop: 170,
          }}
        >
          {SIDEBAR_ITEMS.map((item, i) => (
            <SidebarIcon key={item.kind} kind={item.kind} active={i === activeIndex} />
          ))}
        </Interactive.Div>

        <MouseCursor x={cursorX} y={cursorY} opacity={cursorOpacity} scale={cursorClickScale} />

        <div
          style={{
            position: "absolute",
            top: 100,
            left: CONTENT_LEFT,
            width: CONTENT_WIDTH,
            opacity: headerOpacity,
            translate: `0px ${headerY}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: headingFont,
              fontSize: 36,
              fontWeight: 600,
              color: theme.paper,
              opacity: titleOpacity,
            }}
          >
            {titleText}
          </span>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.azure}, ${theme.spark})`,
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 170,
            left: CONTENT_LEFT,
            width: CONTENT_WIDTH,
            opacity: dashboardOpacity,
            translate: `0px ${dashboardY}px`,
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            {STATS.map((stat, i) => {
              const start = TIMING.statsStart + i * TIMING.statStagger;
              const opacity = fadeClamp(frame, [start, start + TIMING.statDuration], [0, 1]);
              const y = fadeClamp(frame, [start, start + TIMING.statDuration], [16, 0], Easing.out(Easing.cubic));
              const value = Math.round(fadeClamp(frame, [start, start + TIMING.statDuration], [0, stat.value]));
              return (
                <div
                  key={stat.label}
                  style={{
                    flex: 1,
                    height: 128,
                    borderRadius: 12,
                    border: `1px solid ${theme.lineSoft}`,
                    background: theme.panel2,
                    opacity,
                    translate: `0px ${y}px`,
                    padding: 20,
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ fontFamily: monoFont, fontSize: 17, color: theme.dim, marginBottom: 12 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontFamily: headingFont, fontSize: 38, fontWeight: 600, color: theme.paper }}>
                    {value}
                    {stat.suffix}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 30,
              height: 230,
              display: "flex",
              alignItems: "flex-end",
              gap: 20,
              borderBottom: `1px solid ${theme.lineSoft}`,
            }}
          >
            {BARS.map((height, i) => {
              const start = TIMING.barsStart + i * TIMING.barStagger;
              const barHeight = fadeClamp(frame, [start, start + TIMING.barDuration], [0, height], Easing.out(Easing.cubic));
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${barHeight}%`,
                    borderRadius: "6px 6px 0 0",
                    background: `linear-gradient(180deg, ${theme.azure}, ${theme.spark})`,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 190,
            left: CONTENT_LEFT,
            width: CONTENT_WIDTH,
            opacity: scheduleOpacity,
            translate: `0px ${scheduleY}px`,
          }}
        >
          {APPOINTMENTS.map((appt, i) => (
            <AppointmentRow
              key={appt.title}
              index={i}
              time={appt.time}
              title={appt.title}
              person={appt.person}
              start={TIMING.rowsStart + i * TIMING.rowStagger}
              duration={TIMING.rowDuration}
            />
          ))}
        </div>

        <div style={{ position: "absolute", top: 610, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          <Badge opacity={badgeOpacity} scale={badgeScale} label="Scheduled" accent={theme.spark} icon="✓" />
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
