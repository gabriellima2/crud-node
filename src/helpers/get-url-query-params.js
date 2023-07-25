const { parseUrl } = require("./parse-url");

function getUrlQueryParams(url) {
	const parsedUrl = parseUrl(url)
	return parsedUrl.query;
};

module.exports = {
	getUrlQueryParams,
};
