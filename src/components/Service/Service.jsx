import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import Skelton from "./Skelton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { onFetchServices } from "../../Action/ServiceAction";
import Loader from "../Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Service() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const [show, setShow] = useState({
  //   modal: false,
  //   id: "",
  //   type: ""
  // });
  const [isLoading, setLoading] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = (id, type) => setShow({ ...show, modal: true, id: id, type: type });

  // const handleModal = (e) => {
  //   const { value } = e.target;
  //   if (value === "1") {
  //     setModalId("1");
  //   } else {
  //     setModalId("2");
  //   }
  // };


  // const handleGo = (id, type) => {
  //   navigate(`/servicecard?sId=${show.id}&name=${show.type}&id=${modalId}`)
  // };

  const handleGo = (id, type) => {
    navigate(`/servicecard?sId=${id}&name=${type}&id=${2}`)
  };

  const [service, setService] = useState([]);

  const fetchServiceData = () => {
    setLoading(true)
    let data = {}
    dispatch(onFetchServices(setService, data,setLoading))
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
                    <div className="col-md-4 col-sm-6">
                      <Card className="card">
                        <Card.Img variant="top" rel="preload" src={elem.image} />
                        <Card.Body style={{ backgroundColor: "#71a1e9", paddingTop: "20px", paddingBottom: "0px" }}>
                          <Card.Title>{elem.heading}</Card.Title>

                          {/* <div className="service_btn text-center " >
                              <Button variant="primary" onClick={()=>handleShow(elem.id,elem.type)}>
                                Start Booking
                              </Button>
                            </div> */}

                          <div className="service_btn text-center " >
                            <Button variant="primary" onClick={() => handleGo(elem.id, elem.type)}>
                              Start Booking
                            </Button>
                          </div>

                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
              ) : (
                <div className="p-3 m-2" style={{ justifyContent: "space-evenly" }}>
                  <Skelton />

                </div>
              )}
            </Row>
          </div>
        </div>
      </div>

      {/* <Modal show={show.modal} onHide={handleClose}>
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
          <Button variant="primary" onClick={() => handleGo(show.id, show.type)}>
            Next
          </Button>
        </Modal.Footer>
      </Modal> */}
      <Loader isLoading={isLoading}/>
    </section>
  );
}

export default Service;
