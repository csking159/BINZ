import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Listings from "./components/listings";
import Profile from "./components/profile";
import Create from "./components/create";
import Edit from "./components/edit";
import Listing from "./components/listing";
import logo from "./logo.png";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    loggedIn: false
  };

  logIn = token => {
    localStorage.setItem("token", token);
    this.setState({ loggedIn: true });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <Router>
        <div className="container1">
          <h1 align="middle" style={{ backgroundColor: "dark" }}></h1>
          <Navigation loggedIn={this.state.loggedIn} onLogout={this.logOut} />

          <h2></h2>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route
              path="/signin"
              exact
              render={props => <SignIn {...props} onLogin={this.logIn} />}
            />
            <Route
              path="/signup"
              exact
              render={props => <SignUp {...props} onLogin={this.logIn} />}
            />
            <Route path="/listings" exact component={Listings} />
            <Route
              path="/listings/create"
              exact
              render={props => (
                <Create {...props} loggedIn={this.state.loggedIn} />
              )}
            />
            <Route path="/listings/:id" exact component={Listing} />
            <Route path="/listings/:id/edit" exact component={Edit} />
            <Route
              path="/profile"
              exact
              render={props => (
                <Profile {...props} loggedIn={this.state.loggedIn} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
