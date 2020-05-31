'use strict'

//initializations 
const EXPRESS = require('express');
const CORS = require('cors');
const BODY_PARSER = require('body-parser');

const APP = EXPRESS();

//settings 
APP.set('port', process.env.PORT || 3000);

//middlewares
APP.use(BODY_PARSER.urlencoded({extended: true}));
APP.use(BODY_PARSER.json());

const MORGAN = require('morgan');
APP.use(MORGAN('dev'));

//CORS
APP.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//routes
let userRoute = require('./routes/users.js');
let listRoute = require('./routes/lists.js');
let gameRoute = require('./routes/games.js');
let ratingRoute = require('./routes/ratings.js');
let consoleRoute = require('./routes/consoles.js');

//add prefixes to routes
APP.use('/api', userRoute);
APP.use('/api', listRoute);
APP.use('/api', gameRoute);
APP.use('/api', ratingRoute);
APP.use('/api', consoleRoute);



//starting server
const PORT = APP.get('port');
APP.listen(PORT, ()=> {
	console.log('Server on port', PORT);
})