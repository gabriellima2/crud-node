const { BaseError } = require("./base-error");
const { HTTP_STATUS_CODE } = require("../constants/http-status-code");

class BadRequestError extends BaseError {
	constructor(message) {
		super(message, HTTP_STATUS_CODE["Bad-Request"]);
		this.name = "BadRequestError";
	}
}

module.exports = {
	BadRequestError,
};
