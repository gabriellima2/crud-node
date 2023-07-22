const { routes } = require("./routes");

const { refineUrl } = require("../helpers/refine-url");
const { methodHandlerBasedOnPath } = require("../helpers/method-handler-based-on-path");

const { HTTP_STATUS_CODE } = require("../constants/http-status-code");

class Router {
	async execute(req, res) {
		const { url, method } = req;
		const { path } = refineUrl(url);
		const isUndefinedRoute = !path || !Object.keys(routes).includes(path);
		if (isUndefinedRoute) return await routes.notFound["GET"](req, res);
		try {
			await methodHandlerBasedOnPath({ path, method })(req, res);
		} catch (err) {
			res.statusCode = HTTP_STATUS_CODE["Method-Not-Allowed"];
			res.end(JSON.stringify({ message: err.message }));
		}
	}
}

module.exports = {
	Router,
};
