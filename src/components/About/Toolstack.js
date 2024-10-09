import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiWindows,
  SiJira,
  SiFigma,
  SiSpringboot,
  SiAdobexd,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows color="#1A4D2E"/>
        <h2 className="purple">Windows</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#1A4D2E"/>
        <h2 className="purple">Visual Studio</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#1A4D2E"/>
        <h2 className="purple">Postman</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira color="#1A4D2E"/>
        <h2 className="purple">Jira</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma color="#1A4D2E"/> 
        <h2 className="purple">Figma</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd color="#1A4D2E"/>   
        <h2 className="purple">Adobe XD</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot color="#1A4D2E"/> 
        <h2 className="purple">SpringBoot</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
