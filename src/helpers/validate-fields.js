function validateFields(fields, schema) {
	const validated = schema.safeParse(fields);
	if (validated.success) return undefined;
	throw new Error(validated.error.issues[0].message);
}

module.exports = {
	validateFields,
};
