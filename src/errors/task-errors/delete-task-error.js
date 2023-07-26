const { BaseError } = require("../base-error");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

class DeleteTaskError extends BaseError {
	constructor() {
		super("An error occurred while deleting the task", HTTP_STATUS_CODE["Internal-Server-Error"]);
		this.name = "DeleteTaskError";
	}
}

module.exports = {
	DeleteTaskError,
};
