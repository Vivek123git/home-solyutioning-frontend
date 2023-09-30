import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Row, Col, Table } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { onfetchUserBookingDetails, onfetchWorkerDetails, onstatusUpdate, onWorkerStatus } from "../../Action/ServiceAction";
import { useDispatch, useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router";
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ServiceWorkerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const workerDetails = useSelector((state) => state.workerAcc);

  const auth = JSON.parse(localStorage.getItem('state'))
  const workerDetails = auth.workerAcc.worker


  const [workStatus, setWorkStatus] = useState("")
  const [worker, setWorker] = useState([]);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
  );
  const [userData, setUserData] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [checked, setChecked] = useState(worker.status === "1");

  const itemsPerPage = 10; // Number of items to show per page
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  // State variables for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = userData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };



  // const handleChange = (e) => {
  //   const isChecked = e.target.checked;
  //   if (isChecked) {
  //     setChecked(true);
  //     setStatus("Available");
  //   } else {
  //     setChecked(false);
  //     setStatus("Booked");
  //   }
  //   let statusPayload = new FormData();
  //   statusPayload.append("id", workerDetails.id);
  //   statusPayload.append("status", isChecked ? "1" : "0");
  //   dispatch(onstatusUpdate(statusPayload));
  // };
  
    const handleChange = (e) => {
      const isChecked = e.target.checked;
      setChecked(isChecked);

      let statusPayload = new FormData();
      statusPayload.append("id", workerDetails?.id);
      statusPayload.append("status", isChecked ? "1" : "0"); // Send "1" if checked, "0" if not
      dispatch(onstatusUpdate(statusPayload));
    }

  const fetchWorkerDetails = () => {
    let workerDataPayload = new FormData();
    workerDataPayload.append("id", workerDetails?.id)
    dispatch(onfetchWorkerDetails(workerDataPayload, setWorker));
  };

  const fetchUserDetails = () => {
    setLoading(true)
    let workerPayload = new FormData();
    workerPayload.append("id", workerDetails?.id)
    dispatch(onfetchUserBookingDetails(workerPayload, setUserData, setLoading));
  };

  useEffect(() => {
    fetchWorkerDetails();
    fetchUserDetails()
  }, [checked]);

  const handleWorkerBookingStatus = (e, id) => {
    const updatedWorkStatus = e.target.value;
    let bookingStatusPayload = new FormData();
    bookingStatusPayload.append("status", updatedWorkStatus)
    bookingStatusPayload.append("id", id)
    if (updatedWorkStatus === "2") {
      bookingStatusPayload.append("worker_name", workerDetails?.name);
    }
    setWorkStatus(updatedWorkStatus);
    dispatch(onWorkerStatus(bookingStatusPayload));
  }


  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="profile_heading text-center">
                <h3>Serviceworker Profile</h3>
              </div>

              <Row style={{ padding: "10px", alignContent: "center" }}>
                <Col xs={8} style={{ display: "flex", padding: "0px", flexDirection: "column", }}>
                  <h5>Name : {workerDetails?.name}</h5>
                  <p>Mobile No.: {workerDetails?.mobileNumber}</p>
                  <div className="d-flex">
                    <h5>Status : </h5>
                    <h5 style={{ color: checked ? "#71a1e9" : "black" }}>
                      {checked ? "Available" : "Not Available"}
                    </h5>
                    <Switch
                      style={{ alignItems: "center" }}
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                      size="large"
                    />
                  </div>
                </Col>

                <Col xs={4} style={{ display: "flex", padding: "0px", }}>
                  <div>
                    <img className="user-img" src={workerDetails?.image ? workerDetails.image : image} roundedCirclealt="avatar" />
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
                  <h2>My Work</h2>
                  <div style={{ overflow: "auto" }}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>User Name</th>
                          <th>User Mobile No.</th>
                          <th>User address</th>
                          <th>Service</th>
                          <th>Date</th>
                          <th>Status</th>
                          {/* <th>Rating</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.length > 0 ?
                          currentItems.map((elem, id) => {
                            return (
                              <tr>
                                <td>{id + 1}</td>
                                <td>{elem.user_name}</td>
                                <td>{elem.number}</td>
                                <td>{elem.address}</td>
                                <td>{elem.main_service}</td>
                                <td>{elem.date}</td>
                                <td>
                                  <select
                                    onChange={(e) => handleWorkerBookingStatus(e, elem.user_id)}
                                    // disabled={workStatus === "2" ? true : false}
                                  >
                                    <option value={"1"}>Select a option</option>
                                    <option value={"2"}> Accept</option>
                                    <option value={"3"}>Reject</option>
                                  </select>
                                </td>
                                {/* <td>******</td> */}
                              </tr>
                            )
                          })

                          : ""}
                      </tbody>
                    </Table>
                    <Pagination>
                      <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      />
                      {Array.from({ length: totalPages }, (_, i) => (
                        <Pagination.Item
                          key={i}
                          active={i + 1 === currentPage}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </Pagination.Item>
                      ))}
                      <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      />
                    </Pagination>
                  </div>
                </Col>
              </Row>
              {/* <div  style={{ left: "50%",position:"relative" }} >
                {!userData ? "No data found" : userData.length >= 0 ? "" : <CircularProgress className="spinner_icon"/>}
            </div> */}
            </div>
          </div>
        </div>
        <Loader isLoading={isLoading} />
      </section>
    </>
  );
};

export default ServiceWorkerProfile;
