import { commonAxios } from "../components/CommonAxios";
import { onClearAlert, onSetAlert } from "./AlertAction";
import { toast } from 'react-toastify';



export const createAccount = (data, navigate,setLoader) => (dispatch, getState) => {
  // localStorage.clear();
  commonAxios("ragister", data, dispatch)
    .then((res) => {
      const data = res.data;
      if (res.status) {
        toast.success('Account created successfully');
        navigate("/login");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
      } else {
        toast.warning('Login failed');
        dispatch({ type: "LOGIN_FAILURE", error: data.error });
      }
      setLoader(false)
    })
    .catch((error) => {
      console.log(error);
      // toast.warning('Login failed');
      dispatch({ type: "LOGIN_FAILURE", error: error.message });
      setLoader(false)
    });
};

export const loginAccount = (formData, navigate,setLoader) => (dispatch, getState) => {
  commonAxios("login-user", formData, dispatch)
    .then((res) => {
      const data = res.data;
      if (res.status) {
        toast.success('Login Successfully');
        navigate("/");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        dispatch(onSetAlert("success","Login successfully"))
        
      } else {
        toast.warning('Login failed');
        dispatch({ type: "LOGIN_FAILURE", error: data.error });
      }
           setLoader(false)
    })
    .catch((error) => {
      toast.warning('Login failed');
      // dispatch({ type: "LOGIN_FAILURE", error: error.message });
      setLoader(false)
    });
};

export const logOutUser=()=>(dispatch, getState)=>{
    dispatch({type:"LOG_OUT_USER"})
    toast.success('Logout Successfully');
    window.location.reload();
    dispatch(onSetAlert("success", "Log out successfully"))
}


export const forget_pass = (formDataLogin, navigate,setLoader) => (dispatch, getState) => {
  commonAxios("reset-password", formDataLogin, dispatch)
    .then((res) => {
      if (res.status) {
        toast.success(res.message);
        navigate("/login");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        
      } else {
        toast.warning(res.message)
      }
           setLoader(false)
    })
    .catch((error) => {
      // toast.warning('Login failed');
      setLoader(false)
    });
};
export const forget_pass_worker = (formDataLogin, navigate,setLoader) => (dispatch, getState) => {
  commonAxios("reset-worker-password", formDataLogin, dispatch)
    .then((res) => {
      if (res.status) {
        console.log(res)
        toast.success(res.message);
        navigate("/");
        //  localStorage.setItem("user", JSON.stringify(res.data));
        
      } else {
        toast.warning(res.message)
      }
      toast.warning(res.message)
           setLoader(false)
    })
    .catch((error) => {
      // toast.warning('Login failed');
      setLoader(false)
    });
};




  