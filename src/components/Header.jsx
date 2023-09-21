import React, { useEffect } from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Service from "./Service/Service";
import Footer from "./Footer/Footer";
import Customer from "./Customer/Customer";
import { Carousel } from "react-bootstrap";
import ChatBotrobo from "./Chatbot";
import BenefitsPage from "./Contact/Benifit";
import team from "../img/team.png.jpg";
import OurSite from "./Booking/OurSite";
import NewBookingPage from "./Booking/NewBookingPage";
import { HelmetProvider, Helmet } from "react-helmet-async"



function Header() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const handleBook =()=>{
    window.scrollTo(0,600)
  }


return (
 <>  
  <HelmetProvider>
      <Helmet>
        <title>Repairinminute | Home Services</title>
        <meta name='description' content='Book your electrician, plumber, ac technician, ro technician , broadband technician, cctv technician at one platform' />
      </Helmet>

      <div style={{overflow:"hidden"}}>
      <Navbar />

      {/* <div style={{padding:"2rem 0rem 0rem"}}>
      <MultiCarousel/>
      </div> */}
      <div className="container-fluid p-1 px-0">
        <div className="row m-0">
          <div className="col-md-12 p-0">
           
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Electricianbanner.png"
                  alt="First slide"
                  onClick={handleBook}
                />
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Plumberbanner.png"
                  alt="Second slide"
                  onClick={handleBook}
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Acbanner.png"
                  alt="Third slide"
                  onClick={handleBook}
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Cctvbanner.png"
                  alt="Forthe slide"
                  onClick={handleBook}
                />
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Robanner.png"
                  alt="Fifth slide"
                  onClick={handleBook}
                />
               
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  rel="preload" 
                  src="https://onehomesolution.000webhostapp.com/uploadImage/Broadbandbanner.png"
                  alt="Sixth slide"
                  onClick={handleBook}
                />
                
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <section className="add">
        <div className="container-fluid p-0 m-0">
          <div className="row">
            <div className="col-md-12">
              <Service />
              <BenefitsPage />
              {/* <About /> ............................................................................*/}
              <section className="about-section my-4">
                <Container >
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
                      <p style={{ fontSize: "1.4rem",fontWeight:"600", fontFamily: "roboto" }}>
                        Welcome to our website! We are a one-stop-shop for all
                        your home maintenance and repair needs. Whether you need
                        an electrician, plumber, AC technician, RO service,
                        broadband installation or CCTV installation, we've got
                        you covered.
                      </p>
                      <p style={{ fontSize: "1.4rem",fontWeight:"600", fontFamily: "roboto" }}>
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

              {/* <OurSite /> */}
              <NewBookingPage/>
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
      </div>
    </HelmetProvider>
    </>
  );
}
export default Header;
