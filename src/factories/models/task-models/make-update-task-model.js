const { UpdateTaskModel } = require("../../../models");
const { makeTaskRepository } = require("../../repositories");
const { taskValidationComposition } = require("../../../compositions/task-validation-composition");

const makeUpdateTaskModel = () => {
	const repository = makeTaskRepository();
	return new UpdateTaskModel(repository, taskValidationComposition);
}

module.exports = {
	makeUpdateTaskModel,
};
