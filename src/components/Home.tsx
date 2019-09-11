import React, { useEffect, useState } from "react";
import { PubSub } from "aws-amplify";
import TurretController from "./TurretController";
import styled from "styled-components";

const Fullscreen = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: white;
  height: 100vh;
  width: 100vw;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 15px;
`;

const piTurretUpdateTopic = "$aws/things/Pi-Turret/shadow/update";

type iotTurretState = {
  pitch: number;
  yaw: number;
};

function useIoT(): [iotTurretState, (desiredState: iotTurretState) => void] {
  const [turretState, setTurretState] = useState<iotTurretState>({
    pitch: 0,
    yaw: 0
  });
  useEffect(() => {
    // Auth.currentCredentials().then((info) => {
    //   console.log(info.identityId)
    // });

    const sub = PubSub.subscribe(piTurretUpdateTopic).subscribe({
      next: (data: any) => {
        if (
          data &&
          data.value &&
          data.value.state &&
          data.value.state.reported
        ) {
          setTurretState(data.value.state.reported);
        }
      },
      error: (error: any) => console.error(error),
      close: () => console.log("Done")
    });
    return () => sub.unsubscribe();
  }, []);

  async function publishDesiredState(newState: iotTurretState) {
    await PubSub.publish(piTurretUpdateTopic, {
      state: {
        desired: newState
      }
    });
  }

  return [turretState, publishDesiredState];
}
export default function Home() {
  const [turretState, setTurretState] = useIoT();
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };
  // const moveTurret = ({ x, y }: { x: number; y: number }) => {
  //   console.log(x, y);
  //   setTurretState({
  //     pitch: y,
  //     yaw: x
  //   });
  // };
  const updatePosition = ({ x, y }: { x: number; y: number }) => {
    const newState = {
      pitch: y,
      yaw: x
    };
    setTurretState(newState);
  };
  return (
    <>
      <h2>Home Page</h2>
      <div>
        <p>
          Actual pitch:{turretState.pitch} yaw: {turretState.yaw}
          <button onClick={toggleFullscreen}>Remote</button>
        </p>
        {/* <TurretGridController moveTurret={moveTurret} /> */}
        {fullscreen && (
          <Fullscreen>
            <CloseButton onClick={toggleFullscreen}>x</CloseButton>
            <TurretController updatePosition={updatePosition} />
          </Fullscreen>
        )}
      </div>
    </>
  );
}
