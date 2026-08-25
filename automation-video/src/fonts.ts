import { loadFont as loadOswald } from "@remotion/google-fonts/Oswald";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

export const { fontFamily: headingFont } = loadOswald("normal", {
  weights: ["600"],
  subsets: ["latin"],
});

export const { fontFamily: monoFont } = loadMono("normal", {
  weights: ["400", "600"],
  subsets: ["latin"],
});
