import React, { useRef, useEffect } from "react";
import nipplejs, { JoystickOutputData, JoystickManagerOptions } from "nipplejs";

const staticOptions: JoystickManagerOptions = {
  mode: "dynamic",
  catchDistance: 150,
  color: "cyan",
  threshold: 0.2
};

export default function JoyStick({
  onMove
}: {
  onMove: (data: JoystickOutputData) => void;
}) {
  const joyStick = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!joyStick.current) return;
    const manager = nipplejs.create({
      ...staticOptions,
      zone: joyStick.current
    });
    manager.on("move", (_event, data) => {
      onMove(data);
    });
    manager.on("end", (_event, data) => {
      onMove(data);
    });
  }, [onMove]);
  return (
    <div
      ref={joyStick}
      style={{
        width: "100%",
        height: "50vh",
        position: "relative"
      }}
    />
  );
}
