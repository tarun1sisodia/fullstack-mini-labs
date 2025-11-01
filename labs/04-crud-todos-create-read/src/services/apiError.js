class ApiError extends Error {
  constructor(statusCode, message = "Something is Wrong", errors = [], stack) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    // this.stack = stack;
    this.errors = errors;
    if (stack) {
      Error.captureStackTrace(stack);
    } else {
      this.stack = stack;
    }
  }
}
