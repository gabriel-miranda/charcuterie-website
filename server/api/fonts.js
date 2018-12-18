const express = require('express');
const debugLogger = require('debug-logger');
const axios = require('axios');
const { ServerError } = require('../../modules/error');

const log = debugLogger('app:api:fonts');

const router = express.Router();

router.get('/fonts', async (req, res, next) => {
  try {
    const { data } = await axios.get('https://fonts.googleapis.com/css?family=Montserrat:400,600,700', {
      headers: {
        'User-Agent': req.get('User-Agent'),
      },
    });
    res.type('text/css');
    res.send(data.replace(/}/g, 'font-display: swap; }'));
  } catch (e) {
    log.error(e);
    const error = new ServerError();
    res.status(error.statusCode).send(error);
  }
});

module.exports = router;
