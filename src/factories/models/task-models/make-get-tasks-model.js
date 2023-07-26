const { GetTasksModel } = require("../../../models");
const { makeTaskRepository } = require("../../repositories");

const makeGetTasksModel = () => {
	const repository = makeTaskRepository();
	return new GetTasksModel(repository);
}

module.exports = {
	makeGetTasksModel,
};
