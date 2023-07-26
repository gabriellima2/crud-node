const { z } = require("zod");

const GenericIdConstraint = z.number().int();

module.exports = {
	GenericIdConstraint,
};

