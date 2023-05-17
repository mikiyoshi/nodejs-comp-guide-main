import { connect, Schema, model, Mixed } from 'mongoose';
import env from 'dotenv';
env.config();

/**
String: 文字列
Number: 数値
Date: 日付
Buffer: バイナリデータ
Boolean: 真偽
Mixed: なんでもOK
ObjectId: Mongo固有のID
Array: 配列
Decimal128: 浮動小数点
Map: マップ
Schema: 他のスキーマ
 */
connect(process.env.MONGO_URI);

// オプションなし
// const catSchema = new Schema({
//   name: String,
//   size: Number,
//   bool: Boolean,
//   dt: Date,
//   arry: [],
//   anything: Mixed,
// });

// オプション
const catSchema = new Schema({
  name: { type: String, required: true },
  size: { type: Number, required: true, enum: [0, 1] }, // データを限定
  bool: { type: Boolean, default: false, alias: 'b' }, // doc.bool を doc.b に変換
  dt: {
    type: Date,
    set: function (newVal) {
      return new Date(newVal);
    },
    get: function (val) {
      return val instanceof Date ? val : new Date(val);
    },
  },
  arry: [String],
  anything: Mixed,
});

// setter はデータ (newVal) を加工 // getter はデータ (val) を取得
// set: function (newVal) {
//   return new Date(newVal);
// },
// get: function (val) {
//   return val instanceof Date ? val : new Date(val);
// },

const Cat = model('Cat', catSchema);

const kitty = new Cat();
kitty.name = 'Zildjian';
kitty.size = 1; // Error 'ichi' // '10' or 10 is OK
kitty.arry = [0, 1];
kitty.dt = '2017/12/21'; // set で加工される 2017-12-21T05:00:00.000Z
// kitty.save().then((doc) => console.log(doc.dt)); // 2017-12-21T05:00:00.000Z
// kitty.save().then((doc) => console.log(doc.dt instanceof Date)); // true

kitty.save().then((doc) => console.log(doc.b)); // 2017-12-21T05:00:00.000Z
