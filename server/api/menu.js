const express = require('express');
const debugLogger = require('debug-logger');
const { ServerError } = require('../../modules/error');
const { key } = require('../../modules/cache');

const log = debugLogger('app:api:menu');

const router = express.Router();

router.get('/menu', async (req, res, next) => {
  const { contentful } = req;
  const type = 'menu';
  const query = {
    content_type: type,
  };
  try {
    const [menu] = await contentful.get(query, key(type, query));
    res.json(menu.items.map(m => m.fields));
  } catch (e) {
    log.error(e);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

module.exports = router;
