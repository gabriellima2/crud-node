const { CreateTaskError, InvalidDataFormatError } = require("../../errors");

class CreateTaskModel {
	constructor(repository, validator) {
		this.repository = repository;
		this.validator = validator;
	}

	async execute(task) {
		const validationErrorMessage = this.validator(task);
		if (validationErrorMessage) throw new InvalidDataFormatError(validationErrorMessage);

		const createdTask = await this.repository.create(task);
		if (!createdTask) throw new CreateTaskError();
		return createdTask;
	}
}

module.exports = {
	CreateTaskModel,
};
