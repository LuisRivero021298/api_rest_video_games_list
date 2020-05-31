'use strict'
const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

const VALIDATE = {
	listValidate: (data, id) => {
		if(id === 0){
			try {
				var validateAll = {
					validateName: !VALID.isEmpty(data.name),
					validateIdUser: !VALID.isEmpty(data.id_user)			
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
					validateIdUser: !VALID.isEmpty(data.id_user)			
				}
				return true;
			} catch {
				return false;
			}
		}
	}
}

module.exports = VALIDATE;
