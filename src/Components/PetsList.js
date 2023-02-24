import React, { Component } from "react";
import PetsCard from "./PetsCard";
import { Pets } from "../Data/Pets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

class PetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPets: Pets,
      PetsRace: "",
      PetsType: "",
      PetsLocation: "",
      PetsName: "",

    };

  }

  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Search with Race</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ PetsRace: e.target.value })}
            placeholder="Race"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Search By Type </Form.Label>
          <Form.Control
            onChange={(event) =>
              this.setState({ PetsType: event.target.value })
            }
            placeholder="Type"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Search By location</Form.Label>
          <Form.Control
            onChange={(event) =>
              this.setState({ PetsLocation: event.target.value })
            }
            placeholder="location"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Search By Name</Form.Label>
          <Form.Control
            onChange={(event) =>
              this.setState({ PetsName: event.target.value })
            }
            placeholder="location"
          />
        </Form.Group>

        <Container>
          <Row>
            {this.state.listOfPets
              .filter(
                (pet) =>
                  pet.race
                    .toLowerCase()
                    .includes(this.state.PetsRace.toLowerCase()) &&
                  pet.type
                    .toLowerCase()
                    .includes(this.state.PetsType.toLowerCase()) &&
                  pet.location
                    .toLowerCase()
                    .includes(this.state.PetsLocation.toLowerCase()) &&
                    pet.name
                    .toLowerCase()
                    .includes(this.state.PetsName.toLowerCase())
              )
              .map((pet) => (
                <Col>
                  <PetsCard
                    name={pet.name}
                    race={pet.race}
                    type={pet.type}
                    location={pet.location}
                    photo={pet.photo}
                    status={pet.status}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default PetsList;
