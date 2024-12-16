import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DiDjango, DiNodejs, DiPostgresql } from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiNextdotjs,
  SiOpenstreetmap,
  SiReact,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import MortShopProductsPage from "../../Assets/Projects/MortShopProductsPage.png";
import WheelUSCreateRidePage from "../../Assets/Projects/WheelUSCreateRidePage.png";
import Particle from "../Particle";
import MortShopCard from "./MortShop";
import WheelUSCard from "./WheelUS";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong> más recientes
        </h1>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={12} className="project-card">
            <WheelUSCard
              imgPath={WheelUSCreateRidePage}
              title="WheelUS"
              technologies={[
                {
                  name: "NodeJS",
                  icon: <DiNodejs />,
                },
                {
                  name: "Firebase",
                  icon: <SiFirebase />,
                },
                {
                  name: "Express",
                  icon: <SiExpress />,
                },
                {
                  name: "React",
                  icon: <SiReact />,
                },
                {
                  name: "OpenStreetMap",
                  icon: <SiOpenstreetmap />,
                },
                {
                  name: "JWT",
                  icon: <SiJsonwebtokens />,
                },
                {
                  name: "WebSockets",
                  icon: <SiSocketdotio />,
                },
                { name: "Typescript", icon: <SiTypescript /> },
              ]}
              ghBackLink="https://github.com/Jhojan-Jimenez/WheelUS-Back"
              ghFrontLink="https://github.com/Jhojan-Jimenez/WheelUS-Front"
              demoLink="https://wheel-us-front.vercel.app"
            />
          </Col>

          <Col md={12} className="project-card">
            <MortShopCard
              imgPath={MortShopProductsPage}
              title="MortShop"
              technologies={[
                {
                  name: "Django",
                  icon: <DiDjango />,
                },
                {
                  name: "NextJs",
                  icon: <SiNextdotjs />,
                },
                {
                  name: "PostgreSQL",
                  icon: <DiPostgresql />,
                },
                {
                  name: "JWT",
                  icon: <SiJsonwebtokens />,
                },
                { name: "Typescript", icon: <SiTypescript /> },
              ]}
              ghBackLink="https://github.com/Jhojan-Jimenez/Back-Shop"
              ghFrontLink="https://github.com/Jhojan-Jimenez/Front-Shop"
              DocumentationLink="https://mortshop.onrender.com/api/schema/swagger-ui/"
              demoLink="https://front-django-lemon.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
