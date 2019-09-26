import React from "react";
import "./styles/bootstrap.scss";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import AppRoutes from "./components/AppRoutes";
import { AWSIoTProvider } from "@aws-amplify/pubsub";
import AmplifyTheme from "./styles/amplify-theme";

Amplify.configure(awsconfig);

// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint: 'wss://a1ele7j1b00m5f-ats.iot.us-west-2.amazonaws.com/mqtt',
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};
// export default App;
export default withAuthenticator(App, {
  theme: AmplifyTheme
});
