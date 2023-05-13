import { commonAxios } from "../components/CommonAxios";
import axios from "axios";
import { onSetAlert } from "./AlertAction";

const options = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export const onBookingServiceman = (data) => (dispatch, getState) => {
  commonAxios("", data, dispatch)
    .then((res) => {
      if (res.status) {
        console.log("success");
      } else {
        console.log("failure");
      }
    })
    .catch((err) => {
      console.log(err.msg);
    });
};

export const onCreateServiceman = (data, setLoader, navigate) => (
  dispatch,
  getState
) => {
  commonAxios("register-worker", data, dispatch)
    .then((res) => {
      if (res.status) {
        navigate("/home");
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
        console.log("success");
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

// OTP..........................................

export const otpVerification = (data, setLoader, setOtp) => (dispatch,getState) => {
  commonAxios("", data, dispatch, getState().auth.token)
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

// No axios........................................................................
