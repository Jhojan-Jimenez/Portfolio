import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MortShopProductsPage from "../../Assets/Projects/MortShopProductsPage.png";
import WheelUSCreateRidePage from "../../Assets/Projects/WheelUSCreateRidePage.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong> más recientes
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={WheelUSCreateRidePage}
              isBlog={false}
              title="WheelUS"
              description="WheelUS es una innovadora plataforma de transporte universitario diseñada para conectar estudiantes mediante un sistema de reservas y creación de viajes. Con una interfaz interactiva basada en un mapa, los usuarios pueden reservar o crear viajes personalizados, seleccionando paradas a través de clics en el mapa con Leaflet y OpenStreetMap. El sistema también incluye chat en tiempo real y notificaciones instantáneas, utilizando WebSockets para una comunicación fluida. Además, permite cambiar entre roles de pasajero y conductor, ofreciendo experiencias personalizadas. Desarrollado con React, Node.js, Firebase y JWT, WheelUS combina tecnologías avanzadas para ofrecer una solución de transporte eficiente, escalable y fácil de usar."
              ghLink="https://github.com/Jhojan-Jimenez/WheelUS-Front"
              demoLink="https://wheel-us-front.vercel.app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={MortShopProductsPage}
              isBlog={false}
              title="MortShop"
              description="MortShop es una plataforma de e-commerce moderna y de alto rendimiento, desarrollada con Next.js, TypeScript y desplegada en Vercel. Destaca por su SSR para mejorar el SEO, componentes React reutilizables, integración eficiente de APIs y seguridad robusta en la autenticación. Además, incorpora tecnologías como Django, PostgreSQL y Djoser (JWT) para ofrecer una experiencia segura y fluida, con funciones de simulación de compra, manejo de emails y subida de imágenes a la nube."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://front-django-lemon.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
