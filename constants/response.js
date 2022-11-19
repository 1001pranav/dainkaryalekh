let RESPONSES = {};

RESPONSES.SERVER_ERROR = {
  "statusCode": 500,
  "statusMessage": "Internal Server Error",
  "data": {}
};

RESPONSES.UNAUTHORIZE = {
  "statusCode": 401, 
  "statusMessage": "un-authorized, Please login again."
}
module.exports = {...RESPONSES};