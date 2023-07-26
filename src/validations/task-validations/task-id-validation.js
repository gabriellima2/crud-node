const { validateFields } = require("../../helpers/validate-fields");
const {  GenericIdConstraint } = require("./generic-constraints");

function taskIdValidation(params) {
	return validateFields(params, GenericIdConstraint);
}

module.exports = {
	taskIdValidation,
};
