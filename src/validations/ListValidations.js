'use strict'

const valid = require('validator');
let { responseJson } = require('../lib/global.js')

function validateList(req, res, next) {
	try {
		let validateUser = !valid.isEmpty(req.body.name_list)
	} catch {
		return responseJson([res, 404, 'Missing data'])
	}
	next()
}

module.exports = validateList
