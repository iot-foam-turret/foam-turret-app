import React, { useEffect, useState, useCallback } from "react";
import { PubSub } from "aws-amplify";
import TurretController from "./TurretController";
import styled from "styled-components";
import Upload from "./Upload";
import { StyledOutlinedButton } from "./Button";
import * as Breakpoints from "../styles/breakpoints";

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
  z-index: 1030;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  color: white;
  font-size: 20px;
  background: black;
  border: 2px solid white;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  padding: 0;
  z-index: 1;
`;

const DebugTurretInfo = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;
  color: cyan;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
`;

const PageContainer = styled.div`
  background: #F3F3F3;
  padding: 0 8px;
  @media (min-width: ${Breakpoints.medium}px) {
    padding: 0 20px;
  }
`;

const PageContents = styled.div`
  background: #FFF;
  max-width: 800px;
  margin: 10px;
  margin: auto;
  padding: 8px;
  position: relative;
  min-height: 100vh;
  @media (min-width: ${Breakpoints.medium}px) {
    padding: 50px;
  }
`;

const PageTitle = styled.h2`
  padding-bottom: 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 8px;
  @media (min-width: ${Breakpoints.medium}px) {
    top: 55px;
    right: 50px;
  }
`;

const piTurretUpdateTopic = "$aws/things/Pi-Turret/shadow/update";

type iotTurretState = {
  pitch?: number;
  yaw?: number;
  mode?: "Firing";
  control?: "FaceID" | "Manual"
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

  const publishDesiredState = useCallback(async (newState: iotTurretState) => {
    await PubSub.publish(piTurretUpdateTopic, {
      state: {
        desired: newState
      }
    });
  }, []);

  return [turretState, publishDesiredState];
}
export default function Home() {
  const [turretState, setTurretState] = useIoT();
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (fullscreen) {
      setTurretState({ control: "FaceID" })
    } else {
      setTurretState({ control: "Manual" })
    }
    setFullscreen(!fullscreen);
  };
  // const moveTurret = ({ x, y }: { x: number; y: number }) => {
  //   console.log(x, y);
  //   setTurretState({
  //     pitch: y,
  //     yaw: x
  //   });
  // };
  const updatePosition = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      const newState = {
        pitch: y,
        yaw: x
      };
      setTurretState(newState);
    },
    [setTurretState]
  );

  const fire = useCallback(() => setTurretState({ mode: "Firing" }), [
    setTurretState
  ]);

  return (
    <>
      <PageContainer>
        <PageContents>
          <PageTitle>Home Page</PageTitle>
          <ButtonContainer>
            <StyledOutlinedButton className="outlined" onClick={toggleFullscreen}>REMOTE</StyledOutlinedButton>
          </ButtonContainer>
          <div>
            <Upload />
            {/* <TurretGridController moveTurret={moveTurret} /> */}
            {fullscreen && (
              <Fullscreen>
                <CloseButton onClick={toggleFullscreen}>x</CloseButton>
                <DebugTurretInfo>
                  Actual pitch:{turretState.pitch} yaw: {turretState.yaw}
                </DebugTurretInfo>
                <TurretController updatePosition={updatePosition} fire={fire} />
              </Fullscreen>
            )}
          </div>
        </PageContents>
      </PageContainer>
    </>
  );
}
