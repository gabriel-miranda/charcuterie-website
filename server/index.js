require('dotenv').config();
const next = require('next');
const express = require('express');
const compression = require('compression');
const { api } = require('./api');
const { contentfulMiddleware } = require('./middlewares/contentful');
const ContentfulWrapper = require('../modules/contentful');
const {
  PORT,
  SPACE,
  ACCESS_TOKEN,
  CACHE_MAX_AGE,
  PREVIEW,
} = require('../config/server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const contentful = new ContentfulWrapper({
  space: SPACE,
  accessToken: ACCESS_TOKEN,
  cacheMaxAge: CACHE_MAX_AGE,
  preview: PREVIEW,
});

(async () => {
  await app.prepare();
  const server = express();

  server.use(compression());

  server.use(contentfulMiddleware({ contentful }));

  server.use('/api', api);

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) {
      console.log('Error: ', err);
      throw err;
    }
    console.log(`> Ready on http://localhost:${PORT}`);
  });
})();
