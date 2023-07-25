const { BadRequestError } = require("../bad-request-error");

class CreateTaskError extends BadRequestError {
	constructor() {
		super("An error occurred while creating the task");
		this.name = "CreateTaskError";
	}
}

module.exports = {
	CreateTaskError,
};
