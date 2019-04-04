import React, { Component } from "react";
import GoogleLogin from "./Login";
import { Typography } from "antd";
const { Title } = Typography;

class LoginPage extends Component {
  render() {
    return (
      <>
        <div
          class="welcome-title"
          style={{ background: "#fff", padding: 24, minHeight: 80 }}
        >
          Welcome to LOL.gg
          <Title level={2}>Please login</Title>
          <p />
          <GoogleLogin
            loggedIn={this.props.loggedIn}
            loginSuccess={this.props.loginSuccess}
            logoutSuccess={this.props.logoutSuccess}
          />
        </div>
        <div class="slideshow-container" />
      </>
    );
  }
}

export default LoginPage;
