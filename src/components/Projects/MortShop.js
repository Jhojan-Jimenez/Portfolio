import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import "./ProjectCard.css";
import { useTranslation } from "react-i18next";

function MortShopCard(props) {
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
                {t("projectDescription")}{" "}
                <span className="purple">{t("ecommerce")}</span>{" "}
                {t("projectTechStack")}
              </Card.Text>

              <div className="features-list mb-4">
                <div className="feature-item">
                  <span className="bullet">• </span>
                  <span className="purple">{t("ssr")}</span> {t("featureSEO")}
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureAPIIntegration")}{" "}
                  <span className="purple">{t("apis")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureDatabase")}{" "}
                  <span className="purple">{t("sql")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureSecurity")}{" "}
                  <span className="purple">{t("djoserJWT")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureSimulation")}
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureTransactions")}{" "}
                  <span className="purple">{t("emails")}</span>
                </div>
                <div className="feature-item">
                  <span className="bullet">• </span>
                  {t("featureImageUpload")}{" "}
                  <span className="purple">{t("cloud")}</span>
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
                    {t("github")}
                  </Button>

                  {props.demoLink && (
                    <Button
                      variant="primary"
                      href={props.demoLink}
                      target="_blank"
                      className="project-btn"
                    >
                      <CgWebsite className="me-2" />
                      {t("demo")}
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

export default MortShopCard;
