import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Container fluid className="bg-black pd-2 ">
      <Row>
        <Col></Col>
        <Col s={12} md={3} lg={4} className="my-3">
          {/* <p className="float-start"> */}
          <Facebook size={20} className="me-3" />
          <Instagram size={22} className="me-3" />
          <Twitter size={22} className="me-3" />
          <Youtube size={22} className="me-3" />
          {/* </p> */}
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-2">
        <Col></Col>
        <Col xs={12} md={3} lg={4} className="d-flex mb-2">
          <Col>
            <div>Audio and Subtitles</div>
            <div>Media Center</div>
            <div>Privacy</div>
            <div>Contact Us</div>
          </Col>
          <Col>
            <div>Audio Description</div>
            <div>Investor Relatrions</div>
            <div>Legal Notices</div>
          </Col>
          <Col>
            <div>Help Center</div>
            <div>Jobs</div>
            <div>Cookie Preferencies</div>
          </Col>
          <Col>
            <div>Gift Cards</div>
            <div>Terms of Use</div>
            <div>Corporate Informations</div>
          </Col>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
