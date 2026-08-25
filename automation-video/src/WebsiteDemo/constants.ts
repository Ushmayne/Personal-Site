export const FPS = 30;
export const DURATION = 294; // 9.8s

export const WIDTH = 1440;
export const HEIGHT = 900;

export const LAPTOP_SCREEN_WIDTH = 680;
export const LAPTOP_SCREEN_HEIGHT = 430;
export const LAPTOP_BEZEL = 14;
export const LAPTOP_BASE_HEIGHT = 18;
export const LAPTOP_OUTER_WIDTH = LAPTOP_SCREEN_WIDTH + LAPTOP_BEZEL * 2;
export const LAPTOP_OUTER_HEIGHT = LAPTOP_SCREEN_HEIGHT + LAPTOP_BEZEL * 2 + LAPTOP_BASE_HEIGHT;

export const PHONE_SCREEN_WIDTH = 190;
export const PHONE_SCREEN_HEIGHT = 410;
export const PHONE_BEZEL = 12;
export const PHONE_TOP_OFFSET = 22;
export const PHONE_BOTTOM_OFFSET = 14;
export const PHONE_OUTER_WIDTH = PHONE_SCREEN_WIDTH + PHONE_BEZEL * 2;
export const PHONE_OUTER_HEIGHT = PHONE_TOP_OFFSET + PHONE_SCREEN_HEIGHT + PHONE_BOTTOM_OFFSET;

export const DEVICES_TOP = 130;
export const LAPTOP_LEFT = 234;
export const PHONE_LEFT = 992;
export const PHONE_TOP = DEVICES_TOP + (LAPTOP_OUTER_HEIGHT - PHONE_OUTER_HEIGHT) / 2;

export const DESKTOP_SHOT_WIDTH = 1440;
export const DESKTOP_SHOT_HEIGHT = 4262;
export const MOBILE_SHOT_WIDTH = 390;
export const MOBILE_SHOT_HEIGHT = 4228;

export const LAPTOP_CONTENT_HEIGHT = Math.round(
  (DESKTOP_SHOT_HEIGHT / DESKTOP_SHOT_WIDTH) * LAPTOP_SCREEN_WIDTH,
);
export const PHONE_CONTENT_HEIGHT = Math.round(
  (MOBILE_SHOT_HEIGHT / MOBILE_SHOT_WIDTH) * PHONE_SCREEN_WIDTH,
);

export const MAX_SCROLL_LAPTOP = LAPTOP_CONTENT_HEIGHT - LAPTOP_SCREEN_HEIGHT;
export const MAX_SCROLL_PHONE = PHONE_CONTENT_HEIGHT - PHONE_SCREEN_HEIGHT;

export const TIMING = {
  introEnd: 24,
  scrollDownStart: 48,
  scrollDownEnd: 168,
  holdBottom: 189,
  scrollUpEnd: 249,
  badgeIn: [255, 272],
  holdEnd: 274,
  fadeOutEnd: 294,
} as const;
