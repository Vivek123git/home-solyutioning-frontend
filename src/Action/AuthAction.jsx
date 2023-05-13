import { commonAxios } from "../components/CommonAxios";
import { onSetAlert } from "./AlertAction";



export const createAccount = (data, navigate) => (dispatch, getState) => {
  localStorage.clear();
  commonAxios("ragister", data, dispatch)
    .then((res) => {
      const data = res.data;
      if (res.status) {
        navigate("/home");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      } else {
        dispatch({ type: "LOGIN_FAILURE", error: data.error });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", error: error.message });
    });
};

export const loginAccount = (formData, navigate) => (dispatch, getState) => {
  commonAxios("login-user", formData, dispatch)
    .then((res) => {
      const data = res.data;
      if (res.status) {
        navigate("/home");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        dispatch(onSetAlert("success",res.msg))
      } else {
        dispatch({ type: "LOGIN_FAILURE", error: data.error });
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", error: error.message });
    });
};

export const logOutUser=()=>(dispatch, getState)=>{
    dispatch({type:"LOG_OUT_USER"})
}




  