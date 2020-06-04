const jwt = require('jsonwebtoken');
const config = require('../config.js');
let { responseJson } = require('./responseJson.js');

function verifyToken(req, res, next) {
	const token = req.headers['x-access-token'];

	if(!token || token.length === 0) {
		return responseJson(res, 401, `Error: No token provided`);
	}

	const decoded	= jwt.verify(token, config.secret);
	req.userId = decoded.id;
	next(); 
}

module.exports = verifyToken;