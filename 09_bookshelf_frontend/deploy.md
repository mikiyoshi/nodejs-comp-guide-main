# renderに対するデプロイ方法
1. アカウントの作成
[Github](https://github.com/)  
[render](https://render.com/) ※ Githubのアカウントでログイン推奨

2. Githubにリポジトリを作成
3. GithubにコードをPUSH
4. renderで新しい[Web Service]を作成
<!-- Node.js を動かすには [Web Service]、固定ページは [Static Site] -->
5. renderで Build Command を登録  
   ```npm install && npm run build```
6. renderで Start Command を登録  
   ```npm start```
7. 環境変数(Environment)にMONGO_URIを追加
8. [mongodb.com](https://mongodb.com/)の接続元IPアドレスを追加

9. renderに自動的にソースがアップロードされて、Build & Start が行われる

# vercel に対するデプロイ方法
[Github](https://github.com/)  
[vercel](https://vercel.com/)
- New Project
- connect git [nodejs-comp-guide-main]
   - Root Directory [09_bookshelf_frontend]
   - Build Command [npm run build]
   - Install Command [npm install]
   - Environment Variables `.env` の [MONGO_URI] と key and value を追加