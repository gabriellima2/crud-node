const { BadRequestError } = require("./bad-request-error");

class InvalidDataFormatError extends BadRequestError {
	constructor(validationErrorMessage) {
		const cause = validationErrorMessage ?? "Invalid data format";
		super(`${cause}, check fields and try again`);
		this.name = "InvalidDataFormatError";
	}
}

module.exports = {
	InvalidDataFormatError,
};
