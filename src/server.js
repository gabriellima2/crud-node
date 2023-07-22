const http = require("http");

const { port } = require("./config/port");
const { headers } = require("./config/headers");
const { defineHeaders } = require("./helpers/define-headers");

const { prisma } = require("./lib/prisma-client");
const { router } = require("./router");

const server = http.createServer((req, res) => {
	defineHeaders(res, headers);
	router(req, res)
		.then(async () => {
			prisma.$disconnect();
		})
		.catch(async (err) => {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		});
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
