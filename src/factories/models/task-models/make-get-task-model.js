const { GetTaskModel } = require("../../../models/task-models");
const { getByIdValidation } = require("../../../validations/task-validations");
const { makeTaskRepository } = require("../../repositories");

const makeGetTaskModel = () => {
	const repository = makeTaskRepository();
	return new GetTaskModel(repository, getByIdValidation);
}

module.exports = {
	makeGetTaskModel,
};
