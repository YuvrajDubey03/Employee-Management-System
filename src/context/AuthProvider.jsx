import React, { Children, useEffect, useState } from 'react'
import { createContext } from "react";
import { getLocalStorage ,setLocalStorage} from '../utilities/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  // localStorage.clear();
 
const [userdata, setUserData] = useState(null)

useEffect(() => {
  const employees = localStorage.getItem("employees");


  if (!employees) {
    setLocalStorage();
  }

  const { employees: empData } = getLocalStorage();
  setUserData(empData);
}, []);



  return (
    <div>
    <AuthContext.Provider value={[  userdata, setUserData ]}>
          {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
