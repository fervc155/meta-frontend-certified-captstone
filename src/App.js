import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}
