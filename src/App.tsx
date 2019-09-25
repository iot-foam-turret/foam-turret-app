import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import AppRoutes from "./components/AppRoutes";
import { AWSIoTProvider } from "@aws-amplify/pubsub";

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
export default withAuthenticator(App);
