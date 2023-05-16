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

  const [workerData, setWorkerData] = useState([])
  // const[workerId,setWorkerId] = useState(id)

  let formData = new FormData();
  formData.append("id", id)

  const fetchWorkerData = () => {

    dispatch(onFetchWorkerData(setWorkerData, formData))
  }

  console.log(workerData, "data")

  useEffect(() => {
    fetchWorkerData()
  }, [])

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
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            {workerData.length > 0 ?
              workerData.map((elem, ind) => {
                return (
                  <>
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
                            <div style={{color:"black"}}>
                            <span className="text-primary">Name - </span>{elem.name}
                            </div>
                          </Card.Title>
                          <hr />
                          <Card.Text>
                            <div style={{margin:"0px"}}>
                              <span className="text-primary">Mobile No. - </span>
                              {elem.mobileNumber}
                            </div>
                            <div>
                              <span className="text-primary">Area. - </span>{elem.address}
                            </div>
                          </Card.Text>
                          <ListGroup className="list-group-flush">
                            <hr style={{margin:"0px"}}/>
                            <ListGroup.Item className="btnSpace">
                              Status
                              <Button className="bg-success">Available</Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                )
              })

              : ""}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ByOwn;
