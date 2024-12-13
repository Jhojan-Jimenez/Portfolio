import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import laptopImg from "../../Assets/AboutMeImg.jpg";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("aboutTitle")} <strong className="purple">{t("me")}</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    {t("aboutIntro")}{" "}
                    <span className="purple">{t("name")}</span>{" "}
                    {t("aboutPassion")}
                    <br />
                    <br />
                    {t("aboutSkills")}
                    <span className="purple">{t("projects")}</span>{" "}
                    {t("aboutCreativityAndTech")}
                    <br />
                    <br />
                    {t("aboutHobbies")}
                  </p>

                  <p style={{ color: "rgb(155 126 172)" }}>
                    {t("favoriteQuote")}
                  </p>
                  <footer className="blockquote-footer">
                    {t("quoteAuthor")}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} style={{ margin: "auto" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t("technicalSkills")}{" "}
          <strong className="purple">{t("technical")}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t("tools")}</strong> {t("iUse")}
        </h1>

        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
