import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/MyPhoto.jpeg";
import { useTranslation } from "react-i18next";
function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div>
              <h1 style={{ fontSize: "2.6em" }}>
                {t("welcomeMessage")}{" "}
                <span className="purple">{t("portfolio")}</span>!
              </h1>
              <p className="home-about-body">
                {t("intro")} <b className="purple">{t("name")}</b>,{" "}
                {t("webDeveloper")}{" "}
                <i>
                  <b className="purple">{t("technologies")}</b>
                </i>
                <br />
                <br />
                {t("passion")} <b className="purple">{t("apiDevelopment")}</b>{" "}
                {t("and")} <b className="purple">{t("databaseManagement")}</b>{" "}
                {t("bothRelationalAndNonRelational")}.
                <br />
                <br />
                {t("constantLearning")} <b className="purple">{t("aiAndML")}</b>
                .
                <br />
                <br />
                {t("focus")} <b className="purple">{t("collaboration")}</b>,{" "}
                {t("leadership")}, {t("highImpactResults")}.{" "}
                {t("portfolioIntro")} <b className="purple">{t("projects")}</b>,{" "}
                {t("creativityAndTech")}. {t("enjoyJourney")}!
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("plataforms")}</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jhojan-jimenez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jhojan-jimenez-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
