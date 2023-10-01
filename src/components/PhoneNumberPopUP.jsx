import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx"
import { BsFillTelephoneOutboundFill } from "react-icons/bs"

const PhoneNumberPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleCall = () => {
    // Implement your call functionality here
    window.location.href = 'tel:9654155927';
  };

  const handleCross = () => {
    setShowPopup(false)
  }

  return (
    <div>
      <>
        <div className="phone-popup" onClick={handleCall}>
          <p className='p-0 m-0'><a  >< BsFillTelephoneOutboundFill /></a>Call now</p>
        </div></>

      {/* Rest of your application */}
    </div>
  );
};

export default PhoneNumberPopup;