import { commonAxios } from "../components/CommonAxios";
import { onSetAlert } from "./AlertAction";
import { toast } from 'react-toastify';

export const logOutWorker=()=>(dispatch, getState)=>{
    dispatch({type:"LOG_OUT_WORKER"})
    window.location.reload();
    toast.warning('Logout successfully');
}

export const loginWorkerAccount = (formData, navigate,setLoader) => (dispatch, getState) => {
  commonAxios("login-worker", formData, dispatch)
    .then((res) => {
      const data = res.data;
      console.log(data)
      if (res.status) {
        toast.success('Login Successfully');
        dispatch({ type: "LOGIN_SUCCESS_WORKER", payload: data });
        navigate("/serviceworkerprofile");
        dispatch(onSetAlert("success",res.msg))
        setLoader(false)
      } else {
        toast.warning('Login failed');
        dispatch({ type: "LOGIN_FAILURE_WORKER", error: data.error });
        setLoader(false)
      }
      setLoader(false)
    })
    .catch((err) => {
      console.log(err);
      toast.warning('Login failed');
      setLoader(false)
    });
};





  