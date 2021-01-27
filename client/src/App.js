import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Dashboard from './views/Dashboard';
import AddProject from './views/AddProject';
import Login1 from './views/Login1';
import "bootstrap/dist/css/bootstrap.css";



function App() {
  const [user, setUser] = useState(null)
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/Projects")
      .then((res) => { setProjects(res.data) })
      .catch((err) => { console.log(err); })
  }, [])
  return (
    <div className="App">
      <Router>
        <Login1 path="/" setUser={setUser} />
        <Dashboard path="/dashboard" Projects={Projects} setProjects={setProjects} user={user} />
        <AddProject path="/Projects/new" Projects={Projects} setProjects={setProjects} />
      </Router>
    </div>
  );
}

export default App;