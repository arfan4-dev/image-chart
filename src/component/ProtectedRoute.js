import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from './ContextApp';

const ProtectedRoute = ({children}) => {
   const {currentUser}= useContext(Context)
    if(!currentUser){
        return <Navigate to='/'/>
    }
  return children;
}

export default ProtectedRoute