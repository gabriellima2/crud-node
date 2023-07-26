const { validateFields } = require("../../helpers/validate-fields");
const {  GenericIdConstraint } = require("./generic-constraints");

function getByIdValidation(params) {
	return validateFields(params, GenericIdConstraint);
}

module.exports = {
	getByIdValidation,
};
