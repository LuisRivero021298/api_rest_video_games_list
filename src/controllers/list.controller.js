'use strict'

const listModel = require('../models/list.model.js');
let { responseJson } = require('../lib/global.js');
let { saveOrEdit } = require('../lib/global.js');

const controller = {
	save: async (req, res) => {
		let data = await dataStructure(0, req.body, req.userId);
		saveOrUpdate(data, res);
	},
	update: async (req, res) => {
		if(!req.params.id) {
			return responseJson([res, 404, 'No list selected']);
		}
		let data = await dataStructure(req.params.id, req.body, req.userId);	
		saveOrUpdate(data,res);

	},
	getByUserId: (req, res) => {
		if(!req.userId) {
			return responseJson([res, 404, 'No token provider']);
		}
		listModel.getListsUser(req.userId)
		.then( response => responseJson([res, 200, '', {response}]))
		.catch( err => responseJson([res, 404, `Error: ${err}`]));
	},
	delete: (req, res) => {
		if(!req.params.id) {
			return responseJson([res, 404, 'List id missing'])
		}
		listModel.deleteList(req.params.id)
		.then(response => responseJson([res, 200, '', {response}]))
		.catch( err => responseJson([res, 404, `Error: ${err}`]));
	}
}

const saveOrUpdate = (data, res) => {
	saveOrEdit('listAddOrEdit(?)', data)
	.then(response => responseJson([res, 200, '', response]))
	.catch( err => responseJson([res, 404, `Error: ${err}`]));
}

const dataStructure = (idList, dataReceived, userId) => {
	return new Promise( resolve => {
		let fullData = Object.values(dataReceived);
		fullData.unshift(idList);
		fullData.push(userId) 

		resolve(fullData);
	});
} 

module.exports = controller;	

//end ListController