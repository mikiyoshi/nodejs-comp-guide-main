# 999_demo
node v16
npm install

# 04_automation
node v16
npm install

```
npx playwright install
```

add package.json
```
  "scripts": {
    "install-playwright": "npx playwright install"
  },
  ```

  if npm install with automatically install
  ```
    "scripts": {
    "postinstall": "npx playwright install"
  },
  ```