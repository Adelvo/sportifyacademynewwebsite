// Creates clearly labelled placeholder images. Replace the files in /public/placeholders
// with real photos (same names), or change the paths in content/en/images.ts.
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const items = [
  ["hero-child-sprint", 960, 1100, "Child sprinting during a fitness test"],
  ["test-session", 1200, 800, "Child during a 90-minute test session"],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function svg(w, h, label, title) {
  const size = Math.round(Math.min(w, h) / 22);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0.2"><stop offset="0" stop-color="#56F6DB"/><stop offset="1" stop-color="#3DACFB"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="#0C171D"/>
  <g fill="none" stroke="#1B2A33" stroke-width="2">
    <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.3}"/>
    <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.2}"/>
    <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.1}"/>
  </g>
  <rect x="${w * 0.06}" y="${h * 0.22}" rx="6" width="${size * 14}" height="${size * 1.9}" fill="url(#g)"/>
  <text x="${w * 0.06 + size * 0.5}" y="${h * 0.22 + size * 1.32}" font-family="Arial, sans-serif" font-weight="700" font-size="${size}" fill="#02070A">PLACEHOLDER IMAGE</text>
  <text x="${w * 0.06}" y="${h * 0.22 + size * 3.6}" font-family="Arial, sans-serif" font-size="${size * 0.8}" fill="#ffffff">${esc(title)}</text>
  <text x="${w * 0.06}" y="${h * 0.22 + size * 4.9}" font-family="Arial, sans-serif" font-size="${size * 0.65}" fill="#B4C1CA">Replace: ${esc(label)}.webp</text>
</svg>`);
}

mkdirSync("public/placeholders", { recursive: true });
const ogOnly = process.argv.includes("--og-only");
for (const [name, w, h, title] of ogOnly ? [] : items) {
  await sharp(svg(w, h, name, title)).webp({ quality: 80 }).toFile(`public/placeholders/${name}.webp`);
}

// Open Graph image (1200x630)
const og = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0.2"><stop offset="0" stop-color="#56F6DB"/><stop offset="1" stop-color="#3DACFB"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="#02070A"/>
  <g fill="none" stroke="#1B2A33" stroke-width="3">
    <circle cx="1020" cy="120" r="300"/><circle cx="1020" cy="120" r="200"/><circle cx="1020" cy="120" r="100"/>
  </g>
  <text x="80" y="300" font-family="Arial, sans-serif" font-weight="800" font-size="62" fill="#ffffff">Find your child's best sport.</text>
  <text x="80" y="375" font-family="Arial, sans-serif" font-size="34" fill="#B4C1CA">30+ sports. One 90-minute session. Report the same day.</text>
  <text x="80" y="530" font-family="Arial, sans-serif" font-size="28" fill="#ffffff">Dubai's dedicated sports talent identification centre</text>
</svg>`);
const ogLogo = await sharp("public/brand/logo-white.svg", { density: 300 }).resize({ height: 130 }).toBuffer();
await sharp(og).composite([{ input: ogLogo, left: 80, top: 70 }]).png({ compressionLevel: 9 }).toFile("public/og-image.png");

console.log(`Created ${items.length} placeholders and og-image.png`);
