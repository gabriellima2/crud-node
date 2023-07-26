const { BaseError } = require("../base-error");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

class CreateTaskError extends BaseError {
	constructor() {
		super("An error occurred while creating the task", HTTP_STATUS_CODE["Internal-Server-Error"]);
		this.name = "CreateTaskError";
	}
}

module.exports = {
	CreateTaskError,
};
