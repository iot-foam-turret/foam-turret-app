import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Admin from "./Admin";
import Upload from "./Upload";

export default function AppRoutes() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/upload">Upload Picture</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
        <Route path="/admin" component={Admin} />
        <Route path="/upload" component={Upload} />
      </div>
    </Router>
  );
}
