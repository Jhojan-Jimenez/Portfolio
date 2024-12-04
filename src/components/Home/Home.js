import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
