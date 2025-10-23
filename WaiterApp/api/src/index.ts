import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';
import http from 'node:http';
import { Server } from 'socket.io';

const port = 3001;

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('⚡ Successfully connected to MongoDB!'))
  .then(() => {


    app.use(cors());

    app.use(
      '/uploads/',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    app.use(express.json());
    app.use(router);

    server.listen(port, '0.0.0.0', () =>
      console.log(`⚡ Server is running on http://0.0.0.0:${port}`)
    );
  })
  .catch(() => console.log('❌ MongoDB connection failed.'));
