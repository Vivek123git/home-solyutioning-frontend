import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../../src/App.css";
import logo from "../../img/logo.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import { onFetchServices } from "../../Action/ServiceAction";
import { logOutUser } from "../../Action/AuthAction";
import { logOutWorker, loginWorkerAccount } from "../../Action/WorkerAuth";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import image from "../../img/repair-man.jpg"
import PhoneNumberPopup from "../PhoneNumberPopUP";

function NavbarHead() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = JSON.parse(localStorage.getItem("state"));

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [loader, setLoader] = useState(false)
  // const [profile, setProfile] = useState();
  const [form, setForm] = useState({
    mobile: "",
    password: "",
    type: "ServiceWorker"
  });

  const handleShow = () =>{
    setShow(true);
  }
  const handleShow1 = () => {
    setShow1(true);
    handleClose(false);
  };

  const [service, setService] = useState([]);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);

  const handleCreate = () => {
    navigate("/serviceworker");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  };

  let formDataLogin = new FormData();
  formDataLogin.append("number", form.mobile)
  formDataLogin.append("password", form.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    // navigate("/serviceworkerprofile")
    setLoader(true)
    dispatch(loginWorkerAccount(formDataLogin, navigate, setLoader))
  };

  const fetchServiceData = () => {
    let data = {};
    dispatch(onFetchServices(setService, data));
  };

  const handleSignOut = () => {
    dispatch(logOutUser())
  };

  const handleSignOutWorker = () => {
    dispatch(logOutWorker())
  }

  useEffect(() => {
    fetchServiceData();
  }, []);

  const handleLogo = () => {
    navigate("/")
  }

  return (
    <>
      <div className="nav_head">
        <Navbar style={{ backgroundColor: "#ffff", borderRadius: "0px",justifyContent:"start" }} expand="lg" className="navigation">
          <img onClick={handleLogo} src={logo} alt="" className="nav-logo"/>
          <PhoneNumberPopup />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ height: "50px", width: "60px" }} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"

          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} style={{ color: "#71a1e9" }}>
                RepairInMinute
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* <Navbar.Offcanvas id="basic-navbar-nav"> */}
              <Nav className="justify-content-end me-auto my-2  flex-grow-1 pe-3">
                <NavLink
                  className="nav-link"
                  as={Link}
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>


                {auth && auth.workerAcc && auth.workerAcc.isAuthenticated ? (
                  <NavDropdown title="Technician Account" id="basic-nav-dropdown">

                    <>
                      <NavDropdown.Item as={Link} to="/serviceworkerProfile">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={handleSignOutWorker}>
                        Sign out
                      </NavDropdown.Item>
                    </>
                  </NavDropdown>) :
                  <Nav.Link
                    onClick={handleShow}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Technician Account
                  </Nav.Link>}


                <NavDropdown
                  title="Our Services"
                  id="basic-nav-dropdown"
                  style={{ paddingRight: "0px" }}
                >
                  {service.length > 0
                    ? service.map((elem, id) => {
                      return (
                        <NavDropdown.Item
                          as={Link}
                          to={`/servicecard?sId=${elem.id}&name=${elem.type
                            }&id=${"1"}`}
                        >
                          {elem.type}
                        </NavDropdown.Item>
                      );
                    })
                    : ""}
                </NavDropdown>
                <NavLink
                  as={Link}
                  to="/aboutus"
                  className="nav-link"
                  activeClassName="active"
                >
                  About us
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contactus"
                >
                  Contact us
                </NavLink>

                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  style={{ marginRight: "0px" }}
                >
                  {/* {profile.name?profile.name:"Userprofile"} */}

                  <NavDropdown title="User" id="basic-nav-dropdown">
                    {auth && auth.login && auth.login.user ? (
                      <>
                        <NavDropdown.Item as={Link} to="/userProfile">
                          Profile
                        </NavDropdown.Item>
                        {auth.login.user.isDeleted === "1" ? <NavDropdown.Item as={Link} to="/dashboard">
                          Dashboard
                        </NavDropdown.Item> : ""}
                        <NavDropdown.Item onClick={handleSignOut}>
                          Sign out
                        </NavDropdown.Item>
                      </>
                    ) : (
                      <NavDropdown.Item as={Link} to="/login">
                        Sign in
                      </NavDropdown.Item>
                    )}
                  </NavDropdown>
                </NavLink>
                {/* {profile.img?profile.img:<AccountCircleIcon sx={{fontSize:"40px"}} style={{marginRight:"5px"}}/>} */}
                {/* <AccountCircleIcon
                  sx={{ fontSize: "60px" }}
                  style={{ marginRight: "5px" }}
                /> */}
                <Avatar
                  sx={{ fontSize: "60px" }}
                  style={{ marginRight: "5px" }}
                  src="/broken-image.jpg"
                />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>

      </div>

      <Modal show={show} onHide={handleClose} centered style={{ zIndex: "11111" }}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Create as a technician account</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <img
              src={image}
              alt="ServiceWorker Account"
              className="my-3"
              style={{ maxWidth: "40%" }}
            />
            <div className="text-center">
              <p className="mb-2">
                If you already have an account, please click the login button
                below.
              </p>
              <p className="mb-2">
                If you don't have an account yet, you can create one by clicking
                the create button.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCreate}
              className="my-2 w-100"
              style={{ marginRight: "0px" }}
            >
              Create account
            </Button>
            <Button
              variant="success"
              size="lg"
              onClick={handleShow1}
              className="my-2 w-100"
              closeButton
            >
              Login
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <>
        <Modal show={show1} onHide={handleClose1} style={{ zIndex: "11111" }}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter Mobile No."
                  value={form.mobile}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="position-relative w-100">
                Login
                {loader ? <CircularProgress className="spinner_icon position-absolute" style={{ color: "white", height: "30px", width: "30px", position: 'absolute' }} /> : ""}
              </Button>
              <Link to='/forget-password?worker' className="mb-0 d-flex fgtPass" >Forget password?</Link>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}

export default NavbarHead;
