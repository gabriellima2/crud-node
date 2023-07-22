const HTTP_STATUS_CODE = {
  "Ok": 200,
  "Created": 201,
  "Accepted": 202,
	"No-Content": 204,
	"Bad-Request": 400,
  "Unauthorized": 401,
  "Forbidden": 403,
  "Not-Found": 404,
	"Method-Not-Allowed": 405,
	"Internal-Server-Error": 500,
  "Not-Implemented": 501,
  "Bad-Gateway": 502,
  "Service-Unavailable": 503,
}

module.exports = {
	HTTP_STATUS_CODE,
};
