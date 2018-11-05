const express = require('express');
const debugLogger = require('debug-logger');
const { ServerError, Unauthorized } = require('../../modules/error');

const log = debugLogger('app:api:cache');
const router = express.Router();

router.post('/clear-cache', validateRequest, async (req, res) => {
  const response = { status: 200, message: 'Cache cleared' };
  try {
    req.contentful.clearAllCache();
    log.info(response.message);
    res.status(response.status).send(response);
  } catch (e) {
    log.error(e);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

function validateRequest(req, res, next) {
  if (!req.get('X-Secret-Cache')) {
    const error = new Unauthorized();
    return res.status(error.statusCode).send(error);
  }
  return next();
}

module.exports = router;
