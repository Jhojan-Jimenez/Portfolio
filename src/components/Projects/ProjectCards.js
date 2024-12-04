import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <Card className="project-card">
      <Card.Body className="p-0">
        <Row className="g-0">
          <Col md={7} className="position-relative">
            <div className="image-container">
              <Card.Img
                src={props.imgPath}
                alt={props.title}
                className="project-image"
              />
              <div className="image-overlay">
                <div className="tech-stack">
                  {props.technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                      {tech.icon}
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} className="d-flex flex-column">
            <div className="content-wrapper p-4">
              <Card.Title className="project-title mb-3">
                {props.title}
              </Card.Title>

              <Card.Text className="project-description mb-4">
                {props.description}
              </Card.Text>

              <div className="features-list mb-4">
                {props.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="bullet">•</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="d-flex gap-3 justify-content-center">
                  <Button
                    variant="outline-primary"
                    href={props.ghLink}
                    target="_blank"
                    className="project-btn"
                  >
                    <BsGithub className="me-2" />
                    GitHub
                  </Button>

                  {props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      className="project-btn"
                    >
                      <CgWebsite className="me-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
