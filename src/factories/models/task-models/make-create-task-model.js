const { CreateTaskModel } = require("../../../models");
const { taskValidation } = require("../../../validations");
const { makeTaskRepository } = require("../../repositories");

const makeCreateTaskModel = () => {
	const repository = makeTaskRepository();
	return new CreateTaskModel(repository, taskValidation);
};

module.exports = {
	makeCreateTaskModel,
};
