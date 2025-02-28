import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";

import Seemessagedel from "./Pages/Seemessagedel";
import AdminRegister from "./Pages/AdminRegister";
import Login from "./Pages/Login";
import Adminpage from "./Pages/Adminpage";
import Replymessage from "./Pages/Replymessage";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element= {<AdminRegister/>}/>
        <Route path="/del/:id" element={<Seemessagedel />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addminm" element={<Adminpage/>} />
        <Route path="/adminregiter" element={<AdminRegister/>}/>
        <Route path="/replymessage/:id" element={<Replymessage/>}/>

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
