const { HTTP_METHODS } = require("../../constants/http-methods");
const { HTTP_STATUS_CODE } = require("../../constants/http-status-code");

const notFoundRoute = {
	[HTTP_METHODS.GET]: async (req, res) => {
		res.statusCode = HTTP_STATUS_CODE["Not-Found"];
		res.end(JSON.stringify({ message: "Not found" }));
	},
}


module.exports = {
	notFoundRoute,
};
