import React, { Component } from "react";
import { icon } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";
import L from "leaflet";

export default class MapListing extends Component {
  render() {
    const positions = this.props.listings;
    return (
      <>
        {positions.length === 0 ? (
          <h2>loading...</h2>
        ) : (
          <Map center={[35.2271, -80.8431]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map(listing => (
              //position is an attribute inside marker = var. the var has lat lng
              <Marker key={listing.id} position={listing}>
                <Popup>{listing.location}</Popup>
              </Marker>
            ))}
          </Map>
        )}
      </>
    );
  }
}
