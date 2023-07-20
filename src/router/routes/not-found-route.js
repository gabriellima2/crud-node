function notFoundRoute(req, res) {
	res.statusCode = 404;
  res.end(JSON.stringify({ message: "Not found" }));
}

module.exports = {
	notFoundRoute,
};
