# Vercel React clients

[09-vercel-clients](https://09-vercel-clients.vercel.app/)

## Vercel Setting

- `Setting`
  - `Build & Development Settings`
    - Build command `npm run build`
    - Install command `npm install`
  - `Root Directory` 09_vercel/client
    - check at `Include source files outside of the Root Directory in the Build Step`
  - `Node.js Version` 18.x
- Add server URL [09-vercel-server](https://09-vercel-server.vercel.app/) at api/book.js `ENDPOINT_URL`
<!-- It's not work `proxy` at package.json, add at `ENDPOINT_URL`  -->

# Vercel Node.js server

[09-vercel-clients](https://09-vercel-clients.vercel.app/)
[09-vercel-server](https://09-vercel-server.vercel.app/)

## Vercel Setting

- `Setting` 
  - `Root Directory` 09_vercel/server/server/
    <!-- It's not work App.mjs, It's work only index.mjs -->
    - check at `Include source files outside of the Root Directory in the Build Step`
  - `Node.js Version` 18.x
- `Integrations`
  - `MongoDB Atlas`
- `Environment Variables`
  - `MONGODB_URI` update from `myFirstDatabase` to `bookshelf`
  - update `.env` in your local file
    - Add `MONGODB_URI`

    - `MongoDB Atlas` is only 2 `Integrations`
      - if over 2 `Integrations`, it needs `uninstall` from bottom of `Vercel` `MongoDB Atlas` page
        - How to add `Integrations` `MongoDB Atlas`
          - create new `project`
            - `Setting` `Integrations` `MongoDB Atlas` and `Add Integrations`
              - [How to Connect MongoDB Atlas to Vercel Using the New Integration](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/?utm_campaign=vercelatlasintegration&utm_source=youtube&utm_medium=organic_social)
                - Organization
                - Mikiyoshi's Org - 2022-03-18
                  <!-- this is test: list at MongoDB header pull tab
                  Organization 7950722 
                  Organization 7952198
                  vercel-demo2
                  -->
                - nodejs-comp-guide-main
                  <!-- 
                  Project 0
                  mern-exercise-tracker-mongodb
                  natours-app
                  vercel-mongodb 
                  -->
- Add `cors` in server/index.mjs and install `npm install cors`
```
import cors from 'cors';
app.use(
  cors({
    origin: '*',
  })
);
```