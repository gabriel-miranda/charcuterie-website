const querystring = require('querystring');

function key(k, q) {
  return `${k}-${querystring.stringify(q)}`;
}

module.exports = {
  key,
};
