import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import "../../../src/App.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSubServices } from "../../Action/ServiceAction";
import Skelton from "./Skelton";
import { onSetAlert } from "../../Action/AlertAction";
import Alert1 from "../Alert";

const ServiceCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const sId = searchParams.get("sId");
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const [services, setServices] = useState([]);
  const [sid, setSid] = useState(sId);

  const [search, setSearch] = useState("");

  let formData = new FormData();
  formData.append("id", sid);

  const onFetchSubServices = () => {
    dispatch(fetchSubServices(formData, setServices));
  };

  const handleClick = (head, ind) => {
    if (id == "1") {
      navigate(`/byown?name=${head}&id=${ind}`);
    } else if (id === "2") {
      console.log("first");
      navigate(`/oursite?name=${head}&type=${name}`);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value)
  };

  const filterServices = services.filter((elem,id)=>{
    if(search !==""){
      return elem.heading.toLowerCase().includes(search.toLowerCase())
    }else{
      return elem;
    }
  });
  console.log(filterServices,"filter")

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newSId = searchParams.get("sId");
    setSid(newSId);
  }, [location]);

  useEffect(() => {
    onFetchSubServices();
  }, [sid]);

  return (
    <>
      <Navbar />
      <Alert1 />
      <section className="main-section">
        <Container>
          <div className="service_headinng text-center">
            <h3 style={{ color: "#71a1e9" }}>Book Your Skilled {name} </h3>
          </div>
          <div className="col-md-3 ">
            <Form.Group as={Col} className="">
              <Form.Label>Search Services</Form.Label>
              <Form.Control
                type="text"
                name="search"
                placeholder="Enter service name"
                value={search}
                onChange={(e) => handleSearch(e)}
                // required
               
              />
            </Form.Group>
          </div>

          <Row>
            <Col md={4} className=" p-3 mb-5 bg-white rounded cardBody">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2019/08/22/13/37/electrician-4423534__340.jpg"
                />
                <Card.Body>
                  <Card.Title>Home Wiring Problem</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    auctor ipsum vitae .
                  </Card.Text>
                  <Button variant="primary" onClick={handleClick}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {filterServices.length > 0 ? (
              filterServices.map((elem, ind) => {
                return (
                  <Col
                    key={ind}
                    md={4}
                    className=" p-3 mb-5 bg-white rounded cardBody"
                  >
                    <Card>
                      <Card.Img variant="top" src={elem.image} />
                      <Card.Body
                        style={{
                          backgroundColor: "#71a1e9",
                          paddingTop: "20px",
                          paddingBottom: "0px",
                        }}
                      >
                        <Card.Title>{elem.heading}</Card.Title>
                        <Card.Text>{elem.paragraph}</Card.Text>
                        <div
                          className=" text-center pb-3"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            variant="primary"
                            onClick={() =>
                              handleClick(elem.heading, elem.id)
                            }
                          >
                            {id === "2"
                              ? "Book Now"
                              : "Get Serviceworker Details"}
                          </Button>
                          {id === "2" ? (
                            <Button style={{ float: "right" }}>
                              Price {elem.price}
                            </Button>
                          ) : (
                            ""
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div
                className="p-3 m-2"
                style={{ justifyContent: "space-evenly" }}
              >
                <Skelton />
              </div>
            )}
          </Row>
        </Container>
        
      </section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
