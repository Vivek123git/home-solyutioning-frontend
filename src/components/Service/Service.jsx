import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
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

  const fetchServiceData = () => {
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

      <Modal show={show.modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select an option</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => handleModal(e)}
            >
              <option>What would you prefer</option>
              <option value="1">Directly talk to technician</option>
              <option value="2">Book your technician using our platform</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>handleGo(show.id,show.type)}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
    </section>
  );
}

export default Service;
