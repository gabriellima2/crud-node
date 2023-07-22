const { HTTP_METHODS } = require("../../constants/http-methods");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

const rootRoute = {
	[HTTP_METHODS.GET]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Ok;
		res.end(JSON.stringify({ message: "GET" }));
	},
	[HTTP_METHODS.POST]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE.Created;
		res.end(JSON.stringify({ message: "POST" }));
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

/*
async function rootRoute(req, res) {
	const { method } = req;
	switch (method) {
		case HTTP_METHODS.GET:
			res.statusCode = HTTP_STATUS_CODE.Ok;
			res.end(JSON.stringify({ message: "GET" }));
			return;
		case HTTP_METHODS.POST:
			res.statusCode = HTTP_STATUS_CODE.Created;
			res.end(JSON.stringify({ message: "POST" }));
			return;
		case HTTP_METHODS.PATCH:
			res.statusCode = HTTP_STATUS_CODE.Ok;
			res.end(JSON.stringify({ message: "PATCH" }));
			return;
		case HTTP_METHODS.DELETE:
			res.statusCode = HTTP_STATUS_CODE.Ok;
			res.end(JSON.stringify({ message: "DELETE" }));
			return;
		case HTTP_METHODS.OPTIONS:
			res.statusCode = HTTP_STATUS_CODE.Ok;
			res.end(JSON.stringify({ message: res.getHeader("access-control-allow-methods") }));
			return;
		case HTTP_METHODS.HEAD:
			res.statusCode = HTTP_STATUS_CODE.Ok;
			res.end();
			return;
	}
	res.statusCode = HTTP_STATUS_CODE["Method-Not-Allowed"];
  res.end(JSON.stringify({ message: "Método não implementado" }));
}
*/
module.exports = {
	rootRoute,
};
