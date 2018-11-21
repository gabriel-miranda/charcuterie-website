const express = require('express');
const debugLogger = require('debug-logger');
const { ServerError } = require('../../modules/error');
const { key } = require('../../modules/cache');

const log = debugLogger('app:api:products');

const router = express.Router();

router.get('/products', async (req, res) => {
  const { contentful, query: { count } } = req;
  const type = 'product';
  const query = {
    content_type: type,
    limit: count,
  };
  try {
    const products = await contentful.get(query, key(type, query));
    res.json(products);
  } catch (e) {
    log.error(e);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

module.exports = router;
