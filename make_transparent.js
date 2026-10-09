const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/projects/lumi/ideations-sketches.png');
const outputPath = path.join(__dirname, 'public/projects/lumi/ideations-sketches-transparent.png');

async function processSketch() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Processing sketch image: ${width}x${height}, channels: ${channels}`);

  const outputBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Grayscale brightness value (0 = black line, 255 = white background)
    const brightness = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

    if (brightness > 240) {
      // Completely transparent background
      outputBuffer[j] = 0;
      outputBuffer[j + 1] = 0;
      outputBuffer[j + 2] = 0;
      outputBuffer[j + 3] = 0;
    } else {
      // Line drawing: preserve original black/gray sketch lines with alpha proportional to darkness
      const alpha = Math.round(255 * (1 - brightness / 245));
      outputBuffer[j] = Math.min(r, 40); // ensure deep black lines
      outputBuffer[j + 1] = Math.min(g, 40);
      outputBuffer[j + 2] = Math.min(b, 40);
      outputBuffer[j + 3] = Math.max(alpha, 10);
    }
  }

  await sharp(outputBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  console.log(`Successfully generated transparent sketch image at ${outputPath}`);
}

processSketch().catch(console.error);
