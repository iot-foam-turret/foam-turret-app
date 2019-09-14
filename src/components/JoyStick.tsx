import React, { useRef, useEffect } from "react";
import nipplejs, { JoystickOutputData, JoystickManagerOptions } from "nipplejs";

const staticOptions: JoystickManagerOptions = {
  mode: "dynamic",
  position: { top: "50%", left: "50%" },
  catchDistance: 150,
  color: "cyan",
  threshold: 0.2
};

export default React.memo(function JoyStick({
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
    return () => {
        manager.destroy()
    }
  }, [onMove]);
  return (
    <div
      ref={joyStick}
      style={{
        width: "100%",
        height: "100%",
        position: "relative"
      }}
    />
  );
});
