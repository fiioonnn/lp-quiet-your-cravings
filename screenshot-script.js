const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  // Screenshot Original - Desktop Full Page
  console.log('Taking Original screenshots...');
  await page.goto('https://de.happymammoth.com/pages/quiet-your-cravings', { 
    waitUntil: 'networkidle',
    timeout: 60000 
  });
  
  // Wait for all images to load
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).every(img => img.complete);
  });
  
  // Check for popup/modal and screenshot it
  await page.waitForTimeout(3000);
  await page.screenshot({ 
    path: 'screenshots/original-desktop-full.png', 
    fullPage: true 
  });
  
  // Try to close any popup if exists
  try {
    const closeButton = await page.$('[aria-label="Close"], .close, button:has-text("Close"), .modal-close, [data-action="close"]');
    if (closeButton) {
      await closeButton.click();
      await page.waitForTimeout(1000);
      await page.screenshot({ 
        path: 'screenshots/original-desktop-no-popup.png', 
        fullPage: true 
      });
    }
  } catch (e) {
    console.log('No popup found or could not close');
  }

  // Hero section only (first viewport)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: 'screenshots/original-hero-desktop.png'
  });

  // Mobile Original
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: 'screenshots/original-hero-mobile.png'
  });
  await page.screenshot({ 
    path: 'screenshots/original-mobile-full.png', 
    fullPage: true 
  });

  // Screenshot Nachbau - Desktop
  console.log('Taking Nachbau screenshots...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://lp-cravings.116.203.195.121.traefik.me', { 
    waitUntil: 'networkidle',
    timeout: 60000 
  });
  
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('img');
    return Array.from(images).every(img => img.complete);
  });
  
  await page.waitForTimeout(2000);
  await page.screenshot({ 
    path: 'screenshots/nachbau-desktop-full.png', 
    fullPage: true 
  });

  // Hero section only
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: 'screenshots/nachbau-hero-desktop.png'
  });

  // Mobile Nachbau
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: 'screenshots/nachbau-hero-mobile.png'
  });
  await page.screenshot({ 
    path: 'screenshots/nachbau-mobile-full.png', 
    fullPage: true 
  });

  await browser.close();
  console.log('Screenshots complete!');
}

takeScreenshots().catch(console.error);
