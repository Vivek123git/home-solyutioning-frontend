import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { onFetchAllBooking, onFetchAllWorker, onFetchBookingStatus, onSendUserData, onSendWorkerData } from '../Action/ServiceAction';
import NavbarHead from './Navbar/Navbar';
import { CircularProgress } from "@mui/material";
import Footer from './Footer/Footer';

const Dashboard = () => {
    const auth = JSON.parse(localStorage.getItem('state'));
    const dispatch = useDispatch();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const [workerData, setWorkerData] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    const [userData, setUserData] = useState([]);

    const handleSendWorker = (elem) => {
        let sendUserData = new FormData();
        sendUserData.append('worker_id', userData.id);
        sendUserData.append('username', elem.name);
        sendUserData.append('address', elem.address);
        sendUserData.append('number', elem.mobileNumber);
        sendUserData.append('status', '0');
        sendUserData.append('date', formattedDate);
        dispatch(onSendUserData(sendUserData));
    };

    const handleSendUser = (elem) => {
        let sendWorkerData = new FormData();
        sendWorkerData.append('user_id', auth.login.user.id);
        sendWorkerData.append('worker_name', userData.name);
        sendWorkerData.append('worker_id', userData.id);
        sendWorkerData.append('worker_address', userData.address);
        sendWorkerData.append('worker_service', userData.service);
        sendWorkerData.append('worker_number', userData.mobileNumber);
        sendWorkerData.append('status', '0');
        sendWorkerData.append('rating', '5');
        sendWorkerData.append('worker_date', formattedDate);
        dispatch(onSendWorkerData(sendWorkerData));
    };

    const fetchAllBooking = () => {
        let bookingPayload = new FormData();
        bookingPayload.append('', {});
        dispatch(onFetchAllBooking(setBookingData, bookingPayload));
    };

    const fetchAllWorker = () => {
        let workerPayload = new FormData();
        workerPayload.append('', {});
        dispatch(onFetchAllWorker(setWorkerData, workerPayload));
    };

    useEffect(() => {
        fetchAllBooking();
        fetchAllWorker();
    }, []);

    const handleWorker = (e) => {
        setUserData(JSON.parse(e.target.value));
    };

    return (
        <>
            <NavbarHead />
            <section className="main-section">
                <div className="container">
                    <Row>
                        <Col>
                            <h2>Dashboard</h2>
                            <div style={{ overflow: 'auto' }}>
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
                                        {bookingData.length > 0 &&
                                            bookingData.map((elem, id) => {
                                                // Parse the description field if it's a valid JSON string
                                                let descriptionData = JSON.parse(elem.description);
                                                let service =
                                                    elem.service === "1" ? "Electrician" :
                                                    elem.service === "4" ? "R.O." : 
                                                    elem.service==="2" ? "plumber":
                                                    elem.service==="3"?"A.C. tech." :
                                                    elem.service==="5"?"Broadband":
                                                    elem.service==="6"?"CCTV":"";
                                                return (
                                                    <tr key={id}>
                                                        <td>{elem.id}</td>
                                                        <td>{elem.name}</td>
                                                        <td>{elem.mobileNumber}</td>
                                                        <td>{service?service:elem.service}</td>
                                                        <td>{elem.description}</td>
                                                        <td>{elem.address}</td>
                                                        <td>
                                                            <select
                                                                onChange={(e) => handleWorker(e)}
                                                                style={{ height: '35px', margin: '2px' }}
                                                            >
                                                                <option value={JSON.stringify('')}>
                                                                    Select worker
                                                                </option>
                                                                {workerData.length > 0 &&
                                                                    descriptionData &&
                                                                    workerData
                                                                        .filter((curElem) => {
                                                                            const skillData = JSON.parse(curElem.skill);
                                                                            if (Array.isArray(skillData)) {
                                                                                const isNameMatch = Object.values(descriptionData).some(
                                                                                    (description) => skillData.some((skill) => description.name === skill.name)
                                                                                );
                                                                                return isNameMatch;
                                                                            }

                                                                            return false;
                                                                        })
                                                                        .map((elem1, id) => (
                                                                            <option key={id} value={JSON.stringify(elem1)}>
                                                                                {elem1.name}
                                                                            </option>
                                                                        ))}
                                                            </select>
                                                            <button
                                                                onClick={() => handleSendWorker(elem)}
                                                                style={{ height: '35px', margin: '2px' }}
                                                            >
                                                                send to worker
                                                            </button>
                                                            <button
                                                                onClick={() => handleSendUser(elem)}
                                                                style={{ height: '35px', margin: '2px' }}
                                                            >
                                                                send to user
                                                            </button>
                                                        </td>
                                                        <td>{elem.booking_status === "3" ? "Rejected" : elem.booking_status === "2" ? "Accepted" : "NotSelected"}</td>
                                                    </tr>
                                                );
                                            })}

                                    </tbody>
                                </Table>
                                {bookingData.lenght < 0 ? <CircularProgress className="spinner_icon" style={{ color: "white", height: "30px", width: "30px", position: 'absolute', marginLeft: "200px" }} /> : ""}
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
    );
};

export default Dashboard;
