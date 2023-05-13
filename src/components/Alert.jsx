import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert1 = () => {
    const [showAlert, setShowAlert] = useState(true);
    const alert = useSelector((state) => state.alert);
   

    useEffect(() => {
      if(alert.msg){
        setShowAlert(true);

        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 5000); // 5000ms = 5 seconds

        return () => clearTimeout(timeout);
      }else{
        setShowAlert(false)
      }
        
    }, [alert]);

    return (
        <div style={{position:"absolute",right:"0px" ,zIndex:"999",margin:"5px"}}>
            {
              showAlert?<Alert variant="filled" severity={alert.status} style={{padding:"5px"}}>
              {alert.msg}
          </Alert>
          :""
            }
        </div>
    );
};

export default Alert1;
