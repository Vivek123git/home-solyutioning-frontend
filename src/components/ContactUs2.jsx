import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import { useDispatch } from 'react-redux';
import { onContactSubmit } from '../Action/ServiceAction';

const ContactUs2 = () => {
  const dispatch = useDispatch()

  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://www.facebook.com/your-page',
    whatsapp: 'https://wa.me/9140734396',
    instagram: 'https://www.instagram.com/vivekk_upadhyay',
    twitter: 'https://twitter.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  });
  const [form , setForm] = useState({
    name:"",
    mobile:"",
    message:""
  })
  const [loader , setLoader] = useState(false)

  let formDataLogin = new FormData();
  formDataLogin.append("name",form.name)
  formDataLogin.append("message",form.message)
  formDataLogin.append("contact",form.mobile)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoader(true)
  dispatch(onContactSubmit(formDataLogin,setLoader))
  }

  const handlehange=(e)=>{
    const {name,value} = e.target;
   setForm({
    ...form,
    [name]:value
   })

  }

  return (
    <div>
    <Navbar/>
    <div style={{position:"relative"}}>
        <section className="contact-section ">
      <div className="container">
        <div className="row">
          <div className="contact_heading text-center py-4">
            <h3>Get in touch !</h3>
          </div>
        </div>
      </div>
      <div className="mt-3 icon-Btn">
        <a href={socialLinks.whatsapp} target='blank' className="me-3"><span id="boot-icon" className="bi bi-whatsapp" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></span></a>
        <a href={socialLinks.linkedin} target='blank' className="me-3"><i className="bi bi-linkedin" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.twitter} target='blank' className="me-3"><i className="bi bi-twitter" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.facebook} target='blank' className="me-3"><i className="bi bi-facebook" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1",margin:"10px" }}></i></a>
        <a href={socialLinks.instagram} target='blank' className="me-3"><i className="bi bi-instagram" style={{fontSize: "30px", color:" rgb(0, 0, 255)", opacity: "1", margin:"10px"}}></i></a>
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
                    value={form.name}
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
                    value={form.mobile}
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
                    name="message"
                    value={form.message}
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