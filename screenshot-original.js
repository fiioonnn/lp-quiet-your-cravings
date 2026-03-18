const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://de.happymammoth.com/pages/quiet-your-cravings', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  // Popups/Cookie-Banner schließen falls vorhanden
  try { await page.click('button:has-text("Akzeptieren"), button:has-text("Accept"), [data-testid="cookie-accept"]', { timeout: 3000 }); } catch(e) {}
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  fs.mkdirSync('./screenshots', { recursive: true });
  await page.screenshot({ path: 'screenshots/original-fullpage.png', fullPage: true });
  
  // Seite scrollen und section-screenshots
  const totalH = await page.evaluate(() => document.body.scrollHeight);
  let offset = 0; let i = 0;
  while (offset < totalH) {
    await page.evaluate(y => window.scrollTo(0, y), offset);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `screenshots/original-section-${i++}.png` });
    offset += 700;
  }
  console.log('Total sections:', i);
  console.log('Total page height:', totalH);
  await browser.close();
})();
