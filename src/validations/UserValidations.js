'use strict'

const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

const VALIDATE = {
	userValidate: (data, id) => {
		if (id === 0) {
			try {
				var validateAll = {
					validateUser: !VALID.isEmpty(data.username),
					validateEmail: !VALID.isEmpty(data.email),
					validatePass: !VALID.isEmpty(data.password),
					validatePhoto: !VALID.isEmpty(data.photo),
					validateBirth: !VALID.isEmpty(data.birthdate)
				}

				return true;

	    } catch {
				return false;
	    }
		} else {
			try {
				var validateAll = {
					validateId: !VALID.isEmpty(id),
					validateUser: !VALID.isEmpty(username),
					validateEmail: !VALID.isEmpty(email),
					validatePass: !VALID.isEmpty(password),
					validatePhoto: !VALID.isEmpty(photo),
					validateBirth: !VALID.isEmpty(birthdate)
				}

				return true;

	    } catch {
				return false;
	    }
		}
	}	
}


module.exports = VALIDATE;