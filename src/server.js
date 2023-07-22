const http = require("http");

const { port } = require("./config/port");
const { bootstrap } = require("./bootstrap");

const server = http.createServer((req, res) => bootstrap(req, res));

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
