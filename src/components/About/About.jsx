import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
import { Image } from "react-bootstrap";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import team from "../../img/team.png.jpg";
import NavbarHead from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div>
      <NavbarHead />
      <section className="about-section my-4">
      <div className="d-flex justify-content-center">
        <h3 className="" style={{ color: "#71a1e9" }}>
                About Us
              </h3>
      </div>
        <Container>
          <Row style={{ padding: "40px" }}>
            <Col md={6}>
              <div className="">
                <Image src={team} alt="About Us" fluid />
              </div>
            </Col>
            <Col md={6}>
              
              <p style={{fontSize:"16px",fontFamily:"roboto"}}>
                Welcome to our website! We are a one-stop-shop for all your home
                maintenance and repair needs. Whether you need an electrician,
                plumber, AC technician, RO service, broadband installation or
                CCTV installation, we've got you covered.
              </p>
              <p style={{fontSize:"16px",fontFamily:"roboto"}}>
                Our team is made up of highly skilled and experienced
                professionals who are dedicated to providing you with
                top-quality services at competitive prices. We take pride in
                offering exceptional customer service and guaranteeing customer
                satisfaction with every job we undertake.
              </p>
              <p style={{fontSize:"16px",fontFamily:"roboto"}}>
                We understand that finding reliable and trustworthy service
                providers can be a daunting task, which is why we have made it
                our mission to make the process as easy and stress-free as
                possible. You have the option to either directly contact the
                service worker details or book the service worker from our site.
              </p>
              <p style={{fontSize:"16px",fontFamily:"roboto"}}>
                We also offer contract services for those who require regular
                maintenance and repair work. Our team will work closely with you
                to develop a customized plan that fits your specific needs and
                budget.
              </p>
              <p style={{fontSize:"16px",fontFamily:"roboto"}}>Thank you for considering us for your home maintenance and repair needs. We look forward to serving you soon!</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col md={6} className="mb-4" style={{ width: "30%" }}>
              <Card>
                <CardImg top src={team} alt="About Us" />
                <CardBody>
                  <CardTitle tag="h5">Director</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis elementum pharetra.
                  </CardText>
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:director@example.com">
                      director@example.com
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhone className="mr-2" />
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} className="mb-4" style={{ width: "30%" }}>
              <Card>
                <CardImg top src={team} alt="About Us" />
                <CardBody>
                  <CardTitle tag="h5">Manager</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis elementum pharetra.
                  </CardText>
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:manager@example.com">manager@example.com</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhone className="mr-2" />
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} className="mb-4" style={{ width: "30%" }}>
              <Card>
                <CardImg top src={team} alt="About Us" />
                <CardBody>
                  <CardTitle tag="h5">CEO</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae turpis elementum pharetra.
                  </CardText>
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:ceo@example.com">ceo@example.com</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhone className="mr-2" />
                    <a href="tel:+1234567890">(123) 456-7890</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
