import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

function WheelUSCard(props) {
  const { t } = useTranslation();
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
                {t("project.description")}{" "}
                <span className="purple">{t("project.transportPlatform")}</span>
                {t("project.details")}
              </Card.Text>

              <div className="features-list mb-4">
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureInteractiveInterface")}{" "}
                  <span className="purple">{t("project.map")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureBookingAndCreation")}{" "}
                  <span className="purple">{t("project.customTrips")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureStopsSelection")}{" "}
                  <span className="purple">
                    {t("project.leafletOpenStreetMap")}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureRealtimeChat")}{" "}
                  <span className="purple">{t("project.chat")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureImageUpload")}{" "}
                  <span className="purple">{t("project.cloud")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  <span className="purple">
                    {t("project.notifications")}
                  </span>{" "}
                  {t("project.instantNotifications")}
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureRoleSwitch")}{" "}
                  <span className="purple">{t("project.roles")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("project.featureDatabaseHandling")}{" "}
                  <span className="purple">{t("project.noSQL")}</span>
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
                    {t("project.github")}
                  </Button>

                  {props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      className="project-btn"
                    >
                      <CgWebsite className="me-2" />
                      {t("project.demo")}
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
