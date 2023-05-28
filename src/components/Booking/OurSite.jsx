import React, { useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {  useLocation, useNavigate } from "react-router";
import { onBookingServiceman } from "../../Action/ServiceAction";
import { fetchSubServicesData,onFetchServices } from "../../Action/ServiceAction";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Multiselect from "multiselect-react-dropdown";
import { onSetAlert } from "../../Action/AlertAction";
import { CircularProgress } from "@mui/material";
import Alert1 from "../Alert";

function OurSite() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

   const auth = JSON.parse(localStorage.getItem("state"));

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
    pinCode: "",
    id:""
  });
  const [loader , setLoader] = useState(false)
  const [servicesData, setServicesData] = useState([]);
  const [skill,setSkill] = useState([])

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      skills:[]
    });
  };

let data;
  if(auth && auth.login && auth.login.isAuthenticated && auth.login.user){
     data = JSON.stringify({
      name: form.name,
      service: form.service,
      mobile: form.mobile,
      description:  JSON.stringify(form.description),
      address: form.address,
      state: form.state,
      city: form.city,
      landmark: form.near,
      pincode: form.pinCode,
      id:auth.login.user.id
    });
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    if(auth && auth.login && auth.login.isAuthenticated && auth.login.user){
      dispatch(onBookingServiceman(data,setLoader,setForm,form));
    }else{
      dispatch(onSetAlert("Please login then book the form", "warning"))
      console.log("logout")
    }
    
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };


  const options = skill.map((elem) => ({ name: elem.heading, id: elem.id }));

  function onSelect(selectedList, selectedItem) {
    setForm({...form,description:selectedList})
  }
  

  function onRemove(selectedList, removedItem) {
    setForm({...form,description:selectedList.id})
  }

  useEffect(()=>{
    dispatch(onFetchServices(setServicesData,{}))
  },[])

  let formDataFetch = new FormData(); 
  formDataFetch.append("id",form.service ); 

  useEffect(()=>{
    dispatch(fetchSubServicesData(formDataFetch,setSkill))
   },[form.service])

  return (
    <>
      <Helmet>
        <title>Repairinminute | Book your skilled technician</title>
        <meta
          name="description"
          content="Book your skilled technician"
        />
      </Helmet>
    {name?<Navbar/>:""}
    <Alert1/>
    <section className="contact-section ">
      <div className="container">
        <div className="row">
          <div className="contact_heading text-center py-4">
            <h3>Book your Technician</h3>
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
                  <Form.Label>Enter your name</Form.Label>
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
                     <option value="">Select an option</option>
                      {servicesData.map((elem,id)=>{
                            return(
                              <option value={elem.id}>{elem.type}</option>
                            )
                          })}</> }
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="col-md-12 p-2">
                <Form.Group controlId="formDescription" className="input_wrap ">
                  <Form.Label>
                    {name?"Service that you want":"Select your problem"}
                  </Form.Label>
              {name ? <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter a description"
                    name="description"
                    value={form.description}
                    readOnly={name ? true : false}
                    onChange={(e) => handlehange(e)}
                  />:
                  <Multiselect
                          options={options}
                          selectedValues={form.description}
                          onSelect={onSelect}
                          onRemove={onRemove}
                          displayValue="name"
                        />}
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
                    name="pinCode"
                    value={form.pinCode}
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
                  {loader?<CircularProgress className="spinner_icon" style={{color:"white",height:"30px",width:"30px",position:'inherit',marginLeft:"0px"}}/>:""}
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
