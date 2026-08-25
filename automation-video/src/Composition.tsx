import { Composition } from "remotion";
import { AutomationDemo } from "./AutomationDemo";
import { DURATION, FPS, HEIGHT, WIDTH } from "./AutomationDemo/constants";

export const AutomationDemoComposition: React.FC = () => {
  return (
    <Composition
      id="AutomationDemo"
      component={AutomationDemo}
      durationInFrames={DURATION}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
