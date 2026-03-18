const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const url = process.argv[2] || 'http://lp-cravings.116.203.195.121.traefik.me';
  const prefix = process.argv[3] || 'live';
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  fs.mkdirSync('./screenshots', { recursive: true });
  await page.screenshot({ path: `screenshots/${prefix}-fullpage.png`, fullPage: true });
  
  const totalH = await page.evaluate(() => document.body.scrollHeight);
  let offset = 0; let i = 0;
  while (offset < totalH) {
    await page.evaluate(y => window.scrollTo(0, y), offset);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/${prefix}-section-${i++}.png` });
    offset += 700;
  }
  console.log('Total sections:', i, '| Height:', totalH);
  await browser.close();
})();
