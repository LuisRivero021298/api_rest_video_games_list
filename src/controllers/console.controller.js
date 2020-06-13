'use strict'

const consoleModel = require('../models/console.model.js');
let { responseJson } = require('../lib/global.js');
let { saveOrEdit } = require('../lib/global.js');

const controller = {
	save: (req, res) => {
		let data = Object.values(req.body);
		data.unshift(0);
		
		saveOrUpdate(data, res);
	},
	update: (req, res) => {
		if(!req.params.id) { return responseJson([res, 404, 'Console not selected']) }

		let data = Object.values(req.body);
		data.unshift(req.params.id);
		
		saveOrUpdate(data, res);
	},
	getConsoles: (req, res) => {
		consoleModel.getAllConsoles()
		.then( consoles => responseJson([res, 200, '', {consoles}]))
		.catch( err => responseJson(res, 404, `Error: ${err}`));
	},
	getById: (req, res) => {
		consoleInteraction(res, req.params.id, 'getConsole');
	},
	getConsolesByUser: (req, res) => {
		if(!req.userId) { return responseJson([res, 404, 'Error: No token provided']); }

		consoleModel.getConsoleByUser(req.userId)
		.then( consoles => responseJson([res, 200, '', {consoles}]))
		.catch( err => responseJson([res, 404, `Error: ${err}`]));
	},
	delete: (req, res) => {
		consoleInteraction(res, req.params.id);
	}
}

const consoleInteraction = (res, consoleId, action = '') => {
	if (!consoleId) {
		return responseJson([res, 404, 'No console selected']);
	}

	if(action === 'getConsole') {
		var executeAction = consoleModel.getConsole(consoleId);
	} else {
		executeAction = consoleModel.deleteConsole(consoleId)
	}

	executeAction
	.then( response => responseJson([res, 200, '', {response}]))
	.catch( err => responseJson([res, 404, `Error: ${err}`]));
}

const saveOrUpdate = (data, res) => {
	saveOrEdit('consoleAddOrEdit(?)', data)
	.then( response => responseJson([res, 200, '', {response}]))
	.catch( err => responseJson([res, 404, `Error: ${err}`]));
}																														

module.exports = controller;