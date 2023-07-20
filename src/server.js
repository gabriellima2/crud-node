const http = require("http");

const { port } = require("./config/port");
const { headers } = require("./config/headers");
const { hostname } = require("./config/hostname");
const { defineHeaders } = require("./helpers/define-headers");
const { router } = require("./router");

const server = http.createServer((req, res) => {
	defineHeaders(res, headers);
	router(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
