const { prisma } = require("../lib/prisma-client");

class TaskRepository {
	async create(data) {
		const createdTask = await prisma.task.create({ data });
		await this.#disconnect();
		return Object.freeze(createdTask);
	};

	async #disconnect() {
		await prisma.$disconnect();
	}
}

module.exports = {
	TaskRepository,
};
