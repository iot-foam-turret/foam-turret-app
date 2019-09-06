import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';
import AppRoutes from "./components/AppRoutes";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};
// TODO: Remove "true" when logout is implemented
export default withAuthenticator(App, true);
