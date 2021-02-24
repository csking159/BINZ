import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  handleLogout = () => {
    this.props.onLogout();
    this.props.history.push("/signin");
  };

  render() {
    return (
      <Navbar bg="dark" expands="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              B. I. N. Z.
            </NavLink>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
              About
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/listings">
              Listings
            </NavLink>
            {this.props.loggedIn ? (
              <>
                <NavLink
                  className="d-inline p-2 bg-dark text-white"
                  to="/profile"
                >
                  Profile
                </NavLink>
                <a
                  className="d-inline p-2 bg-dark text-white"
                  style={{ cursor: "pointer" }}
                  onClick={this.handleLogout}
                >
                  Sign Out
                </a>
              </>
            ) : (
              <>
                <NavLink
                  className="d-inline p-2 bg-dark text-white"
                  to="/signin"
                >
                  Sign In
                </NavLink>
                <NavLink
                  className="d-inline p-2 bg-dark text-white"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
