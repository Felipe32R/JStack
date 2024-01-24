import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('⚡ Successfully connected to MongoDB!'))
  .then(() => {
    const app = express();

    app.listen(3001, () =>
      console.log(`⚡ Server is running on http://localhost:${port}`)
    );
  })
  .catch(() => console.log('❌ MongoDB connection failed.'));
const port = 3001;
