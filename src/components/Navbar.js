import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgFileDocument, CgFlag } from "react-icons/cg";
import Type from "./Home/Type";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, i18n } = useTranslation();
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setShowDropdown(false);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Type />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("aboutMe")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("projectsNav")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> CV
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ display: "flex", alignItems: "center" }}>
              <div style={{ position: "relative", margin: "auto" }}>
                <Button variant="light" onClick={toggleDropdown}>
                  <CgFlag style={{ marginBottom: "2px" }} /> {t("language")}
                </Button>

                {showDropdown && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      zIndex: 1000,
                      background: "#1b1a2ea9",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Button
                      variant={i18n.language === "es" ? "primary" : "light"}
                      onClick={() => changeLanguage("es")}
                      className="d-flex align-items-center mb-2"
                    >
                      {/* <img
                        src={esFlag}
                        alt="Español"
                        style={{ width: "20px", marginRight: "10px" }}
                      /> */}
                      Español
                    </Button>

                    <Button
                      variant={i18n.language === "en" ? "primary" : "light"}
                      onClick={() => changeLanguage("en")}
                      className="d-flex align-items-center"
                    >
                      {/* <img
                        src={enFlag}
                        alt="English"
                        style={{ width: "20px", marginRight: "10px" }}
                      /> */}
                      English
                    </Button>
                  </div>
                )}
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
