import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default Routes;
