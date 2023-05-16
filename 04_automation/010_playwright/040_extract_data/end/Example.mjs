import { chromium } from "@playwright/test";

// @see Locatorで要素を取得する方法
// https://playwright.dev/docs/selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  // CSS セレクターで要素を取得
  const pageTitleLocator = await page.locator(".navbar-brand"); // locator は非同期ではないので await はなくても良い、あっても問題はない
  const pageTitle = await pageTitleLocator.innerText();
  // console.log(pageTitle);
  //　result
  // 名刺管理アプリ

  // 文字列で要素を取得
  const textLocator = await page.locator("text=名刺管理アプリ");
  const pageText = await textLocator.innerText();
  // console.log(pageText);
  //　result
  // 名刺管理アプリ

  // xpathで要素を取得
  const xpathLocator = await page.locator("xpath=//*[@id=\"__next\"]/nav/div/a"); // Chrome ブラウザ上で、<a> タグを選択して、右クリックで Copy XPath, xpath= を最初に追加、xpath=は　''　で囲むか、\"で xPath をエスケープすること // Firefox では違うデータになる
  const xpathText = await xpathLocator.innerText();
  console.log(xpathText);
  //　result
  // 名刺管理アプリ

  await browser.close();

})();
