import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {

  const isLinkPresent = props.ghLink !== '';

  
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="No img found" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.status}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {isLinkPresent ? (
      <Button variant="primary" href={props.ghLink} target="_blank">
        <BsGithub /> &nbsp;
        Github
      </Button>
    ) : null}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Devpost"}
          </Button>
        )}


        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
