import React from "react";
import CardGenerator from "./components/CardGenerator";
import "./App.css";

function App() {
  return (
    <div className="app-main-container">
      {/* ── Official Header ── */}
      <header className="app-header">
        <div className="header-content-inner">
          <div className="header-brand">
            <div className="palm-badge-icon">🌴</div>
            <div className="brand-text">
              <span className="brand-title">HACKER GOA HOUSE</span>
              <span className="brand-subtitle">Builder Social Card Generator</span>
            </div>
          </div>
          <div className="header-date-badge">
            <span>28–31 OCT 2026</span>
          </div>
        </div>
      </header>

      {/* ── Main Body Container ── */}
      <main className="app-body">
        <CardGenerator />
      </main>

      {/* ── Minimal Footer ── */}
      <footer className="app-footer">
        <p>Hacker Goa House 2026 • Build in Goa, Ship from Paradise</p>
      </footer>
    </div>
  );
}

export default App;
