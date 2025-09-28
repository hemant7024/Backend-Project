class APIerror extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    status,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
    this.message = message;
    this.success = false;
    this.stack = stack;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { APIerror };
