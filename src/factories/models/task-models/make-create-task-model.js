const { taskValidation } = require("../../../validations/task-validations");
const { CreateTaskModel } = require("../../../models/task-models");
const { makeTaskRepository } = require("../../repositories");

const makeCreateTaskModel = () => {
	const repository = makeTaskRepository();
	return new CreateTaskModel(repository, taskValidation);
};

module.exports = {
	makeCreateTaskModel,
};
