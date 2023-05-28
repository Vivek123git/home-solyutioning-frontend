import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {

  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://www.facebook.com/your-page',
    whatsapp: 'https://wa.me/9140734396',
    instagram: 'https://www.instagram.com/your-account',
    twitter: 'https://twitter.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  });

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
              <div className="mt-3 icon-Btn">
        <a href={socialLinks.whatsapp} target='blank' className="me-3"><span id="boot-icon" className="bi bi-whatsapp" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></span></a>
        <a href={socialLinks.linkedin} target='blank' className="me-3"><i className="bi bi-linkedin" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.twitter} target='blank' className="me-3"><i className="bi bi-twitter" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.facebook} target='blank' className="me-3"><i className="bi bi-facebook" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.instagram} target='blank' className="me-3"><i className="bi bi-instagram" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></i></a>
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
