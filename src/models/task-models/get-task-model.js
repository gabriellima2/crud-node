const { InvalidUrlParamsError } = require("../../errors");

class GetTaskModel {
	constructor(repository, validator) {
		this.repository = repository;
		this.validator = validator;
	}

	async execute(id) {
		const validationErrorMessage = this.validator(id);
		if (validationErrorMessage) throw new InvalidUrlParamsError(validationErrorMessage);
		const task = await this.repository.getById(id);
		return task;
	}
}

module.exports = {
	GetTaskModel,
};
