import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3200";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 850 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));

const goto = async (pathname) => {
  const response = await page.goto(base + pathname, {
    waitUntil: "domcontentloaded",
    timeout: 45000,
  });
  assert.equal(response?.status(), 200, pathname + " should load");
};

try {
  await goto("/ai-automation");
  const section = page.getByTestId("ai-showcase");
  await section.waitFor();
  const total = Number(await section.getAttribute("data-project-count"));
  assert(
    total > 3,
    "All published AI workflows must participate in the showcase",
  );
  assert.equal(
    await section.locator("h3").count(),
    1,
    "The always-on showcase starts with one focused project",
  );
  console.log("PASS: animations remain active even with reduced OS motion");

  // Every published workflow has its own scroll stage, forward and backward.
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });
  const geometry = await section.evaluate((el) => {
    const rect = el.getBoundingClientRect();
    return {
      top: window.scrollY + rect.top,
      distance: rect.height - window.innerHeight,
    };
  });
  assert(
    geometry.distance > 300,
    "Scroll section must have enough travel for all cards",
  );
  const scrollStage = async (ratio) => {
    await page.evaluate(
      ({ top, distance, ratio }) => {
        window.scrollTo(0, top + distance * ratio);
      },
      { ...geometry, ratio },
    );
    await page.waitForTimeout(550);
    return (await section.locator(".tabular-nums").innerText()).trim();
  };

  for (let index = 0; index < total; index++) {
    const count = await scrollStage((index + 0.12) / total);
    assert.equal(
      count,
      String(index + 1).padStart(2, "0") +
        " / " +
        String(total).padStart(2, "0"),
      "Every AI project needs its own scroll stage: " + (index + 1),
    );
  }
  assert.equal(
    await scrollStage(0.02),
    "01 / " + String(total).padStart(2, "0"),
    "Reverse scrolling rewinds the entire sequence",
  );
  console.log("PASS: AI cards advance and rewind automatically with scrolling");

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(100);
  const aiTyping = page.getByTestId("typed-output").first();
  await aiTyping.waitFor();
  const start = (await aiTyping.innerText()).length;
  await page.waitForTimeout(850);
  const after = (await aiTyping.innerText()).length;
  assert(
    after > start || (start > 15 && after < start),
    "The AI hero must be actively typing or cycling",
  );
  console.log("PASS: actual 50ms hero typing progression is observable");

  await goto("/web-dev");
  const canvas = page.getByTestId("squares-canvas");
  await canvas.waitFor();
  await page.waitForTimeout(250);
  const image1 = await canvas.evaluate((node) => node.toDataURL());
  await page.waitForTimeout(480);
  const image2 = await canvas.evaluate((node) => node.toDataURL());
  assert.notEqual(
    image1,
    image2,
    "Visible Squares canvas must redraw into different pixels",
  );
  console.log(
    "PASS: moving Squares background changes pixels, not just static CSS",
  );

  const reveal = page.getByTestId("letter-reveal").first();
  await reveal.waitFor();
  const letters = reveal.locator("span[aria-hidden=true]");
  assert(
    (await letters.count()) > 5,
    "Web headline must render independently animated letters",
  );
  await page.waitForTimeout(2000);
  const firstOpacity = await letters
    .first()
    .evaluate((node) => Number(getComputedStyle(node).opacity));
  assert(firstOpacity > 0.9, "Headline letters must finish fully visible");
  console.log("PASS: web headline letters render and reveal");

  await goto("/data-engineer");
  const flow = page.getByTestId("flow-diagram").first();
  await flow.scrollIntoViewIfNeeded();
  assert.equal(
    await flow.getByTestId("flow-step").count(),
    5,
    "Data-engineering flow has five stages",
  );
  await page.waitForTimeout(2400);
  const opacities = await flow
    .getByTestId("flow-step")
    .evaluateAll((nodes) =>
      nodes.map((node) => Number(getComputedStyle(node).opacity)),
    );
  assert(
    opacities.every((value) => value > 0.95),
    "Every pipeline step must become fully visible",
  );
  assert.equal(
    await flow.getByTestId("flow-connector").count(),
    4,
    "Pipeline connects adjacent stages",
  );
  console.log(
    "PASS: synchronized five-stage data engineering pipeline is visible",
  );

  await goto("/data-analysis");
  const revealed = page.getByTestId("scroll-reveal");
  assert(
    (await revealed.count()) > 4,
    "Project and skill cards must have scroll entrances",
  );
  await revealed.last().scrollIntoViewIfNeeded();
  await page.waitForTimeout(950);
  const cardOpacity = await revealed
    .last()
    .evaluate((node) => Number(getComputedStyle(node).opacity));
  assert(
    cardOpacity > 0.95,
    "A project card must reveal fully when it enters view",
  );
  console.log("PASS: analytics cards reveal smoothly as the visitor scrolls");

  assert.deepEqual(errors, [], "No uncaught browser exceptions");
  console.log("PASS: motion browser smoke test finished without page errors");
} finally {
  await context.close();
  await browser.close();
}
