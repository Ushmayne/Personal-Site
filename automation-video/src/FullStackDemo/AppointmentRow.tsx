import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { headingFont, monoFont } from "../fonts";
import { ROW_GAP, ROW_HEIGHT } from "./constants";

export const AppointmentRow: React.FC<{
  index: number;
  time: string;
  title: string;
  person: string;
  start: number;
  duration: number;
}> = ({ index, time, title, person, start, duration }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [start, start + duration], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <Interactive.Div
      name={`Appointment ${index + 1}`}
      style={{
        height: ROW_HEIGHT,
        marginBottom: ROW_GAP,
        display: "flex",
        alignItems: "center",
        gap: 22,
        opacity,
        translate: `0px ${y}px`,
        borderBottom: `1px solid ${theme.lineSoft}`,
      }}
    >
      <span
        style={{
          fontFamily: monoFont,
          fontSize: 20,
          letterSpacing: "0.04em",
          color: theme.spark,
          border: `1px solid ${theme.spark}`,
          borderRadius: 999,
          padding: "6px 14px",
          flex: "none",
        }}
      >
        {time}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{ fontFamily: headingFont, fontSize: 24, fontWeight: 600, color: theme.paper }}>
          {title}
        </span>
        <span style={{ fontFamily: monoFont, fontSize: 16, color: theme.dim }}>{person}</span>
      </div>
    </Interactive.Div>
  );
};
