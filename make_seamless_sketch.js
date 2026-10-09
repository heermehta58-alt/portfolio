const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/projects/lumi/ideations-sketches.png');
const outputPath = path.join(__dirname, 'public/projects/lumi/ideations-sketches-transparent.png');

async function processSketch() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Processing sketch: ${width}x${height}, channels: ${channels}`);

  // We want the background to be EXACTLY site background color: #F8F8F5 (248, 248, 245)
  // And sketch lines to be crisp dark charcoal/black (#1A1A1A)
  const targetR = 248;
  const targetG = 248;
  const targetB = 245;

  const outputBuffer = Buffer.alloc(width * height * channels);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const brightness = (r + g + b) / 3;

    if (brightness > 230) {
      // Pure background -> exact site bg #F8F8F5
      outputBuffer[i] = targetR;
      outputBuffer[i + 1] = targetG;
      outputBuffer[i + 2] = targetB;
    } else if (brightness > 180) {
      // Anti-aliased edge transition between dark line and site bg
      const t = (brightness - 180) / 50; // 0 = dark line, 1 = bg
      outputBuffer[i] = Math.round(targetR * t + r * (1 - t));
      outputBuffer[i + 1] = Math.round(targetG * t + g * (1 - t));
      outputBuffer[i + 2] = Math.round(targetB * t + b * (1 - t));
    } else {
      // Dark pencil/ink sketch line -> preserve crisp detail
      outputBuffer[i] = r;
      outputBuffer[i + 1] = g;
      outputBuffer[i + 2] = b;
    }

    if (channels === 4) {
      outputBuffer[i + 3] = 255;
    }
  }

  await sharp(outputBuffer, {
    raw: { width, height, channels }
  })
  .png()
  .toFile(outputPath);

  console.log(`Successfully output seamless site-matched sketch image to ${outputPath}`);
}

processSketch().catch(console.error);
