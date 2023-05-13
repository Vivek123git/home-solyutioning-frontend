import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import {  useLocation, useNavigate } from "react-router";
import { onBookingServiceman } from "../../Action/ServiceAction";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";

function OurSite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const type = searchParams.get("type");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    state: "",
    city: "",
    service:(type?`${type}`:""),
    description: (name?`${name}`:""),
    near: "",
    pin: "",
  });

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  let data = JSON.stringify({
    name: form.name,
    service: form.service,
    mobile: form.mobile,
    description: form.description,
    address: form.address,
    state: form.state,
    city: form.city,
    landmark: form.near,
    pincode: form.pincode,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onBookingServiceman(data));
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
    {name?<Navbar/>:""}
    <section className="contact-section ">
      <div className="container">
        <div className="row">
          <div className="contact_heading text-center py-4">
            <h3>Book your ServiceMan</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9" style={{marginLeft:"25px"}}>
          <h4
            style={{
              fontSize: "18px",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
          >
            Fill this form we will contact you soon...
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

              <div className="col-md-12 p-2">
                <Form.Group controlId="formService" className="input_wrap ">
                  <Form.Label>Service</Form.Label>
                  <Form.Control as="select" name="service" onChange={handleSelect}>
                    {name?<option value="1">{form.service}</option>
                    :
                     <>
                     <option value="">Select a Service</option>
                     <option value={1}>Electrician</option>
                     <option value={2}>Plumbing</option>
                     <option value={3}>AC Technician</option>
                     <option value={4}>RO Services</option>
                     <option value={5}>CCTV Services</option>
                     <option value={6}>BroadBand Services</option></> }
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-12 p-2">
                <Form.Group controlId="formDescription" className="input_wrap ">
                  <Form.Label>
                    {name?"Service that you want":"Write a sort Description of your problem"}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter a description"
                    name="description"
                    value={form.description}
                    readOnly={name ? true : false}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-12 p-2">
                <Form.Group controlId="formAddress" className="input_wrap ">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    value={form.address}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6 p-2">
                <Form.Group controlId="formState" className="input_wrap ">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter state"
                    name="state"
                    value={form.state}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 p-2">
                <Form.Group controlId="formCity" className="input_wrap">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={form.city}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 p-2">
                <Form.Group controlId="formName" className="input_wrap">
                  <Form.Label>Near By</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Landmark"
                    name="near"
                    value={form.near}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6 p-2">
                <Form.Group controlId="formMobile" className="input_wrap">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Pin Code"
                    name="pin"
                    value={form.pin}
                    onChange={(e) => handlehange(e)}
                  />
                </Form.Group>
              </div>
              <div className="contact_btn">
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
    </>
  );
}

export default OurSite;
