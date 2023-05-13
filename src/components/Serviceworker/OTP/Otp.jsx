import { useRef, useState } from "react";
import "./Otp.css";
import { Button } from "react-bootstrap";
import CloseIcon from '@mui/icons-material/Close';
import { otpVerification } from "../../../Action/ServiceAction";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

const Otp=({ otp ,setOtp}) =>{

  const dispatch = useDispatch()
   const [otpState, setOtpState] = useState({
    one:"",
    two:"",
    three:"",
    four:""
   });
  const [error, setError] = useState("");
  const [loader,setLoader] = useState(false)
  const inputRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleInputChange = (e,index) => {
    const {name, value } = e.target;
    if (/^[0-9]{0,4}$/.test(value)) {
      setOtpState({
        ...otpState,
        [name]:value
      })
      if (value !== '') {
        const nextIndex = index + 1;
        if (nextIndex < inputRef.length && inputRef[nextIndex].current) {
          inputRef[nextIndex].current.focus();
          inputRef[nextIndex].current.setSelectionRange(0, 1);
        }
      }
     
    }
  };

  const handleSubmit = (e) => {
    setLoader(true)
    e.preventDefault();
    if (otpState !=="") {
      // perform OTP verification
      // dispatch(otpVerification(otpState,setLoader,setOtp))
    } else {
      setError("Please enter a valid OTP.");
    }
  };
  const handleClose = () => {
    setOtp(false);
  };

  return (
    <div>
      {otp ? (
        <div className="otp_modal">
          <div className="otp_modal-content">
          <div style={{float:"right",cursor:"pointer"}} onClick={handleClose}>
            < CloseIcon/>
          </div>
          <p>Enter the 6-digit code sent to your phone:</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                
                <input
                ref={inputRef[0]}
                  type="text"
                  maxLength="1"
                  name="one"
                  value={otpState.one}
                  onChange={(e)=>handleInputChange(e,0)}
                />
                <input
                ref={inputRef[1]}
                  type="text"
                  maxLength="1"
                  name="two"
                  value={otpState.two}
                  onChange={(e)=>handleInputChange(e,1)}
                />
                <input
                ref={inputRef[2]}
                  type="text"
                  maxLength="1"
                  name="three"
                  value={otpState.three}
                  onChange={(e)=>handleInputChange(e,2)}
                />
                <input
                ref={inputRef[3]}
                  type="text"
                  maxLength="1"
                  name="four"
                  value={otpState.four}
                  onChange={(e)=>handleInputChange(e,3)}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit"
              style={{
                width: "70%",
                height: "60px",
                margin: "25px auto",
              }}
              >Verify  
              {loader?<CircularProgress className="spinner_icon" style={{color:"white",height:"30px",width:"30px"}}/>:""}
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Otp;