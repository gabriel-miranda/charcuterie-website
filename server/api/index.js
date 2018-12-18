const express = require('express');
const menu = require('./menu');
const cache = require('./cache');
const products = require('./products');
const email = require('./email');
const fonts = require('./fonts');

const api = express.Router();

api.use(
  menu,
  cache,
  products,
  email,
  fonts,
);

module.exports = {
  api,
};
