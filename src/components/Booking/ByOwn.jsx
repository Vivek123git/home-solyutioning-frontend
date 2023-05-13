import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { onFetchWorkerData } from "../../Action/ServiceAction";


const ByOwn = () => {
  
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const[workerData, setWorkerData] = useState([])
  // const[workerId,setWorkerId] = useState(id)

  let formData=new FormData();
  formData.append("id",id)
  
  const fetchWorkerData=()=>{
    
    dispatch(onFetchWorkerData(setWorkerData,formData))
  }

  console.log(workerData,"data")

  useEffect(()=>{
    fetchWorkerData()
  },[])

  return (
    <>
      <Navbar />
      <section className="main-section">
        <Container>
        <div className="service_headinng text-center">
            <h3 style={{ color: "#71a1e9" }}>Call your {name} Serviceworker easily ! </h3>
          </div>
         
          <Row>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1284077647/photo/reverse-osmosis-water-purification-system-at-home-installed-water-purification-filters-clear.jpg?b=1&s=170667a&w=0&k=20&c=ZugpGqIHT4Lp3hOSbtpVE60fsHShmkl15PZM4Byoz8Y="
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    <div>
                      <span className="text-primary">Mobile No. - </span>
                      123-456-789
                    </div>
                    <div>
                      <span className="text-primary">Area. - </span>Lucknow
                    </div>
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <hr />
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-success">Available</Button>
                    </ListGroup.Item>
                    {/* <ListGroup.Item></ListGroup.Item> */}
                  </ListGroup>
                  {/* <div className="btnSpace">
                  <Button variant="primary">Call</Button>
                  <Button variant="primary">WhatsUp</Button>
                </div> */}
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2021/04/21/02/43/plumber-6195292__340.png"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-dark">Booked</Button>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <div className="btnSpace">
                    <Button variant="primary">Mobile No.</Button>
                    <Button variant="primary">WhatsUp</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1292780000/vector/air-conditioner-installation-by-service-technicians-at-home.jpg?s=612x612&w=0&k=20&c=urBjtAMHm6eifiOw8r_U1_HU-qOSKUoMm6zZ1hL1LSQ="
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-success">Available</Button>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <div className="btnSpace">
                    <Button variant="primary">Call</Button>
                    <Button variant="primary">WhatsUp</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1284077647/photo/reverse-osmosis-water-purification-system-at-home-installed-water-purification-filters-clear.jpg?b=1&s=170667a&w=0&k=20&c=ZugpGqIHT4Lp3hOSbtpVE60fsHShmkl15PZM4Byoz8Y="
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    <div>
                      <span className="text-primary">Mobile No. - </span>
                      123-456-789
                    </div>
                    <div>
                      <span className="text-primary">Area. - </span>Lucknow
                    </div>
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <hr />
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-success">Available</Button>
                    </ListGroup.Item>
                    {/* <ListGroup.Item></ListGroup.Item> */}
                  </ListGroup>
                  {/* <div className="btnSpace">
                  <Button variant="primary">Call</Button>
                  <Button variant="primary">WhatsUp</Button>
                </div> */}
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559__340.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-success">Available</Button>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <div className="btnSpace">
                    <Button variant="primary">Call</Button>
                    <Button variant="primary">WhatsUp</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className=" p-3 mb-5 bg-white rounded cardBody"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2012/04/11/17/19/router-29021__340.png"
                />
                <Card.Body>
                  <Card.Title>
                    <span className="text-primary">Name - </span>John Doe
                  </Card.Title>
                  <Card.Text></Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item></ListGroup.Item>
                    <ListGroup.Item className="btnSpace">
                      Status
                      <Button className="bg-success">Available</Button>
                    </ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                  <div className="btnSpace">
                    <Button variant="primary">Call</Button>
                    <Button variant="primary">WhatsUp</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ByOwn;
