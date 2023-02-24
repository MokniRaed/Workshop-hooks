import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

class PetsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petStatus: props.status,
    };
  }
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          {this.state.petStatus ? (
            <Badge bg="success">Adopted</Badge>
          ) : (
            <Badge bg="danger">Not Yet</Badge>
          )}
          <Card.Img variant="top" src={this.props.photo} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              <h5>race:</h5> <p>{this.props.race}</p>
              <h5>type:</h5> <p>{this.props.type}</p>
              <h5>location:</h5> <p>{this.props.location}</p>
            </Card.Text>
            <Button
              onClick={() =>
                this.setState({ petStatus: !this.state.petStatus })
              }
              variant="primary"
            >
              Change Status
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default PetsCard;
