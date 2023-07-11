import React from 'react'
import { Navigate, useLocation} from 'react-router'

const PrivateComponent = ({children ,checkUserAuth}) => {
  const location = useLocation()

   
  const auth = JSON.parse(localStorage.getItem('state'));
   
    if (checkUserAuth) {
      if (auth && auth.login && auth.login.isAuthenticated && auth.login.user) {
        return children;
      } else {
        return <Navigate to="/login" state={{ from: location }} />;
      }
    } else {
      if (auth && auth.workerAcc && auth.workerAcc.isAuthenticated) {
        return children;
      } else {
        return <Navigate to="/" state={{ from: location }} />;
      }
    }
  };
    


export default PrivateComponent