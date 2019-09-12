import React, { useRef, useCallback } from "react";
import { JoystickOutputData } from "nipplejs";
import styled from "styled-components";
import JoyStick from "./JoyStick";
import ControllerButton from "./ControllerButton";
import * as Breakpoints from "../styles/breakpoints";

function minMax(input: number, bound: number) {
  if (input > bound) return bound;
  if (input < -bound) return -bound;
  return input;
}

const Controller = styled.div`
  display: flex;
  margin: auto;
  overflow: hidden;
  background-color: #4a4a4a;
  height: 100%;
  width: 100%;

  @media (min-height: ${Breakpoints.medium}px),
    (min-width: ${Breakpoints.large}px) {
    height: 90%;
    width: 90%;
    max-width: 800px;
    max-height: 200px;
    border: 2px solid black;
    border-radius: 20px;
  }

  @media (min-width: ${Breakpoints.large}px) {
    max-height: 300px;
  }
`;

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-20deg);
`;

const JoystickContainer = styled.div`
  width: 50%;
  background-color: #000000;
  z-index: 1;
`;

export default function TurretController({
  updatePosition
}: {
  updatePosition: (position: { x: number; y: number }) => void;
}) {
  const joyStickRef = useRef({ x: 0, y: 0 });
  const desiredRef = useRef({ x: 0, y: 0 });
  const joyStickInterval = useRef<number | undefined>(undefined);
  const moveHandler = useCallback((data: JoystickOutputData) => {
    // x = cos(degrees) * distance
    // y = sin(degrees) * distance
    if (data.angle && data.angle.radian && data.distance) {
      const x = Math.cos(data.angle.radian) * data.distance;
      const y = Math.sin(data.angle.radian) * data.distance;
      joyStickRef.current = { x, y };
    } else {
      joyStickRef.current = { x: 0, y: 0 };
    }
    if (!joyStickInterval.current) {
      joyStickInterval.current = window.setInterval(() => {
        const { x, y } = joyStickRef.current;
        const desired = desiredRef.current;
        if (!x && !y) {
          window.clearInterval(joyStickInterval.current);
          joyStickInterval.current = undefined;
          return;
        }
        const newState = {
          x: minMax(desired.x + x / 10, 90),
          y: minMax(desired.y + y / 10, 25)
        };
        desiredRef.current = newState;
        updatePosition(newState);
      }, 200);
    }
  }, [updatePosition]);
  return (
    <Controller>
      <JoystickContainer>
        <JoyStick onMove={moveHandler} />
      </JoystickContainer>
      <ButtonGroup>
        <ControllerButton onClick={() => {}}>B</ControllerButton>
        <ControllerButton onClick={() => {}}>A</ControllerButton>
      </ButtonGroup>
    </Controller>
  );
}
