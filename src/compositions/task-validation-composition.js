const { taskIdValidation, taskValidation } = require("../validations");

function taskValidationComposition({ id, task }) {
	const taskIdErrorMessage = taskIdValidation(id);
	if (taskIdErrorMessage) return taskIdErrorMessage;
	const taskErrorMessage = taskValidation(task);
	if (taskErrorMessage) return taskErrorMessage;
}

module.exports = {
	taskValidationComposition,
};
