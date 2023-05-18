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