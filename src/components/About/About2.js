import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import myImg from "../../Assets/ucla.png";
import lahacks from "../../Assets/tla.png";
import acm from "../../Assets/acm.png";
import Tilt from "react-parallax-tilt";
import Table from "./Table";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="about2-section" id="about">
      <Container>
        <Row>

          <h1 style={{ fontSize: "2.5em"}}  className="about2-heading">
              Mission
            </h1>

            <p className="about2-body"> I'm a curious, driven, tech enthusiast who is passionate about applying computer science principles in software development, as well as creating mobile and web applications. I hope that by blending my technical skills with some creative thinking, I can create innovative products that can positively impact people's lives. </p>

          </Row>

          <hr /> 

            <Row>
          
          <Col md={8} className="about2-description">
            <h1 style={{ fontSize: "2.5em"}}  className="about2-heading">
              Academic Summary
            </h1>
            <p className="about2-body">
            <h3>American High School (Aug 2018 - Jun 2022)</h3>
              <ul>
                <li>Honor Graduate (Top 10 in Graduating Class)</li>
                <li>4.0 UW GPA</li>
              </ul>

              <br />

              <h3>UCLA (Sep 2022 - Jun 2026)</h3>
              <ul>
                <li>Majoring in Computer Science (B.S.) in the Henry Samueli School of Engineering and Applied Science
</li>
                <li>4.0 UW GPA</li>
                <li>Dean's Honor List</li>
              </ul>

    
            </p>
            
           
             

              <br />
    
            
          </Col>
          <Col md={3} className="myAvtar">
           
              <img src={myImg} className="img-fluid" alt="UCLA bear" />
           

            
          </Col>

          
        </Row>

        <Row>
        <Table></Table>
        </Row>

        <hr /> 

        <Row>


        <Col md={8} className="about2-description">
            <h1 className="about2-heading" style={{ fontSize: "2.5em"}}>
              Activities
            </h1>
            <p className="about2-body">
              <h3>ACM Board Operations Director</h3>
              <ul>
                <li>Organize and oversee large-scale ACM events with over <strong>700 attendees</strong> like Fall GM, Winter GM, and the Tech Gala.</li>
                <li>Work with UPE and the UCLA CS department in organizing CS Welcome Day for incoming freshmen</li>
                <li>Foster communication and collaboration between <strong> 8 different ACM committees</strong>, as well reach out to other engineering clubs on campus</li>
              </ul>

              <br />

              <h3>UPE Mentorship Chair</h3>
              <ul>
                <li>UPE stands for Upsilon Pi Epsilon, and is the <strong>computer science honors society </strong>  at UCLA </li>
                <li>Work with the mentorship committee to organize mentorship and career development opportunities such as mock interviews, career talks, and various socials. </li>
                <li>As an inductee, I also tutor CS and other STEM subjects two hours per week</li>
              </ul>

    
            </p>
            
           
             

              <br />
    
            
          </Col>

          <Col md={3} className="myAvtar">
            
              <img src={acm} className="img-fluid" alt="Group photo at ACM's annual banquet" />
          

            
          </Col>

          

          </Row>

          


          <hr></hr>


          <Row>

          <Col md={8} className="about2-description">
            <h1 className="about2-heading" style={{ fontSize: "2.5em"}}>
              Volunteering
            </h1>
            <p className="about2-body">
              <h3>ACM TeachLA Instructor</h3>
              <ul>
                <li> Create original course material on React Js to present weekly to local high schoolers from North Hollywood High School.</li>
                <li>Present React and Firebase workshops to over <strong>200 attendees </strong> during QWER Hacks and LA Hacks.</li>
              </ul>

              <br />

              <h3>iSTEM Co-founder/Volunteer</h3>
              <ul>
                <li>Created original course material using Micro:bits to teach over 50 elementary and middle school students basic Python skills for free</li>

              </ul>

    
            </p>
            
           
             

              <br />
    
            
          </Col>

          <Col md={3} className="myAvtar">
           
              <img src={lahacks} className="img-fluid" alt="Photo of our React workshop at LAHacks" />
            

            
          </Col>

          </Row>


      


      </Container>
    </Container>
  );
}
export default Home2;
