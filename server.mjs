import { createServer } from 'http';

const startTime = new Date();

createServer((req, res) => {
  res.write(`Hello World! ${startTime} ${new Date()} ${process.env.PORT}}`);
  res.end();
}).listen(process.env.PORT);
