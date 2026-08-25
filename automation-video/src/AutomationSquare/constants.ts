export const FPS = 30;
export const DURATION = 294; // 9.8s

export const WIDTH = 1440;
export const HEIGHT = 900;

export const TASKS = [
  { label: "Export sales report", checkFrame: 59, auto: false },
  { label: "Resize product images", checkFrame: 98, auto: false },
  { label: "Rename output files", checkFrame: 153, auto: true },
] as const;

export const ROW_HEIGHT = 74;
export const ROW_GAP = 18;
export const CARD_PADDING = 40;
export const CARD_WIDTH = 900;
export const CARD_TOP = 190;
export const CARD_LEFT = (WIDTH - CARD_WIDTH) / 2;
export const CARD_HEIGHT =
  CARD_PADDING * 2 + TASKS.length * ROW_HEIGHT + (TASKS.length - 1) * ROW_GAP;

export const CHECKBOX_SIZE = 40;

export const rowCenterY = (index: number) =>
  CARD_TOP + CARD_PADDING + index * (ROW_HEIGHT + ROW_GAP) + ROW_HEIGHT / 2;

export const CHECKBOX_CENTER_X = CARD_LEFT + CARD_PADDING + CHECKBOX_SIZE / 2;

export const TIMING = {
  cursorSlideStart: 20,
  cursorSlideEnd: 35,
  click1: 55,
  row0Check: 59,
  moveStart: 67,
  moveEnd: 87,
  click2: 94,
  row1Check: 98,
  cursorFadeStart: 106,
  cursorFadeEnd: 122,
  buttonAppearStart: 113,
  buttonHoldStart: 126,
  buttonPress: 137,
  buttonFadeEnd: 161,
  headerShiftStart: 129,
  headerOutEnd: 139,
  headerInStart: 143,
  headerShiftEnd: 153,
  badgeStart: 188,
  badgeBounce: 204,
  badgeSettle: 220,
  statStart: 216,
  statEnd: 235,
  holdEnd: 265,
  fadeOutEnd: 294,
} as const;
