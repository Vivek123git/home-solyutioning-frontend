import "./App.css";
import "../src/components/Service/Service.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Electrician from "./components/Service/Electrician/Electrician";
import CreateLogin from "./components/Login/CreateLogin";
import Login from "./components/Login/Login";
import ByOwn from "./components/Booking/ByOwn";
import OurSite from "./components/Booking/OurSite";
import ServiceWorker from "./components/Serviceworker/Serviceworker";
import PrivateComponent from "./components/PrivateComponent";
import ServiceWorkerProfile from "./components/Serviceworker/ServiceworkerProfile";
import UserProfile from "./components/UserProfile";
import ServiceCard from "./components/Service/ServiceCard"
import ContactUs2 from "./components/ContactUs2";
import About from "./components/About/About";
import { useEffect } from "react";
import { loginAccount } from "./Action/AuthAction";
import ForgetPasword from "./components/Login/ForgetPassword";

function App() {

  // useEffect(()=>{
  //   dispatch(loginAccount)
  //  },[])

  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<CreateLogin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forget-password" element={<ForgetPasword />} />
         
            <Route exact path="/" element={<Header />} />
            {/* <Route exact path="/electrician" element={<Electrician />} />
            <Route exact path="/plumber" element={<Plumber />} />
            <Route exact path="/actech" element={<PrivateComponent><Actech /></PrivateComponent>} />*/}
            <Route exact path="/byown" element={<PrivateComponent><ByOwn /></PrivateComponent>} />
            <Route exact path="/oursite" element={<PrivateComponent><OurSite /></PrivateComponent>} />
            <Route exact path="/serviceworker" element={<ServiceWorker />} />
            <Route exact path="/serviceworkerprofile" element={<ServiceWorkerProfile />} />
            <Route exact path="/userprofile" element={<UserProfile />} />
            <Route exact path="/servicecard" element={<ServiceCard />} />
            <Route exact path="/contactus" element={<ContactUs2 />} />
            <Route exact path="/aboutus" element={<About />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
