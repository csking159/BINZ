import React, { Component } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
export default class About extends Component {
  render() {
    return (
      <div>
        <h1 align="middle"> &nbsp;</h1>
        <h1 align="middle">ABOUT US</h1>
        <h4 align="middle">
          {" "}
          <font color="black">
            Finding safe and afforable housing near campus can be challenging.
            So we created a place where UNCC students can sub-lease their next
            home.
          </font>
        </h4>
        <h1 align="middle"> &nbsp;</h1>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/9d/aa/a2/9daaa251f5d00c224af2368a4dd185a9.jpg"
            />
            <Card.Body>
              <Card.Title>Harika Jampani</Card.Title>
              <Card.Text>
                Harika loves computer science. She is one of our Frontend
                developers. She is also a part of our design team.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/b1/ab/50/b1ab50685a2023c86508830b86389df2.jpg"
            />
            <Card.Body>
              <Card.Title>Radha Patel</Card.Title>
              <Card.Text>
                Radha loves data science. She is our database administrator. She
                also does our data visualization.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&w=1000&q=80"
            />
            <Card.Body>
              <Card.Title>Marwa Alqatari</Card.Title>
              <Card.Text>
                Marwa loves software engineering and building programs. She is
                one of our Backend developers.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <h1 align="middle"> &nbsp;</h1>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/aa/b6/f2/aab6f2dc557eac416202846a75655342.jpg"
            />
            <Card.Body>
              <Card.Title>Cameron King</Card.Title>
              <Card.Text>
                Cameron loves programming and creating applications. He is one
                of our Frontend developers.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/1d/97/44/1d9744313f4a33c16385a7a3d031036b.jpg"
            />
            <Card.Body>
              <Card.Title>Samantha Mitchell</Card.Title>
              <Card.Text>
                Samantha loves coding and designing. She is one of our Front end
                developers and a part of our design team.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/ca/02/4b/ca024b026242b4ae1ebd269580bbb2c3.jpg"
            />
            <Card.Body>
              <Card.Title>Gable Brown</Card.Title>
              <Card.Text>
                Gable loves software systems. He is one of our Backend
                developers and our team's scrum master.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
