import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

export default async function handler(request, response) {
  try {
    const mongoClient = await new MongoClient(uri, options).connect();
    console.log('Just Connected!');
    const db = mongoClient.db('bookshelf');
    const collection = db.collection('books');
    const results = await collection
      .find({})
      .project({
        title: '',
        description: '',
      })
      .limit(4)
      .toArray();

    response.status(200).json(results);
  } catch (e) {
    response.status(500).json(e);
  }
}
