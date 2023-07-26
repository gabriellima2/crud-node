const { CreateTaskModel } = require("./create-task-model");
const { GetTasksModel } = require("./get-tasks-model");
const { GetTaskModel } = require("./get-task-model");
const { DeleteTaskModel } = require("./delete-task-model");
const { UpdateTaskModel } = require("./update-task-model");

module.exports = {
	CreateTaskModel,
	GetTasksModel,
	GetTaskModel,
	DeleteTaskModel,
	UpdateTaskModel,
};
