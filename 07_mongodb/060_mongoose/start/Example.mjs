// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/test');
import env from 'dotenv';
env.config();

mongoose.connect(process.env.MONGO_URI);

// 新しく `cats` のモデル(フォルダー)が追加される // mongoose.model('Cat' から自動的に `cats` と複数形のモデル(フォルダー)が追加される
// const Cat = mongoose.model('Cat', { name: String });

// 新しく `books` のモデル(フォルダー)が追加される // mongoose.model('Book' から自動的に `books` と複数形のモデル(フォルダー)が追加される
const Cat = mongoose.model('Book', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
const kitty = new Cat();
kitty.name = 'Zildjian';

kitty.save().then(() => console.log('meow'));
// .save() insertOne() と同じ
