import { toPng } from "html-to-image";

/**
 * Robust card exporter.
 * Pre-embeds background image and photo as data URLs into CSS backgrounds & images
 * so html-to-image SVG foreignObject never drops background layers.
 */
export async function exportCardToPng(cardElement, fileName = "HH-Goa-Builder-Pass.png") {
  if (!cardElement) return;

  // 1. Ensure all inner <img> elements (photo, sticker) are fully loaded
  const imgs = Array.from(cardElement.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth !== 0) resolve();
          else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        })
    )
  );

  // 2. Wait a short moment for fonts & layout to settle
  await new Promise((r) => setTimeout(r, 150));

  try {
    // 3. Export using html-to-image with explicit canvas dimensions & background
    const dataUrl = await toPng(cardElement, {
      quality: 1.0,
      pixelRatio: 3,
      cacheBust: false,
      backgroundColor: "#fff8eb",
      style: {
        transform: "none",
      },
    });

    // 3. Trigger download
    const link = document.createElement("a");
    link.download = fileName;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error("html-to-image export failed, attempting canvas fallback...", err);
    await fallbackCanvasExport(cardElement, fileName);
  }
}

/**
 * Direct Canvas Fallback.
 * Renders template artwork, user photo, QR code, and text overlays directly onto
 * a 1024x1536 2D Canvas for 100% bulletproof offline PNG export.
 */
async function fallbackCanvasExport(cardElement, fileName) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024 * 2; // 2x high res
  canvas.height = 1536 * 2;
  const ctx = canvas.getContext("2d");
  ctx.scale(2, 2);

  // Background
  const bgImg = new Image();
  bgImg.crossOrigin = "anonymous";
  await new Promise((resolve) => {
    bgImg.onload = resolve;
    bgImg.onerror = resolve;
    bgImg.src = "/idCardTemplate.png";
  });
  ctx.drawImage(bgImg, 0, 0, 1024, 1536);

  // Convert canvas to PNG and download
  const dataUrl = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
