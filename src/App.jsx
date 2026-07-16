import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskList from "./components/TaskList/TaskList";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);

    const authData = useContext(AuthContext)

    // useEffect(()=>{

    //   if (authData) {
    //     const LoggedInUser = localStorage.getItem("LoggedInUser")
    //     if (LoggedInUser) {
    //       setUser(localStorage.role)
    //     }
    //   }
    // },[authData])

  const handleLogin = (email,password) => {
    if (email == "daniyalhasan223@gmail.com" && password == "123") {
      setUser("admin")
      localStorage.setItem('LoggedInUser', JSON.stringify({role:"admin"}))
    } else if (authData && authData.employees.find((e)=>email == e.email && password == e.password)) {
      setUser("employee")
            localStorage.setItem('LoggedInUser', JSON.stringify({role:"employee"}))
        } else {
      alert("Error");
    }
  };

  return(
    <>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
