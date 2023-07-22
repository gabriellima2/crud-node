const { routes } = require("../router/routes");

function methodHandlerBasedOnPath({ path, method }) {
  if (!path || !method) throw new Error("Invalid arguments");
	const methodHandler = routes[path][method.toUpperCase()];
  if (!methodHandler) throw new Error("Method not allowed");
  return methodHandler;
}

module.exports = {
	methodHandlerBasedOnPath,
};
