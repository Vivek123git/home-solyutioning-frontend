import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Row, Col, Table, Form, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import {
  onfetchUserBookingDetails, onfetchWorkerDetails, onSendWorkerData,
  onCancelBooking, onstatusUpdate, onWorkerStatus, setServicesWorker, fetchSubServicesData
} from "../../Action/ServiceAction";
import { useDispatch, useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router";
import { Pagination } from 'react-bootstrap';
import ModalBox from '../Serviceworker/ModalBox'
import Multiselect from "multiselect-react-dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';


const ServiceWorkerProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const workerDetails = useSelector((state) => state.workerAcc);

  const auth = JSON.parse(localStorage.getItem('state'))
  const workerDetails = auth.workerAcc.worker;

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;


  const [workStatus, setWorkStatus] = useState("")
  const [form, setForm] = useState({
    skill: []
  })
  const [worker, setWorker] = useState([]);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/repair-elements-round-template_1284-37691.jpg?w=740&t=st=1680349046~exp=1680349646~hmac=01f506fa402adb9a53b74df1f76fa944ac021ca14fcf1875cc7ead5d08f6cb62"
  );
  const [userData, setUserData] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [skill, setSkill] = useState([])
  const [checked, setChecked] = useState(worker?.status === "1");
  const [cancel, setCancel] = useState(false)
  const [show, setShow] = useState(false)
  const [pStatus, setpStatus] = useState("Pending")
  const [bid, setBid] = useState("")
  const [history, setHistory] = useState(true);
  const [active , setActive] = useState(false);

  const itemsPerPage = 10; // Number of items to show per page
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const options = skill.map((elem) => ({ name: elem.heading, id: elem.id }));

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

  useEffect(() => {
    setChecked(worker?.status === "1")
  }, [worker.status]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  function onSelect(selectedList, selectedItem) {
    setForm({ ...form, skill: selectedList })
    // setSelectedValues(selectedList);
    // console.log(`Selected List: ${selectedList}`);
    // console.log(`Selected Item: ${selectedItem}`);
  }


  function onRemove(selectedList, removedItem) {
    const updatedSelectedList = selectedList.filter(item => item.id !== removedItem.id);
    setForm({ ...form, skill: updatedSelectedList });
  }

  let formDataFetch = new FormData();
  formDataFetch.append("id", worker?.service);

  useEffect(() => {
    setLoading(true)
    dispatch(fetchSubServicesData(formDataFetch, setSkill, setLoading))
  }, [worker])


  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    let statusPayload = new FormData();
    statusPayload.append("id", worker?.id);
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

  const handleWorkerBookingStatus = (e, elem) => {
    const updatedWorkStatus = e.target.value;
    let bookingStatusPayload = new FormData();
    bookingStatusPayload.append("status", updatedWorkStatus)
    bookingStatusPayload.append("id", elem?.booking_id)
    if (updatedWorkStatus === "2") {
      setCancel(true)
      bookingStatusPayload.append("worker_name", workerDetails?.name);

      //////////////////////////////////////////////////
      let sendWorkerData = new FormData();
      sendWorkerData.append("user_id", elem.user_id);
      sendWorkerData.append("booking_id", elem.booking_id);
      sendWorkerData.append("price", elem.price);
      sendWorkerData.append("worker_name", worker?.name);
      sendWorkerData.append("worker_id", worker?.id);
      sendWorkerData.append("worker_address", worker?.address);
      sendWorkerData.append("worker_service", worker?.service);
      sendWorkerData.append("worker_number", worker?.mobileNumber);
      sendWorkerData.append("status", "0");
      sendWorkerData.append("rating", "5");
      sendWorkerData.append("worker_date", formattedDate);
      dispatch(onSendWorkerData(sendWorkerData));

      ////////////////////////////////////////////////// 
    }

    setWorkStatus(updatedWorkStatus);


    dispatch(onWorkerStatus(bookingStatusPayload));
  }

  let formDataServices = new FormData();
  formDataServices.append("skill", JSON.stringify(form.skill));
  formDataServices.append("id", worker?.id);

  // const handleServices = () => {
  //   dispatch(setServicesWorker(formDataServices));
  // };
  const handleCancel = (elem) => {
    let formDataDelete = new FormData();
    formDataDelete.append("bid", elem.booking_id);
    dispatch(onCancelBooking(formDataDelete))
  }

  const handlePaymentStatus = (e, elem) => {
    // setBid(elem.booking_id)
    // setShow(!show);
    if (pStatus === "Complete") {
      toast.warning("You already mark Complete")
    } else {
      setBid(elem.booking_id)
      setShow(!show);
      setCancel(false)
    }
  }
  // if (worker.skill) {
  //   try {
  //     let parsedArray = [];
  //      parsedArray = JSON.parse(worker.skill);
  //      console.log(parsedArray)

  //     if (Array.isArray(parsedArray)) {
  //       const names = parsedArray.map(item => item.name);
  //       console.log(names);
  //     } else {
  //       console.log('parsedArray is not an array.');
  //     }
  //   } catch (error) {
  //     console.log('Error parsing JSON:', error);
  //   }
  // } else {
  //   console.log('worker.skill is undefined or empty.');
  // }

  const handleHistory = () => {
    setHistory(!history)
    setActive(!active)
  }

  const hasPaymentStatusZero = currentItems[currentItems.length-1]?.payment_status === "0";
  console.log(hasPaymentStatusZero)

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
                  <h5 className="text-worker-head">Name : <span className="text-worker">{worker?.name}</span></h5>
                  <h5 className="text-worker-head d-flex">Mobile No.: <span className="text-worker">{worker?.mobileNumber}</span></h5>
                  <h5 className="text-worker-head">Service:<span className="text-worker">
                    {worker?.service === "1"
                      ? "Electrician"
                      : worker.service === "4"
                        ? "R.O."
                        : worker.service === "2"
                          ? "Plumber"
                          : worker.service === "3"
                            ? "A.C. tech."
                            : worker.service === "5"
                              ? "Broadband"
                              : worker.service === "6"
                                ? "CCTV"
                                : ""}
                  </span></h5>
                  <div className="d-flex">

                    {/* <p>Skill: </p> */}
                    <h5 className="text-worker-head">Status : </h5>
                    <h5 className="text-worker" style={{ color: checked ? "green" : "red" }}>
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

                  {/* <div className="col-md-6 p-2">
                    <Form.Group as={Col} className="input_wrap">
                      <Form.Label>Choose Your Skills (First choose service)</Form.Label>
                      <Multiselect
                        options={options}
                        selectedValues={form?.skills}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        This field is required.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <button onClick={handleServices}> save services</button>
                  </div> */}

                </Col>

                <Col xs={4} style={{ display: "flex", padding: "0px", }}>
                  <div>
                    <img className="user-img" src={worker?.image ? worker.image : image} roundedCirclealt="avatar" />
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
              <Row className="m-0">
                <Col>
                  <div className="d-flex justify-content-between">
                    <h2 className={!active ? "text-decoration-underline text-primary" : ""}
                      onClick={handleHistory}>My Pending Work</h2>
                    <h2 className={active ? "text-decoration-underline text-primary" : ""}
                      onClick={handleHistory}>My History Work</h2>
                  </div>
                  {/* <div style={{ overflow: "auto" }}>
                    <Table striped  hover>
                      <thead>
                        <tr>
                          <th>Booking ID</th>
                          <th>User Name</th>
                          <th>User Mobile No.</th>
                          <th>User address</th>
                          <th>Service</th>
                          <th>Payment</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Payment Status</th>
                          {cancel ? <th>Cancel</th> : ""}
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
                                <td>{elem.price}</td>
                                <td>{elem.date}</td>
                                <td>
                                  <select
                                    onChange={(e) => handleWorkerBookingStatus(e, elem)}
                                    className="select-box"
                                  disabled={elem.status === "2" ? true : false}
                                  >
                                    <option value={""}>Select a option</option>
                                    <option value={"2"}> Accept</option>
                                    <option value={"3"}>Reject</option>
                                  </select>
                                </td>
                                <td>
                                 <Button 
                                 variant={elem.payment_status==1?"success":"primary"}
                                 disabled={elem.payment_status === "1" ? true : false} 
                                 onClick={(e)=>handlePaymentStatus(e , elem)}>
                                  {elem.payment_status==1?"Complete":pStatus}
                                  </Button>
                                </td>
                                {cancel ? <button onClick={() => handleCancel(elem)}>Cancel</button> : ""}
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
                  </div> */}
                  <h4 className="text-center mt-5">{history?hasPaymentStatusZero?"":"No work found":"" }</h4>
                  {currentItems.length > 0 ?
                    currentItems.map((elem, id) => {
                      return (
                        <div>
                          
                          {history ?
                            elem.payment_status === "1" ? "":
                              <div className="row  ">
                                <div className="col-md-4 booking-box">
                                  <div className="">
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Username :</div>
                                      <div className="text-worker">{elem.user_name}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">User Mobile No. :</div>
                                      <div className="text-worker">{elem.number}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">User Address :</div>
                                      <div className="text-worker">{elem.address}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Service :</div>
                                      <div className="text-worker">{elem.main_service}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Charge :</div>
                                      <div className="text-worker">{elem.price}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Work Status :</div>
                                      <div className="text-worker"><select
                                        onChange={(e) => handleWorkerBookingStatus(e, elem)}
                                        className="select-box"
                                        disabled={elem.status === "2" ? true : false}
                                      >
                                        <option value={""}>{elem.status === "2" ? "Accepted" : "Select a option"}</option>
                                        <option value={"2"}> Accept</option>
                                        <option value={"3"}>Reject</option>
                                      </select></div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Paymnent Status :</div>
                                      <div className="text-worker"> <Button
                                        className="m-0"
                                        variant={elem.payment_status === "1" ? "success" : "primary"}
                                        disabled={elem.payment_status === "1" ? true : false}
                                        onClick={(e) => handlePaymentStatus(e, elem)}>
                                        {elem.payment_status == 1 ? "Complete" : pStatus}
                                      </Button></div>
                                    </div>
                                    <div className="booking-box-text">
                                      <div className="text-worker-head">Date :</div>
                                      <div className="text-worker">{elem.date}</div>
                                    </div>
                                    <div className="booking-box-text">
                                      {cancel ? <div className="text-worker-head">Cancel :</div> : ""}
                                      <div className="text-worker"> {cancel ? <button onClick={() => handleCancel(elem)}>Cancel</button> : ""}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            :

                            elem.payment_status === "1" ? <div className="row  ">
                              <div className="col-md-4 booking-box">
                                <div className="">
                                  <div className="booking-box-text">
                                    <div className="text-worker-head">Username :</div>
                                    <div className="text-worker">{elem.user_name}</div>
                                  </div>
                                  <div className="booking-box-text">
                                    <div className="text-worker-head">Payment Status :</div>
                                    <div className="text-worker"> <Button
                                      variant={elem.payment_status === "1" ? "success" : "primary"}
                                      disabled={elem.payment_status === "1" ? true : false}
                                      onClick={(e) => handlePaymentStatus(e, elem)}>
                                      {elem.payment_status === "1" ? "Complete" : pStatus}
                                    </Button></div>
                                  </div>
                                  <div className="booking-box-text">
                                    <div className="text-worker-head">Date :</div>
                                    <div className="text-worker">{elem.date}</div>
                                  </div>
                                  <div className="booking-box-text">
                                    <div className="text-worker-head">View Details :</div>
                                    <div className="text-worker"><Button className="m-0">View</Button></div>
                                  </div>
                                </div>
                              </div>
                            </div> : ""
                          }
                        </div>
                      )
                    })
                    : ""}
                </Col>
              </Row>
              {/* <div  style={{ left: "50%",position:"relative" }} >
                {!userData ? "No data found" : userData.length >= 0 ? "" : <CircularProgress className="spinner_icon"/>}
            </div> */}
            </div>
          </div>
        </div>
        <Loader isLoading={isLoading} />
        <ModalBox show={show} setShow={setShow} bid={bid} setpStatus={setpStatus} pStatus={pStatus} />
      </section>
    </>
  );
};

export default ServiceWorkerProfile;
