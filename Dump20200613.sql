-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: gamelists
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consoles`
--

DROP TABLE IF EXISTS `consoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consoles` (
  `id_console` int NOT NULL AUTO_INCREMENT,
  `name_console` varchar(90) NOT NULL,
  `date_release` date NOT NULL,
  `date_discontinued` date NOT NULL,
  PRIMARY KEY (`id_console`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consoles`
--

LOCK TABLES `consoles` WRITE;
/*!40000 ALTER TABLE `consoles` DISABLE KEYS */;
INSERT INTO `consoles` VALUES (1,'PlayStation One','1994-12-02','2001-12-31'),(2,'SNES Super Nintendo','1993-01-01','2001-01-01'),(3,'NES','1983-07-15','2003-01-01'),(4,'Xbox 360','2005-11-22','2014-07-01'),(5,'Nintendo Wii','2006-10-18','2019-12-31'),(6,'Prueba Wii','2006-10-18','2019-12-31'),(7,'PlayStation 4','2013-11-14','2021-12-31');
/*!40000 ALTER TABLE `consoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id_game` int NOT NULL AUTO_INCREMENT,
  `name_game` varchar(60) NOT NULL,
  `date_release` date NOT NULL,
  `genre` int NOT NULL,
  `description` text,
  `photo` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id_game`),
  KEY `id_genre_idx` (`genre`),
  CONSTRAINT `genres` FOREIGN KEY (`genre`) REFERENCES `genres` (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Final Fantasy VI','1994-04-02',2,NULL,NULL),(2,'Dmc Devil May Cry','2013-01-15',1,NULL,NULL),(3,'Resident Evil 7','2017-01-24',3,'Cronológicamente, el título se ubica más de 4 años después de los acontecimientos de Resident Evil 6, en julio del año 2017. Ethan Winters es atraído a una plantación abandonada, en los alrededores de la ciudad de Dulvey en Luisiana, por un extraño mensaje de su esposa Mia, que ha estado desaparecida durante 3 años, y a la cual había dado por muerta.','resident.jpg'),(4,'Residen Evil 6','2012-10-02',3,'Resident evil 6 description','resident6.jpg'),(5,'Final Fantasy VII','1997-01-31',2,'desc','ffvii.jpg');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id_genre` int NOT NULL,
  `name_genre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_genre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Hack and slash'),(2,'RPG'),(3,'Survival Horror');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lists`
--

DROP TABLE IF EXISTS `lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lists` (
  `id_list` int NOT NULL AUTO_INCREMENT,
  `name_list` varchar(60) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_list`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `lists_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lists`
--

LOCK TABLES `lists` WRITE;
/*!40000 ALTER TABLE `lists` DISABLE KEYS */;
INSERT INTO `lists` VALUES (1,'Test edit',1),(2,'Lista test',1),(9,'test',1),(10,'pruena',1),(11,'aver',2),(12,'Lista Luis',61),(13,'Lista Luis 2',61),(15,'Juegos pasados',71),(16,'Juegos por pasar',71);
/*!40000 ALTER TABLE `lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id_rating` int NOT NULL AUTO_INCREMENT,
  `id_list` int NOT NULL,
  `id_game` int NOT NULL,
  `id_console` int NOT NULL,
  `rate` float(11,2) NOT NULL,
  `finalized` tinyint DEFAULT '0',
  PRIMARY KEY (`id_rating`),
  KEY `id_list` (`id_list`),
  KEY `id_game` (`id_game`),
  KEY `id_console` (`id_console`),
  CONSTRAINT `ratings_ibfk_4` FOREIGN KEY (`id_list`) REFERENCES `lists` (`id_list`),
  CONSTRAINT `ratings_ibfk_5` FOREIGN KEY (`id_game`) REFERENCES `games` (`id_game`),
  CONSTRAINT `ratings_ibfk_6` FOREIGN KEY (`id_console`) REFERENCES `consoles` (`id_console`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (3,2,1,1,9.40,1),(4,2,2,4,9.00,1),(5,12,2,5,8.00,1),(7,15,3,7,8.50,1),(8,12,1,1,9.30,1),(9,13,2,4,0.00,0),(10,12,1,5,8.00,1),(11,12,1,6,9.00,1),(12,12,4,6,5.00,1),(13,13,4,5,0.00,0),(14,12,5,1,9.00,1);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(360) DEFAULT NULL,
  `photo` varchar(350) NOT NULL,
  `birthdate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Unique` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test_1','test@gmail.com','$2a$10$ltd2Xc7h5qskNLIvPj1r3.kWpNukKm85JKLDcjJsqZxKvkuHYkXmi','test.jpg','2002-01-01'),(2,'roro viellgas','elpapo@gmail.com','2222','nohay.jpg','2020-01-01'),(5,'Angie','angie123123@gmail.com','2225555','testsss','1999-09-16'),(6,'pearl0212','pearl02129@gmail.com','020202','prueba.jpg','1998-02-02'),(7,'Test User Edit','test.gmail.com','222222','test.jpg','1999-10-09'),(55,'test_2','test2@gmail.com','$2a$10$YgAf54iHhnhr3nEhLsfTSu4HsSgjN.BMLBbmsHLGGMrgs/SokzqV2','test.jpg','2002-01-01'),(56,'test_3','test3@gmail.com','$2a$10$urMuiYJB/YGK19lYO.WKp.Ldj6mW1V8D7MxuMO9/IRuooVgxRIk5O','test.jpg','2002-01-01'),(57,'test_4','test4@gmail.com','$2a$10$9tBA8GC9amBuO1uP0LiZx.UrSE4qL1J8nPYkqqeMIappHmtAzXC0S','test.jpg','2002-01-01'),(58,'test_5','test5@gmail.com','$2a$10$5b8WX0jMjl93t.ycUNEvBO5qTO8mAOmXBc9dp3t18fEsAv4Hf8IMO','test.jpg','2002-01-01'),(59,'test_6','test6@gmail.com','$2a$10$9CdS7EpeSpmURWsKkqcauOHTwfNz.jypx1zS3qnczI/p92xkrGytW','test.jpg','2002-01-01'),(60,'test_7','test7@gmail.com','$2a$10$EbdWvQylOgFWK16DGt67iuM6gqCcPrL3nKCqgg3LJAF.yQezeVqli','test.jpg','2002-01-01'),(61,'luisda021298@gmail.com','luisda021298@gmail.com','$2a$10$9uGEe.MGyEcYcvvJU2CRWuj8NFFZ7XR2IIJGC.90.E9a42rAHK27m','test.jpg','1998-12-02'),(63,'MariaPeñaXXXX','MariaPeña@gmail.com','$2a$10$UHv8PNUH6FPU1XQFpKZ1pOrZjer2APPnsVfC5jl3sDmCmlrHM/5T.','maria.jpg','2000-09-21'),(64,'Camila_paradas','camilaParadas@gmail.com','$2a$10$3PzX02EAC9f3RIFXYtqIle8R7Ax88CYdqsCUmQufnwyrD//JCsfyC','camila.jpg','2000-02-06'),(65,'betyMontillaLaFea','betymontillalafea@gmail.com','$2a$10$5Yt43W9iLGAkoRlIEtcrpOGIaa2kP1PsYc.fTcPWOKUrY06o2bO/a','bety.jpg','1996-03-18'),(66,'testFinal_2','testfinal@gmail.com','$2a$10$HFINbegA9.ZdrpkvlwEScOf4lAp9hzwREI8yvLi/cokpi8Q0PUUzG','testFinal.jpg','1996-03-18'),(70,'usernameTestValidate','testvalidate@gmail.com','$2a$10$.dnAY7X6wUkuaSJL4Sgk..BT7nH7SBspLGH9D0Knyt2b4rsdqw70C','testvalid.jpg','2000-01-01'),(71,'regem021298','regem021298@gmail.com','$2a$10$N2OJ9JWlptZe2Tnw4UxtWerCrZjk59D1yW7XQv2dwF1O3L8PnEIj6','yo.jpg','1998-12-02'),(72,'ElizabethSira','elizabeth_sira@gmail.com','$2a$10$RTkAXaNWlzFUrdwUOfxAz.E8K8yNVNyCyCVKvFGBtQ726VoR/bSoq','IMG-20200413-WA0040.jpg','1977-05-04'),(73,'patricia123','patricia123@gmail.com','$2a$10$0fx3S7.gwX7SR158XySshOj3YMGuM8nfizktGrY9ibkwAQMBCMAUu','node_js_hexagon-wallpaper-1920x1200.jpg','1997-06-04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gamelists'
--
/*!50003 DROP PROCEDURE IF EXISTS `consoleAddOrEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `consoleAddOrEdit`(IN `_id` INT, IN `_name` VARCHAR(50), IN `_date_r` DATE, IN `_date_d` DATE)
BEGIN 
	IF _id = 0 THEN
    	INSERT INTO consoles (name_console, date_release, date_discontinued)
        VALUES (_name, _date_r, _date_d);
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE consoles 
        SET 
        	name_console = _name,
            date_release = _date_r,
            date_discontinued = _date_d
            WHERE id_console = _id;
    END IF;
    
    SELECT _id AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `gameAddOrEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `gameAddOrEdit`(IN `_id` INT, IN `_name` VARCHAR(100), IN `_date` DATE, IN `_genre` VARCHAR(50), IN `_des` VARCHAR(500), IN `_photo` VARCHAR(80))
    NO SQL
BEGIN 
	IF _id = 0 THEN
    	INSERT INTO games (name_game, date_release, genre, description, photo)
        VALUES (_name, _date, _genre, _des, _photo);
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE games 
        SET 
        	name_game = _name,
            date_release = _date,
            genre = _genre,
            description = _des,
            photo = _photo
            WHERE id_game = _id;
    END IF;
    
    SELECT _id AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getConsolesByUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConsolesByUser`(in _id_user int)
BEGIN
	SELECT consoles.id_console, consoles.name_console,
    (select count(*) from ratings 
     INNER JOIN lists ON ratings.id_list = lists.id_list 
	 WHERE lists.id_user = _id_user 
		and ratings.finalized = 1 
        and ratings.id_console = consoles.id_console
    )
    as num
    FROM consoles;	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGamesByUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGamesByUser`(in _id_user int)
BEGIN
	SELECT genres.*,
    (select count(*) from ratings 
     INNER JOIN lists ON ratings.id_list = lists.id_list
     INNER JOIN games ON games.genre = genres.id_genre 
	 WHERE lists.id_user = _id_user 
	 and ratings.finalized = 1 
     and ratings.id_game = games.id_game
    )
    as num
    FROM genres;	
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRating` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRating`(IN `_id_list` INT)
BEGIN
	SELECT ratings.id_rating, ratings.id_list, ratings.rate, 		games.*, consoles.name_console, consoles.id_console 
    FROM ratings 
    INNER JOIN games ON ratings.id_game = games.id_game 
    INNER JOIN consoles ON ratings.id_console = consoles.id_console 
    WHERE ratings.id_list = _id_list;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `listAddOrEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `listAddOrEdit`(IN `_id` INT, IN `_name` VARCHAR(50), IN `_id_user` INT)
BEGIN 
	IF _id = 0 THEN
    	INSERT INTO lists (name_list, id_user)
        VALUES (_name, _id_user);
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE lists 
        SET 
        	name_list = _name
            WHERE id_list = _id;
    END IF;
    
    SELECT _id AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `profile`( IN _id VARCHAR(50))
BEGIN
 SELECT username, email, photo, birthdate from users where id = _id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ratingAddOrEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ratingAddOrEdit`(IN `_id` INT, IN `_id_list` INT, IN `_id_game` INT, IN `_id_console` INT, IN `_rate` FLOAT(11,2), IN `_finalez` TINYINT)
BEGIN 
	IF _id = 0 THEN
    	INSERT INTO ratings (id_list, id_game, id_console, rate, finalized)
        VALUES (_id_list, _id_game, _id_console, _rate, _finalized);
        SET _id = LAST_INSERT_ID();
    ELSE
    	UPDATE ratings 
        SET 
            id_game = _id_game,
            id_console = _id_console,
            rate = _rate
            WHERE id_rating = _id;
    END IF;
    
    SELECT _id AS id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userAddOrEdit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userAddOrEdit`(IN `_id` INT, IN `_username` VARCHAR(50), IN `_email` VARCHAR(50), IN `_password` VARCHAR(300), IN `_birthdate` DATE, IN `_photo` VARCHAR(350))
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-13 18:43:18
