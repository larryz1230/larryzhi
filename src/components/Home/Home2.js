import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Brief Introduction ... 
            </h1>
            <p className="home-about-body">
              I'm originally from the Bay Area, but currently studying computer science at UCLA 🧸 
              <br />
              <br />I Enjoy: 
              
              
              <ul>
              <li>
                <p> Playing soccer and ultimate frisbee </p>
              </li>

              <li>
                <p> Hiking / taking photos of nature </p>
              </li>

              <li>
                <p> Listening to kpop </p>
              </li>

              <li>
                <p> And meeting new people! </p>
              </li>
              </ul>
              
    
              <br />
              I also love coding in my free time!   I frequently participate in hackathons for fun and also recently began self-learning ML from online resources.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/larryz1230"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/larry-zhi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/larryz1230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
