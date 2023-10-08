import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

const UserPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        address: "",
        state: "U.P.",
        price:"",
        city: "",
        service: "",
        skills: [],
        near: "",
        pinCode: "000000",
        id: "1"
    });
    const [loader, setLoader] = useState(false)
    const [servicesData, setServicesData] = useState([]);
    const [skill, setSkill] = useState([])
    const [validated, setValidated] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const options = skill?.map((elem) => ({ name: elem.heading, id: elem.id ,price:elem.price}));

    function onSelect(selectedList, selectedItem) {
    const a = selectedList.map((elem)=>+elem.price)
    const totalPrice = a.reduce((acc, price) => acc + price, 0);
    setForm({ ...form, skills: selectedList })
    setForm({
        ...form,
        price:totalPrice
    })
    }


    function onRemove(selectedList, removedItem) {
        const updatedSelectedList = selectedList.filter(item => item.id !== removedItem.id);
        setForm({ ...form, skills: updatedSelectedList });
        const a = selectedList.map((elem)=>+elem.price)
    const totalPrice = a.reduce((acc, price) => acc + price, 0);
    setForm({
        ...form,
        price:totalPrice
    })
    }

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

    let data = JSON.stringify({
        name: form.name,
        service: form.service,
        mobile: form.mobile,
        description: JSON.stringify(form.skills),
        address: form.address,
        price:form.price,
        state: form.state,
        city: form.city,
        landmark: form.near,
        pincode: form.pinCode,
        id: "1"
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        } else {
            setValidated(true);
            let config = {
                method: "post",
                url: "https://onehomesolution.000webhostapp.com/booking",
                data: data
            };
            axios(config)
                .then((res) => {
                    if (res.status) {
                        toast.success('Booking Successfully');
                        navigate("/")
                        setForm({
                          ...form,
                          name: "",
                          mobile: "",
                          address: "",
                          state: "U.P.",
                          price:"",
                          city: "",
                          service: "",
                          skills: [],
                          near: "",
                          pinCode: "",
                          id: ""
                        })
                    } else {
                        toast.success('Booking not Successfully');
                    }
                })
                .catch((err) => {
                    console.log(err.msg);
                });
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
        let config = {
            method: "get",
            url: "https://onehomesolution.000webhostapp.com/fetch-service",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
        };
        axios(config)
            .then((res) => {
                if (res.status) {
                    setServicesData(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err.msg);
            });
    }, [])

    let formDataFetch = new FormData();
    formDataFetch.append("id", form.service);

    useEffect(() => {
        let config = {
            method: "post",
            url: "https://onehomesolution.000webhostapp.com/fetch-service-type",
            data: formDataFetch,
        };
        axios(config)
            .then((res) => {
                if (res.status) {
                    setSkill(res.data.data);
                }
            })
            .catch((err) => {
                console.log(err.msg);
            });

    }, [form.service])

    return (
        <>


            <section className="contact-section ">
                <div className="container">
                    <div className="row">
                        <div className="contact_heading text-center py-4">
                            <h3>Book Your Technician Now</h3>
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

                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group controlId="formService" className="input_wrap ">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control as="select" name="service" onChange={handleSelect} required>


                                            <>
                                                <option value="">Select an option</option>
                                                {servicesData.map((elem, id) => {

                                                    return (
                                                        <option value={elem.id}>{elem.type}</option>
                                                    )
                                                })}</>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-md-6 px-4 py-2">
                                    <Form.Group as={Col} className="input_wrap">
                                        <Form.Label>Choose Your Skills (First choose service)</Form.Label>
                                        <Multiselect
                                            options={options}
                                            selectedValues={form.skills}
                                            onSelect={onSelect}
                                            onRemove={onRemove}
                                            displayValue="name"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6 px-4 py-2">
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
                {/* <Loader isLoading={isLoading}/> */}
            </section>
        </>
    );
}

export default UserPage;
