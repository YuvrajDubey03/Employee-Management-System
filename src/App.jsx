import React, { use, useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeDashboard from "./components/dashboard/EmployeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

useEffect(() => {
  const loggedInUser=localStorage.getItem("loggedInUser");
  if(loggedInUser){
   const userData = JSON.parse(loggedInUser);
setUser(userData.role);
setloggedInUserData(userData.data)
  }
} ,[])


  const handleLogin = (email, password) => {
    if (email === "admin@company.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));

    } else if (userData) {
      const employee = userData.find((emp) => emp.email === email && emp.password === password);
    if (employee) {
      setUser("employee");
      setloggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" ,data : employee}));
    }
      
    }

    else {
        alert("Invalid credentials");
      }
    }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {user === "admin" ? <AdminDashboard changeUser={setUser} /> : user === "employee" && <EmployeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;
