import React from 'react'
import { Navigate, useLocation} from 'react-router'

const PrivateComponent = ({children}) => {
  const location = useLocation()

    const auth = JSON.parse(localStorage.getItem('state'))
   
    if(auth && auth.login && auth.login.isAuthenticated && auth.login.user){
      return children;
    }else{
      return <Navigate to ="/login" state={{ from: location }}/>;
    }
    
}

export default PrivateComponent