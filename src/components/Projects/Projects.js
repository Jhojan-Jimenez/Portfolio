import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MortShopProductsPage from "../../Assets/Projects/MortShopProductsPage.png";
import WheelUSCreateRidePage from "../../Assets/Projects/WheelUSCreateRidePage.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import {
  SiDjango,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiLeaflet,
  SiNextdotjs,
  SiOpenstreetmap,
  SiReact,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import { DiDjango, DiNodejs, DiPostgresql } from "react-icons/di";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong> más recientes
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={WheelUSCreateRidePage}
              title="WheelUS"
              description="WheelUS es una innovadora plataforma de transporte universitario diseñada para conectar estudiantes mediante un sistema de reservas y creación de viajes."
              features={[
                "Interfaz interactiva basada en un mapa.",
                "Los usuarios pueden reservar o crear viajes personalizados.",
                "Selección de paradas a través de clics en el mapa utilizando Leaflet y OpenStreetMap.",
                "Sistema de chat en tiempo real.",
                "Notificaciones instantáneas a través de WebSockets para comunicación fluida.",
                "Cambio entre roles de pasajero y conductor para experiencias personalizadas.",
              ]}
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
              ghLink="https://github.com/Jhojan-Jimenez/WheelUS-Front"
              demoLink="https://wheel-us-front.vercel.app"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={MortShopProductsPage}
              isBlog={false}
              title="MortShop"
              description="MortShop es una plataforma de e-commerce moderna y de alto rendimiento, desarrollada con Next.js, TypeScript y desplegada en Vercel."
              features={[
                "SSR (Server-Side Rendering) para mejorar el SEO.",
                "Integración eficiente de APIs.",
                "Seguridad robusta en la autenticación.",
                "Incorporación de tecnologías como Django, PostgreSQL y Djoser (JWT).",
                "Funciones de simulación de compra.",
                "Manejo de emails.",
                "Subida de imágenes a la nube.",
              ]}
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
              ghLink="https://github.com/Jhojan-Jimenez/Front-Shop"
              demoLink="https://front-django-lemon.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
