import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchSubServicesData,onFetchServices, onCreateServiceman } from "../../Action/ServiceAction";
import { useNavigate } from "react-router";
import Multiselect from "multiselect-react-dropdown";
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Otp from "./OTP/Otp";

function ServiceWorker() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    service: "",
    skills: [],
    img: null,
    aadhar: null,
    password: "",
    cnfPassword: "",
  });
  const [servicesData, setServicesData] = useState([]);
  const [skill,setSkill] = useState([])
  const [loader,setLoader] = useState(false)
  const [otp,setOtp] = useState(false)

  
  const options = skill.map((elem) => ({ name: elem.heading, id: elem.id }));

  function onSelect(selectedList, selectedItem) {
    setForm({...form,skills:selectedList})
    // setSelectedValues(selectedList);
    // console.log(`Selected List: ${selectedList}`);
    // console.log(`Selected Item: ${selectedItem}`);
  }
  

  function onRemove(selectedList, removedItem) {
    setForm({...form,skills:selectedList.id})
    // setSelectedValues(selectedList);
    // console.log(`Selected List: ${selectedList}`);
    // console.log(`Removed Item: ${removedItem}`);
  }

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      skills:[]
    });
    
  };

  const handlehange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    const file = e.target.files[0];
  
    if (name === "image") {
      if (file) {
        setForm({ ...form, img: file });
      }
    } else if (name === "aadhar") {
      if (file) {
        setForm({ ...form, aadhar: file });
      }
    }
  };

  let formData = new FormData(); //formdata object

  formData.append("name", form.name);
  formData.append("service", form.service);
  formData.append("skill", JSON.stringify(form.skills));
  formData.append("mobile", form.mobile);
  formData.append("address", form.address);
  formData.append("password", form.password);
  formData.append("image", form.img);
  formData.append("file", form.aadhar);

  let formDataFetch = new FormData(); 
  formDataFetch.append("id",form.service ); 

  useEffect(()=>{
   dispatch(fetchSubServicesData(formDataFetch,setSkill))
  },[form.service])

  useEffect(()=>{
    dispatch(onFetchServices(setServicesData,{}))
  },[])

  const handleSubmit = (e,type) => {
    e.preventDefault();
    if(type==="submit"){ 
    setLoader(true)
     dispatch(onCreateServiceman(formData,setLoader,navigate));
    }else if (type==="otp"){
       setOtp(true)
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-section ">
        <div className="container-fluid main_bg">
          <div className="col-md-12">
            <div className="header p-4">
              <h1 style={{ fontSize: "33px" }}>
                Create Your account as ServiceWorker
              </h1>
            </div>
          </div>

          <div className="service_headinng text-center">
            <h3 style={{ color: "#71a1e9" }}>
              Fill this form we will contact you soon for Verification...{" "}
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="create_page ">
                <Form >
                  <div className="row">
                    <div className="col-md-6 p-2">
                      <Form.Group
                        as={Col}
                        controlId="formName"
                        className="input_wrap"
                      >
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
                      <Form.Group
                        as={Col}
                        controlId="formMobile"
                        className="input_wrap"
                      >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter mobile number"
                          name="mobile"
                          value={form.mobile}
                          onChange={(e) => handlehange(e)}
                        />
                        <Button
                          variant="primary"
                          type="otp"
                          style={{
                            float: "right",
                            padding: "5px",
                            marginTop: "20px",
                          }}
                          onClick={(e)=>handleSubmit(e,"otp")}
                        >
                          OTP send
                        </Button>
                      </Form.Group>
                    </div>

                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Choose Your Service</Form.Label>
                        <Form.Control
                          as="select"
                          name="service"
                          value={form.service}
                          onChange={handleSelect}
                        >
                          <option value="">Select an option</option>
                          {servicesData.map((elem,id)=>{
                            return(
                              <option value={elem.id}>{elem.type}</option>
                            )
                          })}
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Choose Your Skills</Form.Label>
                        <Multiselect
                          options={options}
                          selectedValues={form.skills}
                          onSelect={onSelect}
                          onRemove={onRemove}
                          displayValue="name"
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-12 p-2">
                      <Form.Group
                        controlId="formAddress"
                        className="input_wrap"
                      >
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
                      <Form>
                        <Form.Group as={Col} className="input_wrap">
                          <Form.Label>Upload Your Image</Form.Label>
                          <Form.Control
                            type="file"
                            name="image"
                            onChange={handlehange}
                            accept="image/jpeg,image/jpg"
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Upload Your Aadhar Card (pdf)</Form.Label>
                        <Form.Control
                          type="file"
                          //  accept=".pdf/jpg"
                          accept="application/pdf,image/jpeg,image/jpg"
                          name="aadhar"
                          onChange={handlehange}
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={form.password}
                          onChange={(e) => handlehange(e)}
                          // required
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 p-2">
                      <Form.Group as={Col} className="input_wrap">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="cnfPassword"
                          placeholder="Enter password"
                          value={form.cnfPassword}
                          onChange={(e) => handlehange(e)}
                          // required
                        />
                      </Form.Group>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      style={{
                        width: "36%",
                        height: "60px",
                        margin: "25px auto",
                      }}
                      onClick={(e)=>handleSubmit(e,"submit")}
                    >
                      Create Account
                      {loader?<CircularProgress className="spinner_icon" style={{color:"white",height:"30px",width:"30px"}}/>:""}
                    </Button>
                  </div>
                </Form>
                <div>
      
               </div>
              </div>
            </div>
          </div>
        </div>
        <Otp otp={otp} setOtp={setOtp}/>
      </section>
    </>
  );
}

export default ServiceWorker;
