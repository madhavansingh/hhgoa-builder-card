import React, { useState } from "react";
import CardGenerator from "./components/CardGenerator";
import { Header } from "./components/landing/Header";
import { HeroSection } from "./components/landing/HeroSection";
import { Footer } from "./components/landing/Footer";
import { DitheringBackground } from "./components/landing/DitheringBackground";
import { HypeVideoModal } from "./components/landing/HypeVideoModal";
import { InitialPreloader } from "./components/landing/InitialPreloader";
import { ArrowLeft } from "lucide-react";
import "./App.css";

function App() {
  const [viewMode, setViewMode] = useState("landing"); // "landing" | "generator"
  const [isHypeModalOpen, setIsHypeModalOpen] = useState(false);

  const openGenerator = () => {
    setViewMode("generator");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLanding = () => {
    setViewMode("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (viewMode === "landing") {
    return (
      <div className="lp-page">
        {/* Site Initial Loading Screen */}
        <InitialPreloader />

        {/* Dynamic Dithering Background Shader */}
        <DitheringBackground
          colorBack="#02683400"
          colorFront="#FEE101"
          backgroundColor="#026834"
          speed={0.25}
          shape="wave"
          type="4x4"
          pxSize={5}
          scale={1.0}
        />

        {/* Background Ambient Glow Orbs */}
        <div className="lp-orb lp-orb-top" />
        <div className="lp-orb lp-orb-bot" />

        <Header
          onApplyClick={openGenerator}
          onBackToHome={openLanding}
          onCheckHypeClick={() => setIsHypeModalOpen(true)}
        />

        <HeroSection />

        <Footer />

        {/* Hype Video Overlay Modal */}
        <HypeVideoModal
          isOpen={isHypeModalOpen}
          onClose={() => setIsHypeModalOpen(false)}
        />
      </div>
    );
  }

  // ── Existing Builder Generator (100% untouched & intact) ──
  return (
    <div className="app-main-container">
      {/* ── Official Header ── */}
      <header className="app-header">
        <div className="header-content-inner">
          <div 
            className="header-brand" 
            onClick={openLanding} 
            style={{ cursor: "pointer" }}
            title="Back to Landing Page"
          >
            <img
              src="/logo-background-remove.png"
              alt="Logo"
              className="header-logo-left"
            />
            <div className="brand-text">
              <span className="brand-title">HACKER GOA HOUSE</span>
              <span className="brand-subtitle">Builder Social Card Generator</span>
            </div>
          </div>
          <div className="header-actions-right">
            <button
              onClick={openLanding}
              className="header-home-btn"
              onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateX(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <ArrowLeft size={14} />
              <span>HOME</span>
            </button>
            <img
              src="/assets/2-47.svg"
              alt="2:47 PM Studio"
              onClick={openLanding}
              className="header-logo-right"
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
              title="2:47 PM Studio - Back to Home"
            />
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
