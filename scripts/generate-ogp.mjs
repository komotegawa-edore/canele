import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function createOGP() {
  const WIDTH = 1200;
  const HEIGHT = 630;

  // Load and resize logo
  const logoBuffer = await sharp(path.join(root, "public/images/logo.webp"))
    .resize({ height: 120 })
    .toBuffer();

  const logoMeta = await sharp(logoBuffer).metadata();
  const logoWidth = logoMeta.width || 300;
  const logoHeight = logoMeta.height || 120;

  // SVG text overlay
  const svgText = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <!-- Decorative line above text -->
    <line x1="${WIDTH / 2 - 40}" y1="360" x2="${WIDTH / 2 + 40}" y2="360"
      stroke="#A0622E" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>

    <!-- Catchphrase -->
    <text x="${WIDTH / 2}" y="410"
      text-anchor="middle" font-size="28" fill="#3D2B1F"
      font-family="'Noto Serif JP', 'Hiragino Mincho ProN', serif"
      letter-spacing="0.1em">
      小さなお菓子から始まる、大きなつながり。
    </text>

    <!-- Sub text -->
    <text x="${WIDTH / 2}" y="460"
      text-anchor="middle" font-size="16" fill="#A0622E"
      font-family="'Playfair Display', serif"
      letter-spacing="0.3em">
      CANELÉ CIRCLE
    </text>

    <!-- Bottom decorative line -->
    <line x1="${WIDTH / 2 - 40}" y1="490" x2="${WIDTH / 2 + 40}" y2="490"
      stroke="#A0622E" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>

    <!-- Domain -->
    <text x="${WIDTH / 2}" y="570"
      text-anchor="middle" font-size="14" fill="#3D2B1F" opacity="0.4"
      font-family="'Playfair Display', serif"
      letter-spacing="0.2em">
      caneleou.jp
    </text>
  </svg>`;

  // Create base image with fabric-like background color
  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 245, g: 240, b: 232, alpha: 255 }, // #f5f0e8
    },
  })
    .composite([
      // Logo centered near top
      {
        input: logoBuffer,
        left: Math.round((WIDTH - logoWidth) / 2),
        top: 180,
      },
      // Text overlay
      {
        input: Buffer.from(svgText),
        left: 0,
        top: 0,
      },
    ])
    .png()
    .toFile(path.join(root, "public/images/ogp.png"));

  console.log("OGP image generated: public/images/ogp.png");
}

createOGP().catch(console.error);
