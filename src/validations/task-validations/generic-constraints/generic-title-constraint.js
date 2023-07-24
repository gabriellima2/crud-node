const { z } = require("zod");

const GenericTitleConstraint = z.string().trim().min(1).max(100);

module.exports = {
	GenericTitleConstraint,
};

