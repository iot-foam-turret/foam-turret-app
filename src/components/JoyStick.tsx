import React from "react";
import { JoystickOutputData, JoystickManagerOptions } from "nipplejs";
import ReactNipple from "react-nipple";

const staticOptions: JoystickManagerOptions = {
  mode: "dynamic",
  position: { top: "50%", left: "50%" },
  catchDistance: 150,
  color: "cyan",
  threshold: 0.2
};

type JoyStickProps = {
  onMove: (data: JoystickOutputData) => void;
};

const JoyStick: React.FC<JoyStickProps> = ({ onMove }) => {
  const callback = (_event: Event, data: JoystickOutputData) => {
    onMove(data);
  }
  return (
    <ReactNipple
      options={staticOptions}
      style={{
        color: "cyan",
        width: "100%",
        height: "100%",
        position: "relative"
      }}
      onEnd={callback}
      onMove={callback}
    />
  );
};

export default JoyStick;
