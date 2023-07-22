const { headers } = require("./config/headers");
const { defineHeaders } = require("./helpers/define-headers");

const { prisma } = require("./lib/prisma-client");
const { makeRouter } = require("./factories/make-router");

async function bootstrap(req, res) {
	defineHeaders(res, headers);
	makeRouter().execute(req, res)
	.then(async () => {
		prisma.$disconnect();
	})
	.catch(async (err) => {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	});
}


module.exports = {
	bootstrap,
};
