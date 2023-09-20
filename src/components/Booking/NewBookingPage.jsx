import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router";
import { onBookingServiceman } from "../../Action/ServiceAction";
import { fetchSubServicesData, onFetchServices } from "../../Action/ServiceAction";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { CircularProgress } from "@mui/material";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

function OurSite() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const auth = JSON.parse(localStorage.getItem("state"));

    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const type = searchParams.get("type");

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        address: "",
        state: "U.P.",
        city: "",
        service: (type ? `${type}` : ""),
        description: (name ? `${name}` : ""),
        near: "",
        pinCode: "000000",
        id: (id ? `${id}` : "")
    });
    const [loader, setLoader] = useState(false)
    const [servicesData, setServicesData] = useState([]);
    const [skill, setSkill] = useState([])
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(true);


    const handleSelect = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const obj = [{
        name: form.description,
        // id: form.id
    }];

    let data;
    if (auth && auth.login && auth.login.isAuthenticated && auth.login.user) {
        data = JSON.stringify({
            name: form.name,
            service: form.service,
            mobile: form.mobile,
            description: JSON.stringify(obj),
            address: form.address,
            state: form.state,
            city: form.city,
            landmark: form.near,
            pincode: form.pinCode,
            id: auth.login.user.id
        });
    }

    // let data = JSON.stringify({
    //     name: form.name,
    //     service: form.service,
    //     mobile: form.mobile,
    //     description: JSON.stringify(obj),
    //     address: form.address,
    //     state: form.state,
    //     city: form.city,
    //     landmark: form.near,
    //     pincode: form.pinCode,
    //     id: form.id
    // });

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            console.log("first")
            setValidated(true);
        } else {
            setValidated(true);
            //  setLoader(true)
            // dispatch(onBookingServiceman(data, setLoader, setForm, form, navigate))

            if (auth && auth.login && auth.login.isAuthenticated && auth.login.user) {
                dispatch(onBookingServiceman(data, setLoader, setForm, form, navigate));
            } else {
                setLoader(false)
                toast.warning("Please login first")
            }
        }
    };

    const handlehange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    useEffect(() => {
        dispatch(onFetchServices(setServicesData, {}))
    }, [])

    let formDataFetch = new FormData();
    formDataFetch.append("id", form.service);

    useEffect(() => {
        setLoading(true)
        dispatch(fetchSubServicesData(formDataFetch, setSkill, setLoading))
    }, [form.service])

    return (
        <>
            <Helmet>
                <title>Repairinminute | Book your skilled technician</title>
                <meta
                    name="description"
                    content="Book your skilled technician"
                />
            </Helmet>
            {name ? <Navbar /> : ""}
            <section className="contact-section ">
                <div className="container">
                    <div className="row">
                        <div className="contact_heading text-center py-4">
                            <h3>Book your Technician</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9" >
                        <h4
                            style={{
                                fontSize: "18px",
                                paddingTop: "15px",
                                paddingBottom: "15px",
                            }}
                        >
                            Fill this form we will contact you soon...
                        </h4>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group controlId="formName" className="input_wrap ">
                                        <Form.Label>Enter your name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter name"
                                            name="name"
                                            value={form.name}
                                            onChange={(e) => handlehange(e)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group controlId="formMobile" className="input_wrap ">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter mobile number"
                                            name="mobile"
                                            value={form.mobile}
                                            onChange={(e) => handlehange(e)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-md-12 px-4 py-2">
                                    <Form.Group controlId="formService" className="input_wrap ">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control as="select" name="service" onChange={handleSelect} required>
                                            {name ? <option value="1">{form.service}</option>
                                                :
                                                <>
                                                    <option value="">Select an option</option>
                                                    {servicesData.map((elem, id) => {

                                                        return (
                                                            <option value={elem.id}>{elem.type}</option>
                                                        )
                                                    })}</>}
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-md-12 px-4 py-2">
                                    {name ? "" : <p className="p-0 m-0 text-sm">Please first choose services</p>}
                                    <Form.Group controlId="formDescription" className="input_wrap ">
                                        <Form.Label>
                                            {name ? "Service that you want" : `Select your problem ${isLoading ? "(Please wait...)" : ""}`}
                                        </Form.Label>
                                        {name ? <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Enter a description"
                                            name="description"
                                            value={obj[0].name}
                                            readOnly={name ? true : false}
                                            onChange={(e) => handlehange(e)}
                                            required
                                        /> :
                                            <Form.Select style={{ height: "2.5rem" }} name="description" onChange={(e) => handlehange(e)} required>
                                                <option value="">Select an option</option>
                                                {skill.map((elem) => {
                                                    return (
                                                        <option value={elem.heading}>{elem.heading}</option>
                                                    )
                                                })}
                                            </Form.Select>

                                        }
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-12 px-4 py-2">
                                    <Form.Group controlId="formAddress" className="input_wrap ">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter address"
                                            name="address"
                                            value={form.address}
                                            onChange={(e) => handlehange(e)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                {/* <div className="col-md-6 px-4 py-2">
                  <Form.Group controlId="formState" className="input_wrap ">
                   
                    <Form.Select name="state" onChange={(e) => handlehange(e)}>
                      <option>Select your State</option>
                      <option value="UP">Uttar Pradesh</option>
                    </Form.Select>
                  </Form.Group>
                </div> */}
                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group controlId="formCity" className="input_wrap">

                                        <Form.Select name="city" onChange={(e) => handlehange(e)} required>
                                            <option value="">Select your City</option>
                                            <option value="Lucknow">Lucknow</option>
                                            <option value="Barabanki">Barabanki</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group controlId="formName" className="input_wrap" >
                                        <Form.Label>Near By</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Landmark"
                                            name="near"
                                            value={form.near}
                                            onChange={(e) => handlehange(e)}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                {/* <div className="col-md-6 px-4 py-2">
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
                </div> */}
                                <div className="contact_btn">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        style={{ width: "26%", height: "60px" }}
                                    >
                                        Submit
                                        {loader ? <CircularProgress className="spinner_icon" style={{ color: "white", height: "30px", width: "30px", position: 'inherit', marginLeft: "0px" }} /> : ""}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                {/* <Loader isLoading={isLoading}/> */}
            </section>
        </>
    );
}

export default OurSite;
