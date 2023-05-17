import env from 'dotenv';
env.config();

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function getCollection() {
  try {
    await client.connect();
    const db = client.db('bookshelf');
    return db.collection('books');
  } catch {
    await client.close();
  }
}
// クエリ
// https://www.mongodb.com/docs/manual/reference/operator/query/
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

getAllBooks();
async function getAllBooks() {
  const col = await getCollection();
  debugger;
  // データ全て取得
  // let cursor = col.find();

  // 絞り込み検索 // 結果は Array 内の Object
  // let cursor = col.find({ title: 'バックエンド開発' });
  // const result = await cursor.toArray();

  // 絞り込み検索 // 結果は Object 1レコードのみ
  // const result = await col.findOne({ title: 'バックエンド開発' });

  // 絞り込み検索 // 条件が 1 個
  // let cursor = col.find({ rating: 5 }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // & 条件
  // let cursor = col.find({ rating: 5, title: 'バックエンド開発' }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // or 条件
  // let cursor = col.find({
  //   $or: [{ rating: 3 }, { title: 'バックエンド開発' }],
  // }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // 'ごんぎつね4' or 'バックエンド開発'
  // let cursor = col.find({
  //   title: { $in: ['ごんぎつね4', 'バックエンド開発'] },
  // }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // 5 > result > 2
  // let cursor = col.find({
  //   rating: { $gt: 2, $lt: 5 },
  // }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // 4 >= result >= 2
  // let cursor = col.find({
  //   rating: { $gte: 2, $lte: 4 },
  // }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // 条件が 2 個 // 4 >= result >= 2 // sort rating: 1 昇順(1,2,3) rating: -1 降順(3,2,1)
  //   let cursor = col
  //   .find({
  //     rating: { $gte: 2, $lte: 4 },
  //   })
  //   .sort({ rating: -1 }); // rating: 5 を rating: "5" にすると、数字か文字で結果が変わるので注意
  // const result = await cursor.toArray();

  // 絞り込み検索 // _id のみ特殊条件なので、_id　データ `6334634881d8ae4ba04fbc8e` だけでは検索できない // new ObjectId('6334634881d8ae4ba04fbc8e') で検索
  // let cursor = col.find({ _id: '6334634881d8ae4ba04fbc8e' }); // これは空の Array [] が返却される
  // let cursor = col.find({ _id: new ObjectId('6334634881d8ae4ba04fbc8e') }); // `ObjectId` の import が必要 // import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
  // const result = await cursor.toArray();

  // 絞り込み検索 // 曖昧な検索 // 正規表現
  let cursor = col.find({ title: { $regex: /^潮/ } }); // ^潮 先頭が `潮` から始まる検索
  const result = await cursor.toArray();

  console.log(result);

  await client.close();
}

// terminal
// node '/Users/mikiyoshikokura/Desktop/Sites/light-house-lab/virtualbox/w15/nodejs-comp-guide-main/07_mongodb/020_find/start/Example.mjs'
