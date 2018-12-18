const HttpStatus = require('http-status-codes');

class ApiError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message || HttpStatus.getStatusText(statusCode);
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

class BadRequest extends ApiError {
  constructor() {
    super(HttpStatus.BAD_REQUEST);
  }
}


module.exports = {
  ServerError,
  Unauthorized,
  BadRequest,
};
