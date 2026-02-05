import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import NavigationBar from "./components/Navbar.jsx";
import SignIn from "./pages/SignIn.jsx";

export default function App() {
  return (
    <BrowserRouter>
       <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}
