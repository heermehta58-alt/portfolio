const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage() {
  const inputPath = path.join(__dirname, '../public/projects/lumi/ideations-sketches.png');
  const outputPath = path.join(__dirname, '../public/projects/lumi/ideations-sketches-transparent.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image info: ${width}x${height}, channels: ${channels}`);

  // Threshold tuning for crisp transparent background
  // Light background pixels become transparent, dark pencil lines remain crisp
  const backgroundCutoff = 228;
  const darkCutoff = 180;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Grayscale luminance calculation
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (lum >= backgroundCutoff) {
      // 100% transparent for background pixels
      data[i + 3] = 0;
    } else if (lum <= darkCutoff) {
      // Solid dark sketch lines
      data[i + 3] = 255;
    } else {
      // Smooth gradient antialiased alpha transition
      const alphaFraction = (backgroundCutoff - lum) / (backgroundCutoff - darkCutoff);
      data[i + 3] = Math.round(alphaFraction * 255);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png()
  .toFile(outputPath);

  console.log('Transparent PNG generated successfully at:', outputPath);
}

processImage().catch(err => {
  console.error('Error processing image:', err);
});
