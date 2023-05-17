import env from 'dotenv';
env.config();

// replace
// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb';

// delete
// const uri = "mongodb+srv://mikiyoshikokura:<password>@cluster0.47ho0pj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// replace `uri`
// const client = new MongoClient(uri, {
const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// replace
// async function run() {
async function getCollection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    // replace
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db('bookshelf');
    return db.collection('books');

    // replace
    // } finally {
  } catch {
    // Ensures that the client will close when you finish/error
    await client.close(); // これがないと terminal で終了しない
  }
}

getAllBooks();
async function getAllBooks() {
  const col = await getCollection();
  const cursor = col.find();
  const result = await cursor.toArray();
  console.log(result);

  await client.close(); // これがないと terminal で終了しない
}

// delete
// run().catch(console.dir);

// terminal
// node '/Users/mikiyoshikokura/Desktop/Sites/light-house-lab/virtualbox/w15/nodejs-comp-guide-main/07_mongodb/010_connect_find/start/Example.mjs'
