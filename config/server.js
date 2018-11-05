const CLIENT = require('./index');

module.exports = {
  ...CLIENT,
  SPACE: process.env.SPACE || '',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || '',
  PREVIEW: process.env.PREVIEW === 'true',
  CACHE_MAX_AGE: parseInt(process.env.CACHE_MAX_AGE, 10) || 1000 * 60 * 60 * 6, // 6 hours
};
