import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import saloon from "../../Assets/Projects/Saloon.jpg";
import cardAnimation from "../../Assets/Projects/cardAnimation.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#1A4D2E" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saloon}
              isBlog={false}
              title="Saloon"
              description="HTML CSS website for saloon prototype."
              ghLink="https://github.com/RahulVSapare/Cut-Style/tree/main"
              demoLink="https://rahulvsapare.github.io/Cut-Style/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardAnimation}
              isBlog={false}
              title="Card Animation"
              description="Card Animation done from comple CSS"
              ghLink="https://github.com/RahulVSapare/CardAnimation_CSS"
              demoLink="https://rahulsapare.github.io/Card_Animation_CSS/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
