import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detect from "./pages/Detect";
import Symptoms from "./pages/Symptoms";
import Chatbot from "./pages/chatbot";
import Navbar from "./components/Navbar";
import bgImage from "./skin_ai_bg.jpg";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(5, 8, 22, 0.65), rgba(5, 8, 22, 0.9)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden"
        }}
      >
        <div className="scanline-overlay" />
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;