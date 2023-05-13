import React from 'react'
import { Navigate} from 'react-router'

const PrivateComponent = ({children}) => {

    const auth = JSON.parse(localStorage.getItem('state'))
   
    if(auth && auth.login && auth.login.isAuthenticated && auth.login.user){
      return children;
    }else{
      return <Navigate to ="/"/>;
    }
    
}

export default PrivateComponent