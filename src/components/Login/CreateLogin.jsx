import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HOMOSOLUTION from "../../img/HOMOSOLUTION.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { createAccount } from "../../Action/AuthAction";

const CreateLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    cnfPassword: "",
  });
  const [msg, setMsg] = useState(false);
  console.log(formData.cnfPassword);

  const handleChange = (e) => {
    setMsg(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  let data = JSON.stringify({
    email: formData.email,
    password: formData.password,
    name: formData.name,
    mobile: formData.mobile,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.cnfPassword) {
      setMsg(true);
    } else {
      dispatch(createAccount(data, navigate));
    }
  };

  return (
    <>
      <div className="container-fluid main_bg">
        <div className="row">
          <div className="col-md-12">
            <div className="logo">
              <img src={HOMOSOLUTION} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="header p-4">
              <h1 style={{fontSize:"33px"}}>Welcome to Our Home Services Website</h1>
            </div>
          </div>

          <div className="container" style={{paddingBottom:"30px"}}>
            {/* style={{
              backgroundColor: "#71a1e9",
              borderRadius: "20px",
              padding: "20px",
              marginTop: "80px",
            }} */}

            {/* <Row
              className="justify-content-md-center"
              style={{ marginTop: "5%" }}
            > */}

            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="create_page ">
                  <h1 style={{fontSize:"28px"}}>Create Account</h1>
                  <hr style={{color:"#0062cc"}}/>
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 p-2">
                        <Form.Group controlId="formMobile" className="input_wrap">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-6 p-2">
                        <Form.Group controlId="formEmail" className="input_wrap">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email "
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-6 p-2">
                        <Form.Group controlId="formMobile"className="input_wrap">
                          <Form.Label>Mobile No.</Form.Label>
                          <Form.Control
                            type="Number"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter mobile no."
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-6 p-2">
                        <Form.Group controlId="formPassword" className="input_wrap">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-12 p-2 ">
                        <Form.Group controlId="formPassword" className="input_wrap">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="cnfPassword"
                            value={formData.cnfPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            required
                          />
                          {msg ? <h3>Password Not matched</h3> : ""}
                        </Form.Group>
                      </div>

                      <Button variant="primary" type="submit" style={{width:'36%',height:"60px", margin:"25px auto",}}>
                        Submit
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLogin;
