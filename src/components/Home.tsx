import React, { useEffect, useState } from "react";
import { PubSub } from "aws-amplify";

const piTurretUpdateTopic = "$aws/things/Pi-Turret/shadow/update";

type iotTurretState = {
  pitch: Number;
  yaw: Number;
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
        console.log("Message received", data);
        if (data && data.value && data.value.state && data.value.state.reported) {
          setTurretState(data.value.state.reported);
        }
      },
      error: (error: any) => console.error(error),
      close: () => console.log("Done")
    });
    return () => sub.unsubscribe();
  }, []);

  async function setDesiredState(newState: iotTurretState) {
    await PubSub.publish(piTurretUpdateTopic, {
      state: {
        desired: newState
      }
    });
  }

  return [turretState, setDesiredState];
}
export default function Home() {
  const [turretState, setTurretState] = useIoT();
  return (
    <>
      <h2>Home Page</h2>
      <div>
        <button onClick={() => setTurretState({ pitch: 10, yaw: 10 })}>
          Test
        </button>
        <div>{JSON.stringify(turretState)}</div>
      </div>
    </>
  );
}
