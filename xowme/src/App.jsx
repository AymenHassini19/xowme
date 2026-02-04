import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import NavigationBar from "./components/Navbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
       <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
  );
}
