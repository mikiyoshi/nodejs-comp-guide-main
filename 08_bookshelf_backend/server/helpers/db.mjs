import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
