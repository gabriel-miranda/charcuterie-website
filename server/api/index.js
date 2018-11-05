const express = require('express');
const menu = require('./menu');
const cache = require('./cache');
const products = require('./products');

const api = express.Router();

api.use(
  menu,
  cache,
  products
);

module.exports = {
  api,
};
