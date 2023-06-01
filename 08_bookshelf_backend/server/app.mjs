import path from 'path';
import express from 'express';
import env from 'dotenv';
env.config();

import apiRoutes from './api-routes/index.mjs';
import testRoutes from './api-routes/test.mjs';
import './helpers/db.mjs';

const app = express();
const port = process.env.PORT || 8080;

// app.use(express.static('public'));
app.use(express.static('build'));
app.use(express.json());

app.use('/test', testRoutes);

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
