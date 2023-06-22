// 重要!!!!!!!!!!!!!!!!!!!!裏技
// これは controllers/books.mjs で try and catch を全ての 条件に適応させる裏技
// try and catch は _id が存在しない _id ではなく、指定の文字数に達していない場合にエラーではなく、クラッシュしてしまうのを避ける

// controller は getBookById, getAllBooks, deleteBook, registBook, updateBook のこと
// 変更前 api-routes/boos.mjs
// router.get('/', getAllBooks);
// 変更後 api-routes/boos.mjs
// router.get('/', requestErrorHandler(getAllBooks));
// 変更後の内容 requestErrorHandler(getAllBooks) が 下記に変更されたイメージ
// router.get('/', async function (req, res, next) {
//   try {
//     return await controller(req, res); // controller は getAllBooks の事
//   } catch (err) {
//     next(err);
//   }
// });

function requestErrorHandler(controller) {
  return async function (req, res, next) {
    try {
      return await controller(req, res);
    } catch (err) {
      next(err);
    }
  };
}

export { requestErrorHandler };
