import React, { useEffect, useState } from "react";
import {Container,Row,Col,Image,Form,Button,Table,} from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { BsStarFill, BsStar } from "react-icons/bs";
import Navbar from "./Navbar/Navbar";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch, useSelector } from "react-redux";
import { onfetchUserrDetails } from "../Action/ServiceAction";

const UserProfile = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state)=>state.login)

  const [rating, setRating] = useState({
    name: "",
    text: "",
    rate: "",
  });

  const [user, setUser] = useState([]);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   
  setRating((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setRating((prevState) => ({ ...prevState, rating: newRating }));
  };

  const handleSubmit = () => {
    let data = {...rating,}
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUserDetails = () => {
    dispatch(onfetchUserrDetails(setUser));
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile_heading text-center">
                <h3>User Profile</h3>
              </div>
              <Row style={{ padding: "20px", alignContent: "center" }}>
                <Col
                  xs={12}
                  md={8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5>Name : {userDetails.user.name}</h5>
                  <p>Mobile No.: {userDetails.user.mobileNumber}</p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div>
                    <img
                      style={{ maxWidth: "200px" }}
                      src={image}
                      roundedCircle
                      alt="avatar"
                    />
                    <br />
                    <input
                      style={{ display: "none", marginLeft: "40px" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="upload-photo" className="d-flex">
                      <p>Edit Image</p>
                      <ModeEditIcon style={{ marginTop: "5px" }} />
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Booking Status</h2>
                  <div className="userTable" style={{ overflow: "auto" }}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>ServiceWorker Name</th>
                          <th>ServiceWorker Mobile No.</th>
                          <th>Services</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Service 1</td>
                          <td>123456789</td>
                          <td>Elctrician</td>
                          <td>2023-04-02</td>
                          <td>Pending</td>
                          <td>
                            <button onClick={handleShow}>Rating</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Service 2</td>
                          <td>123456789</td>
                          <td>Plumber</td>
                          <td>2023-04-03</td>
                          <td>Completed</td>
                          <td>******</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Service 3</td>
                          <td>123456789</td>
                          <td>Elctrician</td>
                          <td>2023-04-04</td>
                          <td>Cancelled</td>
                          <td>******</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <h3>Rate ServiceWorker</h3>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={rating.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="text"
                          value={rating.text}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating:</Form.Label>
                        <Row>
                          {[...Array(5)].map((_, index) => (
                            <Col key={index}>
                              {rating.rating >= index + 1 ? (
                                <BsStarFill
                                  className="star cursor-pointer"
                                  style={{color:"#f5f508" , cursor:"pointer"}}
                                  onClick={() => handleRatingChange(index + 1)}
                                />
                              ) : (
                                <BsStar
                                  className="star cursor-pointer"
                                  style={{ cursor:"pointer"}}
                                  onClick={() => handleRatingChange(index + 1)}
                                />
                              )}
                            </Col>
                          ))}
                        </Row>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
