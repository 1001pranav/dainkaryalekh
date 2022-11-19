const jwt = require('jsonwebtoken');

const RESPONSE = require('../constants/response');
const { JWT_KEY } = require('../constants/config');

module.exports.verifyJWT = (req, res, next) => {
	try {
		
		const token = req.headers.access_token;
		const decodedToken = jwt.verify(token, JWT_KEY);
		
		if ( !decodedToken.userID )	throw "UNAUTHORIZE";

		req.userObj = "userData";

	} catch (error) {

		if(RESPONSE[error]) {
			
			res.statusCode(RESPONSE[error].statusCode);
			res.json({
				...RESPONSE[error],
			});
			return
		
		}
		console.log("Authorization error: ", error);
		res.status(500).json({
			...RESPONSE.SERVER_ERROR,
		});		
	}
};

module.exports.generateJWT = (userID) => {

}