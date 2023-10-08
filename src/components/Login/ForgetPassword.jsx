import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HOMOSOLUTION from "../../img/logo.png";
import "../../../src/App.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { forget_pass ,forget_pass_worker} from "../../Action/AuthAction";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useLocation } from 'react-router-dom';

const ForgetPasword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const queryString = window.location.search;

  const [formData, setFormData] = useState({
    password: "",
    cnfPassword:"",
    email:''
  });
const [loader,setLoader] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  let formDataLogin = new FormData();
  if(queryString==="?worker"){
    formDataLogin.append("mobileNumber",formData.mobile)
  }else{
    formDataLogin.append("email",formData.email)
  }
  formDataLogin.append("password",formData.password)
  formDataLogin.append("c_password",formData.cnfPassword)

  const handleSubmit = (e) => {
    setLoader(true)
    e.preventDefault();
    if(queryString==="?worker"){
      dispatch(forget_pass_worker(formDataLogin,navigate,setLoader))
    }else{
      dispatch(forget_pass(formDataLogin,navigate,setLoader))
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
              <h1 style={{ fontSize: "33px" }}>
                Welcome to Our Home Services Website
              </h1>
            </div>
          </div>

          <div className="container" style={{ paddingBottom: "30px" }}>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="create_page ">
                  <h1 style={{ fontSize: "28px" }}>Reset Password!</h1>
                  <hr style={{ color: "#0062cc" }} />
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col-md-12 p-2">
                       {!queryString==="?worker"? <Form.Group
                          controlId="formMobile"
                          className="input_wrap"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                          />
                        </Form.Group>:
                         <Form.Group
                         controlId="formMobile"
                         className="input_wrap"
                       >
                         <Form.Label>Mobile No.</Form.Label>
                         <Form.Control
                           type="text"
                           name="mobile"
                           value={formData.mobile}
                           onChange={handleChange}
                           placeholder="Enter mobile no."
                           required
                         />
                       </Form.Group>}
                      </div>
                      
                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formMobile"
                          className="input_wrap"
                        >
                          <Form.Label>New Password</Form.Label>
                          <Form.Control
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter new password"
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formPassword"
                          className="input_wrap"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                           type="password"
                            name="cnfPassword"
                            value={formData.cnfPassword}
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            required
                          />
                        </Form.Group>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="login_btn">
                          {/* <div className="d-flex justify-content-center align-items-baseline">
                            <p className="mb-0"> If you dont have account</p>
                            <Link to="/create">
                            <Button
                              variant="primary"
                              type="submit"
                              className="ms-2"
                            >
                              Create
                            </Button>
                            </Link>
                          </div> */}
                          <Button
                            variant="primary"
                            type="submit"
                            style={{
                              width: "100%",
                              height: "60px",display:"flex",justifyContent:"space-around",alignItems:"center"
                            }}
                          >
                            Submit
                            {loader?<CircularProgress className="spinner_icon" style={{color:"white",height:"30px",width:"30px",position:'inherit'}}/>:""}
                          </Button>
                        </div>
                      </div>
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

export default ForgetPasword;
