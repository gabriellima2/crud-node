const { BadRequestError } = require("./bad-request-error");

class InvalidUrlParamsError extends BadRequestError {
	constructor() {
		super("An error occurred, url parameters are invalid");
		this.name = "InvalidUrlParamsError";
	}
}

module.exports = {
	InvalidUrlParamsError,
};
