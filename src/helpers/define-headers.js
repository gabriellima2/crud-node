function defineHeaders(res, headers) {
  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
}

module.exports = {
  defineHeaders,
};
