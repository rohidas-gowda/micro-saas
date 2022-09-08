import * as express from 'express';

const server = express();

server.use(express.json());

server.listen(process.env.PORT_API, () => {
  console.log(`> Ready on ${process.env.URL_API}`);
});