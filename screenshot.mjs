import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'fs/promises';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const dir = './temporary screenshots';

await mkdir(dir, { recursive: true });

const files = await readdir(dir);
const nums = files
  .map(f => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map(m => parseInt(m[1], 10));
const next = nums.length ? Math.max(...nums) + 1 : 1;
const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll through the page to trigger whileInView animations
await page.evaluate(async () => {
  const distance = 300;
  const delay = 200;
  const scrollHeight = document.body.scrollHeight;
  let currentPosition = 0;
  while (currentPosition < scrollHeight) {
    window.scrollBy(0, distance);
    currentPosition += distance;
    await new Promise(r => setTimeout(r, delay));
  }
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise(r => setTimeout(r, 1000));
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 800));
});

await page.screenshot({ path: join(dir, filename), fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${join(dir, filename)}`);
