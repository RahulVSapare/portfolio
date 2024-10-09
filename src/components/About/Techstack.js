import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 color="#1A4D2E" />
        <h1 className="purple">HTML</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 color="#1A4D2E" />
        <h1 className="purple">CSS3</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="#1A4D2E" />
        <h1 className="purple">Javascript</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="#1A4D2E" />
        <h1 className="purple">React.js</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="#1A4D2E" />
        <h1 className="purple">Node.js</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit color="#1A4D2E" />
        <h1 className="purple">Git</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase color="#1A4D2E" />
        <h1 className="purple">Firebase</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava color="#1A4D2E" />
        <h1 className="purple">Java</h1>
      </Col>
    </Row>
  );
}

export default Techstack;
