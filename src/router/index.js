const url = require("url");
const { routes } = require("./routes");

function router(req, res) {
	const parsedURL = url.parse(req.url, true);
	const path = parsedURL.pathname;
	const isUndefinedRoute = !path || !Object.keys(routes).includes(path);
	if (isUndefinedRoute) return routes.notFound(req, res);
	routes[path](req, res);
}

module.exports = {
	router,
};
