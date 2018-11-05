const HttpStatus = require('http-status-codes');

class ApiError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message || HttpStatus.getStatusTexts(statusCode);
  }
}

class ServerError extends ApiError {
  constructor() {
    super(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

class Unauthorized extends ApiError {
  constructor() {
    super(HttpStatus.UNAUTHORIZED);
  }
}

module.exports = {
  ServerError,
  Unauthorized,
};
