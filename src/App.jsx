import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskList from "./components/TaskList/TaskList";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email,password) => {
    if (email == "daniyalhasan223@gmail.com" && password == "123") {
      setUser("admin")
    } else if (email == "user@gmail.com" && password == "123") {
      setUser("employee")
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
