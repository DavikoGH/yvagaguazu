import { Jimp } from 'jimp';

async function findCrop(bgPath: string, fgPath: string) {
  const bg = await Jimp.read(bgPath);
  const fg = await Jimp.read(fgPath);
  
  const bgW = bg.bitmap.width;
  const bgH = bg.bitmap.height;
  const fgW = fg.bitmap.width;
  const fgH = fg.bitmap.height;
  
  let bestX = 0;
  let bestY = 0;
  let minDiff = Infinity;
  
  const samples = [];
  for (let y = 0; y < fgH; y += 20) {
    for (let x = 0; x < fgW; x += 20) {
      const color = fg.getPixelColor(x, y);
      const rgba = Jimp.intToRGBA(color);
      if (rgba.a > 128) {
        samples.push({x, y, r: rgba.r, g: rgba.g, b: rgba.b});
      }
    }
  }
  
  const chosenSamples = samples.sort(() => 0.5 - Math.random()).slice(0, 20);
  
  console.log(`Starting search for ${fgPath}...`);
  for (let y = 0; y <= bgH - fgH; y += 10) {
    for (let x = 0; x <= bgW - fgW; x += 10) {
      let diff = 0;
      for (const s of chosenSamples) {
        const bgC = Jimp.intToRGBA(bg.getPixelColor(x + s.x, y + s.y));
        diff += Math.abs(bgC.r - s.r) + Math.abs(bgC.g - s.g) + Math.abs(bgC.b - s.b);
      }
      if (diff < minDiff) {
        minDiff = diff;
        bestX = x;
        bestY = y;
      }
    }
  }
  
  console.log(`Match for ${fgPath}: x=${bestX}, y=${bestY}, diff=${minDiff}`);
}

async function main() {
  await findCrop('public/huella_bosque.jpg', 'public/palmera_silueta_1.png');
  await findCrop('public/huella_bosque.jpg', 'public/palmera_silueta_2.png');
}

main().catch(console.error);
