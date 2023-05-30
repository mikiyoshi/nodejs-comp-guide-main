# Vercel MongoDB

- MongoDB > Integrations > Actions(Edit)
  - Add Vercel Projects
- Vercel > `Your Peoject` > Setting > Environment Variables
  - MONGODB_URI
    - replace DB name from `myFirstDatabase` to `Your DB name (bookshelf)`
    
## This is a only 2 Organizations by Free Plan
<!-- これは最大 2 Organizations しか追加できない(Free Plan) -->
[How to Connect MongoDB Atlas to Vercel Using the New Integration](https://www.mongodb.com/developer/products/atlas/how-to-connect-mongodb-atlas-to-vercel-using-the-new-integration/?utm_campaign=vercelatlasintegration&utm_source=youtube&utm_medium=organic_social)

```
npx create-next-app --example with-mongodb vercel-demo -y
cd vercel-demo
```
- create and push at github `vercel-demo`
- create vercel project `vercel-demo` and deploy
  - It will be `Error`
  - `Settings` > `Integrations` > `Browse Marketplace`
    - `MongoDB Atlas`
      - `Add Integration`
        - Select a Vercel Account to add the Integration to:
        - Select the Projects to which the Integration will be added: `All` or `Specific`
        - `Add Integration`
          - MongoDB Atlas login by `Google Account`
          - `Resume Setup`
          - Integrate Atlas with Vercel `Your Organization` or `Create new Organization`
          <!-- これは最大 2 Organizations しか追加できない(Free Plan) もし2個すでに使用していたら、1つを MongoDB Integration から削除すること -->
          - `I Acknowledge`
            - Project `Your Project`
            - Atlas Cluster `Cluster0` <-> Vercel Projects `Vercel Project`
            - `Connect and Return to Vercel`


# 進め方
本セクションで、書きながら学びたい場合にはこのフォルダ（08_bookshelf_backend）を
別名にして、新しくフォルダを作成してその中に記述してください。

# 拡張機能 Rest Client の利用
- REST APIのリクエストを送信するためのツール(Postman と同じ使い方ができる)

  - 使い方
    - 1. 拡張機能 Rest Client(humao.rest-client) をインストール
      - humao.rest-client を VScode の拡張で検索
    - 2. 下記の各リクエストの上に表示される Send Request を押すとリクエストが送信される
[参考](https://github.com/Huachao/vscode-restclient)

## 
```
nvm install v16
npm i
npm run dev:api
```