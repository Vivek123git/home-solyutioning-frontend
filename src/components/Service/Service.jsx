import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "./Service.css";
import Skelton from "./Skelton";
import { onSetAlert } from "../../Action/AlertAction";
import { useDispatch } from "react-redux";
import {     Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { onFetchServices } from "../../Action/ServiceAction";

function Service() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [show, setShow] = useState({
    modal:false,
    id:"",
    type:""
  });
  const [modalId, setModalId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id,type) => setShow({...show ,modal:true,id:id, type:type});

  const handleModal = (e) => {
    const { value } = e.target;
    if (value === "1") {
      setModalId("1");
    } else {
      setModalId("2");
    }
  };
  // console.log(show.id,"id")

  const handleGo = (id,type) => {
   navigate(`/servicecard?sId=${show.id}&name=${show.type}&id=${modalId}`  )
  };

  const [state, setState] = useState({
    image: "",
    heading: "",
    paragraph: "",
  });

  const [service, setService] = useState([]);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // let data=JSON.stringify({
  //   email:state.email,
  //   password:state.password,
  //   name:state.name,
  //   mobile:state.mobile
  // })

  const fetchServiceData = () => {
    // axios
    //   .get("https://onehomesolution.000webhostapp.com/fetch-service", {
    //     options,
    //   })
    //   .then((res) => {
    //     setService(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.msg);
    //   });
    let data={}
    dispatch(onFetchServices(setService,data))
  };

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <section className="main-section py-4">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="service_headinng text-center">
              <h3 style={{ color: "#71a1e9" }} className="py-4">
                Our Services
              </h3>
            </div>
            <Row style={{ justifyContent: "center" }}>
              {service.length > 0 ? (
                service.map((elem, index) => {
                  return (
                    <div className="col-md-4 col-sm-12">
                      <Card className="card">
                        <Card.Img variant="top" src={elem.image} />
                        <Card.Body style={{backgroundColor:"#71a1e9",paddingTop:"20px",paddingBottom:"0px"}}>
                          <Card.Title>{elem.heading}</Card.Title>
                          {/* <Card.Text>{elem.paragraph}</Card.Text> */}
                          {/* <Link to={`/servicecard?name=${elem.heading}`}> */}
                            <div className="service_btn text-center pb-3" >
                              <Button variant="primary" onClick={()=>handleShow(elem.id,elem.type)}>
                                Show more
                              </Button>
                            </div>
                          {/* </Link> */}
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <div className="p-3 m-2" style={{justifyContent:"space-evenly"}}>
                  <Skelton />
                  
                </div>
              )}
            </Row>
          </div>
        </div>
      </div>

      {/* <Col md={4}  className="shadow-lg p-3 mb-5 bg-white rounded cardBody">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png" />
              <Card.Body>
                <Card.Title>Plumbing Services</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor ipsum vitae turpis .
                </Card.Text>
                <Link to="/plumber"><Button variant="primary">Book Plumber</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          
          
          

      {/* </Container> */}
      <Modal show={show.modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select an option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleModal(e)}
            >
              <option>Open this select menu</option>
              <option value="1">Booking by Yourself</option>
              <option value="2">Booking By Our Platform</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>handleGo(show.id,show.type)}>
              Go
            </Button>
          </Modal.Footer>
        </Modal>
    </section>
  );
}

export default Service;
