const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/projects/lumi/gallery-02.jpg');
const outputPath = path.join(__dirname, 'public/projects/lumi/gallery-02.png');

async function processImage() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Processing image: ${width}x${height}, channels: ${channels}`);

  // Create an RGBA buffer (4 channels for transparency or white replacement)
  const outputBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const maxVal = Math.max(r, g, b);

    if (maxVal < 45) {
      // Background (pure black/near black) -> White
      outputBuffer[j] = 255;
      outputBuffer[j + 1] = 255;
      outputBuffer[j + 2] = 255;
      outputBuffer[j + 3] = 255;
    } else if (maxVal < 75) {
      // Smooth edge blending between product edge and white background
      const t = (maxVal - 45) / 30; // 0 = bg, 1 = fg
      outputBuffer[j] = Math.round(255 * (1 - t) + r * t);
      outputBuffer[j + 1] = Math.round(255 * (1 - t) + g * t);
      outputBuffer[j + 2] = Math.round(255 * (1 - t) + b * t);
      outputBuffer[j + 3] = 255;
    } else {
      // Foreground product & pedestals
      outputBuffer[j] = r;
      outputBuffer[j + 1] = g;
      outputBuffer[j + 2] = b;
      outputBuffer[j + 3] = 255;
    }
  }

  await sharp(outputBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log(`Saved white background image to ${outputPath}`);
}

processImage().catch(console.error);
