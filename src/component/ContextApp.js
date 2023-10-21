import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from '../firebase';

export const Context=createContext()

const ContextApp = ({children}) => {
    const [currentUser,setCurrentUser]=useState();
    useEffect(()=>{
         onAuthStateChanged(auth,(user)=>{
                setCurrentUser(user)
        })
    },[currentUser])
  return (
    <Context.Provider value={{currentUser}}>{children}</Context.Provider>
  )
}

export default ContextApp