-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: us-cdbr-iron-east-05.cleardb.net    Database: heroku_64154578bf3efff
-- ------------------------------------------------------
-- Server version	5.6.36-log

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
-- Table structure for table `actiontask`
--

DROP TABLE IF EXISTS `actiontask`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actiontask` (
  `task1` varchar(255) DEFAULT NULL,
  `task2` varchar(255) DEFAULT NULL,
  `task3` varchar(255) DEFAULT NULL,
  `completed1` tinyint(1) DEFAULT NULL,
  `copmleted2` tinyint(1) DEFAULT NULL,
  `completed3` tinyint(1) DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actiontask`
--

LOCK TABLES `actiontask` WRITE;
/*!40000 ALTER TABLE `actiontask` DISABLE KEYS */;
/*!40000 ALTER TABLE `actiontask` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `availability`
--

DROP TABLE IF EXISTS `availability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `availability` (
  `dayofweek` varchar(9) DEFAULT NULL,
  `start_time` varchar(255) DEFAULT NULL,
  `end_time` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availability`
--

LOCK TABLES `availability` WRITE;
/*!40000 ALTER TABLE `availability` DISABLE KEYS */;
INSERT INTO `availability` VALUES ('Sunday','20:00:00','20:00:00','david'),('Monday','0:00:00','20:00:00','david'),('Tuesday','0:00:00','0:00:00','david'),('Wednesday','0:00:00','0:00:00','david'),('Thursday','0:00:00','0:00:00','david'),('Friday','0:00:00','0:00:00','david'),('Saturday','0:00:00','0:00:00','david');
/*!40000 ALTER TABLE `availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bootcamps`
--

DROP TABLE IF EXISTS `bootcamps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bootcamps` (
  `name` varchar(255) NOT NULL,
  `bootcamp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bootcamps`
--

LOCK TABLES `bootcamps` WRITE;
/*!40000 ALTER TABLE `bootcamps` DISABLE KEYS */;
INSERT INTO `bootcamps` VALUES ('david','C4Q3');
/*!40000 ALTER TABLE `bootcamps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careergoals`
--

DROP TABLE IF EXISTS `careergoals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `careergoals` (
  `name` varchar(255) NOT NULL,
  `goal` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careergoals`
--

LOCK TABLES `careergoals` WRITE;
/*!40000 ALTER TABLE `careergoals` DISABLE KEYS */;
INSERT INTO `careergoals` VALUES ('david','internship'),('david','job');
/*!40000 ALTER TABLE `careergoals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careersearch`
--

DROP TABLE IF EXISTS `careersearch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `careersearch` (
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(55) DEFAULT NULL,
  `status` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careersearch`
--

LOCK TABLES `careersearch` WRITE;
/*!40000 ALTER TABLE `careersearch` DISABLE KEYS */;
INSERT INTO `careersearch` VALUES ('david','Web Developer','intern');
/*!40000 ALTER TABLE `careersearch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certifications`
--

DROP TABLE IF EXISTS `certifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certifications` (
  `certid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `certification` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`certid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certifications`
--

LOCK TABLES `certifications` WRITE;
/*!40000 ALTER TABLE `certifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `compid` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `matchNum` int(15) NOT NULL,
  `stripeToken` varchar(100) NOT NULL,
  `memberToken` varchar(20) NOT NULL,
  `companyPhone` varchar(20) NOT NULL,
  `searchComplete` varchar(50) NOT NULL,
  `searchComplete2` varchar(50) NOT NULL,
  `companyFav` varchar(50) NOT NULL,
  `type` tinyint(1) NOT NULL,
  PRIMARY KEY (`compid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES ('$2y$10$3jusEmCGsRhNcjnUOYzMGOPCKjqJzGB1IVLiOenAhSfm/qrdxlJCi','david325','david','$2y$10$jENdfoDQ2IBhA1vkFgSpDuMS096dbe/HKkT..4.3IP.3zlkLp7JMG',0,'','','','','','',1),('$2y$10$B/DrKRUEzWfGvUO04kwutOLlWG6NZUYqbPfRF8oDJRyfsBC846WzO','david','daviddataram@icloud.com','$2y$10$mtcBMkCP4pLQGi42ieVWcunEtTmDJ0/OwO41UFxdTZHEdtXM0i4YO',0,'','','','','','',1),('$2y$10$BzUWKOnKRhh2g/0unmLWRupplVfaEpc3NYuB3UyG6DGFWj0d0Wj.q','david325','david','$2y$10$.oSS3FeHIXdBSucJxBZHcON6x02bPN0bhg6uhXFioR/4I1FZN2xYW',0,'','','','','','',1),('$2y$10$JYBH2snlvAekSV1epxpiwuII.DfPf3r7PSLHBWW/XVUxhNvCch8.m','david325','david','$2y$10$P.SKf/DBhL0nbOPc7/4yi.8Qvb/AKKlc1ASCUVJVy/E8VRFrf9izy',0,'','','','','','',1);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactinfo`
--

DROP TABLE IF EXISTS `contactinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactinfo` (
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `mos` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactinfo`
--

LOCK TABLES `contactinfo` WRITE;
/*!40000 ALTER TABLE `contactinfo` DISABLE KEYS */;
INSERT INTO `contactinfo` VALUES ('david','davedataram@gmail.com','5555555555','New York, NYv','test1','Army11','');
/*!40000 ALTER TABLE `contactinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `name` varchar(255) NOT NULL,
  `course` varchar(100) NOT NULL,
  `completed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('david','CS',1),('david','css',5);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `education` (
  `school` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `graddate` date DEFAULT NULL,
  `course1` varchar(255) DEFAULT NULL,
  `course2` varchar(255) DEFAULT NULL,
  `course3` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `focusarea` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES ('school','Psychology','0000-00-00','html','css','javascript','david',NULL);
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `name` varchar(255) NOT NULL,
  `eventname` varchar(55) DEFAULT NULL,
  `contactid` int(11) DEFAULT NULL,
  `eventid` varchar(255) NOT NULL,
  PRIMARY KEY (`eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('david','Uption',1,''),('davidq1','OweYa1a',NULL,'david2');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goals`
--

DROP TABLE IF EXISTS `goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goals` (
  `name` varchar(255) DEFAULT NULL,
  `goal1` varchar(55) DEFAULT NULL,
  `goal2` varchar(55) DEFAULT NULL,
  `goal3` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goals`
--

LOCK TABLES `goals` WRITE;
/*!40000 ALTER TABLE `goals` DISABLE KEYS */;
INSERT INTO `goals` VALUES ('david','goal1','goal2','goal3');
/*!40000 ALTER TABLE `goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hobbies`
--

DROP TABLE IF EXISTS `hobbies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hobbies` (
  `name` varchar(255) NOT NULL,
  `hobby` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hobbies`
--

LOCK TABLES `hobbies` WRITE;
/*!40000 ALTER TABLE `hobbies` DISABLE KEYS */;
INSERT INTO `hobbies` VALUES ('david','Football'),('david','Basketball');
/*!40000 ALTER TABLE `hobbies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interviews` (
  `name` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `interviewid` varchar(255) NOT NULL,
  PRIMARY KEY (`interviewid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES ('david','oweyaas',NULL,'luke jenkins','notes',''),('davidaes','OweYaa','0000-00-00','Luke Jenkins1','notes','david1');
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `name` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `rating` int(10) DEFAULT NULL,
  `langid` varchar(255) NOT NULL,
  PRIMARY KEY (`langid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('david','english',5,'david1');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `name` varchar(255) NOT NULL DEFAULT '',
  `location` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `discussion` varchar(1000) DEFAULT NULL,
  `mentorname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES ('david','Mexico','davedataram@gmail.com','Tests','Luke Jenkins');
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `militaryusers`
--

DROP TABLE IF EXISTS `militaryusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `militaryusers` (
  `name` varchar(10) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `hobbies` varchar(80) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `militaryusers`
--

LOCK TABLES `militaryusers` WRITE;
/*!40000 ALTER TABLE `militaryusers` DISABLE KEYS */;
INSERT INTO `militaryusers` VALUES ('david','daviddataram@icloud.com','$2y$10$geehSmYyBdcM8jWRYftAAO8SNQxaxTKogJ6ef4k3cT5xOQJFpYme2','',NULL,0),('david1','david1','$2y$10$9FcRzM5ZDc.ySQuLvF9uEOcu0HCvd2./GHFYgsNPptR3liI6giH4m','',NULL,0),('david2','david2','$2y$10$PHwr1yYo7VcW7aqdsMCpuuR9zdEWBxxNHTIQkijWri8McEApY1Dl6','',NULL,0),('david325','david','$2y$10$MPqvfNwWT.1SS86t5ocx4O9m9/TfFGhN7wxELEv9rCOuzMg3BB7N6','',NULL,0);
/*!40000 ALTER TABLE `militaryusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `previouscareerfields`
--

DROP TABLE IF EXISTS `previouscareerfields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `previouscareerfields` (
  `careerid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `career` varchar(255) DEFAULT NULL,
  `employer` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`careerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `previouscareerfields`
--

LOCK TABLES `previouscareerfields` WRITE;
/*!40000 ALTER TABLE `previouscareerfields` DISABLE KEYS */;
INSERT INTO `previouscareerfields` VALUES ('david1','david','OweYaa','Luke',NULL,NULL),('david2','davidq','OweYaa','Luke','0000-00-00',NULL);
/*!40000 ALTER TABLE `previouscareerfields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programmingskills`
--

DROP TABLE IF EXISTS `programmingskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `programmingskills` (
  `name` varchar(255) DEFAULT NULL,
  `skill` varchar(55) DEFAULT NULL,
  `amount` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmingskills`
--

LOCK TABLES `programmingskills` WRITE;
/*!40000 ALTER TABLE `programmingskills` DISABLE KEYS */;
INSERT INTO `programmingskills` VALUES ('david','HTML',4),('david','Javascript',5),('david','PHP',2),('david','Wordpress',1);
/*!40000 ALTER TABLE `programmingskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skills` (
  `name` varchar(255) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `amount` int(9) DEFAULT NULL,
  `skillid` varchar(255) NOT NULL,
  PRIMARY KEY (`skillid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES ('david','html',5,'david1'),('david','css',5,'david2'),('david','css3',4,'david23'),('david','CSS3',3,'david3'),('david','react native',2,'david5');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social`
--

DROP TABLE IF EXISTS `social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social` (
  `name` varchar(255) NOT NULL,
  `linkedin` varchar(15) NOT NULL,
  `skype` varchar(20) NOT NULL,
  `blog` varchar(100) NOT NULL,
  `github` varchar(20) NOT NULL,
  `portfolio` varchar(100) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES ('david','linkedin','skype','blog','github','portfolio');
/*!40000 ALTER TABLE `social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` tinyint(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('David1','$2y$10$zQsUN1iIv9ki5XJF0aB23.CZwWfPalz8m64hyE57hlsVLcQfTCTxW',NULL,NULL),('David1','$2y$10$BNgKBw0glugK2JJbz7uYyuKog26jUPhRaOfIplR1YL/0rtdzUez3W',NULL,NULL),('David','$2y$10$hMfAytevYyNlaQW1pBVe1uVd8HSV42PlAmU8UAMSAZYAtfMgn0TQO',0,NULL),('David2','password',1,'davedataram@gmail.com'),('david3','$2y$10$3aNmeYtEq/H0LR7iQ9X8X.cRPFcXoEhSWelEvh7NM7d6wTJrTs6jC',0,'davedataram@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wantedskill`
--

DROP TABLE IF EXISTS `wantedskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wantedskill` (
  `name` varchar(255) DEFAULT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `skillid` varchar(255) NOT NULL,
  PRIMARY KEY (`skillid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wantedskill`
--

LOCK TABLES `wantedskill` WRITE;
/*!40000 ALTER TABLE `wantedskill` DISABLE KEYS */;
INSERT INTO `wantedskill` VALUES ('david','JAVA','david1'),('david','C++','david2'),('david','Hibernate','david3');
/*!40000 ALTER TABLE `wantedskill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-01 17:54:33
