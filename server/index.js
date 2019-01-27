require('dotenv').config();
const path = require('path');
const next = require('next');
const express = require('express');
const compression = require('compression');
const sslRedirect = require('heroku-ssl-redirect');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const { api } = require('./api');
const { contentfulMiddleware } = require('./middlewares/contentful');
const { slashesMiddleware } = require('./middlewares/slashes');
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

  server.use(favicon(path.join(__dirname, '../static', 'favicon.ico')));

  server.use(sslRedirect(['production'], 301));

  server.use(compression());

  server.use(bodyParser.json());

  server.use(slashesMiddleware(false));

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
