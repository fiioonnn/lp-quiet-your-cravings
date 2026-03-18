const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // Assets intercepten
  const images = {};
  await page.route('**/*.{png,jpg,jpeg,webp,gif,svg,avif}', async (route) => {
    try {
      const response = await route.fetch();
      const buffer = await response.body();
      const url = route.request().url();
      const filename = path.basename(new URL(url).pathname).split('?')[0];
      if (filename && buffer.length > 100) {
        fs.mkdirSync('./public/original-assets', { recursive: true });
        fs.writeFileSync(`./public/original-assets/${filename}`, buffer);
        images[url] = `/original-assets/${filename}`;
      }
      await route.fulfill({ response });
    } catch(e) { await route.continue(); }
  });
  
  await page.goto('https://de.happymammoth.com/pages/quiet-your-cravings', { 
    waitUntil: 'networkidle', timeout: 60000 
  });
  
  // Scrollen um lazy-loaded images zu triggern
  await page.evaluate(() => {
    return new Promise(resolve => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  await page.waitForTimeout(2000);
  
  // HTML speichern
  const html = await page.content();
  fs.writeFileSync('./original-page.html', html);
  
  // Alle Fonts ermitteln
  const fonts = await page.evaluate(() => {
    const fontSet = new Set();
    document.querySelectorAll('*').forEach(el => {
      const ff = getComputedStyle(el).fontFamily;
      if (ff) fontSet.add(ff);
    });
    return [...fontSet];
  });
  fs.writeFileSync('./original-fonts.json', JSON.stringify(fonts, null, 2));
  
  // Farben der wichtigsten Elemente
  const colors = await page.evaluate(() => {
    const els = {
      body: document.body,
      h1: document.querySelector('h1'),
      cta: document.querySelector('a[href*="product"], button'),
      bg: document.querySelector('section, main, .container'),
    };
    const result = {};
    for (const [name, el] of Object.entries(els)) {
      if (el) {
        const cs = getComputedStyle(el);
        result[name] = {
          color: cs.color, bg: cs.backgroundColor,
          font: cs.fontFamily, size: cs.fontSize
        };
      }
    }
    return result;
  });
  fs.writeFileSync('./original-colors.json', JSON.stringify(colors, null, 2));
  
  console.log('Scraped images:', Object.keys(images).length);
  console.log('Fonts found:', fonts.length);
  
  await browser.close();
})();
