import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Row, Col, Image, Table } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { onfetchWorkerDetails } from "../../Action/ServiceAction";
import { useDispatch, useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const ServiceWorkerProfile = () => {
  const dispatch = useDispatch();
  const workerDetails = useSelector((state) => state.workerAcc);

  console.log(workerDetails,"sdf")

  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("Available");
  const [worker, setWorker] = useState([]);
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
    if (checked) {
      setChecked(e.target.checked);
      setStatus("Available");
    } else {
      setChecked(e.target.checked);
      setStatus("Booked");
    }
  };

  const fetchWorkerDetails = () => {
    let data = {};
    dispatch(onfetchWorkerDetails(data, setWorker));
  };

  useEffect(() => {
    fetchWorkerDetails();
  });

  console.log(workerDetails,"details")

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
                  <h5>Name : {workerDetails.worker.name}</h5>
                  <p>Mobile No.: {workerDetails.worker.mobileNumber}</p>
                  <div className="d-flex">
                    <h5>Status : </h5>
                    <h5
                      style={{
                        color: status === "Available" ? "black" : "#71a1e9",
                      }}
                    >
                      {status}
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
                <Col
                  xs={12}
                  md={4}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div>
                    <img
                      style={{ maxWidth: "200px" }}
                      src={
                        workerDetails.worker.image
                          ? workerDetails.worker.image
                          : image
                      }
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
                    <label
                      htmlFor="upload-photo"
                      className="d-flex"
                      style={{ marginLeft: "40px" }}
                    >
                      <p>Edit Image</p>
                      <ModeEditIcon style={{ marginTop: "5px" }} />
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Booking Status</h2>
                  <div style={{ overflow: "auto" }}>
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
                          <td>******</td>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceWorkerProfile;
