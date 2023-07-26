const { requestBodyAdapter } = require("../adapters/request-body-adapter");
const { makeCreateTaskModel } = require("../factories/models/task-models");
const { handleError } = require("../helpers/handle-error");

class TaskController {
	async create(req, res) {
		try {
			const task = JSON.parse(await requestBodyAdapter(req));
			const createdTask = await makeCreateTaskModel().execute(task);
			res.end(JSON.stringify(createdTask));
		} catch (err) {
			const { message, statusCode } = handleError(err);
			res.statusCode = statusCode;
			res.end(JSON.stringify({ message }));
		}
	}
}

module.exports = {
	TaskController,
};
