'use strict'

const authModel = require('../models/auth.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const { saveOrEdit } = require('../lib/global.js');
const { responseJson } = require('../lib/global.js');

const controller = {
	register: async (req, res, next) => {
		let data = await dataStructure(req.body, 0);
		registerOrUpdate(data, res);
	},
	update: async (req, res, next) => {
		let id = req.userId;
		let data = await dataStructure(req.body, id);

		registerOrUpdate(data, res);
	},
	signIn: (req, res, next) => {
		authModel.signIn(req.body)
		.then( async response => {
			let passwordValid = await comparePassword(req.body.password, response.password);

			if (!passwordValid) {
				return responseJson(res, 404, `Password invalid`);
			}

			let token = jwt.sign({ id: response.id }, config.secret, {
				expiresIn: 60 * 60 * 24
			});
			responseJson(res, 200, '', token);
		})
		.catch( err => responseJson(res, 404, `Error: ${err}`) );
	},
	profile: (req, res, next) => {
		if(!req.userId){
			return responseJson(res, 404, 'No token provider');
		}
		authModel.profile(req.userId)
    .then( response => responseJson(res, 200, '', response))
    .catch( err => responseJson(res, 404, `Error: ${err}`));
	}
};

let encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
};


let comparePassword = (password1, password2) => {
	return bcrypt.compare(password1, password2);
}

let registerOrUpdate = (data, res) => {
	saveOrEdit('userAddOrEdit(?)', data)
	.then( response => {
		let token = jwt.sign({id: response.id}, config.secret, {
			expiresIn : 60 * 60 * 24
		});
		responseJson(res, 200,'',token);
	})
	.catch( err => responseJson(res, 404, `Error: ${err}`));
}

/*let idValue = (userId) => {
	let id = 0;
	if (userId !== undefined && userId !== null){
		id = userId;
	}
	return id;
}*/

let dataStructure = (dataReceived, id) => {
	return new Promise( async (resolve, reject) => {
		dataReceived.password = await encryptPassword(dataReceived.password);
		let fullData = Object.values(dataReceived);
		fullData.unshift(id);

		resolve(fullData);
	})
}


module.exports = controller;
//end AuthController