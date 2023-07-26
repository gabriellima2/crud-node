const { requestBodyAdapter } = require("../adapters/request-body-adapter");
const { InvalidUrlParamsError } = require("../errors");
const { makeCreateTaskModel, makeGetTasksModel } = require("../factories/models/task-models");
const { handleError } = require("../helpers/handle-error");
const { getUrlParams } = require("../helpers/get-url-params");

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
	async get(req, res) {
		try {
			const params = getUrlParams(req.url);
			if (!params) {
				const tasks = await makeGetTasksModel().execute();
				return res.end(JSON.stringify(tasks));
			}
			if (params.id) {} // Todo: Get By Id
			throw new InvalidUrlParamsError();
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
