const { InvalidDataFormatError } = require("../../errors");

class UpdateTaskModel {
	constructor(repository, validator) {
		this.repository = repository;
		this.validator = validator;
	}

	async execute({ id, task }) {
		const validationErrorMessage = this.validator({ id, task });
		if (validationErrorMessage) throw new InvalidDataFormatError(validationErrorMessage);
		const updatedTask = await this.repository.update({ id, data: task });
		return updatedTask;
	}
}

module.exports = {
	UpdateTaskModel,
};
