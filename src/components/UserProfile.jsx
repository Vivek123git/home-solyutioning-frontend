import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Form, Button, Table, } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { BsStarFill, BsStar } from "react-icons/bs";
import Navbar from "./Navbar/Navbar";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { onRating, onfetchUserrDetails, onfetchWorkerBookingDetails, onEditProfileImg } from "../Action/ServiceAction";

const UserProfile = () => {
  const dispatch = useDispatch();

  const auth = JSON.parse(localStorage.getItem('state'))
  const userDetails = auth?.login?.user


  const [rating, setRating] = useState({
    name: "",
    text: "",
    rate: "",
  });

  const [workerData, setWorkerData] = useState([])
  const [user, setUser] = useState([]);
  const [workId, setWorkId] = useState("")
  const [active, setActive] = useState(false);
  const [history, setHistory] = useState(true);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   setImage(reader.result);
    // };
    let formDataImage = new FormData();
    formDataImage.append("image", file);
    formDataImage.append("userId", userDetails.id);
    dispatch(onEditProfileImg(formDataImage, setImage))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRating((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setRating((prevState) => ({ ...prevState, rating: newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let ratingPayload = new FormData();
    ratingPayload.append("worker_id", workId)
    ratingPayload.append("name", rating.name)
    ratingPayload.append("description", rating.text)
    ratingPayload.append("rating", rating.rating)
    dispatch(onRating(ratingPayload, handleClose))
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setWorkId(id)
  };

  const fetchUserDetails = () => {
    dispatch(onfetchUserrDetails(setUser));
  };

  const fetchWorkerDetails = () => {
    let userPayload = new FormData();
    userPayload.append("id", userDetails?.id)
    dispatch(onfetchWorkerBookingDetails(userPayload, setWorkerData));
  };

  useEffect(() => {
    fetchUserDetails();
    fetchWorkerDetails();
  }, []);

  const handleHistory = () => {
    setHistory(!history)
    setActive(!active)
  }

  const hasPaymentStatusZero = workerData[workerData.length-1]?.status === "0";

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
                  xs={8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h5>Name : {userDetails?.name}</h5>
                  <p>Mobile No.: {userDetails?.mobileNumber}</p>
                </Col>
                <Col
                  xs={4}
                  style={{ display: "flex", }}
                >
                  <div>
                    <img
                      className="user-img"
                      src={image}
                      roundedCircle
                      alt="avatar"
                    />
                    <br />
                    <input
                      style={{ display: "none" }}
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
                  <div className="d-flex justify-content-between">
                    <h2 className={!active ? "active-work " : "notactive-work"}
                      onClick={handleHistory}>Currently Booking</h2>
                    <h2 className={active ? "active-work" : "notactive-work"}
                      onClick={handleHistory}>Booking History</h2>
                  </div>

                  <h4 className="text-center mt-5">{history?hasPaymentStatusZero?"":"No Booking found":"" }</h4>
                  {workerData.length > 0 ?
                    workerData.map((elem, id) => {
                      return (
                        <div>
                          {history?
                          elem.status === "1" ? "":
                          <div className="row  ">
                            <div className="col-md-4 booking-box">
                              <div className="">
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Technician Name:</div>
                                  <div className="text-worker">{elem.worker_name}</div>
                                </div>
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Technician Mobile No. :</div>
                                  <div className="text-worker">{elem.worker_number}</div>
                                </div>
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Services you booked :</div>
                                  <div className="text-worker">{elem.worker_service}</div>
                                </div>
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Charge :</div>
                                  <div className="text-worker">{elem?.price} &#x20B9;</div>
                                </div>

                                <div className="booking-box-text">
                                  <div className="text-worker-head">Date :</div>
                                  <div className="text-worker">{elem.worker_date}</div>
                                </div>

                              </div>
                            </div>
                          </div>
                          :
                          elem.status === "1" ?  <div className="row  ">
                            <div className="col-md-4 booking-box">
                              <div className="">
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Technician Name:</div>
                                  <div className="text-worker">{elem.worker_name}</div>
                                </div>
                                {/* <div className="booking-box-text">
                                  <div className="text-worker-head">Technician Mobile No. :</div>
                                  <div className="text-worker">{elem.worker_number}</div>
                                </div> */}
                                <div className="booking-box-text">
                                  <div className="text-worker-head">Services you booked :</div>
                                  <div className="text-worker">{elem.worker_service}</div>
                                </div>
                                {/* <div className="booking-box-text">
                                  <div className="text-worker-head">Charge :</div>
                                  <div className="text-worker">{elem?.price} &#x20B9;</div>
                                </div> */}

                                <div className="booking-box-text">
                                  <div className="text-worker-head">Date :</div>
                                  <div className="text-worker">{elem.worker_date}</div>
                                </div>
                                <div className="booking-box-text">
                                    <div className="text-worker-head">View Details :</div>
                                    <div className="text-worker"><Button className="m-0">View</Button></div>
                                  </div>

                              </div>
                            </div>
                          </div>:""}
                        </div>
                      )
                    })
                    : ""}
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
                                  style={{ color: "#f5f508", cursor: "pointer" }}
                                  onClick={() => handleRatingChange(index + 1)}
                                />
                              ) : (
                                <BsStar
                                  className="star cursor-pointer"
                                  style={{ cursor: "pointer" }}
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
