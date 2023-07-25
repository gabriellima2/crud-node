const { headers } = require("./config/headers");
const { defineHeaders } = require("./helpers/define-headers");
const { HTTP_STATUS_CODE } = require("./constants/http-status-code");

const { prisma } = require("./lib/prisma-client");
const { makeRouter } = require("./factories/make-router");

async function bootstrap(req, res) {
	defineHeaders(res, headers);
	makeRouter().execute(req, res)
	.then(async () => {
		prisma.$disconnect();
	})
	.catch(async (err) => {
		await prisma.$disconnect();
		res.statusCode = HTTP_STATUS_CODE["Internal-Server-Error"];
		res.end(JSON.stringify({ message: "An unexpected error occurred on the server" }));
		process.exit(1);
	});
}


module.exports = {
	bootstrap,
};
