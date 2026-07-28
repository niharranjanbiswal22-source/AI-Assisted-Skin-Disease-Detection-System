import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const activeLink = location.pathname;

  const linkStyle = (path) => ({
    color: activeLink === path ? "#00f2fe" : "#94a3b8",
    textDecoration: "none",
    fontWeight: activeLink === path ? "700" : "500",
    fontSize: "14px",
    fontFamily: "'Rajdhani', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "1px",
    padding: "6px 14px",
    borderRadius: "6px",
    background: activeLink === path ? "rgba(0, 242, 254, 0.08)" : "transparent",
    border: activeLink === path ? "1px solid rgba(0, 242, 254, 0.3)" : "1px solid transparent",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textShadow: activeLink === path ? "0 0 8px rgba(0, 242, 254, 0.4)" : "none",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  });

  const handleHover = (e, path) => {
    if (activeLink !== path) {
      e.currentTarget.style.color = "#00f2fe";
      e.currentTarget.style.background = "rgba(0, 242, 254, 0.03)";
      e.currentTarget.style.borderColor = "rgba(0, 242, 254, 0.15)";
    }
  };

  const handleLeave = (e, path) => {
    if (activeLink !== path) {
      e.currentTarget.style.color = "#94a3b8";
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.borderColor = "transparent";
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0, 242, 254, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 242, 254, 0.05)"
      }}
    >
      {/* 🧠 LOGO / BRAND */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <h3
          style={{
            color: "#fff",
            fontWeight: "800",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "1.5px",
            margin: 0,
            textShadow: "0 0 10px rgba(0, 242, 254, 0.5)",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <span style={{ color: "#00f2fe", animation: "cyberPulse 2s infinite" }}>⚡</span>
          NEURAL SKIN-AI
        </h3>
        <span
          style={{
            fontSize: "9px",
            fontFamily: "'Rajdhani', sans-serif",
            letterSpacing: "2px",
            color: "#00f2fe",
            textTransform: "uppercase",
            fontWeight: "600",
            opacity: 0.8
          }}
        >
          System Core v1.0.5
        </span>
      </div>

      {/* 🔗 NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center"
        }}
      >
        <Link
          to="/"
          style={linkStyle("/")}
          onMouseEnter={(e) => handleHover(e, "/")}
          onMouseLeave={(e) => handleLeave(e, "/")}
        >
          <span>⌂</span> Home
        </Link>

        <Link
          to="/detect"
          style={linkStyle("/detect")}
          onMouseEnter={(e) => handleHover(e, "/detect")}
          onMouseLeave={(e) => handleLeave(e, "/detect")}
        >
          <span>📸</span> Diagnostics
        </Link>

        <Link
          to="/symptoms"
          style={linkStyle("/symptoms")}
          onMouseEnter={(e) => handleHover(e, "/symptoms")}
          onMouseLeave={(e) => handleLeave(e, "/symptoms")}
        >
          <span>🩺</span> Symptom Vector
        </Link>

        <Link
          to="/chatbot"
          style={linkStyle("/chatbot")}
          onMouseEnter={(e) => handleHover(e, "/chatbot")}
          onMouseLeave={(e) => handleLeave(e, "/chatbot")}
        >
          <span>🤖</span> Neural Chat
        </Link>
      </div>

      {/* SYSTEM META / LANG */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Architect Credit telemetry */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            fontFamily: "'Rajdhani', sans-serif",
            borderRight: "1px solid rgba(0, 242, 254, 0.2)",
            paddingRight: "15px"
          }}
        >
          <span style={{ fontSize: "9px", color: "#94a3b8", letterSpacing: "1px" }}>ARCHITECT</span>
          <span style={{ fontSize: "11px", color: "#fff", fontWeight: "600", letterSpacing: "0.5px" }}>
            N. R. BISWAL
          </span>
        </div>

        {/* 🌐 LANGUAGE SELECT */}
        <div style={{ position: "relative" }}>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              background: "rgba(0, 242, 254, 0.05)",
              border: "1px solid rgba(0, 242, 254, 0.2)",
              borderRadius: "6px",
              padding: "6px 12px",
              color: "#00f2fe",
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "12px",
              fontWeight: "600",
              cursor: "pointer",
              outline: "none",
              transition: "all 0.3s ease",
              boxShadow: "inset 0 0 5px rgba(0, 242, 254, 0.05)"
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = "#00f2fe")}
            onMouseLeave={(e) => (e.target.style.borderColor = "rgba(0, 242, 254, 0.2)")}
          >
            <option value="en" style={{ background: "#090d1a", color: "#fff" }}>EN</option>
            <option value="hi" style={{ background: "#090d1a", color: "#fff" }}>हिन्दी</option>
            <option value="kn" style={{ background: "#090d1a", color: "#fff" }}>ಕನ್ನಡ</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;