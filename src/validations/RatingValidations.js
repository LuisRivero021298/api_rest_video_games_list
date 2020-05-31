'use strict'

const VALID = require('validator');
var { responseJson } = require('../lib/responseJson.js');

const VALIDATE = {
	ratingValidate: (data, id) => {
		if (id === 0) {
			try {
				var validateAll = {
					validateIdList: !VALID.isEmpty(data.id_list),
					validateIdGame: !VALID.isEmpty(data.id_game),
					validateIdConsole: !VALID.isEmpty(data.id_console),
					validateRate: !VALID.isEmpty(data.rate)
				}

				return true;

	    } catch {
				return false;
	    }
		} else {
			try {
				var validateAll = {
					validateId: !VALID.isEmpty(id),
					validateIdList: !VALID.isEmpty(data.id_list),
					validateIdGame: !VALID.isEmpty(data.id_game),
					validateIdConsole: !VALID.isEmpty(data.id_console),
					validateRate: !VALID.isEmpty(data.rate)
				}

				return true;

	    } catch {
				return false;
	    }
		}
	}	
}


module.exports = VALIDATE;