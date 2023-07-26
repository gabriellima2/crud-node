const { GetTaskModel } = require("../../../models/task-models");
const { taskIdValidation } = require("../../../validations/task-validations");
const { makeTaskRepository } = require("../../repositories");

const makeGetTaskModel = () => {
	const repository = makeTaskRepository();
	return new GetTaskModel(repository, taskIdValidation);
}

module.exports = {
	makeGetTaskModel,
};
