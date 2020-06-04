'use strict'

//initializations 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//settings 
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
let listRoute = require('./routes/lists.js');
let gameRoute = require('./routes/games.js');
let ratingRoute = require('./routes/ratings.js');
let consoleRoute = require('./routes/consoles.js');
let authRoute = require('./routes/auth.js');

//add prefixes to routes
//app.use('/api', userRoute);
app.use('/api', listRoute);
app.use('/api', gameRoute);
app.use('/api', ratingRoute);
app.use('/api', consoleRoute);
app.use('/api', authRoute);

module.exports = app
