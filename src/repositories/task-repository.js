const { prisma } = require("../lib/prisma-client");

class TaskRepository {
	async create(data) {
		const createdTask = await prisma.task.create({ data });
		await this.#disconnect();
		return Object.freeze(createdTask);
	};

	async getAll() {
		const tasks = await prisma.task.findMany();
		await this.#disconnect();
		return Object.freeze(tasks);
	}

	async getById(id) {
		const task = await prisma.task.findUnique({ where: { id } });
		await this.#disconnect();
		return Object.freeze(task);
	}

	async #disconnect() {
		await prisma.$disconnect();
	}
}

module.exports = {
	TaskRepository,
};
