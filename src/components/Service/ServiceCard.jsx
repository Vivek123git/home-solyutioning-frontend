import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";
import "../../../src/App.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubServices } from "../../Action/ServiceAction";
import Skelton from "./Skelton";
import Alert1 from "../Alert";
import { Helmet } from "react-helmet";

const ServiceCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const serviceDetails = useSelector((state) => state.service);
  const searchParams = new URLSearchParams(location.search);
  const sId = searchParams.get("sId");
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const [services, setServices] = useState([]);
  const [sid, setSid] = useState(sId);
  const [show, setShow] = useState(false);
  const [cartNames, setCartNames] = useState(Array(28).fill("Add in Cart")); // Initialize with "Add in Cart" for each element
  const [servicedata, setServiceData] = useState([])
  const [cartdata ,setCartData] = useState({})

  const [search, setSearch] = useState("");

  let formData = new FormData();
  formData.append("id", sid);

  const onFetchSubServices = () => {
    dispatch(fetchSubServices(formData, setServices));
  };

  const handleClick = (elem, ind) => {
    setCartData(elem)
    if (id === "1") {
      navigate(`/byown?name=${elem.heading}&id=${elem.id}`);
    } else if (id === "2") {
      // navigate(`/oursite?name=${elem.heading}&type=${name}&id=${elem.id}`);
      setServiceData((prevServiceData) => {
        const serviceId = elem.serviceId;
        const isServiceIdInArray = prevServiceData.some((item) => item.serviceId === serviceId);

        let updatedServiceData;

        if (isServiceIdInArray) {
          updatedServiceData = prevServiceData.filter((item) => item.serviceId !== serviceId);
        } else {
          updatedServiceData = [...prevServiceData, elem];
        }

        dispatch({ type: "SERVICE_DISC", payload: updatedServiceData });
        return updatedServiceData;
      });

      setCartNames((prevCartNames) => {
        const updatedCartNames = [...prevCartNames];
        updatedCartNames[ind] =
          prevCartNames[ind] === "Add in Cart" ? "Remove from Cart" : "Add in Cart";
        return updatedCartNames;
      });

      setShow(true);
    }
  };

  const handleCart=()=>{
    const elem = cartdata
    navigate(`/oursite?name=${elem.heading}&type=${name}&id=${elem.id}`)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterServices = services.filter((elem, id) => {
    if (search !== "") {
      return elem.heading.toLowerCase().includes(search.toLowerCase());
    } else {
      return elem;
    }
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newSId = searchParams.get("sId");
    setSid(newSId);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    onFetchSubServices();
  }, [sid]);

  const prices = serviceDetails?.servicedesc?.map((elem) => +elem.price);
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);

  return (
    <>
      <Helmet>
        <title>Repairinminute | Book Your Skilled {name}</title>
        <meta
          name="description"
          content={`Book your skilled ${name}`}
        />
      </Helmet>
      <Navbar />
      {/* <Alert1 /> */}
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
            {filterServices.length > 0 ? (
              filterServices.map((elem, ind) => {
                return (
                  <Col
                    key={ind}
                    md={4}
                    className="mb-4 bg-white rounded cardBody"
                  >
                    <Card>
                      <Card.Img variant="top" rel="preload" src={elem.image} />
                      <Card.Body
                        style={{
                          backgroundColor: "#71a1e9",
                          paddingTop: "20px",
                          paddingBottom: "0px",
                        }}
                      >
                        <Card.Title>{elem.heading}</Card.Title>
                        <div
                          className=" text-center"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            className="m-0"
                            variant="primary"
                            onClick={() => handleClick(elem, ind)}
                          >
                            {id === "2" ? `${cartNames[ind]}` : "Get technician details"}
                          </Button>
                          {id === "2" ? (
                            <Button className="m-0" style={{ float: "right" }}>
                              Visiting Charge {elem.price} &#x20B9;
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
              <div className="p-3 m-2" style={{ justifyContent: "space-evenly" }}>
                <Skelton />
              </div>
            )}
          </Row>
          {show ? (
            <div className="cart-container">
              <div className="row">
                <div className="col-md-12 p-4 d-flex justify-content-between align-items-center">

                  <h5 className="text-light">
                   
                   Total price : {totalPrice} &#8377;
                  </h5>
                  <Button onClick={handleCart} className="m-0">View Cart</Button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
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
