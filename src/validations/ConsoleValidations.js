'use strict'
const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

const VALIDATE = {
	consoleValidate: (data, id) => {
		if (id === 0){
			try {
				var validateAll = {
					validateName: !VALID.isEmpty(data.name),
					validateDateR: !VALID.isEmpty(data.date_release),
					validateDateD: !VALID.isEmpty(data.date_discontinued)	
				}
				return true;
			} catch {
				return false;
			}
		} else {
			try {
				var validateAll = {
					validateId: !VALID.isEmpty(data.id),
					validateName: !VALID.isEmpty(data.name),
					validateDateR: !VALID.isEmpty(data.date_release),
					validateDateD: !VALID.isEmpty(data.date_discontinued)			
				}
				return true;
			} catch {
				return false;
			}
		}
	}
}

module.exports = VALIDATE;