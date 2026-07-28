# AI-Assisted Skin Disease Detection System

## Overview

The **AI-Assisted Skin Disease Detection System** is an advanced, premium web-based diagnostic application that utilizes deep learning and rule-based symptom analysis to help identify common skin conditions. It features a futuristic, biometric medical HUD theme, live telemetry logs, an integrated AI dermatologist chatbot (with smart offline expert fallback), and downloadable medical reports.

**Note:** This application is intended for educational, demonstration, and research purposes only. It is not a substitute for professional medical diagnosis or treatment.

---

## Technical Features

- **Biometric Image Diagnostics**: Upload skin condition lesions to execute neural diagnostics using a trained Convolutional Neural Network (CNN). Includes a laser scanner beam animation sweep during processing.
- **Symptom Vector Analyzer**: Identify conditions using symptom tag vectors in an interactive grid checker.
- **Neural Chat Core**: Direct terminal link console with a professional dermatology conversational assistant. Includes a smart **expert-system fallback** that responds instantly if offline or if Ollama is not active.
- **Multilingual Support**: Integrated language deck translates interface diagnostics between English, Hindi, and Kannada.
- **Telemetry PDF Report Generator**: Compiles and compiles a clean, downloadable medical telemetry report of the diagnosis.
- **Futuristic HUD Aesthetics**: Glassmorphic interfaces with 4-corner brackets, a CRT raster scanline overlay, and a neon-glowing custom scrollbar system.

---

## Technologies Used

### Frontend
- **React.js** (Core SPA framework)
- **Axios** (Backend telemetry requests)
- **React Router DOM** (Client-side routing)
- **Vanilla CSS** (Futuristic styling, glassmorphism, scanline filters, and custom animation keyframes)

### Backend
- **Python 3.11**
- **FastAPI** (High-performance API layer)
- **TensorFlow & Keras** (Deep learning model execution)
- **ReportLab** (PDF report compilation)
- **Deep Translator** (Real-time multilanguage translations)
- **Uvicorn** (ASGI server)

---

## Project Structure

```
AI-Assisted-Skin-Disease-Detection-System
│
├── backend
│   ├── model
│   │   ├── skin_model.h5
│   │   └── classes.json
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend
│   ├── public
│   │   ├── nihar.jpg (Developer Profile Picture)
│   │   └── ...
│   ├── src
│   │   ├── App.css (Cyber styling, keyframes, scrollbars)
│   │   ├── App.js (Global layout wrapper and background)
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

---

## Installation & Setup

### 1. Initialize local files
```bash
git clone https://github.com/YOUR_USERNAME/AI-Assisted-Skin-Disease-Detection-System.git
cd AI-Assisted-Skin-Disease-Detection-System
```

### 2. Backend Environment Configuration
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
The backend resolves model outputs on [http://localhost:8000](http://localhost:8000).

### 3. Frontend Environment Configuration
```bash
cd ../frontend
npm install
npm start
```
The React development server runs on [http://localhost:3000](http://localhost:3000).

---

## Machine Learning Model

The diagnostic engine is backed by a Convolutional Neural Network (CNN) trained on the public **HAM10000** skin lesion dataset.
- **Model Type**: Multi-class Image Classification
- **Accuracy**: Optimized for identifying common lesions like Melanoma, Acne, Eczema, Dermatitis, and Psoriasis.
*Note: The raw training dataset is omitted from the repo due to its size.*

---

## Lead Architect & Developer

**Nihar Ranjan Biswal**  
*System Architect & Lead Developer*  
Specializing in AI-Assisted Clinical Telemetry Interfaces and Biometric Deep Learning Integrations.

---

## License

This project is open-source and intended strictly for educational, research, and portfolio demonstration purposes.