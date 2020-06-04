const mysql = require('mysql');

const mysql_connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '021298ld',
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


/*
CREATE PROCEDURE userAddOrEdit (
	IN _id INT,
    IN _username VARCHAR(50),
    IN _email VARCHAR(50),
    IN _password VARCHAR(50),
    IN _photo VARCHAR(350),
    IN _birthdate DATE
)

BEGIN 
	IF _id = 0 THEN
    	INSERT INTO users (username, email, password, photo, birthdate)
        VALUES (_username, _email, _password, _photo, _birthdate);
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE users 
        SET 
        	username = _username, 
            email = _email, 
            password = _password, 
            photo = _photo, 
            birthdate = _birthdate
            WHERE id = _id;
    END IF;
    
    SELECT _id AS id;
END
 */