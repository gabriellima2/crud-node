const { DeleteTaskModel } = require("../../../models");
const { taskIdValidation } = require("../../../validations");
const { makeTaskRepository } = require("../../repositories");

const makeDeleteTaskModel = () => {
	const repository = makeTaskRepository();
	return new DeleteTaskModel(repository, taskIdValidation);
}

module.exports = {
	makeDeleteTaskModel,
};
