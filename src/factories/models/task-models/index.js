const { makeCreateTaskModel } = require("./make-create-task-model");
const { makeGetTasksModel } = require("./make-get-tasks-model");
const { makeGetTaskModel } = require("./make-get-task-model");

module.exports = {
	makeCreateTaskModel,
	makeGetTasksModel,
	makeGetTaskModel,
};
