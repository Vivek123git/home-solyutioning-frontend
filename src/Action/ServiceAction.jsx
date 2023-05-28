import { commonAxios } from "../components/CommonAxios";
import axios from "axios";
import { onSetAlert } from "./AlertAction";

const options = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export const onBookingServiceman = (data,setLoader,setForm, form) => (dispatch, getState) => {
  commonAxios("booking", data, dispatch)
    .then((res) => {
      if (res.status) {
        console.log("success");
      } else {
        console.log("failure");
      }
      setLoader(false)
      setForm({...form,name: "",
      mobile: "",
      address: "",
      state: "",
      city: "",
      service:"",
      description: "",
      near: "",
      pinCode: "",
      id:""
    })
    })
    
    .catch((err) => {
      console.log(err.msg);
      setLoader(false)
    });
};

export const onCreateServiceman = (data, setLoader, navigate) => (
  dispatch,
  getState
) => {
  commonAxios("register-worker", data, dispatch)
    .then((res) => {
      if (res.status) {
        navigate("/");
        dispatch(onSetAlert("success", res.msg));
      } else {
        console.log("failure");
      }
      setLoader(false);
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export const onFetchServices = (setService, data) => (dispatch, getState) => {
  axios
    .get(
      "https://onehomesolution.000webhostapp.com/fetch-service",
      data,
      dispatch,
      { options }
    )
    .then((res) => {
      if (res.status) {
        setService(res.data.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export const fetchSubServices = (data, setServices) => (dispatch, getState) => {
  commonAxios("fetch-service-type", data, dispatch)
    .then((res) => {
      if (res.status) {
        setServices(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

// Bown page.....................................................

export const onFetchWorkerData = (setWorkerData, data) => (
  dispatch,
  getState
) => {
  commonAxios("fetch-worker-list", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setWorkerData(res.data);
        const data = res.data;
        dispatch({ type: "FETCH_WORKER_LIST", payload: data });
      } else {
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

// ServiceWorker Acoount create page..................................................

export const fetchSubServicesData = (data, setSkill) => (
  dispatch,
  getState
) => {
  commonAxios("fetch-service-type", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setSkill(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

// ServiceWorker profile page.......................................................................

export const onfetchWorkerDetails = (data, setWorker) => (
  dispatch,
  getState
) => {
  commonAxios("", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setWorker(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};


export const onfetchUserBookingDetails = (data, setUserData) => (
  dispatch,
  getState
) => {
  commonAxios("show-worker-booking", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setUserData(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export const onstatusUpdate=(data)=>(dispatch,getState)=>{
  commonAxios("worker-status", data, dispatch, getState)
  .then((res) => {
    if (res.status) {
      dispatch(onSetAlert("success",res.msg))
    }
  })
  .catch((err) => {
    console.log(err.msg);
  });
}

// UserProfile page...................................................................................
export const onfetchUserrDetails = (data, setUser) => (dispatch, getState) => {
  commonAxios("", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setUser(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export const onRating = (data) => (dispatch, getState) => {
  commonAxios("worker-rating", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        dispatch(onSetAlert("success" , "rating Successfully"))
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};


export const onfetchWorkerBookingDetails = (data, setUserData) => (
  dispatch,
  getState
) => {
  commonAxios("show-user-booking", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setUserData(res.data);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

// OTP..........................................

export const otpVerification = (data, setLoader, setOtp) => (dispatch,getState) => {
  commonAxios("", data, dispatch, getState)
  .then((res) => {
    if (res.status) {
      dispatch(onSetAlert(res.msg, "success"));
      setOtp(false);
    }
    setLoader(false)
  })
  .catch((err) => {
    console.log(err.msg);
  });
};


// Dashboard axios call....................................................

export const onFetchAllBooking=(SetBookingData,data)=>(dispatch,getState)=>{
  commonAxios("fetch-bookings", data,dispatch,getState)
  .then((res)=>{
    if(res.status){
      SetBookingData(res.data)
    }else{
      // dispatch(onSetAlert(res.msg, "warning"));
    }
  })
  .catch((err)=>{
    // dispatch(onSetAlert(err.msg, "warning"));
  })
}

export const onFetchAllWorker=(setWorkerData,data)=>(dispatch,getState)=>{
  commonAxios("fetch-all-workers", data,dispatch,getState)
  .then((res)=>{
    if(res.status){
      setWorkerData(res.data)
    }else{
      // dispatch(onSetAlert(res.msg, "warning"));
    }
  })
  .catch((err)=>{
    dispatch(onSetAlert("warning", "Data not send"))
  })
}

export const onSendUserData=(data)=>(dispatch,getState)=>{
  console.log(data,"data")
  commonAxios("register-worker-booking" , data , dispatch , getState)
  .then((res)=>{
    if(res.status){
       dispatch(onSetAlert( "warning", res.msg,));
    }else{
      dispatch(onSetAlert("warning", res.msg))
    }
  })
  .catch((err)=>{
     dispatch(onSetAlert("warning",err.msg ));
  })
}

export const onSendWorkerData=(data)=>(dispatch,getState)=>{
  console.log(data,"data")
  commonAxios("register-user-booking" , data , dispatch , getState)
  .then((res)=>{
    if(res.status){
       dispatch(onSetAlert( "warning", res.msg,));
    }else{
      dispatch(onSetAlert("warning", res.msg))
    }
  })
  .catch((err)=>{
     dispatch(onSetAlert("warning",err.msg ));
  })
}

// Contact Us..................................................
export const onContactSubmit = (data, setLoader) => (dispatch,getState) => {
  commonAxios("contact-us", data, dispatch, getState)
  .then((res) => {
    if (res.status) {
      dispatch(onSetAlert( "success",res.msg,));
    }
    setLoader(false)
  })
  .catch((err) => {
    console.log(err.msg);
  });
};

// No axios........................................................................
