const { DeleteTaskModel } = require("../../../models/task-models");
const { taskIdValidation } = require("../../../validations/task-validations");
const { makeTaskRepository } = require("../../repositories");

const makeDeleteTaskModel = () => {
	const repository = makeTaskRepository();
	return new DeleteTaskModel(repository, taskIdValidation);
}

module.exports = {
	makeDeleteTaskModel,
};
