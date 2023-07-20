const http = require("http");

const { port } = require("./config/port");
const { headers } = require("./config/headers");
const { hostname } = require("./config/hostname");
const { defineHeaders } = require("./helpers/define-headers");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  defineHeaders(res, headers);
  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
