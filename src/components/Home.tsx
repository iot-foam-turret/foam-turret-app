import React, { useEffect } from "react";
import { PubSub } from "aws-amplify";

export default function Home() {
  useEffect(() => {
    PubSub.subscribe('$aws/things/Pi-Turret/shadow/update').subscribe({
      next: (data: any) => console.log('Message received', data),
      error: (error: any) => console.error(error),
      close: () => console.log('Done'),
    });
  }, []);

  return <div>Home Page</div>;
}
