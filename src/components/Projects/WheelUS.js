import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./ProjectCard.css";

function WheelUSCard(props) {
  return (
    <Card className="project-card">
      <Card.Body className="p-0">
        <Row className="g-0">
          <Col md={6} className="position-relative">
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
          <Col md={6} className="d-flex flex-column">
            <div className="content-wrapper p-4">
              <Card.Title className="project-title mb-3 purple">
                {props.title}
              </Card.Title>

              <Card.Text className="project-description mb-4">
                WheelUS es una innovadora{" "}
                <span className="purple">plataforma de transporte </span>
                universitario diseñada para conectar estudiantes mediante un
                sistema de reservas y creación de viajes
              </Card.Text>

              <div className="features-list mb-4">
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Interfaz interactiva basada en un{" "}
                  <span className="purple">mapa</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Los usuarios pueden{" "}
                  <span className="purple">reservar o crear</span> viajes
                  personalizados
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Selección de paradas a través de clics en el mapa utilizando
                  Leaflet y<span className="purple"> OpenStreetMap</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Sistema de <span className="purple"> chat</span> en tiempo
                  real
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Subida de imágenes a la <span className="purple"> nube</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  <span className="purple"> Notificaciones</span>
                  instantáneas a través de{" "}
                  <span className="purple"> WebSockets</span> para comunicación
                  fluida
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Cambio entre <span className="purple"> roles</span>
                  de pasajero y conductor para experiencias personalizadas
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  Manejo de información con bases de datos{" "}
                  <span className="purple"> no SQL</span>
                </div>
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

export default WheelUSCard;
