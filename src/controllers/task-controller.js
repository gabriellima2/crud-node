const {
	makeCreateTaskModel,
	makeGetTasksModel,
	makeGetTaskModel,
	makeDeleteTaskModel,
	makeUpdateTaskModel
} = require("../factories/models");

const { requestBodyAdapter } = require("../adapters/request-body-adapter");
const { InvalidUrlParamsError } = require("../errors");

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
			if (params.id) {
				const task = await makeGetTaskModel().execute(Number(params.id));
				return res.end(JSON.stringify(task));
			}
			throw new InvalidUrlParamsError();
		} catch (err) {
			const { message, statusCode } = handleError(err);
			res.statusCode = statusCode;
			res.end(JSON.stringify({ message }));
		}
	}

	async update(req, res) {
		try {
			const params = getUrlParams(req.url);
			if (params && !params.id) throw new InvalidUrlParamsError();
			const task = JSON.parse(await requestBodyAdapter(req));
			const updatedTask = await makeUpdateTaskModel().execute({ id: Number(params.id), task });
			res.end(JSON.stringify(updatedTask));
		} catch (err) {
			const { message, statusCode } = handleError(err);
			res.statusCode = statusCode;
			res.end(JSON.stringify({ message }));
		}
	}

	async delete(req, res) {
		try {
			const params = getUrlParams(req.url);
			if (params && !params.id) throw new InvalidUrlParamsError();
			const deletedTask = await makeDeleteTaskModel().execute(Number(params.id));
			res.end(JSON.stringify(deletedTask));
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
