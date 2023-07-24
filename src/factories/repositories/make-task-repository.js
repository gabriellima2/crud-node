const { TaskRepository } = require("../../repositories/task-repository");

const makeTaskRepository = () => new TaskRepository();

module.exports = {
	makeTaskRepository,
};
