const nodeUrl = require("url");

function refineUrl(url) {
	const parsedURL = nodeUrl.parse(url, true);
	const path = parsedURL.pathname;
	return { path };
}

module.exports = {
	refineUrl,
};
