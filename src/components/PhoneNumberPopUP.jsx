import React, { useState, useEffect } from 'react';
import {RxCross2} from "react-icons/rx"
import {BsFillTelephoneOutboundFill} from "react-icons/bs"

const PhoneNumberPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    // Implement your call functionality here
    window.location.href = 'tel:7080448727';
  };

  const handleCross=()=>{
    setShowPopup(false)
  }

  return (
    <div>
      {showPopup && (
          <>
          <div className="phone-popup">
         <div className='phone-popup-cross' onClick={handleCross}> < RxCross2/></div>
              
        <p><a href="tel:1234567890" onClick={handleCall} >< BsFillTelephoneOutboundFill/></a>Click to call and book your technician</p>
      </div></>
      )}
      {/* Rest of your application */}
    </div>
  );
};

export default PhoneNumberPopup;