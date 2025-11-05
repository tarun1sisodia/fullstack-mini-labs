class ApiResponse {
  constructor(statusCode, message = "Success", data = null, success = true) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;
    this.data = data;
  }
}

export default ApiResponse;
