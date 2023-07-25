const { prisma } = require("../lib/prisma-client");

class TaskRepository {
	async create(data) {
		const createdTask = await prisma.task.create({ data });
		return Object.freeze(createdTask);
	};
}

module.exports = {
	TaskRepository,
};
