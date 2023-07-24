const { z } = require("zod");

const { validateFields } = require("../../helpers/validate-fields");
const { GenericTitleConstraint, GenericDescriptionConstraint } = require("./generic-constraints");

const taskSchema = z.object({
	title: GenericTitleConstraint,
	description: GenericDescriptionConstraint,
});

function createTaskValidation(params) {
	return validateFields(params, taskSchema);
}

module.exports = {
	createTaskValidation,
};
