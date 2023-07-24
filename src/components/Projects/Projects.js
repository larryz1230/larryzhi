import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import tosterimg from "../../Assets/toster.png"
import mgimg from "../../Assets/musicglass.png"
import pathfinderimg from "../../Assets/pathfinder.png"



function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={suicide}

              title="Load Board Automation"
              status = "Status: In Progress"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tosterimg}

              title="TOS-ter"
              description="TOS-ter is a full stack web application built using a MERN stack and OpenAI's API, that uses large language models to summarize terms of service documents. It also generates a privacy rating based on the contract's details and historical information about the company."
              ghLink="https://github.com/larryz1230/TOSter"
              demoLink="https://devpost.com/software/tos-ter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mgimg}

              title="Music Glass"
              description="Music Glass is a web application that generates a playlist for any activity. The app first uses OpenAI API to convert text into the most relevant genres, then uses Spotify API and dynamic programming algorithms to generate a playlist with the exact time length that the user inputs."
              ghLink="https://github.com/yimmyj/LAHacks2023/tree/main"
              demoLink="https://devpost.com/software/music-glass"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathfinderimg}

              title="PathFinder"
              description="PathFinder is a React Native application that helps small businesses and delivery drivers maximize revenue by minimizing delivery times through route optimization (travelling salesman algorithm). My team and I used data from Google Maps API and also implemented a LAMP stack backend where we wrote php code to interact with the mysql database."
              ghLink="https://github.com/aarli421/PathfinderApp"
              demoLink="https://devpost.com/software/pathfinder-yw78fq"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={leaf}

              title="MyCouncil"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/aarli421/PathfinderApp"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={suicide}

              title="Flexbot"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
