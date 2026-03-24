import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Booking from "./pages/booking";
import BookingConfirmed from "./pages/booking/confirmed";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/confirmed" element={<BookingConfirmed />} />
      </Routes>

      <Footer />
    </Router>
  );
}
