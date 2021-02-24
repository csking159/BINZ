import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default class Profile extends React.Component {
  state = {
    name: "",
    email: "",
    listings: []
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push("/signin");
    }
    (async () => {
      const response = await axios.get(
        `http://localhost:8080/users/me?token=${localStorage.getItem("token")}`
      );
      this.setState({
        name: response.data.name,
        email: response.data.email
      });
    })();
    (async () => {
      const response = await axios.get(
        `http://localhost:8080/listings/owned?token=${localStorage.getItem(
          "token"
        )}`
      );
      this.setState({
        listings: response.data
      });
    })();
  }
  deleteListing(id) {
    axios.delete(
      `http://localhost:8080/listings/${id}?token=${localStorage.getItem(
        "token"
      )}`
    );

    this.setState({
      listings: this.state.listings.filter(listing => listing.id !== id)
    });
  }
  render() {
    return (
      <div>
        <div className="container-1 flexbox-item">
          <div className="container-2">
            <h2>Profile</h2>

            <Image
              src={require("./Norm.png")}
              width="256px"
              height="256px"
            ></Image>
            <h3>Name: {this.state.name}</h3>
            <h3>Email: {this.state.email}</h3>
          </div>

          <div className="container-2">
            <h2>My Listings</h2>
            <table className="table">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Duration</th>
                <th scope="col">Rent/Month</th>
                <th scope="col">Actions</th>
              </tr>

              <tbody>
                {this.state.listings.map(listing => (
                  <tr key={listing.id}>
                    <th scope="row">{listing.name}</th>
                    <td>{listing.duration}</td>
                    <td>$ {listing.rentPerMonth}</td>
                    <td>
                      <Link
                        to={`/listings/${listing.id}/edit`}
                        className="nav-link"
                      >
                        <button type="button">Edit</button>
                      </Link>
                      <Link to={`/listings/${listing.id}`} className="nav-link">
                        <button type="button">See More</button>
                      </Link>

                      <Button
                        style={{ margin: 15 }}
                        onClick={() => this.deleteListing(listing.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
