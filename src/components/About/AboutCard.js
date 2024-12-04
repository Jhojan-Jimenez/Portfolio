import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Jhojan Jimenez </span> desarrollador
            web apasionado por la tecnología y el aprendizaje continuo. Me gusta
            explorar nuevas herramientas y lenguajes de programación,
            especialmente en áreas como la inteligencia artificial y el
            desarrollo de APIs.
            <br />
            <br />
            Actualmente, me dedico a perfeccionar mis habilidades en React,
            Node.js y Django, mientras colaboro en{" "}
            <span className="purple">proyectos</span> que combinan creatividad y
            tecnología. Además, en mi tiempo libre, me interesan los deportes y
            el análisis de tendencias tecnológicas.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>"Keep It Simple Stupid" </p>
          <footer className="blockquote-footer">Kelly Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
