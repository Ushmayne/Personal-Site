export const FPS = 30;
export const DURATION = 480; // 16s

export const WIDTH = 1440;
export const HEIGHT = 900;

export const SIDEBAR_WIDTH = 110;
export const CONTENT_LEFT = SIDEBAR_WIDTH + 70;
export const CONTENT_WIDTH = WIDTH - CONTENT_LEFT - 70;

// modeled on CareLog (careLog.jpg), a family care coordination app —
// home dashboard first, then a click through to the appointments page.
export const SIDEBAR_ITEMS = [
  { kind: "home" },
  { kind: "calendar" },
  { kind: "pill" },
  { kind: "notes" },
] as const;
export const HOME_INDEX = 0;
export const APPOINTMENTS_INDEX = 1;

// mirrors the sidebar's flex layout (paddingTop 170, gap 28, 22px icons)
// so the cursor's click target lines up with the rendered icon.
export const SIDEBAR_ICON_SIZE = 22;
export const SIDEBAR_ICON_GAP = 28;
export const SIDEBAR_PADDING_TOP = 170;
export const SIDEBAR_CENTER_X = SIDEBAR_WIDTH / 2;
export const sidebarIconCenterY = (index: number) =>
  SIDEBAR_PADDING_TOP + index * (SIDEBAR_ICON_SIZE + SIDEBAR_ICON_GAP) + SIDEBAR_ICON_SIZE / 2;

export const STATS = [
  { label: "Meds logged", value: 18, suffix: "" },
  { label: "Appointments", value: 6, suffix: "" },
  { label: "Tasks done", value: 12, suffix: "" },
] as const;

export const BARS = [46, 72, 58, 88, 64] as const;

export const APPOINTMENTS = [
  { time: "9:00 AM", title: "Cardiology follow-up", person: "Mom" },
  { time: "11:30 AM", title: "Physiotherapy", person: "Dad" },
  { time: "2:00 PM", title: "Prescription refill", person: "Grandma" },
  { time: "4:15 PM", title: "Lab results review", person: "Mom" },
] as const;

export const ROW_HEIGHT = 84;
export const ROW_GAP = 14;

export const TIMING = {
  introEnd: 20,
  sidebarIn: [16, 42],
  headerIn: [30, 54],

  // dashboard ("home") page building up
  statsStart: 60,
  statStagger: 18,
  statDuration: 36,
  barsStart: 118,
  barStagger: 13,
  barDuration: 36,

  // cursor slides down to the "calendar" sidebar icon and clicks it
  cursorSlideStart: 235,
  cursorSlideEnd: 263,
  cursorClick: 268,
  cursorFadeStart: 276,
  cursorFadeEnd: 288,

  // dashboard content fades/slides out, appointments page fades/slides in
  dashboardOutStart: 270,
  dashboardOutEnd: 294,
  scheduleInStart: 290,
  scheduleInEnd: 316,

  // appointment rows stagger in
  rowsStart: 320,
  rowStagger: 17,
  rowDuration: 32,

  badgeIn: [414, 430],
  holdEnd: 456,
  fadeOutEnd: 480,
} as const;
