import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useLang } from "../utils/useLang";

function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const t = useLang();
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [chat]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const lang = localStorage.getItem("lang") || "en";
    const userMsg = msg;

    setMsg("");

    setChat(prev => [
      ...prev,
      { user: userMsg, bot: "🔄 Computing neural response..." }
    ]);

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:8000/chat", {
        msg: userMsg,
        language: lang
      });

      setChat(prev => {
        const updated = [...prev];
        updated[updated.length - 1].bot = res.data.response;
        return updated;
      });

    } catch {
      setChat(prev => {
        const updated = [...prev];
        updated[updated.length - 1].bot = "⚠ CORE LINK ERROR: Unable to parse query.";
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container fade-in-up">
      <div className="card" style={{ maxWidth: "650px", width: "100%" }}>
        <div className="card-corner-tr" />
        <div className="card-corner-bl" />
        
        {/* TITLE DECK */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(0, 242, 254, 0.15)", paddingBottom: "10px" }}>
          <h2 className="title" style={{ margin: 0 }}>
            <span style={{ color: "#00f2fe" }}>⚡</span> NEURAL CORE LINK
          </h2>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "10px", color: "#9d4edd", border: "1px solid #9d4edd", padding: "2px 8px", borderRadius: "4px", animation: "cyberPulse 2s infinite" }}>
            SYS CORE // 03
          </span>
        </div>

        <p className="subtitle" style={{ marginTop: "-5px" }}>
          Establish direct link with the Dermatology LLM Core. Ask queries regarding skin care, symptoms, and therapies.
        </p>

        {/* TELEMETRY BANNER */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0, 242, 254, 0.04)",
          border: "1px solid rgba(0, 242, 254, 0.15)",
          padding: "8px 15px",
          borderRadius: "8px",
          marginBottom: "15px",
          fontSize: "12px",
          fontFamily: "'Rajdhani', sans-serif"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
              display: "inline-block",
              animation: "cyberPulse 1.5s infinite"
            }} />
            <span style={{ color: "#fff", fontWeight: "600" }}>LINK OPERATIONAL</span>
          </div>
          <span style={{ color: "#00f2fe", letterSpacing: "1px" }}>MODEL: COGNITIVE-DERMA-FALLBACK-v1</span>
        </div>

        {/* CHAT TERMINAL AREA */}
        <div
          ref={chatRef}
          style={{
            height: "350px",
            overflowY: "auto",
            padding: "15px",
            borderRadius: "12px",
            background: "rgba(2, 4, 10, 0.9)",
            border: "1px solid rgba(0, 242, 254, 0.15)",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.6)"
          }}
        >
          {chat.length === 0 ? (
            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", color: "#4b5563", fontFamily: "'Rajdhani', sans-serif" }}>
              <span style={{ fontSize: "40px" }}>📡</span>
              <span style={{ fontSize: "16px", fontWeight: "600", letterSpacing: "1px" }}>[ NEURAL COGNITION TUNNEL OPEN ]</span>
              <span style={{ fontSize: "12px" }}>Awaiting symptomatic query submission...</span>
            </div>
          ) : (
            chat.map((c, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                {/* USER BUBBLE + AVATAR */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    maxWidth: "75%",
                    background: "linear-gradient(135deg, #00f2fe, #3b82f6)",
                    padding: "12px 16px",
                    borderRadius: "16px 16px 2px 16px",
                    color: "#050816",
                    fontWeight: "600",
                    fontSize: "14px",
                    boxShadow: "0 4px 12px rgba(0, 242, 254, 0.25)",
                    position: "relative"
                  }}>
                    <span style={{ position: "absolute", bottom: "-12px", right: "2px", fontSize: "8px", fontFamily: "'Orbitron', sans-serif", color: "rgba(0, 242, 254, 0.5)", textTransform: "uppercase" }}>
                      USER NODE
                    </span>
                    {c.user}
                  </div>
                  {/* User Profile Avatar */}
                  <div style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "2px solid #00f2fe",
                    background: "url('/nihar.jpg') no-repeat center center",
                    backgroundSize: "cover",
                    boxShadow: "0 0 8px rgba(0, 242, 254, 0.4)",
                    flexShrink: 0
                  }} />
                </div>

                {/* BOT BUBBLE + AVATAR */}
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", marginTop: "10px" }}>
                  {/* Bot Robotic Avatar */}
                  <div style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "2px solid #9d4edd",
                    background: "rgba(157, 78, 221, 0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                    boxShadow: "0 0 8px rgba(157, 78, 221, 0.4)",
                    flexShrink: 0
                  }}>
                    🤖
                  </div>
                  <div style={{
                    maxWidth: "75%",
                    background: "rgba(15, 23, 42, 0.75)",
                    border: "1px solid rgba(0, 242, 254, 0.2)",
                    padding: "12px 16px",
                    borderRadius: "16px 16px 16px 2px",
                    color: "#f3f4f6",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    whiteSpace: "pre-line",
                    position: "relative",
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)"
                  }}>
                    <span style={{ position: "absolute", bottom: "-12px", left: "2px", fontSize: "8px", fontFamily: "'Orbitron', sans-serif", color: "rgba(157, 78, 221, 0.6)", textTransform: "uppercase" }}>
                      NEURAL CORE
                    </span>
                    {c.bot}
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* INPUT PROMPT CONSOLE DOCK */}
        <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
          <textarea
            className="input"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={2}
            placeholder={t.placeholderChat}
            style={{
              resize: "none",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "14px",
              flex: 1
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            className="btn"
            onClick={sendMessage}
            disabled={loading || !msg.trim()}
            style={{
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              borderRadius: "8px",
              opacity: (loading || !msg.trim()) ? 0.6 : 1,
              cursor: (loading || !msg.trim()) ? "not-allowed" : "pointer"
            }}
          >
            🚀
          </button>
        </div>

        {/* DISCLAIMER DECK */}
        <p style={{
          marginTop: "15px",
          color: "#f87171",
          fontSize: "12px",
          textAlign: "center",
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: "600"
        }}>
          ⚠ ADVISORY: THIS LINK PROVIDES GENERATIVE SUGGESTIONS. IT DOES NOT CONSTITUTE PROFESSIONAL MEDICAL CLINICAL ADVICE.
        </p>

      </div>
    </div>
  );
}

export default Chatbot;