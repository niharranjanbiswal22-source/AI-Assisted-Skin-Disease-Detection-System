import React, { useState } from "react";
import axios from "axios";

function Detect() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  };

  const sendImage = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const lang = localStorage.getItem("lang") || "en";

    try {
      setLoading(true);

      const res = await axios.post(
      `https://ai-assisted-skin-disease-detection-system.onrender.com/predict/image?language=${lang}`,
        formData
      );

      setResult(res.data);
    } catch {
      alert("Server error connecting to diagnostic core");
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = async () => {
    if (!result) return;

    const data = {
      disease: result.predictions?.[0]?.disease,
      confidence: result.predictions?.[0]?.confidence,
      risk: result.risk,
      treatment: result.treatment,
      advice: result.advice
    };

    try {
      const res = await axios.post(
       "https://ai-assisted-skin-disease-detection-system.onrender.com/generate-report",
        data,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `Skin-AI-Diagnostic-Report-${data.disease}.pdf`;
      a.click();
    } catch {
      alert("Failed to export diagnostic telemetry log.");
    }
  };

  return (
    <div className="container fade-in-up">
      <div className="card" style={{ maxWidth: "650px" }}>
        <div className="card-corner-tr" />
        <div className="card-corner-bl" />
        
        {/* TITLE DECK */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(0, 242, 254, 0.15)", paddingBottom: "10px" }}>
          <h2 className="title" style={{ margin: 0 }}>
            <span style={{ color: "#00f2fe" }}>⚡</span> BIOMETRIC SCAN BAY
          </h2>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "10px", color: "#00f2fe", border: "1px solid #00f2fe", padding: "2px 8px", borderRadius: "4px" }}>
            SYS NODE // 01
          </span>
        </div>
        
        <p className="subtitle" style={{ marginTop: "-5px" }}>
          Upload high-resolution lesion captures to initiate computer-vision neural check.
        </p>

        {/* DIAGNOSTIC UPLOAD ZONE */}
        <div
          onClick={() => document.getElementById("fileInput").click()}
          style={{
            border: "2px dashed rgba(0, 242, 254, 0.3)",
            background: "rgba(5, 8, 22, 0.5)",
            padding: "40px 20px",
            borderRadius: "12px",
            textAlign: "center",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s ease",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00f2fe";
            e.currentTarget.style.background = "rgba(0, 242, 254, 0.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(0, 242, 254, 0.3)";
            e.currentTarget.style.background = "rgba(5, 8, 22, 0.5)";
          }}
        >
          {/* Target Sight Indicators (Sci-Fi corners) */}
          <div style={{ position: "absolute", top: "10px", left: "10px", width: "10px", height: "10px", borderTop: "2px solid #00f2fe", borderLeft: "2px solid #00f2fe" }} />
          <div style={{ position: "absolute", top: "10px", right: "10px", width: "10px", height: "10px", borderTop: "2px solid #00f2fe", borderRight: "2px solid #00f2fe" }} />
          <div style={{ position: "absolute", bottom: "10px", left: "10px", width: "10px", height: "10px", borderBottom: "2px solid #00f2fe", borderLeft: "2px solid #00f2fe" }} />
          <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "10px", height: "10px", borderBottom: "2px solid #00f2fe", borderRight: "2px solid #00f2fe" }} />

          {preview ? (
            <div style={{ position: "relative" }}>
              <img
                src={preview}
                alt="Capture preview"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 242, 254, 0.2)"
                }}
              />
              <div style={{ marginTop: "15px", fontFamily: "'Rajdhani', sans-serif", fontWeight: "600", fontSize: "14px", color: "#00f2fe" }}>
                [ REPLACE TELEMETRY CAPTURE ]
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "32px", animation: "cyberPulse 2s infinite" }}>📸</span>
              <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: "700", fontSize: "16px", color: "#fff", letterSpacing: "1px" }}>
                MOUNT DIAL DIAGNOSTIC CAPTURE
              </span>
              <span style={{ fontSize: "12px", color: "#6b7280" }}>Supports JPEG, PNG</span>
            </div>
          )}

          {/* Running Laser scanner line when server is executing */}
          {loading && <div className="scanner-line" />}
        </div>

        <input
          id="fileInput"
          type="file"
          hidden
          onChange={(e) => handleFile(e.target.files[0])}
          accept="image/*"
        />

        {/* TRIGGER BUTTON */}
        <button
          className="btn"
          onClick={sendImage}
          disabled={!file || loading}
          style={{
            width: "100%",
            marginTop: "20px",
            opacity: (!file || loading) ? 0.6 : 1,
            cursor: (!file || loading) ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "⚡ EXECUTING NEURAL DIAGNOSIS..." : "⚡ START IMAGE CHECK"}
        </button>

        {/* RESULTS CORE */}
        {result && (
          <div className="result" style={{ animation: "cyberPulse 3s infinite" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0, 242, 254, 0.2)", paddingBottom: "8px", marginBottom: "15px" }}>
              <h3 style={{ margin: 0 }}>NEURAL DIAGNOSIS METRICS</h3>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "11px", color: "#10b981", fontWeight: "600" }}>
                RISK: {result.risk}
              </span>
            </div>

            {/* Neural outputs with custom progress telemetry bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "20px" }}>
              {result.predictions.map((p, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontFamily: "'Rajdhani', sans-serif", fontWeight: "600", marginBottom: "4px" }}>
                    <span style={{ color: i === 0 ? "#00f2fe" : "#94a3b8" }}>
                      {i === 0 ? "★ " : ""}{p.disease}
                    </span>
                    <span style={{ fontFamily: "'Orbitron', sans-serif", color: i === 0 ? "#00f2fe" : "#94a3b8" }}>
                      {p.confidence}%
                    </span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${p.confidence}%`,
                        height: "100%",
                        background: i === 0 ? "linear-gradient(90deg, #00f2fe, #3b82f6)" : "linear-gradient(90deg, #3b82f6, rgba(59,130,246,0.3))",
                        boxShadow: i === 0 ? "0 0 8px #00f2fe" : "none",
                        transition: "width 1s ease"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Structured Treatment telemetry */}
            <div style={{ fontSize: "14px", background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "15px", display: "flex", flexDirection: "column", gap: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div>
                <span style={{ color: "#00f2fe", fontWeight: "600", fontFamily: "'Rajdhani', sans-serif" }}>SUGGESTED TREATMENT PROTOCOL:</span>
                <p style={{ margin: "4px 0 0 0", color: "#fff", lineHeight: "1.5" }}>{result.treatment}</p>
              </div>
              <div>
                <span style={{ color: "#9d4edd", fontWeight: "600", fontFamily: "'Rajdhani', sans-serif" }}>CLINICAL ADVICE:</span>
                <p style={{ margin: "4px 0 0 0", color: "#fff", lineHeight: "1.5" }}>{result.advice}</p>
              </div>
            </div>

            {/* EXPORT LOG BUTTON */}
            <button
              className="btn"
              onClick={downloadReport}
              style={{
                width: "100%",
                marginTop: "20px",
                background: "transparent",
                border: "1px solid #00f2fe",
                color: "#00f2fe",
                boxShadow: "none"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 242, 254, 0.1)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 242, 254, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              📥 EXPORT SYSTEM DIAGNOSTIC LOG (PDF)
            </button>

            {/* Holographic Warning */}
            <p style={{
              marginTop: "15px",
              color: "#ef4444",
              fontSize: "12px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: "600"
            }}>
              <span style={{ animation: "cyberPulse 1s infinite" }}>⚠</span> SYSTEM DISCLAIMER: FOR EDUCATION & TELEMETRY TESTING ONLY. CONSULT DOCTOR.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Detect;
