import React from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../utils/useLang";

function Home() {
  const navigate = useNavigate();
  const t = useLang();

  return (
    <div className="fade-in-up" style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
      {/* 🧠 DYNAMIC AI CORE HEADLINE */}
      <div style={{ textAlign: "center", marginBottom: "40px", position: "relative" }}>
        
        {/* Glowing Neural Core Animation */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{
            position: "relative",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,242,254,0.4) 0%, transparent 70%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            {/* Outer Spinning Ring */}
            <div style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              border: "2px dashed #00f2fe",
              borderRadius: "50%",
              animation: "spinRadar 8s linear infinite"
            }} />
            {/* Inner Pulsing Core */}
            <div style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              background: "linear-gradient(135deg, #00f2fe, #3b82f6)",
              borderRadius: "50%",
              boxShadow: "0 0 20px #00f2fe, 0 0 40px #3b82f6",
              animation: "cyberPulse 2s infinite"
            }} />
          </div>
        </div>

        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: "800",
            fontSize: "36px",
            background: "linear-gradient(90deg, #fff, #94a3b8, #00f2fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
            margin: "0 0 15px 0",
            textTransform: "uppercase",
            textShadow: "0 0 30px rgba(0, 242, 254, 0.2)"
          }}
        >
          {t.homeTitle}
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#94a3b8",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily: "'Outfit', sans-serif"
          }}
        >
          {t.homeSubtitle}
        </p>
      </div>

      {/* 🛠 DYNAMIC SCI-FI DASHBOARD PANELS */}
      <div className="grid">
        
        {/* PANEL 1: IMAGE DIAGNOSTICS */}
        <div className="card fade-in-up delay-1" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div className="card-corner-tr" />
          <div className="card-corner-bl" />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "12px", color: "#00f2fe", letterSpacing: "1px" }}>[ NODE // 01 ]</span>
              <span style={{ fontSize: "18px" }}>📸</span>
            </div>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "22px", margin: "0 0 10px 0", textTransform: "uppercase", letterSpacing: "1px", color: "#fff" }}>
              {t.detect}
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.5", margin: "0 0 20px 0" }}>
              {t.detectDesc}
            </p>
          </div>
          <button className="btn" onClick={() => navigate("/detect")}>
            Initialize Scan
          </button>
        </div>

        {/* PANEL 2: SYMPTOM ANALYZER */}
        <div className="card fade-in-up delay-2" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div className="card-corner-tr" />
          <div className="card-corner-bl" />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "12px", color: "#00f2fe", letterSpacing: "1px" }}>[ NODE // 02 ]</span>
              <span style={{ fontSize: "18px" }}>🩺</span>
            </div>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "22px", margin: "0 0 10px 0", textTransform: "uppercase", letterSpacing: "1px", color: "#fff" }}>
              {t.symptoms}
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.5", margin: "0 0 20px 0" }}>
              {t.symptomsDesc}
            </p>
          </div>
          <button className="btn" onClick={() => navigate("/symptoms")}>
            Query Matrix
          </button>
        </div>

        {/* PANEL 3: NEURAL CHATBOT */}
        <div className="card fade-in-up delay-3" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <div className="card-corner-tr" />
          <div className="card-corner-bl" />
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "12px", color: "#00f2fe", letterSpacing: "1px" }}>[ NODE // 03 ]</span>
              <span style={{ fontSize: "18px" }}>🤖</span>
            </div>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "22px", margin: "0 0 10px 0", textTransform: "uppercase", letterSpacing: "1px", color: "#fff" }}>
              {t.chatbot}
            </h3>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.5", margin: "0 0 20px 0" }}>
              {t.chatbotDesc}
            </p>
          </div>
          <button className="btn" onClick={() => navigate("/chatbot")}>
            Link Core
          </button>
        </div>

      </div>

      {/* 🏷 PREMIUM CREATOR SECURITY BADGE */}
      <div style={{
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div className="fade-in-up delay-4" style={{
          background: "linear-gradient(135deg, rgba(0, 242, 254, 0.05), rgba(59, 130, 246, 0.02))",
          border: "1px dashed rgba(0, 242, 254, 0.3)",
          borderRadius: "12px",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          maxWidth: "500px",
          boxShadow: "0 0 20px rgba(0, 242, 254, 0.03)",
          position: "relative"
        }}>
          {/* Cybernetic scanner glow corner */}
          <div style={{
            position: "absolute",
            top: "-1px",
            right: "20px",
            width: "30px",
            height: "1px",
            background: "#00f2fe",
            boxShadow: "0 0 10px #00f2fe"
          }} />

          {/* Holographic ID Avatar */}
          <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid #00f2fe",
            background: "url('/nihar.jpg') no-repeat center center",
            backgroundSize: "cover",
            boxShadow: "0 0 15px rgba(0, 242, 254, 0.4)",
            animation: "cyberPulse 2.5s infinite",
            flexShrink: 0
          }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "#00f2fe",
              fontWeight: "800",
              textTransform: "uppercase"
            }}>
              System Architect & Developer
            </span>
            <span style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "22px",
              fontWeight: "700",
              color: "#fff",
              letterSpacing: "1px",
              margin: "2px 0 4px 0",
              textShadow: "0 0 12px rgba(255,255,255,0.2)"
            }}>
              NIHAR RANJAN BISWAL
            </span>
            <span style={{
              fontSize: "10px",
              color: "#6b7280",
              fontFamily: "'Outfit', sans-serif"
            }}>
              Intelligent Medical Cognition Core Lab © 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;