import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
//import NavigationBar from "./components/NavigationBar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* <NavigationBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
