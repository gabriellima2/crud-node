function requestBodyAdapter(req) {
	return new Promise((resolve, reject) => {
		let body = "";
		// O evento "data" pode ser acionado várias vezes durante o processamento de uma solicitação. Cada vez que o evento é acionado, um objeto buffer é passado como parâmetro. Este objeto buffer contém um pedaço dos dados enviados pelo cliente.
		req.on("data", buffer => (body += buffer.toString()));
		req.on("end", () => resolve(body));
		req.on("error", err => reject(err));
	});
}

module.exports = {
	requestBodyAdapter,
};
