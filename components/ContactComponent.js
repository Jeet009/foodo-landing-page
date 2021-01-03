import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactComponent() {
  return (
    <Container className="contact-component">
      <Row>
        <Col xs={12} md={4}>
          <h1>FOODO</h1>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <b>Links</b>
          <br />
          <br />
          <h6>Overview</h6>
          <h6>Social Media</h6>
          <h6>Contact</h6>
        </Col>
        <Col xs={12} md={4}>
          <b>Company</b>
          <br />
          <br />
          <h6>Overview</h6>
          <h6>Social Media</h6>
          <h6>Contact</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactComponent;
