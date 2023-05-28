import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Service from "./Service/Service";
import Footer from "./Footer/Footer";
import Customer from "./Customer/Customer";
import { Carousel } from "react-bootstrap";
import ChatBotrobo from "./Chatbot";
import BenefitsPage from "./Contact/Benifit";
import team from "../img/team.png.jpg";
import DemandServices from "./Service/DemandServices";
import OurSite from "./Booking/OurSite";
import { HelmetProvider, Helmet } from "react-helmet-async"
import Alert1 from "./Alert";
import { useDispatch } from "react-redux";
import { onClearAlert, onSetAlert } from "../Action/AlertAction";
// import HOMOSOLUTION from '../img/HOMOSOLUTION.png'

function Header() {

  const dispatch = useDispatch()
  // const auth = JSON.parse(localStorage.getItem("state"));

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

//   useEffect(()=>{
//    if(auth && auth.login && auth.login.isAuthenticated){
//     dispatch(onClearAlert())
//    }else{
//     dispatch(onSetAlert("warning","Please login first then start booking technician"))
//    }
    
// },[])

  return (
<>  

  <HelmetProvider>
      <Helmet>
        <title>Repairinminute | Home Services</title>
        <meta name='description' content='Book your electrician, plumber, ac technician, ro technician , broadband technician, cctv technician at one platform' />
      </Helmet>
      <Navbar />
      
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-md-12 p-0">
          <Alert1/>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://img.freepik.com/free-vector/electricians-infographics-illustration_1284-67695.jpg?w=900&t=st=1683397819~exp=1683398419~hmac=94a3e9739445b4ab2bf8ed2662eb449dbf5189389bb723953b08d61375bd9d84"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Electrician</h3>
                  <p>The Best Solution of your all Home problem</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Plumbers</h3>
                  <p>The Best Solution of your all Home problem.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ="
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>A.C. Technician</h3>
                  <p>The Best Solution of your all Home problem.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <section className="add">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Service />
              <BenefitsPage />
              {/* <About /> ............................................................................*/}
              <section className="about-section my-4">
                <Container>
                  <Row style={{ padding: "40px" }}>
                    <Col md={6}>
                      <div className="img_wrapper">
                        <Image src={team} alt="About Us" fluid />
                      </div>
                    </Col>
                    <Col md={6}>
                      <h3 className="" style={{ color: "#71a1e9" }}>
                        About Us
                      </h3>
                      <p>
                        Welcome to our website! We are a one-stop-shop for all
                        your home maintenance and repair needs. Whether you need
                        an electrician, plumber, AC technician, RO service,
                        broadband installation or CCTV installation, we've got
                        you covered.
                      </p>
                      <p>
                        Our team is made up of highly skilled and experienced
                        professionals who are dedicated to providing you with
                        top-quality services at competitive prices. We take
                        pride in offering exceptional customer service and
                        guaranteeing customer satisfaction with every job we
                        undertake.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/* ...................................................................................... */}
              <Customer />

              <OurSite />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
        <ChatBotrobo />
      </section>
    </HelmetProvider>
    </>
  );
}
export default Header;
