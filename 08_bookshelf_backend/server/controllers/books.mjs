import { validationResult } from 'express-validator';
import Book from '../models/book.mjs';

async function getAllBooks(req, res) {
  const books = await Book.find().sort({ updatedAt: -1 });
  res.json(books);
}

async function getBookById(req, res) {
  const _id = req.params.id;
  const book = await Book.findById(_id);

  if (book === null) return res.status(404).json({ msg: 'Page Not Found' }); // 存在しない _id のエラー

  res.json(book);
}

async function registBook(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const book = new Book(req.body);
  const newBook = await book.save();

  res.status(201).json(newBook);
}

async function updateBook(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const { title, description, comment, rating } = req.body;
  const _id = req.params.id;
  const book = await Book.findById(_id);

  if (book === null) return res.status(404).json({ msg: 'Page Not Found' }); // 存在しない _id のエラー

  if (title !== undefined) book.title = title;
  if (description !== undefined) book.description = description;
  if (comment !== undefined) book.comment = comment;
  if (rating !== undefined) book.rating = rating;
  await book.save();
  res.json(book);
}

async function deleteBook(req, res) {
  // try and catch は _id が存在しない _id ではなく、指定の文字数に達していない場合にエラーではなく、クラッシュしてしまうのを避ける
  // try {
  //   const _id = req.params.id;
  //   // const result = await Book.deleteOne({ _id });
  //   // console.log(result); // ここで存在しない _id の時に何が返却されるのか確認 // terminal に { acknowledged: true, deletedCount: 0 } が返却されるので、deletedCount で条件文を作成

  //   const { deletedCount } = await Book.deleteOne({ _id });

  //   if (deletedCount === 0)
  //     return res.status(404).json({ msg: 'Target Book Not Found' });

  //   res.json({ msg: 'Delete succeeded.' });
  // } catch (err) {
  //   // console.log(err); // これがあるとアプリがクラッシュする // terminal にエラーが表示されてしまう
  //   res.status(500).json({ msg: '不正なエラーが発生しました' });
  // }

  // try and catch を helpers/helper.mjs に移動したので、再度 try の中身だけに戻す
  const _id = req.params.id;
  // const result = await Book.deleteOne({ _id });
  // console.log(result); // ここで存在しない _id の時に何が返却されるのか確認 // terminal に { acknowledged: true, deletedCount: 0 } が返却されるので、deletedCount で条件文を作成

  const { deletedCount } = await Book.deleteOne({ _id });

  if (deletedCount === 0)
    return res.status(404).json({ msg: 'Target Book Not Found' });

  res.json({ msg: 'Delete succeeded.' });
}

export { getAllBooks, getBookById, registBook, updateBook, deleteBook };
