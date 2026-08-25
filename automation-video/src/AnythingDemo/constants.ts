export const FPS = 30;
export const DURATION = 294; // 9.8s

export const WIDTH = 1440;
export const HEIGHT = 900;

export const PANEL_TOP = 110;
export const PANEL_LEFT = 140;
export const PANEL_WIDTH = WIDTH - PANEL_LEFT * 2;
export const PANEL_HEIGHT = 460;

export const LINES = [
  { text: "public String build(String idea) {", indent: 0, reveal: [31, 78] },
  { text: "return ship(idea);", indent: 1, reveal: [87, 133] },
  { text: "}", indent: 0, reveal: [141, 157] },
] as const;

export const TIMING = {
  introEnd: 24,
  cursorBlinkStart: 165,
  badgeIn: [204, 224],
  taglineIn: [224, 251],
  holdEnd: 266,
  fadeOutEnd: 294,
} as const;
