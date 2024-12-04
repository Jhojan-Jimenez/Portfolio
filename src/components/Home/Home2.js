import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/MyPhoto.jpeg";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ¡Hola y bienvenido a mi{" "}
              <span className="purple"> Portafolio </span>!
            </h1>
            <p className="home-about-body">
              Soy <b className="purple"> Jhojan Jiménez</b>, desarrollador web
              con experiencia en tecnologías como
              <i>
                <b className="purple"> React, Node.js y Django </b>
              </i>
              <br />
              <br />
              Apasionado por la creación de soluciones innovadoras, me
              especializo en el desarrollo de <b className="purple">APIs</b> y
              la gestión de <b className="purple"> bases de datos</b> tanto
              relaciones como no relacionales.
              <br />
              <br />
              Además, estoy en constante aprendizaje en áreas como la
              <b className="purple"> inteligencia artificial</b> y el machine
              learning.
              <br />
              <br />
              Mi enfoque se basa en el{" "}
              <b className="purple"> trabajo colaborativo</b>, el liderazgo y la
              entrega de resultados de alto impacto. Aquí encontrarás algunos de
              mis <b className="purple"> proyectos</b> más destacados, donde
              combino creatividad y tecnología para resolver problemas de manera
              eficiente. ¡Espero que disfrutes el recorrido!
            </p>
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
            <h1>Otras plataformas</h1>
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
