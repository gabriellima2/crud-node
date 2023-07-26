const { BaseError } = require("../base-error");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

class UpdateTaskError extends BaseError {
	constructor() {
		super("An error occurred while updating the task", HTTP_STATUS_CODE["Internal-Server-Error"]);
		this.name = "UpdateTaskError";
	}
}

module.exports = {
	UpdateTaskError,
};
