const { GetTaskModel } = require("../../../models");
const { taskIdValidation } = require("../../../validations");
const { makeTaskRepository } = require("../../repositories");

const makeGetTaskModel = () => {
	const repository = makeTaskRepository();
	return new GetTaskModel(repository, taskIdValidation);
}

module.exports = {
	makeGetTaskModel,
};
