'use strict'

var responseJson = (res,status, message, data) => { // Server response
	if(status != 200){
		return res.status(status).json({
			status: 'error',
			message: message			
		});	
	}
	return res.status(status).json({
    status: 'success',
		data
	});
};// ******** end responseJson ********


module.exports = {
	responseJson
};