import fs from 'fs';
import { PNG } from 'pngjs';
import jpeg from 'jpeg-js';

const bgData = fs.readFileSync('public/huella_bosque.jpg');
const bg = jpeg.decode(bgData, {useTArray: true});

const fg1Data = fs.readFileSync('public/palmera_silueta_1.png');
const fg1 = PNG.sync.read(fg1Data);

const fg2Data = fs.readFileSync('public/palmera_silueta_2.png');
const fg2 = PNG.sync.read(fg2Data);

function findMatch(bg, fg, name) {
  const bgW = bg.width;
  const bgH = bg.height;
  const fgW = fg.width;
  const fgH = fg.height;
  
  const samples = [];
  for (let y = 0; y < fgH; y += 10) {
    for (let x = 0; x < fgW; x += 10) {
      const idx = (fg.width * y + x) * 4;
      const a = fg.data[idx + 3];
      if (a > 240) {
        samples.push({
          x, y,
          r: fg.data[idx],
          g: fg.data[idx+1],
          b: fg.data[idx+2]
        });
      }
    }
  }
  
  // Use all non-transparent samples (max 1000)
  const chosenSamples = samples.sort(() => 0.5 - Math.random()).slice(0, 1000);
  
  let bestX = 0, bestY = 0;
  let minDiff = Infinity;
  
  for (let y = 0; y <= bgH - fgH; y += 10) {
    for (let x = 0; x <= bgW - fgW; x += 10) {
      let diff = 0;
      for (const s of chosenSamples) {
        const bgIdx = (bg.width * (y + s.y) + (x + s.x)) * 4;
        diff += Math.abs(bg.data[bgIdx] - s.r) + 
                Math.abs(bg.data[bgIdx+1] - s.g) + 
                Math.abs(bg.data[bgIdx+2] - s.b);
      }
      if (diff < minDiff) {
        minDiff = diff;
        bestX = x;
        bestY = y;
      }
    }
  }
  
  let rx = bestX, ry = bestY;
  minDiff = Infinity;
  
  for (let y = Math.max(0, ry - 10); y <= Math.min(bgH - fgH, ry + 10); y++) {
    for (let x = Math.max(0, rx - 10); x <= Math.min(bgW - fgW, rx + 10); x++) {
      let diff = 0;
      for (const s of chosenSamples) {
        const bgIdx = (bg.width * (y + s.y) + (x + s.x)) * 4;
        diff += Math.abs(bg.data[bgIdx] - s.r) + 
                Math.abs(bg.data[bgIdx+1] - s.g) + 
                Math.abs(bg.data[bgIdx+2] - s.b);
      }
      if (diff < minDiff) {
        minDiff = diff;
        bestX = x;
        bestY = y;
      }
    }
  }
  
  console.log(`Match for ${name}: x=${bestX}, y=${bestY}, diff=${minDiff/chosenSamples.length} avg/pixel`);
}

findMatch(bg, fg1, 'silueta_1');
findMatch(bg, fg2, 'silueta_2');
