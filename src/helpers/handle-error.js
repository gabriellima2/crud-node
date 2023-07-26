const { HTTP_STATUS_CODE } = require("../constants/http-status-code");

function handleError(err) {
	const message = err.message ?? "An unexpected error has occurred";
	const statusCode = err.statusCode ?? HTTP_STATUS_CODE["Internal-Server-Error"];
	return { message, statusCode };
}

module.exports = {
	handleError,
};
