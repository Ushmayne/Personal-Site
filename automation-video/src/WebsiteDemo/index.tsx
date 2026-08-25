import { AbsoluteFill, Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame } from "remotion";
import { theme } from "../theme";
import { monoFont } from "../fonts";
import { Badge } from "../shared/Badge";
import {
  DEVICES_TOP,
  LAPTOP_BASE_HEIGHT,
  LAPTOP_BEZEL,
  LAPTOP_LEFT,
  LAPTOP_OUTER_HEIGHT,
  LAPTOP_OUTER_WIDTH,
  LAPTOP_SCREEN_HEIGHT,
  LAPTOP_SCREEN_WIDTH,
  MAX_SCROLL_LAPTOP,
  MAX_SCROLL_PHONE,
  PHONE_BEZEL,
  PHONE_LEFT,
  PHONE_OUTER_HEIGHT,
  PHONE_OUTER_WIDTH,
  PHONE_SCREEN_HEIGHT,
  PHONE_SCREEN_WIDTH,
  PHONE_TOP,
  PHONE_TOP_OFFSET,
  TIMING,
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

const BEZEL_COLOR = "#0a0f1a";

export const WebsiteDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const sceneOpacity = fadeClamp(frame, [0, TIMING.introEnd, TIMING.holdEnd, TIMING.fadeOutEnd], [0, 1, 1, 0]);
  const kickerOpacity = fadeClamp(frame, [0, 12], [0, 1]);

  const devicesOpacity = fadeClamp(frame, [TIMING.introEnd - 6, TIMING.introEnd + 14], [0, 1]);
  const devicesY = fadeClamp(frame, [TIMING.introEnd - 6, TIMING.introEnd + 14], [24, 0], Easing.out(Easing.cubic));

  const scrollProgress = fadeClamp(
    frame,
    [TIMING.scrollDownStart, TIMING.scrollDownEnd, TIMING.holdBottom, TIMING.scrollUpEnd],
    [0, 1, 1, 0],
    Easing.inOut(Easing.cubic),
  );
  const laptopScrollY = -scrollProgress * MAX_SCROLL_LAPTOP;
  const phoneScrollY = -scrollProgress * MAX_SCROLL_PHONE;

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
          Websites &amp; portfolios
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: devicesOpacity,
            translate: `0px ${devicesY}px`,
          }}
        >
          <Interactive.Div
            name="Laptop"
            style={{
              position: "absolute",
              top: DEVICES_TOP,
              left: LAPTOP_LEFT,
              width: LAPTOP_OUTER_WIDTH,
              height: LAPTOP_OUTER_HEIGHT,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: LAPTOP_OUTER_WIDTH,
                height: LAPTOP_SCREEN_HEIGHT + LAPTOP_BEZEL * 2,
                borderRadius: "16px 16px 4px 4px",
                background: BEZEL_COLOR,
                border: `1px solid ${theme.line}`,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: LAPTOP_BEZEL,
                  left: LAPTOP_BEZEL,
                  width: LAPTOP_SCREEN_WIDTH,
                  height: LAPTOP_SCREEN_HEIGHT,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: theme.panel,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", translate: `0px ${laptopScrollY}px` }}>
                  <Img src={staticFile("site-shots/desktop-full.png")} style={{ width: LAPTOP_SCREEN_WIDTH, display: "block" }} />
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: LAPTOP_SCREEN_HEIGHT + LAPTOP_BEZEL * 2,
                left: -20,
                width: LAPTOP_OUTER_WIDTH + 40,
                height: LAPTOP_BASE_HEIGHT,
                borderRadius: "0 0 10px 10px",
                background: "#141b29",
              }}
            />
          </Interactive.Div>

          <Interactive.Div
            name="Phone"
            style={{
              position: "absolute",
              top: PHONE_TOP,
              left: PHONE_LEFT,
              width: PHONE_OUTER_WIDTH,
              height: PHONE_OUTER_HEIGHT,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: 32,
                background: BEZEL_COLOR,
                border: `1px solid ${theme.line}`,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 6,
                  left: "50%",
                  translate: "-50% 0px",
                  width: 60,
                  height: 8,
                  borderRadius: 4,
                  background: "#000",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: PHONE_TOP_OFFSET,
                  left: PHONE_BEZEL,
                  width: PHONE_SCREEN_WIDTH,
                  height: PHONE_SCREEN_HEIGHT,
                  borderRadius: 14,
                  overflow: "hidden",
                  background: theme.panel,
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", translate: `0px ${phoneScrollY}px` }}>
                  <Img src={staticFile("site-shots/mobile-full.png")} style={{ width: PHONE_SCREEN_WIDTH, display: "block" }} />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  left: "50%",
                  translate: "-50% 0px",
                  width: 60,
                  height: 4,
                  borderRadius: 2,
                  background: theme.dim2,
                }}
              />
            </div>
          </Interactive.Div>
        </div>

        <div
          style={{
            position: "absolute",
            top: DEVICES_TOP + LAPTOP_OUTER_HEIGHT + 46,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Badge opacity={badgeOpacity} scale={badgeScale} label="Live" accent={theme.spark} icon="●" />
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
