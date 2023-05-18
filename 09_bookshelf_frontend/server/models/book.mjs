import { Schema, model } from 'mongoose';

const bookSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
      get: function (val) {
        return Math.round(val); // 少数を整数に変換
      },
      set: function (val) {
        return Math.round(val);
      },
    },
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = model('Book', bookSchema);
export default Book;
