import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_section backColor">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled ">
              <li>Electrician</li>
              <li>Plumbering</li>
              <li>AC Technician</li>
              <li>RO repairing</li>
              <li>CCTV Services</li>
              <li>BroadBand Services</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Lucknow , Chinhat </li>
              <li>Matiyari</li>
              <li>Deva Road, Woods Apartment</li>
              <li>555-555-5555</li>
              <li>info@yoursite.com</li>
              <div className="mt-3 ">
                <a href="#" className="me-3">
                  <span
                    id="boot-icon"
                    className="bi bi-envelope"
                    style={{
                      fontSize: "20px",
                      color: " rgb(0, 0, 255)",
                      opacity: "1",
                      margin: "0px",
                    }}
                  ></span>
                </a>
                <a href="#" className="me-3">
                  <i
                    className="bi bi-linkedin"
                    style={{
                      fontSize: "20px",
                      color: " rgb(0, 0, 255)",
                      opacity: "1",
                      margin: "0px",
                    }}
                  ></i>
                </a>
                <a href="#" className="me-3">
                  <i
                    className="bi bi-whatsapp"
                    style={{
                      fontSize: "20px",
                      color: " rgb(0, 0, 255)",
                      opacity: "1",
                      margin: "0px",
                    }}
                  ></i>
                </a>
                <a href="#" className="me-3">
                  <i
                    className="bi bi-telephone"
                    style={{
                      fontSize: "20px",
                      color: " rgb(0, 0, 255)",
                      opacity: "1",
                      margin: "0px",
                    }}
                  ></i>
                </a>
                <a href="#" className="me-3">
                  <i
                    className="bi bi-instagram"
                    style={{
                      fontSize: "20px",
                      color: " rgb(0, 0, 255)",
                      opacity: "1",
                      margin: "0px",
                    }}
                  ></i>
                </a>
              </div>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>About Us</h5>
            <p className="footer-content">
              Welcome to our website! We are a one-stop-shop for all your home
              maintenance and repair needs. Whether you need an electrician,
              plumber, AC technician, RO service, broadband installation or CCTV
              installation, we've got you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
