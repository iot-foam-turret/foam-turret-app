import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Admin from "./Admin";
import Upload from "./Upload";
import Navigation from "./Navigation";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
        <Route path="/admin" component={Admin} />
        <Route path="/upload" component={Upload} />
      </div>
    </Router>
  );
}
