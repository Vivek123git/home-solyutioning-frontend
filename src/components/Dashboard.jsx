import React, { useEffect, useState } from 'react'
import NavbarHead from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Row, Col, Table } from 'react-bootstrap'
import data from './Data.json'
import UserProfile from './UserProfile'
import ServiceWorkerProfile from './Serviceworker/ServiceworkerProfile'
import { onFetchAllBooking, onFetchAllWorker, onSendUserData, onSendWorkerData } from '../Action/ServiceAction'
import { useDispatch } from 'react-redux'

const Dashboard = () => {

    const auth = JSON.parse(localStorage.getItem("state"));
    const dispatch = useDispatch()

    const [workerData, setWorkerData] = useState([]);
    const [bookingData, SetBookingData] = useState([])
    const [userData, setUserData] = useState([])
    const [sendWorkerData, setSendWorkerData] = useState([]);



    const handleSendWorker = (elem) => {

        let sendUserData = new FormData();
        sendUserData.append("worker_id", userData.id); // Make sure `userData` has a valid value
        sendUserData.append("username", elem.name);
        sendUserData.append("address", elem.address);
        sendUserData.append("number", elem.mobileNumber);
        sendUserData.append("status", "0");
        sendUserData.append("date", "27/05/2023");
        dispatch(onSendUserData(sendUserData));
    };



    const handleSendUser = (elem) => {
        let sendWorkerData = new FormData();
        sendWorkerData.append("user_id", auth.login.user.id); // Make sure `userData` has a valid value
        sendWorkerData.append("worker_name", userData.name);
        sendWorkerData.append("worker_service", userData.address);
        sendWorkerData.append("worker_number", userData.mobileNumber);
        sendWorkerData.append("status", "0");
        sendWorkerData.append("rating", "5");
        sendWorkerData.append("worker_date", "27/05/2023");
        dispatch(onSendWorkerData(sendWorkerData));
    };

    const fetchAllBooking = () => {
        let bookingPayload = new FormData();
        bookingPayload.append("", {})
        dispatch(onFetchAllBooking(SetBookingData, bookingPayload))
    }

    // console.log(bookingData, "book")

    const fetchAllWorker = () => {
        let workerPayload = new FormData();
        workerPayload.append("", {})
        dispatch(onFetchAllWorker(setWorkerData, workerPayload))
    }
    console.log(userData, "work")

    useEffect(() => {
        fetchAllBooking();
        fetchAllWorker();
    }, [])

    const handleWorker = (e) => {
        setUserData(JSON.parse(e.target.value));
    };

    return (
        <>
            <NavbarHead />
            <section className='main-section'>
                <div className='container'>
                    <Row>
                        <Col>
                            <h2>Dashboard</h2>
                            <div style={{ overflow: "auto" }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>User Name</th>
                                            <th>User Mobile No.</th>
                                            <th>Services</th>
                                            <th>Subservices</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookingData.length > 0 ? (
                                            bookingData.reverse().map((elem, id) => {
                                                // Parse the description field if it's a valid JSON string
                                                let descriptionData = null;
                                                try {
                                                    descriptionData = JSON.parse(elem.description);
                                                } catch (error) {
                                                    console.error('Error parsing description:', error);
                                                }

                                                return (
                                                    <tr key={id}>
                                                        <td>{elem.id}</td>
                                                        <td>{elem.name}</td>
                                                        <td>{elem.mobileNumber}</td>
                                                        <td>{elem.description}</td>
                                                        <td>{elem.service}</td>
                                                        <td>{elem.address}</td>
                                                        <td>
                                                            <select
                                                                onChange={(e) => handleWorker(e)}
                                                                style={{ height: "35px", margin: "2px" }}
                                                            >
                                                                <option value={JSON.stringify("")}>Select worker</option>
                                                                {workerData.length > 0 && descriptionData ? (
                                                                    workerData
                                                                        .filter((curElem) => {
                                                                            const skillData = JSON.parse(curElem.skill);
                                                                            if (Array.isArray(skillData)) {
                                                                                return skillData.some(skill => {
                                                                                    return descriptionData.some(description => description.name === skill.name);
                                                                                });
                                                                            }
                                                                            return false;
                                                                        })
                                                                        .map((elem1, id) => (
                                                                            <option key={id} value={JSON.stringify(elem1)}>{elem1.name}</option>
                                                                        ))
                                                                ) : null}
                                                            </select>
                                                            <button
                                                                onClick={() => handleSendWorker(elem)}
                                                                style={{ height: "35px", margin: "2px" }}
                                                            >
                                                                send to worker
                                                            </button>
                                                            <button
                                                                onClick={() => handleSendUser(elem)}
                                                                style={{ height: "35px", margin: "2px" }}
                                                            >
                                                                send to user
                                                            </button>
                                                        </td>
                                                        <td>Status</td>
                                                    </tr>
                                                );
                                            })
                                        ) : null}


                                    </tbody>
                                </Table>
                                {/* <UserProfile data={}/>
                                <ServiceWorkerProfile data={}/> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard