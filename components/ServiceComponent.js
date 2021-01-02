import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <Container className="service-container">
      <Row>
        <Col xs={12} md={4}>
          ONE
        </Col>
        <Col xs={12} md={4}>
          TWO
        </Col>
        <Col xs={12} md={4}>
          THREE
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceComponent;
