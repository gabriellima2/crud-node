const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, GET, POST, DELETE, PUT",
  "Access-Control-Max-Age": "2592000", // 30 Days in Seconds
}

module.exports = {
  headers,
};
