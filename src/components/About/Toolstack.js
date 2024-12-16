import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker } from "react-icons/di";
import {
  SiPostman,
  SiTrello,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <span className="icon-name">VSC</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <span className="icon-name">Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <span className="icon-name">Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <span className="icon-name">Trello</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <span className="icon-name">Docker</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
