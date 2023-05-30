import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

export default async function handler(request, response) {
  try {
    const mongoClient = await new MongoClient(uri, options).connect();
    console.log('Just Connected! /list/bookshelf');
    const db = mongoClient.db('bookshelf');
    const collection = db.collection('books');
    const results = await collection
      .find({})
      .project({
        title: 0,
        description: 0,
        books_id: 0,
      })
      .limit(4)
      .toArray();

    response.status(200).json(results);
  } catch (e) {
    response.status(500).json(e);
  }
}
