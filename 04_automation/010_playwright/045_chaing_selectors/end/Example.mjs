import { chromium } from "@playwright/test";

// @see セレクターのチェーンの利用方法(>>)
// https://playwright.dev/docs/selectors#chaining-selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  // const pageTitleLocator = page.locator(".cards.list-group-item > a >> nth=2");
  // const pageTitleLocator = await page.locator(".cards.list-group-item:nth-child(3)");
  // const pageTitle = await pageTitleLocator.innerText();
  // console.log(pageTitle);

  const pageTitleLocator = page.locator(".cards.list-group-item");
  const parentLocator = pageTitleLocator.locator("..");

  debugger;

  const pageTitle = await parentLocator.innerHTML();
  console.log(pageTitle);

  await browser.close();
})();
