const { parseUrl } = require("./parse-url");

function getUrlParams(url) {
	const { query } = parseUrl(url);
	const hasParams = Object.keys(query).length > 0;
	return hasParams ? query : undefined;
};

module.exports = {
	getUrlParams,
};
