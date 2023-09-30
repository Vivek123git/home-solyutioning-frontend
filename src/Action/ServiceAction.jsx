import { commonAxios } from "../components/CommonAxios";
import axios from "axios";
import { onSetAlert } from "./AlertAction";
import { toast } from 'react-toastify';

const options = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export const onBookingServiceman = (data,setLoader,setForm, form,navigate) => (dispatch, getState) => {
  commonAxios("booking", data, dispatch)
    .then((res) => {
      if (res.status) {
        navigate("/")
        toast.success('Booking Successfully');
      } else {
        toast.warning('Booking failed');
      }
      setLoader(false)
      window.location.reload();
    })
    
    .catch((err) => {
      toast.warning('Booking failed');
      console.log(err.msg);
      setLoader(false)
    });
};

export const onCreateServiceman = (data, setLoader, navigate) => (dispatch,getState) => {
  commonAxios("register-worker", data, dispatch)
    .then((res) => {
      if (res.status) {
        toast.success('Worker account created Successfully');
        navigate("/");
        dispatch(onSetAlert("success", res.msg));
      } else {
        console.log("failure");
        toast.warning('Account created failed');
      }
      setLoader(false);
      // window.location.reload();
    })
    .catch((err) => {
      toast.warning('Account created failed');
      console.log(err.msg);
    });
};

export const onFetchServices = (setService, data,setLoading) => (dispatch, getState) => {
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
      setLoading(false)
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

export const fetchSubServicesData = (data, setSkill,setLoading) => (
  dispatch,
  getState
) => {
  commonAxios("fetch-service-type", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setSkill(res.data);
      }
      setLoading(false)
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
  commonAxios("get-worker-data", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setWorker(res.data[0]);
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};


export const onfetchUserBookingDetails = (data, setUserData,setLoading) => (
  dispatch,
  getState
) => {
  commonAxios("show-worker-booking", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        setUserData(res.data);
      }
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.msg);
      setLoading(false)
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

export const onWorkerStatus=(data)=>(dispatch,getState)=>{
  commonAxios("booking-status", data, dispatch, getState)
  .then((res) => {
    if (res.status) {
      dispatch(onSetAlert(res.msg,"success"))
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

export const onRating = (data,handleClose) => (dispatch, getState) => {
  commonAxios("rating", data, dispatch, getState)
    .then((res) => {
      if (res.status) {
        dispatch(onSetAlert("success" , "rating Successfully"))
      }
    })
    handleClose(false)
    .catch((err) => {
      console.log(err.msg);
      handleClose(false)
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

export const onFetchBookingStatus = (data,setBookingStatus)=>(dispatch,getState)=>{
  commonAxios("fetch-booking-status",data,dispatch,getState)
  .then((res)=>{
    if(res.status){
      toast.success('status update successfully');
      setBookingStatus(res.data[0].booking_status)
    }
  })
  .catch((err)=>{
    dispatch(onSetAlert("warning", "Data not send"))
  })
}

export const onSendUserData=(data)=>(dispatch,getState)=>{
  commonAxios("register-worker-booking" , data , dispatch , getState)
  .then((res)=>{
    if(res.status){
      toast.success('Send user Data successfully');
       dispatch(onSetAlert( "warning", res.msg,));
    }else{
      dispatch(onSetAlert("warning", res.msg))
      toast.warning('Failed');
    }
  })
  .catch((err)=>{
    toast.warning('Failed');
     dispatch(onSetAlert("warning",err.msg ));
  })
}

export const onSendWorkerData=(data)=>(dispatch,getState)=>{
  commonAxios("register-user-booking" , data , dispatch , getState)
  .then((res)=>{
    if(res.status){
      toast.success('Send worker Data successfully');
       dispatch(onSetAlert( "warning", res.msg,));
    }else{
      toast.warning('Failed');
      dispatch(onSetAlert("warning", res.msg))
    }
  })
  .catch((err)=>{
    toast.warning('Failed');
     dispatch(onSetAlert("warning",err.msg ));
  })
}

// Contact Us..................................................
export const onContactSubmit = (data, setLoader) => (dispatch,getState) => {
  commonAxios("contact-us", data, dispatch, getState)
  .then((res) => {
    if (res.status) {
      toast.success('Send successfully');
      dispatch(onSetAlert( "success",res.msg,));
    }
    setLoader(false)
  })
  .catch((err) => {
    console.log(err.msg);
  });
};

// No axios........................................................................
