'use strict'
const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

const VALIDATE = {
	gameValidate: (data, id) => {
		if (id === 0){
			try {
				var validateAll = {
					validateName: !VALID.isEmpty(data.name),
					validateDate: !VALID.isEmpty(data.date),
					validateGenre: !VALID.isEmpty(data.genre),
					validateDes: !VALID.isEmpty(data.des),
					validatePhoto: !VALID.isEmpty(data.photo)			
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
					validateDate: !VALID.isEmpty(data.date),
					validateGenre: !VALID.isEmpty(data.genre),
					validateDes: !VALID.isEmpty(data.des),
					validatePhoto: !VALID.isEmpty(data.photo)				
				}
				return true;
			} catch {
				return false;
			}
		}
	}
}

module.exports = VALIDATE;