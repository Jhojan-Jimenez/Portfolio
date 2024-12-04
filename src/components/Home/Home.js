import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section style={{ height: "100%" }}>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Particle />
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
