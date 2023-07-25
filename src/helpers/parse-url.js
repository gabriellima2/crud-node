const nodeUrl = require("url");

function parseUrl(url) {
	return nodeUrl.parse(url, true);
}

module.exports = {
	parseUrl,
};
