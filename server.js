import express from 'express';

const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';
const port = 4000;

const webServer = express();

class Server {
  start() {
    webServer.use(express.static('build'));
    webServer.listen(port, host, () => {
      console.log(`Listening at ${host}:${port}`);
    });
  }
}

new Server().start();
