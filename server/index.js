const express = require('express');
const next = require('next');
const compression = require('compression');
const { PORT } = require('../config/server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(compression());

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) {
      console.log('Error: ', err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${PORT}`);
  });
})();
