const { rootRoute: root } = require("./root-route");
const { notFoundRoute: notFound } = require("./not-found-route");

const routes = {
	"/": root,
	notFound,
};

module.exports = {
	routes,
};
