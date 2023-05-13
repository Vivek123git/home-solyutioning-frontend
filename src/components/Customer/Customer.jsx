import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Customer.css";

function Services() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="co-lg-12 p-0">
          <div className="services-container backColor">
            <div className="customer_heading text-center">
              <h3
                style={{
                  justifyContent: "center",
                  marginBottom: "35px",
                  color: "#fff",
                }}
              >
                 See how customer love us We give Awesome Service
              </h3>
            </div>
            <swiper-container
              className="mySwiper"
              pagination="true"
              pagination-clickable="true"
              navigation="true"
              space-between="30"
              centered-slides="true"
              autoplay-delay="2500"
              autoplay-disable-on-interaction="false"
            >
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://img.freepik.com/free-photo/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger_176532-7923.jpg?w=996&t=st=1682613125~exp=1682613725~hmac=f23961e5b76dcfb937adbf1fc165a3c9f8249f7daba3d619907e46e6b559289a"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://img.freepik.com/free-photo/girl-inviting-grab-bite-pointing-left-local-cafe-smiling-friendly-asking-friend-out-standing-positive-lucky-white-background-hold-hand-pocket-casually-talking-informal-conversation_176420-34954.jpg?w=996&t=st=1682613160~exp=1682613760~hmac=ed1b8f71c5f81463554022fed716bab2bd9733ef08ba890334b64495188cd154"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://img.freepik.com/free-photo/girl-inviting-grab-bite-pointing-left-local-cafe-smiling-friendly-asking-friend-out-standing-positive-lucky-white-background-hold-hand-pocket-casually-talking-informal-conversation_176420-34954.jpg?w=996&t=st=1682613160~exp=1682613760~hmac=ed1b8f71c5f81463554022fed716bab2bd9733ef08ba890334b64495188cd154"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20194.jpg?w=996&t=st=1682613227~exp=1682613827~hmac=78f62ad8451b90c1f9ae1a193843f62fc39e7b230b8d70fd120c3d9ba0ddac60"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="col-md-6">
                  <div className="service-col">
                    <div className="service-img-wrapper">
                      <img
                        src="https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20194.jpg?w=996&t=st=1682613227~exp=1682613827~hmac=78f62ad8451b90c1f9ae1a193843f62fc39e7b230b8d70fd120c3d9ba0ddac60"
                        alt="Service 1"
                        className="service-img"
                      />
                    </div>
                    <div className="service-details">
                      <h4>Customer 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam at massa sapien.
                      </p>
                      <Button variant="primary">Rating</Button>
                    </div>
                  </div>
                </div>
              </swiper-slide>

              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span></span>
              </div>
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
