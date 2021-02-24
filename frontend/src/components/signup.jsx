import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      showConfirmError: false
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
      showConfirmError: false
    });
  }

  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
      showConfirmError: false
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ showConfirmError: true });
      return;
    }

    console.log("Form submitted:");
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);

    const response = await axios.post("http://localhost:8080/users", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    console.log(response.data);

    this.props.onLogin(response.data.token);

    this.setState({
      email: "",
      password: ""
    });

    this.props.history.push("/profile");
  }

  render() {
    return (
      <div style={({ marginTop: 20 }, { marginLeft: 20 })}>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              style={{ width: "400px" }}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              style={{ width: "400px" }}
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
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              style={{ width: "400px" }}
              value={this.state.confirmPassword}
              onChange={this.onChangeConfirmPassword}
            ></input>
          </div>
          {this.state.showConfirmError && <div>Passwords do not match!</div>}

          <div className="form-group">
            <button className="btn btn-primary" style={{ width: "400px" }}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

/*
import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    console.log("Form submitted:");
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);

    const response = await axios.post(
      "http://localhost:8080/users",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    console.log(response.data);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
          <button
              onClick={this.onNavigateUsers}
              className="btn btn-primary"
            >
              Sign In
            </button>
          </div>

        </form>
      </div>
    );
  }
}
*/
