import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import HOMOSOLUTION from "../../img/logo.png";
import "../../../src/App.css";
import { useNavigate } from "react-router";
import { GoogleLogin } from 'react-google-login';
import { Link } from "react-router-dom";
import { loginAccount } from "../../Action/AuthAction";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Alert1 from "../Alert";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location.state)

  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem('state'))

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  let formDataLogin = new FormData();
  formDataLogin.append("email", formData.email)
  formDataLogin.append("password", formData.password)

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === "create") {
      navigate("/create")
    } else {
      setLoader(true)
      dispatch(loginAccount(formDataLogin, navigate,setLoader))
    }
  };

  const responseGoogle = (response) => {
    // Handle the response from Google login
    console.log(response);
  };

  return (
    <>

      <div className="container-fluid main_bg">
        <div className="row">
          <div className="col-md-12 p-0">
            {/* <Alert1 /> */}
            <div className="logo">
              <img src={HOMOSOLUTION} />
            </div>
          </div>
          <div className="col-md-12 ">
            <div className="header p-4">
              <h1 style={{ fontSize: "25px" }}>
                Welcome to Our Home Services Website
              </h1>
            </div>
          </div>

          <div className="container" style={{ paddingBottom: "30px" }}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="create_page ">
                  <h1 style={{ fontSize: "28px" }}>Welcome back!</h1>
                  <hr style={{ color: "#0062cc" }} />
                  <Form>
                    <div className="row">

                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formMobile"
                          className="input_wrap"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your registered email"
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-12 p-2">
                        <Form.Group
                          controlId="formPassword"
                          className="input_wrap"
                        >
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

                      <div className="col-md-12">
                        <div className="login_btn">
                          <div className="d-flex  align-items-baseline">
                            <p className="mb-0"> If you don't have account ?</p>

                            <a
                              variant="primary"

                              onClick={(e) => handleSubmit(e, "create")}

                              style={{ cursor: "pointer" ,color:"#0062cc"}}
                            >
                              Create it
                            </a>

                          </div>
                          <Button
                            variant="primary"

                            onClick={(e) => handleSubmit(e, "login")}
                            style={{
                              width: "100%",
                              height: "60px", display: "flex", justifyContent: "space-around", alignItems: "center"
                            }}
                          >
                            Login
                            {loader ? <CircularProgress className="spinner_icon" style={{ color: "white", height: "30px", width: "30px", position: 'absolute', marginLeft: "200px" }} /> : ""}
                          </Button>
                        </div>
                      </div>
                      <Link to="/forget-password" className="mb-0 d-flex fgtPass" >Forget password?</Link>
                      {/* <div>
                        <GoogleLogin
                        className="google_btn"
                          clientId="384608491688-p5pbvda9h7mfklit55gfm880tqlgbu1p.apps.googleusercontent.com"
                          buttonText="Login with Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        /></div> */}
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

export default Login;
