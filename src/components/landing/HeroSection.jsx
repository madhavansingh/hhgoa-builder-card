import React from "react";
import "./landing.css";

export function HeroSection() {
  return (
    <main className="lp-hero">
      <div className="lp-hero-inner">

        {/* ── Outer row: centers the image group horizontally ── */}
        <div className="lp-hero-title-wrap">

          {/* ── Inner box: exactly image-sized so % positions hit the image ── */}
          <div className="lp-title-img-box">

            <img
              src="/assets/Hacker house.png"
              alt="HACKER HOUSE"
              className="lp-hacker-house-img"
            />

            {/* गोवा stamp — positioned relative to the IMAGE, not the outer wrapper */}
            <div className="lp-stamp-wrap">
              <img
                src="/assets/goa_hindi.svg"
                alt="गोवा"
                className="lp-stamp-img"
              />
            </div>

          </div>
        </div>

        {/* ── Date / location pill ── */}
        <div className="lp-subbar">
          <span className="lp-subbar-left">GOA, INDIA  •  28 - 31 OCT 2026</span>
          <span className="lp-subbar-right">2:47 PM STUDIO</span>
        </div>

      </div>
    </main>
  );
}
