import React, { useState } from "react";
import axios from "axios";

function Symptoms() {
  const [symptom1, setSymptom1] = useState("");
  const [symptom2, setSymptom2] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const detectSymptoms = async () => {
    if (!symptom1.trim() && !symptom2.trim()) return;

    const lang = localStorage.getItem("lang") || "en";

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/predict/symptoms",
        {
          symptom1,
          symptom2,
          language: lang
        }
      );

      setResult(res.data);
    } catch {
      alert("Server error connecting to query matrix");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSymptom1("");
    setSymptom2("");
    setResult(null);
  };

  const downloadReport = async () => {
    if (!result) return;

    try {
      const res = await axios.post(
        "http://localhost:8000/generate-report",
        result,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `Skin-AI-Symptom-Report-${result.disease}.pdf`;
      a.click();
    } catch {
      alert("Failed to export analytical telemetry log.");
    }
  };

  const suggestions = ["itching", "rash", "pimple", "red patches", "dry skin"];

  return (
    <div className="container fade-in-up">
      <div className="card" style={{ maxWidth: "600px" }}>
        <div className="card-corner-tr" />
        <div className="card-corner-bl" />
        
        {/* TITLE DECK */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid rgba(0, 242, 254, 0.15)", paddingBottom: "10px" }}>
          <h2 className="title" style={{ margin: 0 }}>
            <span style={{ color: "#00f2fe" }}>⚡</span> VEC-MATRIX ANALYZER
          </h2>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "10px", color: "#00f2fe", border: "1px solid #00f2fe", padding: "2px 8px", borderRadius: "4px" }}>
            SYS NODE // 02
          </span>
        </div>

        <p className="subtitle" style={{ marginTop: "-5px" }}>
          Input symptomatic symptoms to query the heuristic rule engine and calculate potential conditions.
        </p>

        {/* INPUT FORM DECK */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label style={{ display: "block", fontSize: "12px", fontFamily: "'Rajdhani', sans-serif", color: "#94a3b8", marginBottom: "6px", fontWeight: "600" }}>
              PRIMARY SYMPTOM NODE:
            </label>
            <input
              className="input"
              placeholder="e.g. pimple, itching, dry skin..."
              value={symptom1}
              onChange={(e) => setSymptom1(e.target.value)}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "12px", fontFamily: "'Rajdhani', sans-serif", color: "#94a3b8", marginBottom: "6px", fontWeight: "600" }}>
              SECONDARY SYMPTOM NODE (OPTIONAL):
            </label>
            <input
              className="input"
              placeholder="e.g. swelling, red patches, scaling..."
              value={symptom2}
              onChange={(e) => setSymptom2(e.target.value)}
            />
          </div>
        </div>

        {/* GLOWING SUGGESTION NODES */}
        <div style={{ marginTop: "15px" }}>
          <span style={{ display: "block", fontSize: "11px", fontFamily: "'Rajdhani', sans-serif", color: "#6b7280", marginBottom: "8px", fontWeight: "600" }}>
            COMMON SYMPTOM VECTOR PRESETS:
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {suggestions.map((s, i) => (
              <span
                key={i}
                onClick={() => setSymptom1(s)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "15px",
                  background: "rgba(0, 242, 254, 0.06)",
                  border: symptom1 === s ? "1px solid #00f2fe" : "1px solid rgba(0, 242, 254, 0.15)",
                  color: symptom1 === s ? "#00f2fe" : "#94a3b8",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: "'Outfit', sans-serif",
                  transition: "all 0.3s ease",
                  boxShadow: symptom1 === s ? "0 0 10px rgba(0, 242, 254, 0.2)" : "none"
                }}
                onMouseEnter={(e) => {
                  if (symptom1 !== s) {
                    e.target.style.borderColor = "rgba(0, 242, 254, 0.4)";
                    e.target.style.color = "#00f2fe";
                  }
                }}
                onMouseLeave={(e) => {
                  if (symptom1 !== s) {
                    e.target.style.borderColor = "rgba(0, 242, 254, 0.15)";
                    e.target.style.color = "#94a3b8";
                  }
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ACTIONS DECK */}
        <div style={{ display: "flex", gap: "10px", marginTop: "25px" }}>
          <button className="btn" onClick={detectSymptoms} style={{ flex: 1 }}>
            {loading ? "🔍 RUNNING TELEMETRY MATRIX..." : "🔍 QUERY ENGINE"}
          </button>

          {(symptom1 || symptom2) && (
            <button
              className="btn"
              onClick={reset}
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid #ef4444",
                color: "#ef4444",
                boxShadow: "none",
                width: "auto"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(239, 68, 68, 0.2)";
                e.target.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(239, 68, 68, 0.1)";
                e.target.style.boxShadow = "none";
              }}
            >
              FLUSH
            </button>
          )}
        </div>

        {/* ANALYSIS MATRIX REPORT */}
        {result && (
          <div className="result" style={{ marginTop: "25px", animation: "cyberPulse 3s infinite" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0, 242, 254, 0.2)", paddingBottom: "8px", marginBottom: "15px" }}>
              <h3 style={{ margin: 0 }}>HEURISTIC ENGINE DIAGNOSTICS</h3>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "11px", color: "#10b981", fontWeight: "600" }}>
                STATUS: CALCULATED
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <p style={{ margin: 0 }}>
                <b style={{ color: "#94a3b8", fontFamily: "'Rajdhani', sans-serif", fontSize: "13px" }}>DIAGNOSED CONDITION:</b>
                <span style={{ display: "block", color: "#fff", fontWeight: "700", fontSize: "18px", marginTop: "2px" }}>
                  {result.disease}
                </span>
              </p>

              {/* Confidence Progress Meter */}
              {result.confidence && (
                <div style={{ marginTop: "5px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontFamily: "'Rajdhani', sans-serif", fontWeight: "600", color: "#94a3b8" }}>
                    <span>PROBABILITY PROFILE</span>
                    <span style={{ fontFamily: "'Orbitron', sans-serif", color: "#00f2fe" }}>{result.confidence}%</span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden", marginTop: "4px" }}>
                    <div
                      style={{
                        width: `${result.confidence}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, #00f2fe, #3b82f6)",
                        boxShadow: "0 0 8px #00f2fe"
                      }}
                    />
                  </div>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px", padding: "12px", background: "rgba(0,0,0,0.2)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  <b style={{ color: "#00f2fe", fontFamily: "'Rajdhani', sans-serif", fontSize: "12px" }}>RISK INDICATION:</b>
                  <span style={{ display: "block", color: "#fff", marginTop: "2px" }}>{result.risk}</span>
                </p>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  <b style={{ color: "#00f2fe", fontFamily: "'Rajdhani', sans-serif", fontSize: "12px" }}>HEURISTIC CARE PROTOCOL:</b>
                  <span style={{ display: "block", color: "#fff", marginTop: "2px" }}>{result.treatment}</span>
                </p>
                <p style={{ margin: 0, lineHeight: "1.5" }}>
                  <b style={{ color: "#9d4edd", fontFamily: "'Rajdhani', sans-serif", fontSize: "12px" }}>CORE ADVICE:</b>
                  <span style={{ display: "block", color: "#fff", marginTop: "2px" }}>{result.advice}</span>
                </p>
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
              📥 EXPORT ANALYTICAL REPORT (PDF)
            </button>

            {/* Holographic Warning */}
            <p style={{
              marginTop: "15px",
              color: "#f59e0b",
              fontSize: "12px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: "600"
            }}>
              <span>⚠</span> SYSTEM DISCLAIMER: DIAGNOSTICS ARE RULE-BASED TELEMETRY ONLY. CONSULT DOCTOR.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Symptoms;