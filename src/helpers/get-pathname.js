const { parseUrl } = require("./parse-url");

function getPathname(url) {
	const parsedURL = parseUrl(url);
	return parsedURL.pathname;
}

module.exports = {
	getPathname,
};
