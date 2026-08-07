import React from "react";
import "./landing.css";

export function Header({ onApplyClick, onBackToHome, onCheckHypeClick }) {
  return (
    <header className="lp-header">
      {/* Top Left — 2:47 PM Studio logo */}
      <div>
        <button
          type="button"
          onClick={onBackToHome}
          className="lp-logo-btn"
        >
          <img
            src="/assets/2-47.svg"
            alt="2:47 PM Studio"
            className="lp-logo-img"
          />
        </button>
      </div>

      {/* Top Right — CHECK HYPE + CREATE */}
      <div className="lp-nav">
        <button
          type="button"
          onClick={onCheckHypeClick}
          className="lp-check-hype-btn"
        >
          CHECK HYPE
        </button>

        <button
          type="button"
          onClick={onApplyClick}
          className="lp-create-btn"
        >
          CREATE
        </button>
      </div>
    </header>
  );
}
