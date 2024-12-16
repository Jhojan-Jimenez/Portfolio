import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql, SiRedis } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="icon-name">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="icon-name">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span className="icon-name">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span className="icon-name">MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <span className="icon-name">Next.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="icon-name">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span className="icon-name">Firebase</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <span className="icon-name">Redis</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <span className="icon-name">PostgreSQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="icon-name">Python</span>
      </Col>
    </Row>
  );
}

export default Techstack;
