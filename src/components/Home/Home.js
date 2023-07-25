import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/dino.gif";
import NavBar from "../Navbar";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
        {/* <NavBar></NavBar> */}
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi there, {"     "} I'm Larry !
              </h1>
{/* 
              <h1 className="heading-name">
                My name is 
                <strong className="main-name"> Larry Zhi</strong>
              </h1> */}

              <div style={{ padding: 50, paddingTop:30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={avatar}
                alt="cute dino home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", maxWidth: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
