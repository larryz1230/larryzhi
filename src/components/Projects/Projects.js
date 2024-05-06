import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import tosterimg from "../../Assets/toster.png"
import mgimg from "../../Assets/musicglass.png"
import pathfinderimg from "../../Assets/pathfinder.png"
import mycouncilimg from  "../../Assets/mycouncil.png"
import fleximg from  "../../Assets/flex.png"
import datimg from  "../../Assets/dat.png"
import pnet from "../../Assets/pnet.png"
import peachp from "../../Assets/peachp.png"
import datewalk from "../../Assets/datewalk.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent Projects 
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my favorite projects!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datimg}

              title="Load Board Automation"
              status = "Status: In Progress"
              description="I am currently working on a Typescript program to find optimal loads for a local trucking company by webscraping the DAT load board. The program runs twice a day and uses an algorithm to take into account price, downtime, and credit; it then uses nodemailer to send report emails to the trucking company with suggested loads. "
              ghLink=""

            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datewalk}

              title="Datewalk"
              description="Datewalk is a web-based dating application that aims to simplify building new relationships at UCLA. Users are matched based on certain tags that they pick for themselves within their profile or upon registration, as well as reviews given by previously matched users that rate their experience with the current user. This application was created with the MERN stack, which consists of MongoDB, Express, React, and Node JS. "
              demoLink="https://drive.google.com/file/d/1WQdIX0PhD1p1y0eTtbZCbQ2KRIsF9Agn/view"
              ghLink="https://github.com/ParsaHaji09/datingapp35L"

            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tosterimg}

              title="TOS-ter"
              status = "Awards: Mega Hackathon 2023 Second Place"
              description="TOS-ter is a full stack web application built using a MERN stack and OpenAI's API, that uses large language models to summarize terms of service documents. The app allows users to upload a pdf of a terms of service contract, and also generates a privacy rating based on the contract's details and historical information about the company."
              ghLink="https://github.com/larryz1230/TOSter"
              demoLink="https://devpost.com/software/tos-ter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mgimg}

              title="Music Glass"
              description="Music Glass is a web application my team and I created at LA Hacks 2023 that generates a playlist for any activity. The app first uses OpenAI API to convert text into the most relevant genres, then uses Spotify API and dynamic programming algorithms to generate a playlist with the exact time length that the user inputs."
              ghLink="https://github.com/yimmyj/LAHacks2023/tree/main"
              demoLink="https://devpost.com/software/music-glass"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathfinderimg}

              title="PathFinder"
              description="PathFinder is a React Native application that runs on both Android and IOS and helps small businesses and delivery drivers maximize revenue by minimizing delivery times through route optimization (travelling salesman algorithm). My team and I gathered map and traffic data from Google Maps API and also implemented a LAMP stack backend where we used PHP scripts to interact with our mySQL database."
              ghLink="https://github.com/aarli421/PathfinderApp"
              demoLink="https://devpost.com/software/pathfinder-yw78fq"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mycouncilimg}

              title="MyCouncil"
              status = "Awards: Epsilon Hacks Best App"
              description="MyCouncil is a mobile forum application built using Android Studio with the goal of providing direct communication between citizens and local government. In order to maintain clean code, we used object-oriented programming to manage users, posts, and polls on our application. For databasing, we used PHP and mySQL through our LAMP stack backend. "
              ghLink="https://github.com/aarli421/MyCouncilApp"
              demoLink="https://devpost.com/software/mycouncil"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fleximg}

              title="Flexbot"
              description="This is a python script that I developed to automate 'flex time' signups at my high school. Instead of spending a couple minutes signing in and selecting a classroom every day, I used selenium's webdriver to do it for me. By writing an algorithm to check for valid school days, I was able to sign up for the entire school year in just a couple minutes. I would later add additional features, like selecting different classrooms on different days of the week."
              ghLink="https://github.com/larryz1230/flexx"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pnet}

              title="Pnet Phlix"
              description="This project is a movie recommendation app built with C++ that ranks real-world films according to user compatibility. This compatibility was calculated based on genre/actor/director similarities with user’s watch history (i.e. each similar actor in the user's watch history would increase the movie's compatibility score by 10). I created optimized BST multimaps to load data from .txt files and calculate scores for 20K+ movies & 100K+ users in < 1s."
              ghLink="https://github.com/larryz1230/pnetphlix"
        
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peachp}
              title="Peach Party"
              description="Peach Party is a board game created using C++ that is similar to the video game Mario Party. Players roll dice and obtain gold and stars while advancing through the map, choosing directions whenever their character hits a fork and teleporting on special squares. This project heavily utilized object-oriented programming techniques as there were over 15 different clases of characters, tiles, and projectiles in the game."
              ghLink="https://github.com/larryz1230/PeachParty"
        
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
