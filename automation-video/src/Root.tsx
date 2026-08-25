import "./index.css";
import { Composition } from "remotion";
import { AutomationDemoComposition } from "./Composition";
import { WebsiteDemo } from "./WebsiteDemo";
import { WIDTH as WEB_W, HEIGHT as WEB_H, FPS as WEB_FPS, DURATION as WEB_DUR } from "./WebsiteDemo/constants";
import { AutomationSquare } from "./AutomationSquare";
import {
  WIDTH as AUTO_SQ_W,
  HEIGHT as AUTO_SQ_H,
  FPS as AUTO_SQ_FPS,
  DURATION as AUTO_SQ_DUR,
} from "./AutomationSquare/constants";
import { FullStackDemo } from "./FullStackDemo";
import { WIDTH as FS_W, HEIGHT as FS_H, FPS as FS_FPS, DURATION as FS_DUR } from "./FullStackDemo/constants";
import { AnythingDemo } from "./AnythingDemo";
import { WIDTH as ANY_W, HEIGHT as ANY_H, FPS as ANY_FPS, DURATION as ANY_DUR } from "./AnythingDemo/constants";
import { TaskTrackerThumb } from "./TaskTrackerThumb";
import { WIDTH as TT_W, HEIGHT as TT_H } from "./TaskTrackerThumb/constants";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <AutomationDemoComposition />
      <Composition
        id="WebsiteDemo"
        component={WebsiteDemo}
        durationInFrames={WEB_DUR}
        fps={WEB_FPS}
        width={WEB_W}
        height={WEB_H}
      />
      <Composition
        id="AutomationSquare"
        component={AutomationSquare}
        durationInFrames={AUTO_SQ_DUR}
        fps={AUTO_SQ_FPS}
        width={AUTO_SQ_W}
        height={AUTO_SQ_H}
      />
      <Composition
        id="FullStackDemo"
        component={FullStackDemo}
        durationInFrames={FS_DUR}
        fps={FS_FPS}
        width={FS_W}
        height={FS_H}
      />
      <Composition
        id="AnythingDemo"
        component={AnythingDemo}
        durationInFrames={ANY_DUR}
        fps={ANY_FPS}
        width={ANY_W}
        height={ANY_H}
      />
      <Composition
        id="TaskTrackerThumb"
        component={TaskTrackerThumb}
        durationInFrames={1}
        fps={30}
        width={TT_W}
        height={TT_H}
      />
    </>
  );
};
