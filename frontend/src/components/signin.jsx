import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    showFailed: false
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value, showFailed: false });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value, showFailed: false });
  };

  onSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/users/login", {
      email: this.state.email,
      password: this.state.password
    });

    if (response.data.success) {
      this.props.onLogin(response.data.token);
      this.props.history.push("/profile");
    } else {
      this.setState({ showFailed: true });
    }
  };

  render() {
    return (
      <div style={({ marginTop: 20 }, { marginLeft: 20 })}>
        <h3>Sign In</h3>
        {this.state.showFailed && <div>Login failed!</div>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              style={{ width: "400px" }}
              required
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              style={{ width: "400px" }}
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" style={{ width: "400px" }}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}
