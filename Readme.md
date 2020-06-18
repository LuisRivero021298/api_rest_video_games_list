# API REST - Videogames Lists
A simple app made with nodejs and express.
## Getting Starting 🚀

_These instructions allow you to obtain a copy of the project in operation on your local machine for development and testing parameters._

### Pre requirements 📋

#### Mysql
The first thing you should do is install **Mysql Server**, the following link will tell you how to do it: https://www.mysql.com/downloads/

#### Node.js
The second thing you should do is install nodejs, the following link will tell you how to do it: https://nodejs.org/en/download/

## Installation 🔧

#### You must clone the project:
```
git clone https://github.com/LuisRivero021298/api_rest_video_games_list.git
```
#### _Within the project you must execute the following commands:_
**-1** npm i

**-2** Create a file src/database.js

**-3** Write the following to the file created above:
```
const mysql = require('mysql');

const mysql_connection = mysql.createConnection({
	host: PORT,
	user: USER,
	password: PASSWORD,
	database: 'gameLists'
});

mysql_connection.connect((err)=>{
	if (err){
		console.log(err);
		return;
	} else {
		console.log('DB is connected');
	}
});

module.exports = mysql_connection;
```
You should display the following message on the console: *"DB is connected"* and *"server on port 3000"* 

#### Congratulations, you already have the api running on your machine!



## Built with 🛠️

* [Express](https://expressjs.com/es/) - The framework used
* [npm](https://www.npmjs.com) - Dependency Manager
* [Mysql](https://www.mysql.com/) - Database Manager

## Author ✒️

* **Luis Rivero** - [LuisRivero021298](https://github.com/LuisRivero021298)
