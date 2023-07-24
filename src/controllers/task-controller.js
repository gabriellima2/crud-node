const { requestBodyAdapter } = require("../adapters/request-body-adapter");
const { makeCreateTaskModel } = require("../factories/models/task-models");

class TaskController {
	async create(req, res) {
		try {
			const task = JSON.parse(await requestBodyAdapter(req));
			const createdTask = await makeCreateTaskModel().execute(task);
			res.end(JSON.stringify(createdTask));
		} catch (err) {
			console.error(err.message);
		}
	}
}

module.exports = {
	TaskController,
};
