import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Electrician from "./components/Service/Electrician/Electrician";
import CreateLogin from "./components/Login/CreateLogin";
import Login from "./components/Login/Login";
import ByOwn from "./components/Booking/ByOwn";
import OurSite from "./components/Booking/OurSite";
import NewBookingPage from "./components/Booking/NewBookingPage";
import ServiceWorker from "./components/Serviceworker/Serviceworker";
import PrivateComponent from "./components/PrivateComponent";
import ServiceWorkerProfile from "./components/Serviceworker/ServiceworkerProfile";
import UserProfile from "./components/UserProfile";
import ServiceCard from "./components/Service/ServiceCard"
import ContactUs2 from "./components/ContactUs2";
import About from "./components/About/About";
import ForgetPasword from "./components/Login/ForgetPassword";
import Dashboard from "./components/Dashboard"

function App() {

  const auth = JSON.parse(localStorage.getItem('state'))


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

            <Route exact path="/byown" element={<PrivateComponent checkUserAuth={true}><ByOwn /></PrivateComponent>} />
            <Route exact path="/oursite" element={<PrivateComponent checkUserAuth={true}><NewBookingPage /></PrivateComponent>} />

            {/* <Route exact path="/byown" element={<ByOwn />} /> */}
            {/* <Route exact path="/oursite" element={<OurSite />} /> */}
            {/* <Route exact path="/oursite" element={<NewBookingPage />} /> */}

            <Route exact path="/serviceworker" element={<ServiceWorker />} />
            <Route exact path="/serviceworkerprofile" element={<PrivateComponent checkUserAuth={false}><ServiceWorkerProfile /></PrivateComponent>} />
            <Route exact path="/userprofile" element={<PrivateComponent checkUserAuth={true}><UserProfile /></PrivateComponent>} />
            <Route exact path="/servicecard" element={<ServiceCard />} />
            <Route exact path="/contactus" element={<ContactUs2 />} />
            <Route exact path="/aboutus" element={<About />} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
