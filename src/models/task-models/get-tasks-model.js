class GetTasksModel {
	constructor(repository) {
		this.repository = repository;
	}

	async execute() {
		const tasks = await this.repository.getAll();
		return tasks;
	}
}

module.exports = {
	GetTasksModel,
};
