const { makeTaskController } = require("../../factories/controllers");
const { HTTP_METHODS } = require("../../constants/http-methods");

const rootRoute = {
	[HTTP_METHODS.GET]: async (req, res) => {
		await makeTaskController().get(req, res);
	},
	[HTTP_METHODS.POST]: async (req, res) => {
		await makeTaskController().create(req, res);
	},
	[HTTP_METHODS.PATCH]: async (req, res) => {
		await makeTaskController().update(req, res);
	},
	[HTTP_METHODS.DELETE]: async (req, res) => {
		await makeTaskController().delete(req, res);
	},
}

module.exports = {
	rootRoute,
};
