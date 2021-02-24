import React, { Component } from "react";
import { render } from "@testing-library/react";
import night from "./night.jpg";
import { Image } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import home from "./home.jpg";

export default class Home extends Component {
  render() {
    var background = { backgroundSize: "cover" };
    var textStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      color: "purple"
    };
    return (
      <div style={{ width: "auto" }}>
        <Image
          style={background}
          responsive="true"
          src={require("./home.jpg")}
          width="1348px"
          height="600px"
        ></Image>

        <div>
          <h1>&nbsp;</h1>
          <h1 align="center">TESTIMONIALS</h1>
          <h1>&nbsp;</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.squarespace-cdn.com/content/v1/54d13b45e4b0f90e6ca28168/1510072845364-O01E2MIJBTWCJ3N03VXP/ke17ZwdGBToddI8pDm48kDONSgQXwBYB20AZSG99sXx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXaanQ4b7g0mjR1pPNaLl5krdG6DE4mXhsDJSK2uJyqajoA/Loop+Test_021117_mike37405.jpg?format=1500w"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Jimmy John</h1>
                <p>
                  "I love this website! It has changed the way I sublease my
                  apartment and I will never stop using it."
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/12/4-6.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Carole Baskin</h1>
                <p>
                  "I was able to find the perfect location and apartment to
                  sublease with ease. Thanks BINZ!"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.squarespace-cdn.com/content/v1/5bc59bceb9144953e7a030d1/1543232682025-S6YOSHRDZFPN13EC230M/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/EmptyName+61+copy.jpg?format=1000w"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Joseph Allen</h1>
                <p>
                  "I cannot believe I went this long without this website. It is
                  amazing and it makes subleasing very simple."
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          ;
        </div>
      </div>
    );
  }
}
