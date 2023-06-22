import path from 'path';
import express from 'express';
import apiRoutes from './api-routes/index.mjs';
import env from 'dotenv';
import './helpers/db.mjs';

env.config();

const app = express();
const port = process.env.PORT || 9002;

app.use(express.static('public'));
app.use(express.json());

// CORS がエラーの時には ブラウザの Network > Response Headers に Access-Control-Allow-Origin 表示がない
import cors from 'cors';
app.use(
  cors({
    // origin: 'http://localhost:3000', // ブラウザの Network > Response Headers に Access-Control-Allow-Origin: http://localhost:3000 と表示される
    origin: '*', // どこのサーバーからでもアクセス可能 // デフォルトは `*` なのでオプションは不要 // ブラウザの Network > Response Headers に Access-Control-Allow-Origin: * と表示される
  })
);

app.get('/', function (req, res) {
  res.send('Hello'); // HTML 'Hello'
});

// app.get('/', function (req, res) {
//   res.send(`
//     <form action="/result" method="POST">
//       <input type="text" name="title">
//       <input type="text" name="description">
//       <input type="submit">
//     </form>
//     <script>
//       const formEl = document.querySelector('form');
//       formEl.onsubmit = function(event) {
//         event.preventDefault(); // page reload stop
//         const title = formEl[0].value;
//         const description = formEl[1].value;
//         fetch('/result', {
//           method: 'POST',
//           headers: {
//             'content-type': 'application/json'
//           },
//           body: JSON.stringify({
//             title: title,
//             description: description
//           })
//         }).then(async function(res){
//           const data = await res.json()
//           console.log(data);
//         })
//       }
//     </script>
//     `);
// });

// API
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  const pathIndex = path.resolve('build', 'index.html');
  res.sendFile(pathIndex);
});

// 上の /api につながれば、この middleware の条件は適応されない
// 例えば
// request.http `Send Request`
// DELETE http://localhost:8080/a
app.use(function (req, res) {
  res.status(404).json({ msg: 'Page Not Found' });
});

// これは helpers/helper.mjs の requestErrorHandler で err, req, res, next が発生した時に適応される
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err); // これは通常のエラーへ
  }
  res.status(500).json({ msg: '不正なエラーが発生しました。' }); // これは特殊なエラー // 例えば try and catch は _id が存在しない _id ではなく、指定の文字数に達していない場合にエラーではなく、クラッシュしてしまうのを避ける
});

app.listen(port, () => {
  console.log(`Server Start: http://localhost:${port}`);
});
