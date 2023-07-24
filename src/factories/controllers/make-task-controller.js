const { TaskController } = require("../../controllers/task-controller");

const makeTaskController = () => new TaskController();

module.exports = {
	makeTaskController,
};
