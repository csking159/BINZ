import React, { Component } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default class Listing extends Component {
  state = {
    listing: {}
  };
  componentDidMount() {
    (async () => {
      const listingDataResponse = await axios.get(
        `http://localhost:8080/listings/${this.props.match.params.id}`
      );
      const listingsBack = listingDataResponse.data;

      //only way to update a state
      this.setState({
        listing: listingsBack
      });
    })();
  }
  render() {
    return (
      <div>
        <Link to="/listings" className="nav-link">
          Back
        </Link>

        <h2>Listing Information</h2>
        {this.state.listing.name ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Title</th>
                  <td>{this.state.listing.name}</td>
                </tr>

                <tr>
                  <th scope="row">Rent per Month</th>
                  <td>${this.state.listing.rentPerMonth}</td>
                </tr>
                <tr>
                  <th scope="row">Pets?</th>
                  <td>
                    {this.state.listing.pets
                      ? "You Can Have Pets"
                      : "No Pets Allowed"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Furnished?</th>
                  <td>
                    {this.state.listing.furnished
                      ? "Furnished"
                      : "Not Furnished"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Start Date</th>
                  <td>
                    {moment(this.state.listing.startDate).format("MM-DD-YYYY")}
                  </td>
                </tr>
                <tr>
                  <th scope="row">End Date</th>
                  <td>
                    {moment(this.state.listing.endDate).format("MM-DD-YYYY")}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Comments:</th>
                  <td>{this.state.listing.comments}</td>
                </tr>
                <tr>
                  <th scope="row">Pictures:</th>
                  <td>
                    <img
                      src={`http://localhost:8080/${this.state.listing.listingImage}`}
                      alt="Property Image"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Contact Information</h3>
            <ul>
              <li>{this.state.listing.phone}</li>
              <li>{this.state.listing.email}</li>
            </ul>
          </>
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    );
  }
}
