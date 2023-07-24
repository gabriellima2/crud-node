class CreateTaskModel {
	constructor(repository, validator) {
		this.repository = repository;
		this.validator = validator;
	}

	async execute(task) {
		const validationErrorMessage = this.validator(task);
		if (validationErrorMessage) throw new Error(validationErrorMessage);

		const createdTask = await this.repository.create(task);
		if (!createdTask) throw new Error("An error occurred while creating the task");
		return createdTask;
	}
}

module.exports = {
	CreateTaskModel,
};
