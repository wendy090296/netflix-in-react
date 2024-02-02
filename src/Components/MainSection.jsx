import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import { CaretDownFill } from "react-bootstrap-icons";
import { Grid } from "react-bootstrap-icons";
import { Grid3x3Gap } from "react-bootstrap-icons";
import HarryPotter from "./HarryPotter";
import StarWars from "./StarWars";
import Twilight from "./Twilight";

class MainSection extends Component {
  render() {
    return (
      <Container fluid className="bg-black">
        <Row>
          <Col>
            <div className="d-inline-block float-start">
              <h4 className="d-inline-block text-white me-4">TV Shows</h4>{" "}
              <span>
                <Button className="px-2" variant="outline-light rounded-0">
                  Genres <CaretDownFill color="white" size={8} />
                </Button>{" "}
              </span>
            </div>
            <p className="d-inline-block float-end">
              <Grid color="white" size={20} className="me-3" />
              <Grid3x3Gap color="white" size={20} className="me-3" />
            </p>
          </Col>
        </Row>
        <HarryPotter />
        <StarWars />
        <Twilight />
      </Container>
    );
  }
}

export default MainSection;
