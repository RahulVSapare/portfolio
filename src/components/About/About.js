import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/working3.png";
import Toolstack from "./Toolstack";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              className="green"
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
            >
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginTop:"1rem", marginBottom:"3rem" }}>
          <h1 className="project-heading">
            My <strong className="purple">Resume/CV </strong>
          </h1>
          <div style={{margin:"2rem"}}>

          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1ZECZfHVYPRrXAlaBIb23FJdNiw63JTX8/view?usp=drivesdk"
            target="_blank"
            style={{ maxWidth: "250px" }}
            >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
            </div>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
