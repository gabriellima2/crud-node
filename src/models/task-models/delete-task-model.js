const { InvalidDataFormatError } = require("../../errors");

class DeleteTaskModel {
	constructor(repository, validator) {
		this.repository = repository;
		this.validator = validator;
	}

	async execute(id) {
		const validationErrorMessage = this.validator(id);
		if (validationErrorMessage) throw new InvalidDataFormatError(validationErrorMessage);
		const deletedTask = await this.repository.delete(id);
		return deletedTask;
	}
}

module.exports = {
	DeleteTaskModel,
};
