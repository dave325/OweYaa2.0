-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: us-cdbr-iron-east-03.cleardb.net    Database: heroku_188e1108f2214d8
-- ------------------------------------------------------
-- Server version	5.5.56-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archiveprojects`
--

DROP TABLE IF EXISTS `archiveprojects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `archiveprojects` (
  `archiveid` int(10) NOT NULL,
  `comProjId` int(10) NOT NULL,
  `compid` int(10) NOT NULL,
  PRIMARY KEY (`archiveid`),
  KEY `comProjId` (`comProjId`),
  CONSTRAINT `archiveprojects_ibfk_1` FOREIGN KEY (`comProjId`) REFERENCES `companyproject` (`comProjId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archiveprojects`
--

LOCK TABLES `archiveprojects` WRITE;
/*!40000 ALTER TABLE `archiveprojects` DISABLE KEYS */;
/*!40000 ALTER TABLE `archiveprojects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `compid` int(10) NOT NULL PRIMARY KEY,
  `name` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `matchNum` int(15) NOT NULL,
  `stripeToken` varchar(100) NOT NULL,
  `memberToken` varchar(20) NOT NULL,
  `companyPhone` varchar(20) NOT NULL,
  `searchComplete` varchar(50) NOT NULL,
  `searchComplete2` varchar(50) NOT NULL,
  `companyFav` varchar(50) NOT NULL,
  PRIMARY KEY (`compid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyproject`
--

DROP TABLE IF EXISTS `companyproject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyproject` (
  `comProjId` int(10) NOT NULL,
  `compid` int(10) NOT NULL,
  `projectdetails2` varchar(100) NOT NULL,
  `projectrecieve` varchar(200) NOT NULL,
  `projectmanager` varchar(50) NOT NULL,
  `initiated` tinyint(1) NOT NULL,
  `initiated2` tinyint(1) NOT NULL,
  PRIMARY KEY (`comProjId`),
  KEY `compid` (`compid`),
  CONSTRAINT `companyproject_ibfk_1` FOREIGN KEY (`compid`) REFERENCES `companies` (`compid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyproject`
--

LOCK TABLES `companyproject` WRITE;
/*!40000 ALTER TABLE `companyproject` DISABLE KEYS */;
/*!40000 ALTER TABLE `companyproject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `userid` int(10) NOT NULL,
  `course` varchar(100) NOT NULL,
  `completed` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `militaryusers` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (62,'cs111',1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `userid` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `rating` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('62','english',5),('62','spanish',3);
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `userid` varchar(255) DEFAULT NULL,
  `mentorlocation` varchar(255) DEFAULT NULL,
  `mentoremail` varchar(255) DEFAULT NULL,
  `mentordiscussion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES ('62','NYC','example@oweyaa.com','balbsdjafkhj shjaks hfd');
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `militaryusers`
--

DROP TABLE IF EXISTS `militaryusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `militaryusers` (
  `name` varchar(10) NOT NULL PRIMARY KEY,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `location` varchar(20) NOT NULL,
  `mos` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `career1` varchar(100) NOT NULL,
  `career2` varchar(100) NOT NULL,
  `desired1` varchar(50) NOT NULL,
  `desired2` varchar(50) NOT NULL,
  `prev1` varchar(50) NOT NULL,
  `prev2` varchar(50) NOT NULL,
  `hobbies` varchar(80) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `militaryusers`
--

LOCK TABLES `militaryusers` WRITE;
/*!40000 ALTER TABLE `militaryusers` DISABLE KEYS */;
INSERT INTO `militaryusers` VALUES (2,'','','','','place','1232','','','','','','','','','','','','','','','',NULL),(62,'david','example@oweyaa.com','','david','12345','345 infantry','','','','','','','','','','','','','','','',NULL),(72,'','dataram','password','david','','','','','','','','','','','','','','','','','',NULL),(82,'','dataram','password','david','','','','','','','','','','','','','','','','','',NULL),(92,'','asdfghjkxcvbnmtyu','asdfghjkiuytrewxcvbn','qwertyuiasdfghj','','','','','','','','','','','','','','','','','',NULL),(102,'','asdfghjkxcvbnmtyu','asdfghjkiuytrewxcvbn','qwertyuiasdfghj','','','','','','','','','','','','','','','','','',NULL),(112,'','asdfghjkxcvbnmtyu','asdfghjkiuytrewxcvbn','qwertyuiasdfghj','','','','','','','','','','','','','','','','','',NULL),(122,'','dataram','password','david','','','','','','','','','','','','','','','','','',NULL),(132,'','vetcom@mail.com','password','vetcom','','','','','','','','','','','','','','','','','',NULL),(142,'','luke@mail.com','password','vetluke','','','','','','','','','','','','','','','','','',NULL),(152,'','testing@email.com','hellosyed','testertester','','','','','','','','','','','','','','','','','',NULL);
/*!40000 ALTER TABLE `militaryusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `userid` int(9) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `amount` int(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (62,'html',5),(62,'css',4);
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social`
--

DROP TABLE IF EXISTS `social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social` (
  `userid` int(10) NOT NULL,
  `linkedin` varchar(15) NOT NULL,
  `skype` varchar(20) NOT NULL,
  `blog` varchar(100) NOT NULL,
  `github` varchar(20) NOT NULL,
  `portfolio` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`),
  CONSTRAINT `social_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `militaryusers` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES (62,'my name','test skype','','','');
/*!40000 ALTER TABLE `social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usernametest`
--

DROP TABLE IF EXISTS `usernametest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usernametest` (
  `userid` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usernametest`
--

LOCK TABLES `usernametest` WRITE;
/*!40000 ALTER TABLE `usernametest` DISABLE KEYS */;
INSERT INTO `usernametest` VALUES ('','david','password','dataram',0),('102','david','passwordcompanytest',NULL,1),('12','info@ahtherbs.com','afdjaslkfjlas',NULL,NULL),('2','asdlkfjdskl','lkjsdaflksa',NULL,NULL),('22','syedchowdhury426','Sharuk16',NULL,NULL),('32','syedchowdhury426','Sharuk16',NULL,NULL),('42','luke jenkins','Appletree1!',NULL,NULL),('62','changed','password','davedataram@gmail.com',0),('72','david3','password',NULL,0),('82','daved','dadafsd',NULL,0),('92','david','passwordfinaltest',NULL,0);
/*!40000 ALTER TABLE `usernametest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-08 18:18:36
