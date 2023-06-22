import express from 'express';
// import { body, validationResult } from 'express-validator';
import { body } from 'express-validator';
// import Book from '../models/book.mjs';
// import { registBook } from '../controllers/books.mjs';
import { requestErrorHandler } from '../helpers/helper.mjs';
import {
  getBookById,
  getAllBooks,
  deleteBook,
  registBook,
  updateBook,
} from '../controllers/books.mjs';

const router = express.Router();

// /api/books
// request.http `Send Request`
// http://localhost:9002/api/books
// router.get('/', async function (req, res) {
//   res.send('/api/books');
// });

// request.http `Send Request`
// http://localhost:9002/api/books
// router.get('/', async function (req, res) {
//   const books = await Book.find();
//   res.json(books);
// });

// request.http `Send Request`
// http://localhost:9002/api/books
// router.get('/', async function (req, res) {
//   const books = await Book.find().sort({ updatedAt: -1 });
//   res.json(books);
// });
router.get('/', requestErrorHandler(getAllBooks));

// request.http `Send Request`
// http://localhost:9002/api/books/635671e3fc8af6c6c5328c35
// 下の外部データ読み込みに差し替え
// router.get('/:id', async function (req, res) {
//   const _id = req.params.id;
//   const book = await Book.findById(_id); // mongooseの場合 Book.findById({ _id }) // mongooseの場合 Book.findOne({ _id: _id }) // mongoDBの場合 Book.findOne({ _id: new ObjectId(_id) })
//   res.json(book);
// });
router.get('/:id', requestErrorHandler(getBookById));

// request.http `Send Request`
// POST http://localhost:9002/api/books
// router.post('/', async function (req, res) {
//   // const body = req.body;
//   // console.log(body);

//   const books = new Book(req.body);
//   const newBook = await books.save();
//   res.json(newBook);
// });

// request.http `Send Request` for validation error test
// POST http://localhost:9002/api/books
// router.post(
//   '/',
//   body('title').notEmpty().withMessage('エラーメッセージ'),
//   async function (req, res) {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       const errs = errors.array();
//       return res.status(400).json(errs);
//     }

//     const books = new Book(req.body);
//     const newBook = await books.save();
//     res.json(newBook);
//   }
// );

router.post(
  '/',
  body('title').notEmpty(),
  body('description').notEmpty(),
  body('comment').notEmpty(),
  body('rating').notEmpty().isInt({ min: 1, max: 5 }),
  // 下のデータは try and catch が追加されたもの
  // registBook
  requestErrorHandler(registBook)
);

// request.http `Send Request`
// http://localhost:8080/api/books/635671e3fc8af6c6c5328c35
// 下をさらにまとめて updateBook を読み込みデータに変換できる
// router.patch('/:id', async function (req, res) {
//   // const _id = req.params.id;
//   // const book = await Book.findById(_id); // mongooseの場合 Book.findById(_id) // mongooseの場合 Book.findOne({ _id: _id }) // mongoDBの場合 Book.findOne({ _id: new ObjectId(_id) })
//   // if (req.body.title !== undefined) {
//   //   book.title = req.body.title;
//   // }
//   // res.json(book);

//   const { title, description, comment, rating } = req.body;
//   const _id = req.params.id;
//   const book = await Book.findById(_id); // mongooseの場合 Book.findById(_id) // mongooseの場合 Book.findOne({ _id: _id }) // mongoDBの場合 Book.findOne({ _id: new ObjectId(_id) })
//   if (title !== undefined) book.title = title;
//   if (description !== undefined) book.description = description;
//   if (comment !== undefined) book.comment = comment;
//   if (rating !== undefined) book.rating = rating;
//   await book.save();
//   res.json(book);
// });
router.patch(
  '/:id',
  body('title').optional().notEmpty(), // .optional() は任意のデータとなるが、.notEmpty() データがある場合はエラーになる
  body('description').optional().notEmpty(),
  body('comment').optional().notEmpty(),
  body('rating').optional().notEmpty().isInt({ min: 1, max: 5 }),
  // 下のデータは try and catch が追加されたもの
  //   updateBook
  requestErrorHandler(updateBook)
);

// request.http `Send Request`
// DELETE http://localhost:9002/api/books/635671e3fc8af6c6c5328c35
// 下の外部データ読み込みに差し替え
// router.delete('/:id', async function (req, res) {
//   const _id = req.params.id;
//   await Book.deleteOne({ _id });
//   res.json({ msg: 'Delete succeeded' });
// });
router.delete('/:id', requestErrorHandler(deleteBook));

export default router;
