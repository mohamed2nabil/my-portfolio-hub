import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3200';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 850 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));

const goto = async (pathname) => {
  const response = await page.goto(base + pathname, { waitUntil: 'domcontentloaded', timeout: 45000 });
  assert.equal(response?.status(), 200, pathname + ' should load');
  await page.getByTestId('motion-toggle').waitFor();
};

try {
  await goto('/ai-automation');
  const section = page.locator('[aria-label="Scroll through featured automation projects"]');
  await section.waitFor();
  assert.equal(await section.locator('h3').count(), 3, 'Reduced-motion default must keep all featured cards accessible');
  console.log('PASS: reduced-motion visitors see a static, accessible AI project list');

  await page.getByTestId('motion-toggle').click();
  await page.waitForFunction(() => document.documentElement.dataset.siteMotion === 'on');
  assert.equal(await section.locator('h3').count(), 1, 'Explicit motion opt-in must switch to scroll showcase');
  console.log('PASS: explicit opt-in turns on AI scroll animation despite reduced OS setting');

  // Only the in-view sticky card is visible. Directly sample the stage at
  // three scroll positions; scrolling backward must rewind the sequence.
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  const geometry = await section.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return { top: window.scrollY + rect.top, distance: rect.height - window.innerHeight };
  });
  assert(geometry.distance > 300, 'Scroll section must have enough travel for all cards');
  const scrollStage = async (ratio) => {
    await page.evaluate(({ top, distance, ratio }) => {
      window.scrollTo(0, top + distance * ratio);
    }, { ...geometry, ratio });
    await page.waitForTimeout(550);
    return (await section.locator('.tabular-nums').innerText()).trim();
  };

  assert.match(await scrollStage(.05), /01\s*\/\s*03/, 'First scroll stage');
  assert.match(await scrollStage(.52), /02\s*\/\s*03/, 'Second scroll stage');
  assert.match(await scrollStage(.96), /03\s*\/\s*03/, 'Third scroll stage');
  assert.match(await scrollStage(.05), /01\s*\/\s*03/, 'Reverse scroll restores the first card');
  console.log('PASS: AI cards advance and rewind automatically with scrolling');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(100);
  const aiTyping = page.getByTestId('typed-output').first();
  await aiTyping.waitFor();
  const start = (await aiTyping.innerText()).length;
  await page.waitForTimeout(850);
  const after = (await aiTyping.innerText()).length;
  assert(after > start || (start > 15 && after < start), 'The AI hero must be actively typing or cycling');
  console.log('PASS: actual 50ms hero typing progression is observable');

  await goto('/web-dev');
  await page.waitForFunction(() => document.documentElement.dataset.siteMotion === 'on');
  const canvas = page.getByTestId('squares-canvas');
  await canvas.waitFor();
  await page.waitForTimeout(250);
  const image1 = await canvas.evaluate((node) => node.toDataURL());
  await page.waitForTimeout(480);
  const image2 = await canvas.evaluate((node) => node.toDataURL());
  assert.notEqual(image1, image2, 'Visible Squares canvas must redraw into different pixels');
  console.log('PASS: moving Squares background changes pixels, not just static CSS');

  const reveal = page.getByTestId('letter-reveal').first();
  await reveal.waitFor();
  const letters = reveal.locator('span[aria-hidden=true]');
  assert((await letters.count()) > 5, 'Web headline must render independently animated letters');
  await page.waitForTimeout(2000);
  const firstOpacity = await letters.first().evaluate((node) => Number(getComputedStyle(node).opacity));
  assert(firstOpacity > .9, 'Headline letters must finish fully visible');
  console.log('PASS: web headline letters render and reveal');

  await page.getByTestId('motion-toggle').click();
  await page.waitForFunction(() => document.documentElement.dataset.siteMotion === 'off');
  assert.equal(await page.getByTestId('motion-toggle').getAttribute('aria-pressed'), 'false');
  console.log('PASS: user can switch animations back off');

  assert.deepEqual(errors, [], 'No uncaught browser exceptions');
  console.log('PASS: motion browser smoke test finished without page errors');
} finally {
  await context.close();
  await browser.close();
}
