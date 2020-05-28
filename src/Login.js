import React from "react";
import Popup from "./Popup";
import PopupStyle from "./assets/popup.css";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import LoginStyle from "./assets/Login.css";

class Login extends React.Component {
  state = {
    showPopup: false,
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }
  render() {
    return (
      <Router>
        <div style={{ LoginStyle }}>
          <div className="align-right">
            {this.state.showPopup ? (
              <Popup
                style={{ PopupStyle }}
                text="Close Me"
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
            <div className="form-default">
              <form class="login-form" action="javascript:void(0);">
                <h1>CoAcco</h1>
                <div class="form-control">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=" "
                    autocomplete="off"
                    required
                  />
                  <label for="username">Username</label>
                </div>
                <div class="form-control">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    autocomplete="off"
                    required
                  />
                  <label for="password">Password</label>
                </div>
                <a href="#" onClick={this.togglePopup.bind(this)}>
                  Forgot your password?
                </a>

                <button type="submit" class="btn">
                  <NavLink to="/home">Login</NavLink>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Login;
