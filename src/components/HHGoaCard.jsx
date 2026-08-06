import React, { useRef, useState } from "react";
import QRCode from "./QRCode";
import "../styles/HHGoaCard.css";

/**
 * Compute an inline font-size for a text that must not overflow a container.
 * Uses clamp-style: a base size that shrinks proportionally as text gets longer.
 */
function scaledFontSize(str, maxChars, maxCqi, minCqi) {
  const len = (str || "").length;
  const ratio = Math.min(1, maxChars / Math.max(len, 1));
  const cqi = Math.max(minCqi, maxCqi * ratio);
  return `clamp(${minCqi}px, ${cqi.toFixed(2)}cqi, ${(maxCqi * 6).toFixed(0)}px)`;
}

const HHGoaCard = ({ cardRef, ref, data, photoOffset, onPhotoDrag }) => {
  const targetRef = ref || cardRef;
  const [isDragging, setIsDragging] = useState(false);
  const [templateDataUrl, setTemplateDataUrl] = useState("/idCardTemplate.png");
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialOffsetRef = useRef({ x: 0, y: 0, zoom: 1 });

  // Convert template background to Data URL for reliable high-res PNG export
  React.useEffect(() => {
    fetch("/idCardTemplate.png")
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => setTemplateDataUrl(reader.result);
        reader.readAsDataURL(blob);
      })
      .catch((err) => console.error("Error loading template image:", err));
  }, []);

  const {
    name = "",
    stackRole = "",
    photoUrl = null,
    builderClass = "",
    stickerUrl = "/stickers/terminal-surfer.png",
    beachBag = ["☕ Coffee", "💻 VS Code", "🎧 Lo-Fi Beats"],
    currentlyShipping = "",
    builderId = ""
  } = data || {};

  // ── Drag handlers ─────────────────────────────────────────────────────────
  const startDrag = (clientX, clientY) => {
    if (!photoUrl) return;
    setIsDragging(true);
    dragStartRef.current = { x: clientX, y: clientY };
    initialOffsetRef.current = { ...(photoOffset || { x: 0, y: 0, zoom: 1 }) };
  };

  const moveDrag = (clientX, clientY) => {
    if (!isDragging) return;
    const dx = clientX - dragStartRef.current.x;
    const dy = clientY - dragStartRef.current.y;
    onPhotoDrag?.({
      ...initialOffsetRef.current,
      x: initialOffsetRef.current.x + dx,
      y: initialOffsetRef.current.y + dy,
    });
  };

  const endDrag = () => setIsDragging(false);

  const handleMouseDown = (e) => { e.preventDefault(); startDrag(e.clientX, e.clientY); };
  const handleMouseMove = (e) => moveDrag(e.clientX, e.clientY);

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
  };
  const handleTouchMove = (e) => {
    if (e.touches.length !== 1) return;
    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  };

  // ── Dynamic values ─────────────────────────────────────────────────────────
  const zoom   = photoOffset?.zoom ?? 1;
  const offsetX = photoOffset?.x ?? 0;
  const offsetY = photoOffset?.y ?? 0;

  // Scale name font: maxChars 14, maxCqi 4.2, minCqi 1.6 to ensure long names never clip
  const nameFontSize = scaledFontSize(name, 14, 4.2, 1.6);
  // Scale role font: up to ~14 chars → 3.4cqi, gives bigger bold text while staying inside yellow badge
  const roleFontSize = scaledFontSize(stackRole, 14, 3.4, 1.9);

  const qrData = `${builderId} | ${name} | ${stackRole}`;

  const items = Array.isArray(beachBag) ? beachBag.slice(0, 3) : [beachBag];

  return (
    <div className="hh-card-wrapper">
      <div
        ref={targetRef}
        className="hh-card-container"
        onMouseMove={handleMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchMove={handleTouchMove}
        onTouchEnd={endDrag}
      >
        {/* ── Template background ─────────────────────────────── */}
        <img
          src={templateDataUrl || "/idCardTemplate.png"}
          alt="Template background"
          className="hh-card-background"
          draggable={false}
        />

        {/* ── 1. Photo ────────────────────────────────────────── */}
        <div
          className={`hh-photo-frame${isDragging ? " dragging" : ""}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          title={photoUrl ? "Drag to reposition" : "Upload a photo"}
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name || "Builder photo"}
              className="hh-photo-img"
              style={{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom * 1.05})`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              draggable={false}
            />
          ) : (
            <div className="hh-photo-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Upload Photo</span>
            </div>
          )}
        </div>

        {/* ── 2. Name banner ──────────────────────────────────── */}
        <div className="hh-name-overlay">
          <span
            className="hh-name-text"
            style={{ fontSize: nameFontSize }}
          >
            {name || ""}
          </span>
        </div>

        {/* ── 3. Stack / Role badge ───────────────────────────── */}
        <div className="hh-role-overlay">
          <span
            className="hh-role-text"
            style={{ fontSize: roleFontSize }}
          >
            {stackRole || ""}
          </span>
        </div>

        {/* ── 5. Builder ID ───────────────────────────────────── */}
        <div className="hh-builder-id-overlay">
          <span className="hh-id-text">{builderId || "#HH-GOA-2026"}</span>
        </div>
      </div>
    </div>
  );
};

export default HHGoaCard;
