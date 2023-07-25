const { requestBodyAdapter } = require("../adapters/request-body-adapter");
const { makeCreateTaskModel } = require("../factories/models/task-models");
const { HTTP_STATUS_CODE } = require("../constants/http-status-code");

class TaskController {
	async create(req, res) {
		try {
			const task = JSON.parse(await requestBodyAdapter(req));
			const createdTask = await makeCreateTaskModel().execute(task);
			res.end(JSON.stringify(createdTask));
		} catch (err) {
			const message = err.message ?? "An unexpected error has occurred";
			res.statusCode = err.statusCode ?? HTTP_STATUS_CODE["Internal-Server-Error"];
			res.end(JSON.stringify({ message }));
		}
	}
}

module.exports = {
	TaskController,
};
