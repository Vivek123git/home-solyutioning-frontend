import { commonAxios } from "../components/CommonAxios";
import { onSetAlert } from "./AlertAction";



export const logOutWorker=()=>(dispatch, getState)=>{
    dispatch({type:"LOG_OUT_WORKER"})
}

export const loginWorkerAccount = (formData, navigate) => (dispatch, getState) => {
  commonAxios("login-worker", formData, dispatch)
    .then((res) => {
      const data = res.data;
      console.log(data)
      if (res.status) {
        dispatch({ type: "LOGIN_SUCCESS_WORKER", payload: data });
        navigate("/serviceworkerprofile");
        dispatch(onSetAlert("success",res.msg))
      } else {
        dispatch({ type: "LOGIN_FAILURE_WORKER", error: data.error });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "LOGIN_FAILURE_WORKER", err: err.message });
    });
};


  