function rootRoute(req, res) {
	res.statusCode = 200;
  res.end(JSON.stringify({ message: "Hello World" }));
}

module.exports = {
	rootRoute,
};
