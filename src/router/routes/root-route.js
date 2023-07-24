const { makeTaskController } = require("../../factories/controllers");

const { HTTP_METHODS } = require("../../constants/http-methods");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

const rootRoute = {
	[HTTP_METHODS.GET]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Ok;
		res.end(JSON.stringify({ message: "GET" }));
	},
	[HTTP_METHODS.POST]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Created;
		makeTaskController().create(req, res);
	},
	[HTTP_METHODS.PATCH]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Ok;
		res.end(JSON.stringify({ message: "PATCH" }));
	},
	[HTTP_METHODS.DELETE]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Ok;
		res.end(JSON.stringify({ message: "DELETE" }));
	},
}

module.exports = {
	rootRoute,
};
