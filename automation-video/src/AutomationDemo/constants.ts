export const FPS = 30;
export const DURATION = 240; // 8s

export const WIDTH = 1920;
export const HEIGHT = 1080;

export const TASKS = [
  { label: "Export sales report", checkFrame: 48, auto: false },
  { label: "Resize product images", checkFrame: 78, auto: false },
  { label: "Rename output files", checkFrame: 122, auto: true },
  { label: "Send status email", checkFrame: 133, auto: true },
  { label: "Update tracking sheet", checkFrame: 144, auto: true },
] as const;

export const ROW_HEIGHT = 74;
export const ROW_GAP = 18;
export const CARD_PADDING = 44;
export const CARD_WIDTH = 980;
export const CARD_TOP = 270;
export const CARD_LEFT = (WIDTH - CARD_WIDTH) / 2;
export const CARD_HEIGHT =
  CARD_PADDING * 2 + TASKS.length * ROW_HEIGHT + (TASKS.length - 1) * ROW_GAP;

export const CHECKBOX_SIZE = 40;

export const rowCenterY = (index: number) =>
  CARD_TOP + CARD_PADDING + index * (ROW_HEIGHT + ROW_GAP) + ROW_HEIGHT / 2;

export const CHECKBOX_CENTER_X = CARD_LEFT + CARD_PADDING + CHECKBOX_SIZE / 2;

export const TIMING = {
  introEnd: 15,
  cursorSlideStart: 15,
  cursorSlideEnd: 26,
  click1: 45,
  row0Check: 48,
  moveStart: 58,
  moveEnd: 72,
  click2: 75,
  row1Check: 78,
  cursorFadeStart: 84,
  cursorFadeEnd: 94,
  buttonAppearStart: 90,
  buttonHoldStart: 100,
  buttonPress: 108,
  buttonFadeEnd: 122,
  headerShiftStart: 104,
  headerOutEnd: 110,
  headerInStart: 112,
  headerShiftEnd: 118,
  badgeStart: 156,
  badgeBounce: 164,
  badgeSettle: 173,
  statStart: 170,
  statEnd: 183,
  holdEnd: 218,
  fadeOutEnd: 240,
} as const;
