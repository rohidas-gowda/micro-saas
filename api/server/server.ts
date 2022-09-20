
import * as express from 'express';
import * as mongoose from 'mongoose';

import api from './api';
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL_TEST);

const server = express();

server.use(express.json());

api(server);

server.get('*', (_, res) => {
  res.sendStatus(403);
});

server.listen(process.env.PORT_API, () => {
  console.log(`> Ready on ${process.env.URL_API}`);
});
