import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'

const ContactUs2 = () => {

  const handleSubmit=()=>{

  }

  const handlehange=()=>{

  }

  return (
    <div>
    <Navbar/>
    <div style={{position:"relative"}}>
        <section className="contact-section ">
      <div className="container">
        <div className="row">
          <div className="contact_heading text-center py-4">
            <h3>Get intouch !</h3>
          </div>
        </div>
      </div>
      <div className="mt-3 icon-Btn">
        <a href="#" className="me-3"><span id="boot-icon" className="bi bi-envelope" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></span></a>
        <a href="#" className="me-3"><i className="bi bi-linkedin" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href="#" className="me-3"><i className="bi bi-whatsapp" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href="#" className="me-3"><i className="bi bi-telephone" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href="#" className="me-3"><i className="bi bi-instagram" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></i></a>
      </div>
      <div className="row justify-content-center contact-container">
        <div className="col-md-9">
          <h4
            style={{
              fontSize: "18px",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          >
            Fill free to ask anything 
          </h4>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 p-2">
                <Form.Group controlId="formName" className="input_wrap ">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    // value={form.name}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 p-2">
                <Form.Group controlId="formMobile" className="input_wrap ">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter mobile number"
                    name="mobile"
                    // value={form.mobile}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 p-2">
                <Form.Group controlId="formMsg" className="input_wrap ">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="write a messager"
                    name="mobile"
                    // value={form.mobile}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>

             
              
              <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "26%", height: "60px" }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
    
    
    <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default ContactUs2