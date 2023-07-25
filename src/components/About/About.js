import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About2 from './About2';


function About() {
  return (
    <>
    
    <Container fluid className="about-section">

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <h1 style={{ fontSize: "2.5em", paddingBottom: "20px", fontWeight: "500" }}>
              More About Me!
            </h1>
        </Row>



        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>

    <About2></About2>

    </>
  );
}

export default About;
