const { z } = require("zod");

const GenericDescriptionConstraint = z.string().trim().max(256).min(1).optional();

module.exports = {
	GenericDescriptionConstraint,
};

