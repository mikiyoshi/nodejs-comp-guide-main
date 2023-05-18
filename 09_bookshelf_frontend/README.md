# このフォルダの説明
このフォルダは`create-react-app`で作成したフォルダになります。  
「Bookshelfアプリのフロントの説明とインタネットへの公開」セクション開始時点の状態になっていますので、書きながら学びたい人はこちらのフォルダに追記していってください。
また、完成形は99_bookshelfフォルダを確認してください。

# 初期設定
package.json
```
  "scripts": {
    "start": "react-scripts start"
  }
```
```
npm run start
```
`react-scripts` をローカルで動かすために `create-react-app` をインストール

```
npm i -g create-react-app
```

これは `react-scripts` をローカルで動かすためにインストールするが、本番サーバーに公開した時には、サーバーにもインストールが必要
ホスティングサーバーが `react-scripts` をインストールしていなければ `npm run build` できない


`npm run eject` で `react-scripts` を Node.js のコマンドに変換する
```
nvm install v16
npm i
npm run eject
```

```
✔ Are you sure you want to eject? This action is permanent. … yes
```

package.json データが書き直される

# 09_bookshelf_frontend に 08_bookshelf_backend を marge する

- 08_bookshelf_backend/package.json の `dependencies` と `devDependencies` を 09_bookshelf_frontend に copy and paste
  - `dotenv` など重複がある場合は、古いものか連動(依存)しているものを優先
    - 連動(依存)
    ```
    "dotenv": "^10.0.0",
    "dotenv-expand": "^5.1.0",
    ```



- `npm` のコマンドを複数同時に実行できる
  `run-p` `run-s` の 2 つのサーバーを同時に立ち上げるコマンド
  ```
  "scripts": {
      "dev2": "run-p dev:*",
      "dev3": "run-p dev:api dev:client",
  }
  ```
  ```
  npm i -D npm-run-all
  ```


- `npm` とそれ以外のコマンドも複数同時に実行できる
  `concurrently` は `npm` とそれ以外のコマンドも同時に実行できる
  ```
  "scripts": {
      "dev": "concurrently \"npm:dev:api\" \"npm:dev:client\" ",
  }
  ```
  ```
  npm i -D concurrently
  ```

- 再度移行したものをインストールしておくこと
  ```
  npm i
  ```

- 08_bookshelf_backend/server copy and paste to 09_bookshelf_frontend

- 08_bookshelf_backend/.env copy and paste to 09_bookshelf_frontend

移行したサーバーが動くか確認
```
npm run dev:api
```

移行が成功していれば、2 つのサーバーを立ち上げる
```
npm run dev
```
成功していれば `[dev:api]` と `[dev:client]` で terminal に表示される



# 09_bookshelf_frontend に 99_bookshelf を marge する
- 09_bookshelf_frontend/src と 09_bookshelf_frontend/public は削除

- 99_bookshelf/src copy and paste to 09_bookshelf_frontend

- 99_bookshelf/public copy and paste to 09_bookshelf_frontend

- 99_bookshelf/.gitignore の中身だけ copy and paste to 09_bookshelf_frontend
  - 重複しているものは不要 
    - `.env` のみ追加

- 99_bookshelf/.eslintrc copy and paste to 09_bookshelf_frontend

```
npm i react-router-dom react-rating react-hook-form
```
```
npm i axios @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

# CORS Error - add cors
- 2 つのサーバーを立ち上げることで、片方のサーバーに違うサーバーからのデータ読み込み、書き込みの許可がなければ CORS エラーになる

```
npm i cors
```

CORS がエラーの時には ブラウザの Network > Response Headers に Access-Control-Allow-Origin 表示がない
- server/app.mjs に追加
```
import cors from 'cors';
app.use(
    cors({
      // origin: 'http://localhost:3000', // ブラウザの Network > Response Headers に Access-Control-Allow-Origin: http://localhost:3000 と表示される
    // origin: '*', // どこのサーバーからでもアクセス可能 // デフォルトは `*` なのでオプションは不要 // ブラウザの Network > Response Headers に Access-Control-Allow-Origin: * と表示される
  })
);
```

# CORS Error - proxy
- add package.json
```
"proxy": "http://localhost:8080",
```
これは `create-react-app` の機能なので、インストールされてなければ、`add cors` で対応すること