-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: us-cdbr-iron-east-05.cleardb.net    Database: 
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
-- Current Database: `heroku_64154578bf3efff`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `heroku_64154578bf3efff` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `heroku_64154578bf3efff`;

--
-- Table structure for table `actiontask`
--

DROP TABLE IF EXISTS `actiontask`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actiontask` (
  `task` varchar(255) DEFAULT NULL,
  `completed` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL DEFAULT '',
  `taskid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`taskid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actiontask`
--

LOCK TABLES `actiontask` WRITE;
/*!40000 ALTER TABLE `actiontask` DISABLE KEYS */;
INSERT INTO `actiontask` VALUES (NULL,NULL,'daveadmin',''),(NULL,NULL,'dave2323','dave23230'),(NULL,NULL,'dave2323','dave23231'),(NULL,NULL,'dave23232131','dave232321310'),(NULL,NULL,'dave23232131','dave232321311'),(NULL,NULL,'dave325','dave3250'),(NULL,NULL,'dave325','dave3251'),(NULL,NULL,'daveadmin','daveadmin0'),(NULL,NULL,'daveadmin','daveadmin1'),(NULL,NULL,'JoeyC','JoeyC0'),(NULL,NULL,'JoeyC','JoeyC1');
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
  `username` varchar(255) DEFAULT NULL,
  `timeid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`timeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availability`
--

LOCK TABLES `availability` WRITE;
/*!40000 ALTER TABLE `availability` DISABLE KEYS */;
INSERT INTO `availability` VALUES ('Sunday','00:00:00','00:00:00','daveadmin','daveadmin0'),('Monday','00:00:00','00:00:00','daveadmin','daveadmin1'),('Tuesday','00:00:00','00:00:00','daveadmin','daveadmin2'),('Wednesday','00:00:00','00:00:00','daveadmin','daveadmin3'),('Thursday','00:00:00','00:00:00','daveadmin','daveadmin4'),('Friday','00:00:00','00:00:00','daveadmin','daveadmin5'),('Saturday','00:00:00','00:00:00','daveadmin','daveadmin6'),('Sunday','1:00:00','3:30:00','davetest','davetest0'),('Monday','1:30:00','6:00:00','davetest','davetest1'),('Tuesday','1:30:00','3:30:00','davetest','davetest2'),('Wednesday','3:00:00','5:30:00','davetest','davetest3'),('Thursday','2:00:00','5:00:00','davetest','davetest4'),('Friday','00:00:00','00:00:00','davetest','davetest5'),('Saturday','00:00:00','00:00:00','davetest','davetest6'),('Sunday','10:30:00','23:00:00','dave325','david1'),('Monday','20:00:00','20:00:00','dave325','david2'),('Tuesday','00:00:00','21:00:00','dave325','david3'),('Wednesday','00:00:00','00:00:00','dave325','david4'),('Thursday','00:00:00','00:00:00','dave325','david5'),('Friday','00:00:00','00:00:00','dave325','david6'),('Saturday','00:00:00','00:00:00','dave325','david7'),('Sunday','00:00:00','00:00:00','joey69','joey690'),('Monday','00:00:00','00:00:00','joey69','joey691'),('Tuesday','00:00:00','00:00:00','joey69','joey692'),('Wednesday','00:00:00','00:00:00','joey69','joey693'),('Thursday','00:00:00','00:00:00','joey69','joey694'),('Friday','00:00:00','00:00:00','joey69','joey695'),('Saturday','00:00:00','00:00:00','joey69','joey696'),('Sunday','0:00:00','0:30:00','joeyCheung','joeyCheung0'),('Monday','0:30:00','1:00:00','joeyCheung','joeyCheung1'),('Tuesday','1:00:00','1:30:00','joeyCheung','joeyCheung2'),('Wednesday','1:30:00','2:00:00','joeyCheung','joeyCheung3'),('Thursday','3:30:00','4:30:00','joeyCheung','joeyCheung4'),('Friday','5:00:00','20:00:00','joeyCheung','joeyCheung5'),('Saturday','22:30:00','6:00:00','joeyCheung','joeyCheung6');
/*!40000 ALTER TABLE `availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bootcamps`
--

DROP TABLE IF EXISTS `bootcamps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bootcamps` (
  `username` varchar(255) DEFAULT NULL,
  `bootcamp` varchar(255) DEFAULT NULL,
  `bootcampid` varchar(255) NOT NULL,
  PRIMARY KEY (`bootcampid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bootcamps`
--

LOCK TABLES `bootcamps` WRITE;
/*!40000 ALTER TABLE `bootcamps` DISABLE KEYS */;
INSERT INTO `bootcamps` VALUES ('bla','blabla',''),('bla','blabla','bla1'),('bla',NULL,'blabla'),('davetest','C4Q','davetest1'),('davetest','Army Bootcamp','davetest2'),('davidtest','C4Q33','david1');
/*!40000 ALTER TABLE `bootcamps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careergoals`
--

DROP TABLE IF EXISTS `careergoals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `careergoals` (
  `username` varchar(255) DEFAULT NULL,
  `goal` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careergoals`
--

LOCK TABLES `careergoals` WRITE;
/*!40000 ALTER TABLE `careergoals` DISABLE KEYS */;
INSERT INTO `careergoals` VALUES ('dave325','internship'),('dave325','job');
/*!40000 ALTER TABLE `careergoals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careersearch`
--

DROP TABLE IF EXISTS `careersearch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `careersearch` (
  `title` varchar(55) DEFAULT NULL,
  `status` varchar(55) DEFAULT NULL,
  `username` varchar(255) NOT NULL DEFAULT '',
  `careerid` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`careerid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careersearch`
--

LOCK TABLES `careersearch` WRITE;
/*!40000 ALTER TABLE `careersearch` DISABLE KEYS */;
INSERT INTO `careersearch` VALUES ('Web Developer','intern','david325',''),(NULL,NULL,'dave2323','dave23230'),(NULL,NULL,'dave2323','dave23231'),(NULL,NULL,'dave23232131','dave232321310'),(NULL,NULL,'dave23232131','dave232321311'),(NULL,NULL,'dave325','dave3250'),(NULL,NULL,'dave325','dave3251'),(NULL,NULL,'daveadmin','daveadmin0'),(NULL,NULL,'daveadmin','daveadmin1'),(NULL,NULL,'davetest','davetest0'),(NULL,NULL,'davetest','davetest1'),(NULL,NULL,'davetest1','davetest10'),(NULL,NULL,'davetest1','davetest11'),(NULL,NULL,'joey69','joey690'),(NULL,NULL,'joey69','joey691'),(NULL,NULL,'JoeyC','JoeyC0'),(NULL,NULL,'JoeyC','JoeyC1'),(NULL,NULL,'joeyCheung','joeyCheung0'),(NULL,NULL,'joeyCheung','joeyCheung1');
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
  `username` varchar(255) DEFAULT NULL,
  `certification` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`certid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certifications`
--

LOCK TABLES `certifications` WRITE;
/*!40000 ALTER TABLE `certifications` DISABLE KEYS */;
INSERT INTO `certifications` VALUES ('dave3251','dave325','adsf'),('david1','david','html');
/*!40000 ALTER TABLE `certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `matchNum` int(15) NOT NULL,
  `stripeToken` varchar(100) NOT NULL,
  `memberToken` varchar(20) NOT NULL,
  `companyPhone` varchar(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES ('$2y$10$3jusEmCGsRhNcjnUOYzMGOPCKjqJzGB1IVLiOenAhSfm/qrdxlJCi','david325','david',0,'','',''),('$2y$10$B/DrKRUEzWfGvUO04kwutOLlWG6NZUYqbPfRF8oDJRyfsBC846WzO','david','daviddataram@icloud.com',0,'','',''),('$2y$10$BzUWKOnKRhh2g/0unmLWRupplVfaEpc3NYuB3UyG6DGFWj0d0Wj.q','david325','david',0,'','',''),('$2y$10$JYBH2snlvAekSV1epxpiwuII.DfPf3r7PSLHBWW/XVUxhNvCch8.m','david325','david',0,'','',''),('dave1','David Dataram','example@example.com',0,'','','');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyfavorites`
--

DROP TABLE IF EXISTS `companyfavorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyfavorites` (
  `username` varchar(255) DEFAULT NULL,
  `internid` varchar(255) DEFAULT NULL,
  `favid` varchar(255) NOT NULL,
  PRIMARY KEY (`favid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyfavorites`
--

LOCK TABLES `companyfavorites` WRITE;
/*!40000 ALTER TABLE `companyfavorites` DISABLE KEYS */;
INSERT INTO `companyfavorites` VALUES ('dave1','davetest','dave11');
/*!40000 ALTER TABLE `companyfavorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyinfo`
--

DROP TABLE IF EXISTS `companyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyinfo` (
  `username` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `numofemployees` int(11) DEFAULT NULL,
  `diversity` varchar(255) DEFAULT NULL,
  `revenue` bigint(20) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `pointofcontact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyinfo`
--

LOCK TABLES `companyinfo` WRITE;
/*!40000 ALTER TABLE `companyinfo` DISABLE KEYS */;
INSERT INTO `companyinfo` VALUES ('dave1','sdfaas',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('dave325','David Dataram','david_dataram@aol.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('joeycheung1','joey cheung','joeycheung0@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `companyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyprojects`
--

DROP TABLE IF EXISTS `companyprojects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyprojects` (
  `username` varchar(255) DEFAULT NULL,
  `projectdetails` varchar(255) DEFAULT NULL,
  `projectrecieve` varchar(255) DEFAULT NULL,
  `projectmanager` varchar(255) DEFAULT NULL,
  `initiated` tinyint(255) DEFAULT NULL,
  `projid` varchar(255) NOT NULL,
  `ismatched` tinyint(255) DEFAULT NULL,
  `datesubmitted` varchar(255) DEFAULT NULL,
  `resources` varchar(255) DEFAULT NULL,
  `companyrfi` varchar(255) DEFAULT NULL,
  `deliverymethod` varchar(255) DEFAULT NULL,
  `completiondate` date DEFAULT NULL,
  `checkin` varchar(40) DEFAULT NULL,
  `companywebsite` varchar(255) DEFAULT NULL,
  `sentmessage` varchar(255) DEFAULT NULL,
  `messagedate` varchar(255) DEFAULT NULL,
  `purchasedhours` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `location` varchar(80) DEFAULT NULL,
  `industry` varchar(80) DEFAULT NULL,
  `internid` varchar(255) DEFAULT NULL,
  `internhours` int(50) DEFAULT NULL,
  PRIMARY KEY (`projid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyprojects`
--

LOCK TABLES `companyprojects` WRITE;
/*!40000 ALTER TABLE `companyprojects` DISABLE KEYS */;
INSERT INTO `companyprojects` VALUES ('dave1',NULL,NULL,NULL,NULL,'dave111',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `companyprojects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyprojjobinfo`
--

DROP TABLE IF EXISTS `companyprojjobinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyprojjobinfo` (
  `projid` varchar(255) NOT NULL,
  `jobtype` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `focusarea` varchar(255) DEFAULT NULL,
  `istemp` smallint(6) DEFAULT NULL,
  `projdescription` varchar(255) DEFAULT NULL,
  `projdeadline` date DEFAULT NULL,
  `isremote` smallint(6) DEFAULT NULL,
  `totalinternhours` int(11) DEFAULT NULL,
  `ismatched` smallint(6) DEFAULT NULL,
  `initiated` smallint(6) DEFAULT NULL,
  `datesubmitted` date DEFAULT NULL,
  `completed` smallint(6) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`projid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyprojjobinfo`
--

LOCK TABLES `companyprojjobinfo` WRITE;
/*!40000 ALTER TABLE `companyprojjobinfo` DISABLE KEYS */;
INSERT INTO `companyprojjobinfo` VALUES ('dave11','internship','designer','Interior Designer',NULL,NULL,'2018-04-12',0,45,NULL,NULL,NULL,NULL,NULL),('dave111','internship','marketing','Advertising',NULL,'adausdasydasida',NULL,1,435,NULL,1,NULL,NULL,'Adddd title'),('joeycheung10','internship','designer','UX Designer',1,NULL,'3214-12-12',0,12,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `companyprojjobinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyprojmanagerinfo`
--

DROP TABLE IF EXISTS `companyprojmanagerinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyprojmanagerinfo` (
  `projid` varchar(255) NOT NULL,
  `managername` varchar(255) DEFAULT NULL,
  `managerdept` varchar(255) DEFAULT NULL,
  `managercontact` varchar(255) DEFAULT NULL,
  `ismanager` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`projid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyprojmanagerinfo`
--

LOCK TABLES `companyprojmanagerinfo` WRITE;
/*!40000 ALTER TABLE `companyprojmanagerinfo` DISABLE KEYS */;
INSERT INTO `companyprojmanagerinfo` VALUES ('dave11','David',NULL,'davedataram@gmail.com',1),('dave111','df',NULL,'adsf',NULL),('joeycheung10','joey cheung',NULL,'joeycheung0@gmail.com',0);
/*!40000 ALTER TABLE `companyprojmanagerinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyprojskills`
--

DROP TABLE IF EXISTS `companyprojskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companyprojskills` (
  `skillid` varchar(255) NOT NULL,
  `skill` varchar(255) DEFAULT NULL,
  `projid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`skillid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyprojskills`
--

LOCK TABLES `companyprojskills` WRITE;
/*!40000 ALTER TABLE `companyprojskills` DISABLE KEYS */;
INSERT INTO `companyprojskills` VALUES ('dave10','skill1','dave11'),('dave11',' skill2','dave11'),('dave12',' skill3','dave11'),('dave13','asdfasdf','dave111'),('joeycheung10','agasg','joeycheung10');
/*!40000 ALTER TABLE `companyprojskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companysearch`
--

DROP TABLE IF EXISTS `companysearch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companysearch` (
  `username` varchar(255) DEFAULT NULL,
  `skillset` varchar(255) DEFAULT NULL,
  `expectedlocation` varchar(255) DEFAULT NULL,
  `physicallocation` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `searchid` varchar(255) NOT NULL,
  PRIMARY KEY (`searchid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companysearch`
--

LOCK TABLES `companysearch` WRITE;
/*!40000 ALTER TABLE `companysearch` DISABLE KEYS */;
/*!40000 ALTER TABLE `companysearch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactinfo`
--

DROP TABLE IF EXISTS `contactinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactinfo` (
  `firstname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `mos` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL DEFAULT '',
  `isVet` tinyint(1) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `longitude` int(11) DEFAULT NULL,
  `latitude` int(11) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactinfo`
--

LOCK TABLES `contactinfo` WRITE;
/*!40000 ALTER TABLE `contactinfo` DISABLE KEYS */;
INSERT INTO `contactinfo` VALUES (NULL,'',NULL,'49.34747 95.788229',NULL,NULL,NULL,'abayer',NULL,NULL,34,86,NULL),(NULL,'',NULL,'39.771564 105.4982',NULL,NULL,NULL,'abbigail.maggio',NULL,NULL,48,98,NULL),(NULL,'',NULL,'28.231751 112.202599',NULL,NULL,NULL,'abe12',NULL,NULL,31,98,NULL),(NULL,'',NULL,'45.253268 88.18951',NULL,NULL,NULL,'adela.bartell',NULL,NULL,40,113,NULL),(NULL,'',NULL,'28.635914 98.890637',NULL,NULL,NULL,'adela81',NULL,NULL,33,101,NULL),(NULL,'',NULL,'32.899627 101.589287',NULL,NULL,NULL,'ahmad.cruickshank',NULL,NULL,34,90,NULL),(NULL,'',NULL,'29.382319 87.776253',NULL,NULL,NULL,'aida46',NULL,NULL,42,116,NULL),(NULL,'',NULL,'48.835911 73.804637',NULL,NULL,NULL,'alberta64',NULL,NULL,33,105,NULL),(NULL,'',NULL,'36.168738 75.319037',NULL,NULL,NULL,'alessandro50',NULL,NULL,39,92,NULL),(NULL,'',NULL,'43.26888 83.765696',NULL,NULL,NULL,'alexandria.hoeger',NULL,NULL,33,80,NULL),(NULL,'',NULL,'25.946067 76.670666',NULL,NULL,NULL,'altenwerth.gonzalo',NULL,NULL,39,101,NULL),(NULL,'',NULL,'48.959701 112.132793',NULL,NULL,NULL,'alyson81',NULL,NULL,34,108,NULL),(NULL,'',NULL,'35.910595 95.156559',NULL,NULL,NULL,'amorar',NULL,NULL,49,105,NULL),(NULL,'',NULL,'35.678416 102.005975',NULL,NULL,NULL,'anastasia37',NULL,NULL,27,86,NULL),(NULL,'',NULL,'35.523196 119.403559',NULL,NULL,NULL,'anastasia47',NULL,NULL,28,110,NULL),(NULL,'',NULL,'45.726178 96.489178',NULL,NULL,NULL,'anderson.frami',NULL,NULL,35,112,NULL),(NULL,'',NULL,'37.517454 106.889453',NULL,NULL,NULL,'andre.pouros',NULL,NULL,39,74,NULL),(NULL,'',NULL,'46.697172 119.266978',NULL,NULL,NULL,'aniya41',NULL,NULL,39,79,NULL),(NULL,'',NULL,'26.033915 118.42105',NULL,NULL,NULL,'ansley63',NULL,NULL,40,118,NULL),(NULL,'',NULL,'33.810658 80.135362',NULL,NULL,NULL,'ariane08',NULL,NULL,41,106,NULL),(NULL,'',NULL,'45.074765 80.059282',NULL,NULL,NULL,'arnaldo.wisozk',NULL,NULL,38,81,NULL),(NULL,'',NULL,'39.786272 86.272921',NULL,NULL,NULL,'asa.hegmann',NULL,NULL,32,105,NULL),(NULL,'',NULL,'47.557647 92.591314',NULL,NULL,NULL,'austin.kshlerin',NULL,NULL,41,109,NULL),(NULL,'',NULL,'31.923753 76.88762',NULL,NULL,NULL,'aylin46',NULL,NULL,47,104,NULL),(NULL,'',NULL,'39.017454 106.649992',NULL,NULL,NULL,'bahringer.chesley',NULL,NULL,32,106,NULL),(NULL,'',NULL,'40.663049 88.269689',NULL,NULL,NULL,'barton.george',NULL,NULL,29,114,NULL),(NULL,'',NULL,'28.684596 80.600713',NULL,NULL,NULL,'baumbach.dudley',NULL,NULL,40,87,NULL),(NULL,'',NULL,'27.647998 119.010005',NULL,NULL,NULL,'baumbach.geovany',NULL,NULL,49,81,NULL),(NULL,'',NULL,'41.795349 87.247299',NULL,NULL,NULL,'bayer.kylie',NULL,NULL,30,109,NULL),(NULL,'',NULL,'40.135493 76.471815',NULL,NULL,NULL,'bcasper',NULL,NULL,44,80,NULL),(NULL,'',NULL,'49.955744 112.626177',NULL,NULL,NULL,'becker.bonita',NULL,NULL,25,77,NULL),(NULL,'',NULL,'28.122334 104.32719',NULL,NULL,NULL,'berge.darron',NULL,NULL,28,95,NULL),(NULL,'',NULL,'37.925018 118.797992',NULL,NULL,NULL,'bernie.christiansen',NULL,NULL,47,106,NULL),(NULL,'',NULL,'40.088818 71.427258',NULL,NULL,NULL,'bernier.giuseppe',NULL,NULL,50,89,NULL),(NULL,'',NULL,'38.671373 114.163359',NULL,NULL,NULL,'berry.bosco',NULL,NULL,31,86,NULL),(NULL,'',NULL,'49.085582 79.460409',NULL,NULL,NULL,'bertram.gusikowski',NULL,NULL,42,110,NULL),(NULL,'',NULL,'26.892482 110.722679',NULL,NULL,NULL,'bo49',NULL,NULL,45,104,NULL),(NULL,'',NULL,'35.68935 84.223902',NULL,NULL,NULL,'bode.jamar',NULL,NULL,28,73,NULL),(NULL,'',NULL,'33.209505 107.834124',NULL,NULL,NULL,'bogisich.elena',NULL,NULL,35,71,NULL),(NULL,'',NULL,'30.115838 77.864223',NULL,NULL,NULL,'bogisich.elisha',NULL,NULL,39,72,NULL),(NULL,'',NULL,'32.223291 94.572867',NULL,NULL,NULL,'bosco.alison',NULL,NULL,29,112,NULL),(NULL,'',NULL,'33.905819 105.982971',NULL,NULL,NULL,'bosco.kevin',NULL,NULL,46,93,NULL),(NULL,'',NULL,'27.651927 108.665844',NULL,NULL,NULL,'botsford.aurore',NULL,NULL,28,79,NULL),(NULL,'',NULL,'26.923331 83.202038',NULL,NULL,NULL,'boyer.jean',NULL,NULL,39,109,NULL),(NULL,'',NULL,'41.927618 88.79769',NULL,NULL,NULL,'boyer.titus',NULL,NULL,36,90,NULL),(NULL,'',NULL,'42.053476 73.624149',NULL,NULL,NULL,'boyle.kayli',NULL,NULL,26,108,NULL),(NULL,'',NULL,'43.767252 83.0321',NULL,NULL,NULL,'bpowlowski',NULL,NULL,31,72,NULL),(NULL,'',NULL,'40.611437 98.432098',NULL,NULL,NULL,'bradley.morissette',NULL,NULL,49,86,NULL),(NULL,'',NULL,'27.467407 96.939961',NULL,NULL,NULL,'braun.jacynthe',NULL,NULL,43,102,NULL),(NULL,'',NULL,'43.87311 119.289125',NULL,NULL,NULL,'bridgette29',NULL,NULL,27,71,NULL),(NULL,'',NULL,'41.686197 109.826224',NULL,NULL,NULL,'brigitte.osinski',NULL,NULL,26,118,NULL),(NULL,'',NULL,'45.444579 74.937346',NULL,NULL,NULL,'buckridge.guadalupe',NULL,NULL,42,76,NULL),(NULL,'',NULL,'38.862695 89.619006',NULL,NULL,NULL,'bud74',NULL,NULL,26,101,NULL),(NULL,'',NULL,'37.189174 77.441887',NULL,NULL,NULL,'casandra.hermiston',NULL,NULL,37,85,NULL),(NULL,'',NULL,'34.684773 86.233034',NULL,NULL,NULL,'cathy.ward',NULL,NULL,48,77,NULL),(NULL,'',NULL,'29.154588 107.72547',NULL,NULL,NULL,'cbayer',NULL,NULL,43,109,NULL),(NULL,'',NULL,'36.608999 84.558316',NULL,NULL,NULL,'cesar.runolfsson',NULL,NULL,25,96,NULL),(NULL,'',NULL,'42.941522 108.781209',NULL,NULL,NULL,'charlotte45',NULL,NULL,26,118,NULL),(NULL,'',NULL,'30.926102 101.94605',NULL,NULL,NULL,'chase23',NULL,NULL,37,113,NULL),(NULL,'',NULL,'29.93574 75.258537',NULL,NULL,NULL,'claude.quitzon',NULL,NULL,37,119,NULL),(NULL,'',NULL,'29.523357 118.253171',NULL,NULL,NULL,'clifford.abbott',NULL,NULL,31,105,NULL),(NULL,'',NULL,'32.371912 80.807699',NULL,NULL,NULL,'colten96',NULL,NULL,41,120,NULL),(NULL,'',NULL,'35.49405 108.329179',NULL,NULL,NULL,'cormier.melisa',NULL,NULL,28,87,NULL),(NULL,'',NULL,'38.068473 81.784432',NULL,NULL,NULL,'corrine.schmeler',NULL,NULL,43,74,NULL),(NULL,'',NULL,'40.616076 106.566529',NULL,NULL,NULL,'crist.seamus',NULL,NULL,46,114,NULL),(NULL,'',NULL,'31.03873 71.75649',NULL,NULL,NULL,'cristian.muller',NULL,NULL,31,75,NULL),(NULL,'',NULL,'41.459358 88.167575',NULL,NULL,NULL,'csteuber',NULL,NULL,49,81,NULL),(NULL,'',NULL,'36.583594 93.726429',NULL,NULL,NULL,'dach.darius',NULL,NULL,35,72,NULL),(NULL,'',NULL,'29.525802 100.040959',NULL,NULL,NULL,'dale54',NULL,NULL,41,100,NULL),(NULL,'',NULL,'35.088894 76.837575',NULL,NULL,NULL,'damore.erin',NULL,NULL,32,118,NULL),(NULL,'',NULL,'32.992156 70.254699',NULL,NULL,NULL,'dana.emmerich',NULL,NULL,42,102,NULL),(NULL,'',NULL,'40.145402 77.099404',NULL,NULL,NULL,'daniella.altenwerth',NULL,NULL,47,73,NULL),('David 4','davedataram@gmail.com','3479860617','New York, NY 2','No','Marines',NULL,'davetest',1,'No',48,78,'Dataram 2'),(NULL,'',NULL,'45.588723 96.707092',NULL,NULL,NULL,'deanna71',NULL,NULL,37,94,NULL),(NULL,'',NULL,'48.834702 116.866511',NULL,NULL,NULL,'deja.jones',NULL,NULL,50,80,NULL),(NULL,'',NULL,'26.775407 102.168579',NULL,NULL,NULL,'delta.bergnaum',NULL,NULL,43,116,NULL),(NULL,'',NULL,'33.490393 89.715485',NULL,NULL,NULL,'dibbert.jennings',NULL,NULL,25,94,NULL),(NULL,'',NULL,'43.388136 92.842091',NULL,NULL,NULL,'dmurazik',NULL,NULL,37,71,NULL),(NULL,'',NULL,'42.526085 100.975148',NULL,NULL,NULL,'dmurphy',NULL,NULL,44,70,NULL),(NULL,'',NULL,'33.274668 72.002273',NULL,NULL,NULL,'domenico99',NULL,NULL,43,98,NULL),(NULL,'',NULL,'28.554939 85.489071',NULL,NULL,NULL,'don74',NULL,NULL,45,103,NULL),(NULL,'',NULL,'46.136548 84.456356',NULL,NULL,NULL,'donnelly.esther',NULL,NULL,48,92,NULL),(NULL,'',NULL,'35.538314 77.346461',NULL,NULL,NULL,'doug.turner',NULL,NULL,33,78,NULL),(NULL,'',NULL,'44.753827 111.808173',NULL,NULL,NULL,'dstrosin',NULL,NULL,26,73,NULL),(NULL,'',NULL,'46.292355 85.816462',NULL,NULL,NULL,'ebert.autumn',NULL,NULL,28,73,NULL),(NULL,'',NULL,'33.03381 116.799021',NULL,NULL,NULL,'eboyle',NULL,NULL,35,105,NULL),(NULL,'',NULL,'43.643299 81.443214',NULL,NULL,NULL,'edyth04',NULL,NULL,41,120,NULL),(NULL,'',NULL,'38.743497 70.399063',NULL,NULL,NULL,'ehowe',NULL,NULL,30,91,NULL),(NULL,'',NULL,'27.31027 88.862351',NULL,NULL,NULL,'eichmann.orlo',NULL,NULL,40,86,NULL),(NULL,'',NULL,'33.612412 97.478862',NULL,NULL,NULL,'eino51',NULL,NULL,31,90,NULL),(NULL,'',NULL,'49.714827 81.810614',NULL,NULL,NULL,'eleonore09',NULL,NULL,37,74,NULL),(NULL,'',NULL,'26.01334 110.180876',NULL,NULL,NULL,'elizabeth54',NULL,NULL,49,77,NULL),(NULL,'',NULL,'34.059541 112.945862',NULL,NULL,NULL,'elmira.ryan',NULL,NULL,25,116,NULL),(NULL,'',NULL,'47.888561 70.711344',NULL,NULL,NULL,'emery52',NULL,NULL,49,86,NULL),(NULL,'',NULL,'26.733012 118.551869',NULL,NULL,NULL,'emiliano52',NULL,NULL,43,107,NULL),(NULL,'',NULL,'28.544466 78.85359',NULL,NULL,NULL,'ena.paucek',NULL,NULL,32,74,NULL),(NULL,'',NULL,'28.327763 105.22702',NULL,NULL,NULL,'enid.daugherty',NULL,NULL,42,100,NULL),(NULL,'',NULL,'34.923735 78.7677',NULL,NULL,NULL,'erick16',NULL,NULL,31,89,NULL),(NULL,'',NULL,'46.944908 115.844047',NULL,NULL,NULL,'ernser.ronny',NULL,NULL,32,83,NULL),(NULL,'',NULL,'30.138768 99.705098',NULL,NULL,NULL,'esperanza64',NULL,NULL,40,96,NULL),(NULL,'',NULL,'37.003936 95.84278',NULL,NULL,NULL,'estel45',NULL,NULL,49,110,NULL),(NULL,'',NULL,'29.243949 109.820095',NULL,NULL,NULL,'fannie.muller',NULL,NULL,45,95,NULL),(NULL,'',NULL,'47.723396 81.141768',NULL,NULL,NULL,'felipa97',NULL,NULL,26,102,NULL),(NULL,'',NULL,'48.070603 101.308225',NULL,NULL,NULL,'flatley.wendy',NULL,NULL,44,117,NULL),(NULL,'',NULL,'36.922774 83.952686',NULL,NULL,NULL,'fleta.romaguera',NULL,NULL,27,93,NULL),(NULL,'',NULL,'29.023844 112.993234',NULL,NULL,NULL,'florian.romaguera',NULL,NULL,47,93,NULL),(NULL,'',NULL,'49.434533 102.912571',NULL,NULL,NULL,'florida47',NULL,NULL,39,87,NULL),(NULL,'',NULL,'35.016024 87.331674',NULL,NULL,NULL,'ford.lynch',NULL,NULL,42,85,NULL),(NULL,'',NULL,'32.901348 91.055467',NULL,NULL,NULL,'frida11',NULL,NULL,39,72,NULL),(NULL,'',NULL,'43.02662 102.464965',NULL,NULL,NULL,'gaylord.casey',NULL,NULL,47,99,NULL),(NULL,'',NULL,'35.450684 95.716686',NULL,NULL,NULL,'gbalistreri',NULL,NULL,30,81,NULL),(NULL,'',NULL,'31.592561 105.571833',NULL,NULL,NULL,'gleichner.janis',NULL,NULL,31,117,NULL),(NULL,'',NULL,'29.150842 104.654296',NULL,NULL,NULL,'gloria.koch',NULL,NULL,48,71,NULL),(NULL,'',NULL,'30.62029 94.908526',NULL,NULL,NULL,'gmurphy',NULL,NULL,37,116,NULL),(NULL,'',NULL,'45.994563 107.949479',NULL,NULL,NULL,'gpowlowski',NULL,NULL,40,71,NULL),(NULL,'',NULL,'37.447822 101.086448',NULL,NULL,NULL,'grant.jocelyn',NULL,NULL,35,73,NULL),(NULL,'',NULL,'30.382203 81.212566',NULL,NULL,NULL,'growe',NULL,NULL,43,106,NULL),(NULL,'',NULL,'40.834056 86.271229',NULL,NULL,NULL,'gstreich',NULL,NULL,35,77,NULL),(NULL,'',NULL,'37.146865 116.936971',NULL,NULL,NULL,'gustave.schulist',NULL,NULL,36,85,NULL),(NULL,'',NULL,'44.619153 98.910618',NULL,NULL,NULL,'hank.herman',NULL,NULL,38,118,NULL),(NULL,'',NULL,'41.925187 106.615157',NULL,NULL,NULL,'hdickinson',NULL,NULL,35,100,NULL),(NULL,'',NULL,'39.936264 114.420155',NULL,NULL,NULL,'heaney.dorris',NULL,NULL,36,105,NULL),(NULL,'',NULL,'39.282577 98.878695',NULL,NULL,NULL,'heller.andreane',NULL,NULL,33,79,NULL),(NULL,'',NULL,'29.81091 117.798426',NULL,NULL,NULL,'herbert.ohara',NULL,NULL,27,98,NULL),(NULL,'',NULL,'31.723672 76.518792',NULL,NULL,NULL,'hosea71',NULL,NULL,37,74,NULL),(NULL,'',NULL,'44.171373 93.464277',NULL,NULL,NULL,'howe.constance',NULL,NULL,49,109,NULL),(NULL,'',NULL,'35.860623 96.296479',NULL,NULL,NULL,'humberto62',NULL,NULL,40,88,NULL),(NULL,'',NULL,'35.021459 97.358882',NULL,NULL,NULL,'hyman01',NULL,NULL,48,76,NULL),(NULL,'',NULL,'33.705961 79.072031',NULL,NULL,NULL,'iking',NULL,NULL,49,108,NULL),(NULL,'',NULL,'33.985841 102.965454',NULL,NULL,NULL,'irving.beahan',NULL,NULL,43,116,NULL),(NULL,'',NULL,'33.086099 74.09876',NULL,NULL,NULL,'isabel.schuppe',NULL,NULL,28,93,NULL),(NULL,'',NULL,'41.212795 111.443013',NULL,NULL,NULL,'isabelle.dubuque',NULL,NULL,40,77,NULL),(NULL,'',NULL,'38.477351 112.559145',NULL,NULL,NULL,'jabbott',NULL,NULL,25,89,NULL),(NULL,'',NULL,'49.577637 79.425417',NULL,NULL,NULL,'jacquelyn.lockman',NULL,NULL,28,116,NULL),(NULL,'',NULL,'45.155282 98.785284',NULL,NULL,NULL,'jamal94',NULL,NULL,49,94,NULL),(NULL,'',NULL,'34.599017 97.804275',NULL,NULL,NULL,'janet.reichel',NULL,NULL,31,104,NULL),(NULL,'',NULL,'28.789141 103.853046',NULL,NULL,NULL,'jaskolski.geovanni',NULL,NULL,41,102,NULL),(NULL,'',NULL,'39.343627 75.095768',NULL,NULL,NULL,'jazmin14',NULL,NULL,46,117,NULL),(NULL,'',NULL,'44.104174 99.155428',NULL,NULL,NULL,'jeff.schmitt',NULL,NULL,44,117,NULL),(NULL,'',NULL,'45.35433 84.512463',NULL,NULL,NULL,'jheller',NULL,NULL,27,108,NULL),(NULL,'',NULL,'39.959679 95.622263',NULL,NULL,NULL,'jkoelpin',NULL,NULL,29,96,NULL),(NULL,'',NULL,'31.525874 107.132314',NULL,NULL,NULL,'jkulas',NULL,NULL,34,86,NULL),(NULL,'',NULL,'45.946662 76.667168',NULL,NULL,NULL,'joana.douglas',NULL,NULL,37,97,NULL),(NULL,'joeycheung0@gmail.com',NULL,NULL,NULL,NULL,NULL,'joey69',NULL,NULL,NULL,NULL,NULL),(NULL,'joeycheung0@gmail.com',NULL,NULL,NULL,NULL,NULL,'JoeyC',NULL,NULL,NULL,NULL,NULL),('Joey','joeycheung0@gmail.com',NULL,'queens college',NULL,NULL,NULL,'joeyCheung',0,'Spouse',NULL,NULL,'Cheung'),(NULL,'',NULL,'29.319829 71.292921',NULL,NULL,NULL,'josephine.mitchell',NULL,NULL,33,89,NULL),(NULL,'',NULL,'39.892522 118.502951',NULL,NULL,NULL,'jromaguera',NULL,NULL,35,91,NULL),(NULL,'',NULL,'41.820024 109.590872',NULL,NULL,NULL,'julie.kris',NULL,NULL,28,85,NULL),(NULL,'',NULL,'47.124412 85.470624',NULL,NULL,NULL,'jwilkinson',NULL,NULL,42,120,NULL),(NULL,'',NULL,'25.6511 98.116646',NULL,NULL,NULL,'jwilliamson',NULL,NULL,25,92,NULL),(NULL,'',NULL,'25.380608 98.305918',NULL,NULL,NULL,'kaia.daniel',NULL,NULL,34,94,NULL),(NULL,'',NULL,'29.835695 70.88752',NULL,NULL,NULL,'karley.oberbrunner',NULL,NULL,31,116,NULL),(NULL,'',NULL,'26.041501 103.359399',NULL,NULL,NULL,'kaycee34',NULL,NULL,39,86,NULL),(NULL,'',NULL,'37.33754 80.728796',NULL,NULL,NULL,'kbrekke',NULL,NULL,45,111,NULL),(NULL,'',NULL,'39.451501 109.754672',NULL,NULL,NULL,'keegan39',NULL,NULL,38,103,NULL),(NULL,'',NULL,'40.1106 106.71115',NULL,NULL,NULL,'kelley.fay',NULL,NULL,44,94,NULL),(NULL,'',NULL,'45.157079 106.373708',NULL,NULL,NULL,'kelsie.hilll',NULL,NULL,37,103,NULL),(NULL,'',NULL,'30.175103 75.531728',NULL,NULL,NULL,'kemmer.makenzie',NULL,NULL,38,104,NULL),(NULL,'',NULL,'40.339263 119.154994',NULL,NULL,NULL,'kenya48',NULL,NULL,37,85,NULL),(NULL,'',NULL,'26.545963 119.460036',NULL,NULL,NULL,'kiara.schaden',NULL,NULL,36,110,NULL),(NULL,'',NULL,'28.575151 110.346758',NULL,NULL,NULL,'klemke',NULL,NULL,28,85,NULL),(NULL,'',NULL,'42.773195 83.17608',NULL,NULL,NULL,'kmarvin',NULL,NULL,37,82,NULL),(NULL,'',NULL,'41.948607 74.06439',NULL,NULL,NULL,'kohler.edison',NULL,NULL,31,92,NULL),(NULL,'',NULL,'28.817609 95.199079',NULL,NULL,NULL,'krajcik.amely',NULL,NULL,32,120,NULL),(NULL,'',NULL,'34.49302 81.220391',NULL,NULL,NULL,'kristy.reinger',NULL,NULL,41,116,NULL),(NULL,'',NULL,'37.526938 90.671155',NULL,NULL,NULL,'kulas.bethany',NULL,NULL,44,83,NULL),(NULL,'',NULL,'35.627563 111.88463',NULL,NULL,NULL,'lakin.clotilde',NULL,NULL,42,74,NULL),(NULL,'',NULL,'37.465707 87.213315',NULL,NULL,NULL,'ledner.colten',NULL,NULL,48,81,NULL),(NULL,'',NULL,'28.548504 98.431765',NULL,NULL,NULL,'leffler.stuart',NULL,NULL,26,75,NULL),(NULL,'',NULL,'36.913658 71.727648',NULL,NULL,NULL,'leonor.quitzon',NULL,NULL,38,101,NULL),(NULL,'',NULL,'48.088095 111.427502',NULL,NULL,NULL,'lesch.jerel',NULL,NULL,34,90,NULL),(NULL,'',NULL,'49.681834 103.54257',NULL,NULL,NULL,'liana96',NULL,NULL,33,72,NULL),(NULL,'',NULL,'34.154916 75.38544',NULL,NULL,NULL,'littel.cleo',NULL,NULL,36,112,NULL),(NULL,'',NULL,'41.870303 105.11443',NULL,NULL,NULL,'little.barton',NULL,NULL,37,101,NULL),(NULL,'',NULL,'31.335537 73.411782',NULL,NULL,NULL,'little.imogene',NULL,NULL,46,111,NULL),(NULL,'',NULL,'30.279685 103.450626',NULL,NULL,NULL,'lockman.kailee',NULL,NULL,42,71,NULL),(NULL,'',NULL,'36.190208 80.019634',NULL,NULL,NULL,'lonny06',NULL,NULL,29,120,NULL),(NULL,'',NULL,'32.006874 92.948628',NULL,NULL,NULL,'ltoy',NULL,NULL,37,84,NULL),(NULL,'',NULL,'46.334287 104.821359',NULL,NULL,NULL,'luz.douglas',NULL,NULL,44,104,NULL),(NULL,'',NULL,'47.780018 85.834687',NULL,NULL,NULL,'mackenzie17',NULL,NULL,38,103,NULL),(NULL,'',NULL,'45.328753 106.14289',NULL,NULL,NULL,'malcolm.leuschke',NULL,NULL,34,76,NULL),(NULL,'',NULL,'30.742735 111.419708',NULL,NULL,NULL,'maritza.kessler',NULL,NULL,48,110,NULL),(NULL,'',NULL,'40.62983 103.351705',NULL,NULL,NULL,'marks.ezequiel',NULL,NULL,40,72,NULL),(NULL,'',NULL,'28.994706 73.100253',NULL,NULL,NULL,'marvin.earnestine',NULL,NULL,41,79,NULL),(NULL,'',NULL,'33.512409 87.184119',NULL,NULL,NULL,'maryjane24',NULL,NULL,28,115,NULL),(NULL,'',NULL,'38.081987 91.57547',NULL,NULL,NULL,'mateo.anderson',NULL,NULL,40,109,NULL),(NULL,'',NULL,'27.816001 78.55384',NULL,NULL,NULL,'mavis72',NULL,NULL,26,88,NULL),(NULL,'',NULL,'29.292299 114.46631',NULL,NULL,NULL,'mayer.irwin',NULL,NULL,26,81,NULL),(NULL,'',NULL,'28.679294 91.326165',NULL,NULL,NULL,'mayer.lydia',NULL,NULL,26,84,NULL),(NULL,'',NULL,'48.802793 79.105749',NULL,NULL,NULL,'meggie33',NULL,NULL,34,71,NULL),(NULL,'',NULL,'49.534153 87.683599',NULL,NULL,NULL,'meghan.torp',NULL,NULL,44,113,NULL),(NULL,'',NULL,'40.350895 82.216713',NULL,NULL,NULL,'melany29',NULL,NULL,46,80,NULL),(NULL,'',NULL,'29.847635 104.183151',NULL,NULL,NULL,'melba.gleason',NULL,NULL,27,86,NULL),(NULL,'',NULL,'31.006385 84.59348',NULL,NULL,NULL,'meta.stracke',NULL,NULL,32,83,NULL),(NULL,'',NULL,'40.401339 92.749646',NULL,NULL,NULL,'michaela.koss',NULL,NULL,36,76,NULL),(NULL,'',NULL,'26.573972 91.967582',NULL,NULL,NULL,'michel57',NULL,NULL,46,95,NULL),(NULL,'',NULL,'31.546146 104.295557',NULL,NULL,NULL,'miller.elton',NULL,NULL,28,80,NULL),(NULL,'',NULL,'37.191857 103.606858',NULL,NULL,NULL,'milo.lindgren',NULL,NULL,43,75,NULL),(NULL,'',NULL,'43.09184 112.52208',NULL,NULL,NULL,'mohammed47',NULL,NULL,40,80,NULL),(NULL,'',NULL,'29.046667 70.625823',NULL,NULL,NULL,'monty.rutherford',NULL,NULL,32,83,NULL),(NULL,'',NULL,'44.541238 87.801319',NULL,NULL,NULL,'mraz.bell',NULL,NULL,37,88,NULL),(NULL,'',NULL,'46.70916 106.267591',NULL,NULL,NULL,'mrunolfsdottir',NULL,NULL,32,85,NULL),(NULL,'',NULL,'40.317374 97.030466',NULL,NULL,NULL,'mspinka',NULL,NULL,45,76,NULL),(NULL,'',NULL,'32.316838 85.988581',NULL,NULL,NULL,'myriam.krajcik',NULL,NULL,48,72,NULL),(NULL,'',NULL,'42.102375 88.270863',NULL,NULL,NULL,'nayeli04',NULL,NULL,32,81,NULL),(NULL,'',NULL,'31.843492 117.255029',NULL,NULL,NULL,'nicole.feeney',NULL,NULL,43,71,NULL),(NULL,'',NULL,'44.040288 79.207264',NULL,NULL,NULL,'nokon',NULL,NULL,45,111,NULL),(NULL,'',NULL,'48.312947 80.635468',NULL,NULL,NULL,'nshields',NULL,NULL,43,110,NULL),(NULL,'',NULL,'35.59563 76.587551',NULL,NULL,NULL,'ntoy',NULL,NULL,41,107,NULL),(NULL,'',NULL,'46.123919 95.908355',NULL,NULL,NULL,'obeer',NULL,NULL,44,92,NULL),(NULL,'',NULL,'43.301403 112.561414',NULL,NULL,NULL,'oberbrunner.gabrielle',NULL,NULL,25,77,NULL),(NULL,'',NULL,'28.508245 103.430283',NULL,NULL,NULL,'okuneva.murphy',NULL,NULL,46,107,NULL),(NULL,'',NULL,'45.691869 112.499788',NULL,NULL,NULL,'olson.leann',NULL,NULL,41,94,NULL),(NULL,'',NULL,'32.693966 98.40063',NULL,NULL,NULL,'oma.marvin',NULL,NULL,46,75,NULL),(NULL,'',NULL,'34.225699 79.802568',NULL,NULL,NULL,'orn.mauricio',NULL,NULL,47,112,NULL),(NULL,'',NULL,'32.714123 76.571752',NULL,NULL,NULL,'osborne98',NULL,NULL,37,99,NULL),(NULL,'',NULL,'40.771528 114.072488',NULL,NULL,NULL,'oscar48',NULL,NULL,37,97,NULL),(NULL,'',NULL,'33.448186 81.445023',NULL,NULL,NULL,'pagac.mckenna',NULL,NULL,32,83,NULL),(NULL,'',NULL,'31.73472 115.553656',NULL,NULL,NULL,'pagac.velva',NULL,NULL,39,119,NULL),(NULL,'',NULL,'49.290069 94.466376',NULL,NULL,NULL,'pedro87',NULL,NULL,25,76,NULL),(NULL,'',NULL,'41.801215 118.848397',NULL,NULL,NULL,'perry.treutel',NULL,NULL,38,94,NULL),(NULL,'',NULL,'44.384756 99.585357',NULL,NULL,NULL,'pete06',NULL,NULL,41,76,NULL),(NULL,'',NULL,'43.082514 109.814911',NULL,NULL,NULL,'pfeffer.phoebe',NULL,NULL,27,88,NULL),(NULL,'',NULL,'29.403265 74.463007',NULL,NULL,NULL,'porn',NULL,NULL,48,110,NULL),(NULL,'',NULL,'26.837958 113.699576',NULL,NULL,NULL,'pouros.anastasia',NULL,NULL,37,85,NULL),(NULL,'',NULL,'36.012998 115.627973',NULL,NULL,NULL,'pouros.daija',NULL,NULL,32,70,NULL),(NULL,'',NULL,'48.369689 111.442715',NULL,NULL,NULL,'qhermiston',NULL,NULL,45,71,NULL),(NULL,'',NULL,'32.755626 73.646269',NULL,NULL,NULL,'qkling',NULL,NULL,49,90,NULL),(NULL,'',NULL,'30.367121 108.33774',NULL,NULL,NULL,'qkub',NULL,NULL,30,102,NULL),(NULL,'',NULL,'31.29405 85.506851',NULL,NULL,NULL,'qpagac',NULL,NULL,32,102,NULL),(NULL,'',NULL,'43.335605 80.026371',NULL,NULL,NULL,'qprosacco',NULL,NULL,35,103,NULL),(NULL,'',NULL,'35.602962 95.003327',NULL,NULL,NULL,'queenie37',NULL,NULL,41,104,NULL),(NULL,'',NULL,'29.619118 103.138392',NULL,NULL,NULL,'ramona82',NULL,NULL,30,94,NULL),(NULL,'',NULL,'33.405448 108.261357',NULL,NULL,NULL,'ratke.roel',NULL,NULL,37,72,NULL),(NULL,'',NULL,'30.272731 115.243259',NULL,NULL,NULL,'rcorwin',NULL,NULL,25,76,NULL),(NULL,'',NULL,'28.281502 112.309091',NULL,NULL,NULL,'rick01',NULL,NULL,47,88,NULL),(NULL,'',NULL,'46.440911 81.187972',NULL,NULL,NULL,'river.jones',NULL,NULL,28,98,NULL),(NULL,'',NULL,'46.923547 80.997387',NULL,NULL,NULL,'robel.nellie',NULL,NULL,30,97,NULL),(NULL,'',NULL,'37.736945 95.434864',NULL,NULL,NULL,'rodolfo.wisoky',NULL,NULL,27,100,NULL),(NULL,'',NULL,'30.291382 79.798204',NULL,NULL,NULL,'rolando.schmeler',NULL,NULL,43,84,NULL),(NULL,'',NULL,'36.276012 93.816046',NULL,NULL,NULL,'romaguera.ila',NULL,NULL,34,117,NULL),(NULL,'',NULL,'30.711761 119.622001',NULL,NULL,NULL,'rossie.parker',NULL,NULL,45,84,NULL),(NULL,'',NULL,'35.327071 117.064756',NULL,NULL,NULL,'rusty91',NULL,NULL,34,110,NULL),(NULL,'',NULL,'38.547898 80.214432',NULL,NULL,NULL,'sandrine29',NULL,NULL,32,103,NULL),(NULL,'',NULL,'32.453296 85.588346',NULL,NULL,NULL,'satterfield.chaz',NULL,NULL,31,75,NULL),(NULL,'',NULL,'34.693647 98.945136',NULL,NULL,NULL,'satterfield.fabian',NULL,NULL,41,88,NULL),(NULL,'',NULL,'25.737105 100.441892',NULL,NULL,NULL,'savanna17',NULL,NULL,46,93,NULL),(NULL,'',NULL,'42.126074 79.881124',NULL,NULL,NULL,'sbashirian',NULL,NULL,26,87,NULL),(NULL,'',NULL,'30.713907 99.295203',NULL,NULL,NULL,'schamberger.charlene',NULL,NULL,39,84,NULL),(NULL,'',NULL,'48.033029 88.862589',NULL,NULL,NULL,'sdurgan',NULL,NULL,31,110,NULL),(NULL,'',NULL,'29.736954 92.586598',NULL,NULL,NULL,'shields.nils',NULL,NULL,42,98,NULL),(NULL,'',NULL,'31.423025 84.135191',NULL,NULL,NULL,'shudson',NULL,NULL,36,84,NULL),(NULL,'',NULL,'26.751872 108.48425',NULL,NULL,NULL,'sierra.hagenes',NULL,NULL,45,102,NULL),(NULL,'',NULL,'28.062891 88.602402',NULL,NULL,NULL,'sjacobi',NULL,NULL,35,95,NULL),(NULL,'',NULL,'46.022764 101.917272',NULL,NULL,NULL,'sporer.tamara',NULL,NULL,36,96,NULL),(NULL,'',NULL,'44.964432 105.099049',NULL,NULL,NULL,'stephon95',NULL,NULL,44,89,NULL),(NULL,'',NULL,'47.454941 105.122366',NULL,NULL,NULL,'steve.zulauf',NULL,NULL,29,101,NULL),(NULL,'',NULL,'37.19659 84.362473',NULL,NULL,NULL,'tdietrich',NULL,NULL,37,78,NULL),(NULL,'',NULL,'37.330879 92.860723',NULL,NULL,NULL,'teagan42',NULL,NULL,40,75,NULL),(NULL,'',NULL,'47.959001 113.071291',NULL,NULL,NULL,'terrill05',NULL,NULL,33,97,NULL),(NULL,'',NULL,'47.699499 82.473243',NULL,NULL,NULL,'thammes',NULL,NULL,29,98,NULL),(NULL,'',NULL,'32.682444 110.337846',NULL,NULL,NULL,'theodore.jacobson',NULL,NULL,29,103,NULL),(NULL,'',NULL,'41.553883 95.895149',NULL,NULL,NULL,'therese18',NULL,NULL,30,70,NULL),(NULL,'',NULL,'47.213444 118.801638',NULL,NULL,NULL,'therese66',NULL,NULL,38,106,NULL),(NULL,'',NULL,'39.713336 84.457556',NULL,NULL,NULL,'tokeefe',NULL,NULL,47,80,NULL),(NULL,'',NULL,'27.556679 106.248734',NULL,NULL,NULL,'toy15',NULL,NULL,28,92,NULL),(NULL,'',NULL,'34.994328 118.260444',NULL,NULL,NULL,'tschoen',NULL,NULL,40,86,NULL),(NULL,'',NULL,'46.569002 108.653981',NULL,NULL,NULL,'twila.ziemann',NULL,NULL,35,115,NULL),(NULL,'',NULL,'26.674564 116.507147',NULL,NULL,NULL,'uhaag',NULL,NULL,30,71,NULL),(NULL,'',NULL,'33.417009 103.587283',NULL,NULL,NULL,'valentine49',NULL,NULL,32,92,NULL),(NULL,'',NULL,'37.596568 105.127141',NULL,NULL,NULL,'vborer',NULL,NULL,40,110,NULL),(NULL,'',NULL,'44.347345 105.143298',NULL,NULL,NULL,'vchristiansen',NULL,NULL,33,83,NULL),(NULL,'',NULL,'34.428082 93.532647',NULL,NULL,NULL,'vdicki',NULL,NULL,38,90,NULL),(NULL,'',NULL,'30.716779 116.402446',NULL,NULL,NULL,'vella.borer',NULL,NULL,31,91,NULL),(NULL,'',NULL,'43.531487 73.984823',NULL,NULL,NULL,'velma93',NULL,NULL,40,84,NULL),(NULL,'',NULL,'26.489817 119.855546',NULL,NULL,NULL,'vernie.bode',NULL,NULL,28,113,NULL),(NULL,'',NULL,'49.098954 71.83108',NULL,NULL,NULL,'vidal82',NULL,NULL,35,81,NULL),(NULL,'',NULL,'33.164427 86.149486',NULL,NULL,NULL,'viva62',NULL,NULL,36,113,NULL),(NULL,'',NULL,'37.553691 112.641373',NULL,NULL,NULL,'vschinner',NULL,NULL,25,100,NULL),(NULL,'',NULL,'40.5096 104.196364',NULL,NULL,NULL,'wava.medhurst',NULL,NULL,40,119,NULL),(NULL,'',NULL,'40.076918 106.72167',NULL,NULL,NULL,'wendell.auer',NULL,NULL,32,120,NULL),(NULL,'',NULL,'44.760184 98.006875',NULL,NULL,NULL,'west.beryl',NULL,NULL,37,82,NULL),(NULL,'',NULL,'32.399834 106.543095',NULL,NULL,NULL,'white.marilyne',NULL,NULL,31,119,NULL),(NULL,'',NULL,'28.046854 118.522994',NULL,NULL,NULL,'wilkinson.loma',NULL,NULL,35,110,NULL),(NULL,'',NULL,'27.40044 103.587199',NULL,NULL,NULL,'will.kathlyn',NULL,NULL,34,79,NULL),(NULL,'',NULL,'46.069594 110.011902',NULL,NULL,NULL,'willms.destini',NULL,NULL,49,73,NULL),(NULL,'',NULL,'26.110119 96.371639',NULL,NULL,NULL,'willms.haley',NULL,NULL,42,85,NULL),(NULL,'',NULL,'46.782063 116.411965',NULL,NULL,NULL,'windler.rupert',NULL,NULL,33,112,NULL),(NULL,'',NULL,'48.310475 93.103181',NULL,NULL,NULL,'wisoky.rosalinda',NULL,NULL,30,84,NULL),(NULL,'',NULL,'46.202568 74.601557',NULL,NULL,NULL,'wiza.yasmin',NULL,NULL,47,73,NULL),(NULL,'',NULL,'44.179206 96.399705',NULL,NULL,NULL,'wmclaughlin',NULL,NULL,26,80,NULL),(NULL,'',NULL,'32.021778 104.101535',NULL,NULL,NULL,'wmonahan',NULL,NULL,44,82,NULL),(NULL,'',NULL,'43.384489 118.800881',NULL,NULL,NULL,'xweimann',NULL,NULL,41,84,NULL),(NULL,'',NULL,'39.908993 117.898695',NULL,NULL,NULL,'ynikolaus',NULL,NULL,29,98,NULL),(NULL,'',NULL,'34.941191 116.335486',NULL,NULL,NULL,'ywiegand',NULL,NULL,49,102,NULL),(NULL,'',NULL,'43.064144 106.324944',NULL,NULL,NULL,'zbeier',NULL,NULL,46,119,NULL),(NULL,'',NULL,'47.92443 116.558294',NULL,NULL,NULL,'zemlak.brandyn',NULL,NULL,45,71,NULL),(NULL,'',NULL,'32.164929 115.700734',NULL,NULL,NULL,'zena94',NULL,NULL,30,110,NULL),(NULL,'',NULL,'48.40368 106.468761',NULL,NULL,NULL,'zoey23',NULL,NULL,40,100,NULL),(NULL,'',NULL,'37.932729 94.742594',NULL,NULL,NULL,'zoie.schmeler',NULL,NULL,29,72,NULL),(NULL,'',NULL,'32.819513 82.222013',NULL,NULL,NULL,'zparker',NULL,NULL,31,92,NULL),(NULL,'',NULL,'43.109703 118.948305',NULL,NULL,NULL,'zrunolfsson',NULL,NULL,34,91,NULL),(NULL,'',NULL,'48.602061 104.524659',NULL,NULL,NULL,'zveum',NULL,NULL,32,71,NULL);
/*!40000 ALTER TABLE `contactinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `username` varchar(255) DEFAULT NULL,
  `course` varchar(100) NOT NULL,
  `completed` tinyint(1) NOT NULL,
  `courseid` varchar(255) NOT NULL,
  PRIMARY KEY (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('davetest','CSCI 111',0,'davetest1'),('davetest','CSCI 212',0,'davetest2'),('davetest','CSCI 240',0,'davetest3'),('davetest','CSCI 220',0,'davetest4'),('davetest','CSCI 211',0,'davetest5'),('davidtest','CS',1,'david1'),('davidtest','css',5,'david2');
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
  `username` varchar(255) DEFAULT NULL,
  `focusarea` varchar(255) DEFAULT NULL,
  `attendedcollege` tinyint(11) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES ('school','Psychology','0002-11-30','html','css','javascript','dave325',NULL,1,NULL),('Queens College','Computer Science',NULL,NULL,NULL,NULL,'davetest',NULL,1,'marketing'),(NULL,NULL,NULL,NULL,NULL,NULL,'davetest1',NULL,NULL,NULL),('school','Psychology',NULL,'html','css','javascript',NULL,NULL,NULL,NULL),('school','Psychology','0000-00-00','html','css','javascript','davidtest',NULL,NULL,NULL),(NULL,NULL,NULL,NULL,NULL,NULL,'daveadmin',NULL,NULL,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'abayer',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'abbigail.maggio',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'abe12',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'adela.bartell',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'adela81',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ahmad.cruickshank',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'aida46',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'alberta64',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'alessandro50',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'alexandria.hoeger',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'altenwerth.gonzalo',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'alyson81',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'amorar',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'anastasia37',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'anastasia47',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'anderson.frami',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'andre.pouros',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'aniya41',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ansley63',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ariane08',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'arnaldo.wisozk',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'asa.hegmann',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'austin.kshlerin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'aylin46',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bahringer.chesley',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'barton.george',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'baumbach.dudley',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'baumbach.geovany',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bayer.kylie',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bcasper',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'becker.bonita',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'berge.darron',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bernie.christiansen',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bernier.giuseppe',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'berry.bosco',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bertram.gusikowski',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bo49',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bode.jamar',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bogisich.elena',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bogisich.elisha',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bosco.alison',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bosco.kevin',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'botsford.aurore',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'boyer.jean',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'boyer.titus',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'boyle.kayli',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bpowlowski',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bradley.morissette',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'braun.jacynthe',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bridgette29',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'brigitte.osinski',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'buckridge.guadalupe',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'bud74',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'casandra.hermiston',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'cathy.ward',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'cbayer',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'cesar.runolfsson',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'charlotte45',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'chase23',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'claude.quitzon',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'clifford.abbott',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'colten96',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'cormier.melisa',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'corrine.schmeler',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'crist.seamus',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'cristian.muller',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'csteuber',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dach.darius',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dale54',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'damore.erin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dana.emmerich',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'daniella.altenwerth',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'deanna71',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'deja.jones',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'delta.bergnaum',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dibbert.jennings',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dmurazik',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dmurphy',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'domenico99',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'don74',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'donnelly.esther',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'doug.turner',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'dstrosin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ebert.autumn',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'eboyle',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'edyth04',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ehowe',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'eichmann.orlo',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'eino51',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'eleonore09',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'elizabeth54',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'elmira.ryan',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'emery52',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'emiliano52',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ena.paucek',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'enid.daugherty',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'erick16',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ernser.ronny',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'esperanza64',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'estel45',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'fannie.muller',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'felipa97',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'flatley.wendy',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'fleta.romaguera',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'florian.romaguera',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'florida47',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ford.lynch',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'frida11',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gaylord.casey',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gbalistreri',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gleichner.janis',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gloria.koch',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gmurphy',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gpowlowski',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'grant.jocelyn',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'growe',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gstreich',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'gustave.schulist',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'hank.herman',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'hdickinson',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'heaney.dorris',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'heller.andreane',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'herbert.ohara',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'hosea71',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'howe.constance',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'humberto62',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'hyman01',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'iking',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'irving.beahan',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'isabel.schuppe',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'isabelle.dubuque',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jabbott',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jacquelyn.lockman',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jamal94',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'janet.reichel',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jaskolski.geovanni',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jazmin14',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jeff.schmitt',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jheller',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jkoelpin',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jkulas',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'joana.douglas',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'josephine.mitchell',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jromaguera',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'julie.kris',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jwilkinson',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'jwilliamson',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kaia.daniel',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'karley.oberbrunner',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kaycee34',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kbrekke',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'keegan39',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kelley.fay',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kelsie.hilll',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kemmer.makenzie',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kenya48',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kiara.schaden',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'klemke',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kmarvin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kohler.edison',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'krajcik.amely',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kristy.reinger',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'kulas.bethany',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'lakin.clotilde',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ledner.colten',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'leffler.stuart',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'leonor.quitzon',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'lesch.jerel',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'liana96',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'littel.cleo',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'little.barton',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'little.imogene',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'lockman.kailee',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'lonny06',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ltoy',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'luz.douglas',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mackenzie17',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'malcolm.leuschke',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'maritza.kessler',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'marks.ezequiel',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'marvin.earnestine',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'maryjane24',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mateo.anderson',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mavis72',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mayer.irwin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mayer.lydia',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'meggie33',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'meghan.torp',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'melany29',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'melba.gleason',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'meta.stracke',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'michaela.koss',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'michel57',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'miller.elton',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'milo.lindgren',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mohammed47',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'monty.rutherford',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mraz.bell',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mrunolfsdottir',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'mspinka',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'myriam.krajcik',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'nayeli04',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'nicole.feeney',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'nokon',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'nshields',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ntoy',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'obeer',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'oberbrunner.gabrielle',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'okuneva.murphy',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'olson.leann',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'oma.marvin',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'orn.mauricio',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'osborne98',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'oscar48',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pagac.mckenna',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pagac.velva',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pedro87',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'perry.treutel',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pete06',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pfeffer.phoebe',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'porn',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pouros.anastasia',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'pouros.daija',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'qhermiston',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'qkling',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'qkub',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'qpagac',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'qprosacco',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'queenie37',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ramona82',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ratke.roel',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rcorwin',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rick01',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'river.jones',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'robel.nellie',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rodolfo.wisoky',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rolando.schmeler',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'romaguera.ila',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rossie.parker',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'rusty91',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sandrine29',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'satterfield.chaz',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'satterfield.fabian',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'savanna17',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sbashirian',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'schamberger.charlene',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sdurgan',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'shields.nils',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'shudson',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sierra.hagenes',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sjacobi',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'sporer.tamara',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'stephon95',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'steve.zulauf',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'tdietrich',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'teagan42',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'terrill05',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'thammes',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'theodore.jacobson',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'therese18',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'therese66',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'tokeefe',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'toy15',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'tschoen',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'twila.ziemann',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'uhaag',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'valentine49',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vborer',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vchristiansen',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vdicki',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vella.borer',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'velma93',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vernie.bode',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vidal82',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'viva62',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'vschinner',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wava.medhurst',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wendell.auer',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'west.beryl',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'white.marilyne',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wilkinson.loma',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'will.kathlyn',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'willms.destini',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'willms.haley',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'windler.rupert',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wisoky.rosalinda',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wiza.yasmin',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wmclaughlin',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'wmonahan',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'xweimann',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ynikolaus',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'ywiegand',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zbeier',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zemlak.brandyn',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zena94',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zoey23',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zoie.schmeler',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zparker',NULL,0,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zrunolfsson',NULL,1,NULL),(NULL,'General Education',NULL,NULL,NULL,NULL,'zveum',NULL,1,NULL),('Queens College','Hate','1912-02-02',NULL,NULL,NULL,'joeyCheung','Frontend',1,'developer'),(NULL,NULL,'0000-00-00',NULL,NULL,NULL,'joey69',NULL,NULL,NULL);
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `username` varchar(255) DEFAULT NULL,
  `eventname` varchar(55) DEFAULT NULL,
  `contactinfo` varchar(255) DEFAULT NULL,
  `eventid` varchar(255) NOT NULL,
  `contactname` varchar(255) DEFAULT NULL,
  `contactcompany` varchar(255) DEFAULT NULL,
  `contactdepartment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('dave325','Uption','1','',NULL,NULL,NULL),('dave1',NULL,NULL,'dave10',NULL,NULL,NULL),('dave1',NULL,NULL,'dave11',NULL,NULL,NULL),('dave2',NULL,NULL,'dave20',NULL,NULL,NULL),('dave2',NULL,NULL,'dave21',NULL,NULL,NULL),('dave2323',NULL,NULL,'dave23230',NULL,NULL,NULL),('dave2323',NULL,NULL,'dave23231',NULL,NULL,NULL),('dave23232131',NULL,NULL,'dave232321310',NULL,NULL,NULL),('dave23232131',NULL,NULL,'dave232321311',NULL,NULL,NULL),('dave3',NULL,NULL,'dave30',NULL,NULL,NULL),('dave3',NULL,NULL,'dave31',NULL,NULL,NULL),('dave325',NULL,NULL,'dave3250',NULL,NULL,NULL),('dave325',NULL,NULL,'dave3251',NULL,NULL,NULL),(NULL,NULL,NULL,'dave325940',NULL,NULL,NULL),(NULL,NULL,NULL,'dave325941',NULL,NULL,NULL),('daveadmin',NULL,NULL,'daveadmin0',NULL,NULL,NULL),('daveadmin',NULL,NULL,'daveadmin1',NULL,NULL,NULL),('davetest',NULL,NULL,'davetest0',NULL,NULL,NULL),('davetest',NULL,NULL,'davetest1',NULL,NULL,NULL),('davetest1',NULL,NULL,'davetest10',NULL,NULL,NULL),('davetest1',NULL,NULL,'davetest11',NULL,NULL,NULL),('dave325','OweYa1a',NULL,'david2',NULL,NULL,NULL),(NULL,'Uption','1','davidtest0',NULL,NULL,NULL),('joey69',NULL,NULL,'joey690',NULL,NULL,NULL),('joey69',NULL,NULL,'joey691',NULL,NULL,NULL),('JoeyC',NULL,NULL,'JoeyC0',NULL,NULL,NULL),('JoeyC',NULL,NULL,'JoeyC1',NULL,NULL,NULL),('joeyCheung',NULL,NULL,'joeyCheung0',NULL,NULL,NULL),('joeyCheung',NULL,NULL,'joeyCheung1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goals`
--

DROP TABLE IF EXISTS `goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goals` (
  `username` varchar(255) DEFAULT NULL,
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
INSERT INTO `goals` VALUES ('dave325','goal1','goal2','goal3'),('dave32594',NULL,NULL,NULL),('dave3',NULL,NULL,NULL),('dave1',NULL,NULL,NULL),('dave2',NULL,NULL,NULL),('davetest',NULL,NULL,NULL),('davetest1',NULL,NULL,NULL),('daveadmin',NULL,NULL,NULL),('JoeyC',NULL,NULL,NULL),('dave2323',NULL,NULL,NULL),('joeyCheung',NULL,NULL,NULL),('dave23232131',NULL,NULL,NULL),('joey69',NULL,NULL,NULL);
/*!40000 ALTER TABLE `goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hobbies`
--

DROP TABLE IF EXISTS `hobbies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hobbies` (
  `username` varchar(255) DEFAULT NULL,
  `hobby` varchar(255) DEFAULT NULL,
  `hobbyid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hobbies`
--

LOCK TABLES `hobbies` WRITE;
/*!40000 ALTER TABLE `hobbies` DISABLE KEYS */;
INSERT INTO `hobbies` VALUES ('dave325','Football',NULL),('dave325','Basketball',NULL);
/*!40000 ALTER TABLE `hobbies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internhours`
--

DROP TABLE IF EXISTS `internhours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `internhours` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `hours` varchar(255) DEFAULT NULL,
  `projid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internhours`
--

LOCK TABLES `internhours` WRITE;
/*!40000 ALTER TABLE `internhours` DISABLE KEYS */;
INSERT INTO `internhours` VALUES ('abayer','34','dave111'),('amorar','33','dave111'),('davetest','15','dave111'),('viva62','3','dave111');
/*!40000 ALTER TABLE `internhours` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interviews`
--

DROP TABLE IF EXISTS `interviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `interviews` (
  `username` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `contactdept` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `interviewid` varchar(255) NOT NULL,
  `contactinfo` varchar(255) DEFAULT NULL,
  `didfollowup` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`interviewid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interviews`
--

LOCK TABLES `interviews` WRITE;
/*!40000 ALTER TABLE `interviews` DISABLE KEYS */;
INSERT INTO `interviews` VALUES ('dave325','oweyaas',NULL,'luke jenkins','notes','',NULL,NULL),('dave1',NULL,NULL,NULL,NULL,'dave10',NULL,NULL),('dave1',NULL,NULL,NULL,NULL,'dave11',NULL,NULL),('dave2','j',NULL,NULL,NULL,'dave20',NULL,NULL),('dave2',NULL,NULL,NULL,NULL,'dave21',NULL,NULL),('dave2323',NULL,NULL,NULL,NULL,'dave23230',NULL,NULL),('dave2323',NULL,NULL,NULL,NULL,'dave23231',NULL,NULL),('dave23232131',NULL,NULL,NULL,NULL,'dave232321310',NULL,NULL),('dave23232131',NULL,NULL,NULL,NULL,'dave232321311',NULL,NULL),('dave3',NULL,NULL,NULL,NULL,'dave30',NULL,NULL),('dave3',NULL,NULL,NULL,NULL,'dave31',NULL,NULL),('dave325',NULL,NULL,NULL,NULL,'dave3250',NULL,NULL),('dave325',NULL,NULL,NULL,NULL,'dave3251',NULL,NULL),(NULL,NULL,NULL,NULL,NULL,'dave325940',NULL,NULL),(NULL,NULL,NULL,NULL,NULL,'dave325941',NULL,NULL),('daveadmin',NULL,NULL,NULL,NULL,'daveadmin0',NULL,NULL),('daveadmin',NULL,NULL,NULL,NULL,'daveadmin1',NULL,NULL),('davetest','Queens College','2017-12-31','David',NULL,'davetest0',NULL,NULL),('davetest',NULL,NULL,NULL,NULL,'davetest1',NULL,NULL),('davetest1',NULL,NULL,NULL,NULL,'davetest10',NULL,NULL),('davetest1',NULL,NULL,NULL,NULL,'davetest11',NULL,NULL),('dave325','oweyaa','2017-12-11','luke jenkins','notes11','david1',NULL,NULL),('dave325','oweyaa1','0000-00-00','Luke','notes','david2',NULL,NULL),(NULL,'oweyaa','2017-12-11','luke jenkins','notes11','davidtest0',NULL,NULL),(NULL,'oweyaa','2017-12-11','luke jenkins','notes11','davidtest1',NULL,NULL),('joey69',NULL,NULL,NULL,NULL,'joey690',NULL,NULL),('joey69',NULL,NULL,NULL,NULL,'joey691',NULL,NULL),('JoeyC',NULL,NULL,NULL,NULL,'JoeyC0',NULL,NULL),('JoeyC',NULL,NULL,NULL,NULL,'JoeyC1',NULL,NULL),('joeyCheung',NULL,NULL,NULL,NULL,'joeyCheung0',NULL,NULL),('joeyCheung',NULL,NULL,NULL,NULL,'joeyCheung1',NULL,NULL);
/*!40000 ALTER TABLE `interviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `languages` (
  `username` varchar(255) DEFAULT NULL,
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
INSERT INTO `languages` VALUES (NULL,'Spanish',4,'davetest1'),('davetest','English',5,'david1');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memberinfo`
--

DROP TABLE IF EXISTS `memberinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memberinfo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memberinfo`
--

LOCK TABLES `memberinfo` WRITE;
/*!40000 ALTER TABLE `memberinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `memberinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membershiptoken`
--

DROP TABLE IF EXISTS `membershiptoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membershiptoken` (
  `username` varchar(255) NOT NULL,
  `matchnum` varchar(50) DEFAULT NULL,
  `stripetoken` varchar(255) DEFAULT NULL,
  `membertoken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membershiptoken`
--

LOCK TABLES `membershiptoken` WRITE;
/*!40000 ALTER TABLE `membershiptoken` DISABLE KEYS */;
INSERT INTO `membershiptoken` VALUES ('dave1',NULL,'cus_CkifIo4eCPfMzS',NULL),('David Dataram',NULL,NULL,NULL),('joey cheung',NULL,NULL,NULL);
/*!40000 ALTER TABLE `membershiptoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membertokens`
--

DROP TABLE IF EXISTS `membertokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `membertokens` (
  `username` varchar(255) NOT NULL,
  `matchnum` int(15) DEFAULT NULL,
  `stripetoken` varchar(100) DEFAULT NULL,
  `membertoken` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membertokens`
--

LOCK TABLES `membertokens` WRITE;
/*!40000 ALTER TABLE `membertokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `membertokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentor`
--

DROP TABLE IF EXISTS `mentor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentor` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `location` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `discussion` varchar(1000) DEFAULT NULL,
  `mentorname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentor`
--

LOCK TABLES `mentor` WRITE;
/*!40000 ALTER TABLE `mentor` DISABLE KEYS */;
INSERT INTO `mentor` VALUES ('','Mexico','davedataram@gmail.com','Test','Luke Jenkins'),('dave1',NULL,NULL,NULL,NULL),('dave2',NULL,NULL,NULL,NULL),('dave3',NULL,NULL,NULL,NULL),('dave325','Mexico','davedataram@gmail.com','Test','Luke Jenkins'),('dave32594',NULL,NULL,NULL,NULL),('daveadmin',NULL,NULL,NULL,NULL),('davetest',NULL,NULL,NULL,NULL),('davetest1',NULL,NULL,NULL,NULL),('joey69',NULL,NULL,NULL,NULL),('joeyCheung',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `mentor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `milestones`
--

DROP TABLE IF EXISTS `milestones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `milestones` (
  `milestoneid` varchar(255) NOT NULL,
  `projid` varchar(255) DEFAULT NULL,
  `milestone` varchar(255) DEFAULT NULL,
  `completed` smallint(1) DEFAULT NULL,
  PRIMARY KEY (`milestoneid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `milestones`
--

LOCK TABLES `milestones` WRITE;
/*!40000 ALTER TABLE `milestones` DISABLE KEYS */;
INSERT INTO `milestones` VALUES ('dave111','dave111','Critical Thinking',0);
/*!40000 ALTER TABLE `milestones` ENABLE KEYS */;
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
  `username` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `militaryusers`
--

LOCK TABLES `militaryusers` WRITE;
/*!40000 ALTER TABLE `militaryusers` DISABLE KEYS */;
INSERT INTO `militaryusers` VALUES ('ratke.jane','mbauch@yahoo.com','password','',NULL,NULL,'abayer'),('lschimmel','kbergstrom@johnson.com','password','',NULL,NULL,'abbigail.maggio'),('christian2','jasmin.murphy@green.info','password','',NULL,NULL,'abe12'),('yhettinger','estelle62@pollich.net','password','',NULL,NULL,'adela.bartell'),('zechariah9','marian27@gmail.com','password','',NULL,NULL,'adela81'),('jasen.ruth','blanche40@kub.info','password','',NULL,NULL,'ahmad.cruickshank'),('abdiel.ber','schmitt.avis@little.com','password','',NULL,NULL,'aida46'),('adonis.boe','qhamill@yahoo.com','password','',NULL,NULL,'alberta64'),('mstracke','edmund.lubowitz@gmail.com','password','',NULL,NULL,'alessandro50'),('cory.herma','meghan.funk@hotmail.com','password','',NULL,NULL,'alexandria.hoeger'),('julie12','ekemmer@yahoo.com','password','',NULL,NULL,'altenwerth.gonzalo'),('tommie.cha','ybruen@yahoo.com','password','',NULL,NULL,'alyson81'),('jazlyn36','august76@kris.info','password','',NULL,NULL,'amorar'),('leonard45','vincent.schimmel@donnelly.com','password','',NULL,NULL,'anastasia37'),('haufderhar','kacie.mayert@cassin.com','password','',NULL,NULL,'anastasia47'),('dbashirian','ulangworth@yahoo.com','password','',NULL,NULL,'anderson.frami'),('gerson69','cleve.bernhard@mccullough.biz','password','',NULL,NULL,'andre.pouros'),('daphne74','nolson@konopelski.biz','password','',NULL,NULL,'aniya41'),('jayda40','auer.angel@hotmail.com','password','',NULL,NULL,'ansley63'),('nathanial7','sschinner@gmail.com','password','',NULL,NULL,'ariane08'),('ihauck','daugherty.jalyn@lockman.com','password','',NULL,NULL,'arnaldo.wisozk'),('stehr.mori','tristian.oreilly@cronin.net','password','',NULL,NULL,'asa.hegmann'),('clare62','ethelyn.schulist@hotmail.com','password','',NULL,NULL,'austin.kshlerin'),('alberta.si','imelda.considine@murazik.biz','password','',NULL,NULL,'aylin46'),('kamille20','qrippin@gmail.com','password','',NULL,NULL,'bahringer.chesley'),('wspinka','stevie24@mccullough.com','password','',NULL,NULL,'barton.george'),('ghaag','malcolm.rowe@damore.com','password','',NULL,NULL,'baumbach.dudley'),('mcdermott.','deven.rowe@adams.org','password','',NULL,NULL,'baumbach.geovany'),('beatrice99','yswift@gmail.com','password','',NULL,NULL,'bayer.kylie'),('purdy.joan','hillary18@yahoo.com','password','',NULL,NULL,'bcasper'),('samanta58','claudie.oconnell@swaniawski.com','password','',NULL,NULL,'becker.bonita'),('odietrich','ulises88@schoen.net','password','',NULL,NULL,'berge.darron'),('syble.haag','huel.abdul@tillman.com','password','',NULL,NULL,'bernie.christiansen'),('kuphal.wya','jewel.deckow@sporer.net','password','',NULL,NULL,'bernier.giuseppe'),('cecilia56','cicero.mitchell@gmail.com','password','',NULL,NULL,'berry.bosco'),('reece11','betsy.shanahan@hotmail.com','password','',NULL,NULL,'bertram.gusikowski'),('casimer12','kiana22@gmail.com','password','',NULL,NULL,'bo49'),('bulah12','dmcglynn@gmail.com','password','',NULL,NULL,'bode.jamar'),('vonrueden.','predovic.rhoda@grant.com','password','',NULL,NULL,'bogisich.elena'),('dstark','angelita19@leffler.com','password','',NULL,NULL,'bogisich.elisha'),('doug.ziema','kyla.rohan@yahoo.com','password','',NULL,NULL,'bosco.alison'),('ikutch','coy.christiansen@hotmail.com','password','',NULL,NULL,'bosco.kevin'),('milo86','hjenkins@smitham.net','password','',NULL,NULL,'botsford.aurore'),('delores.mo','rylan90@gmail.com','password','',NULL,NULL,'boyer.jean'),('wolson','mayer.albina@gmail.com','password','',NULL,NULL,'boyer.titus'),('rogers.bau','oreilly.barbara@hotmail.com','password','',NULL,NULL,'boyle.kayli'),('wisozk.jun','carlotta71@yahoo.com','password','',NULL,NULL,'bpowlowski'),('bnitzsche','dennis83@hermiston.com','password','',NULL,NULL,'bradley.morissette'),('coby.murra','leffler.cecelia@hand.biz','password','',NULL,NULL,'braun.jacynthe'),('bgreenfeld','rossie00@huels.biz','password','',NULL,NULL,'bridgette29'),('sheila20','jrutherford@hotmail.com','password','',NULL,NULL,'brigitte.osinski'),('xsawayn','ftillman@becker.org','password','',NULL,NULL,'buckridge.guadalupe'),('aheidenrei','kcrona@gmail.com','password','',NULL,NULL,'bud74'),('ward.sabry','armstrong.braxton@gibson.info','password','',NULL,NULL,'casandra.hermiston'),('torphy.eil','ena37@emard.info','password','',NULL,NULL,'cathy.ward'),('sarah.huds','sgrimes@hotmail.com','password','',NULL,NULL,'cbayer'),('yconsidine','wilburn.mohr@gmail.com','password','',NULL,NULL,'cesar.runolfsson'),('saul42','damore.donna@yahoo.com','password','',NULL,NULL,'charlotte45'),('droob','uabbott@gmail.com','password','',NULL,NULL,'chase23'),('mortimer.r','jaqueline.reichert@hotmail.com','password','',NULL,NULL,'claude.quitzon'),('alexander.','nikolas.gottlieb@hotmail.com','password','',NULL,NULL,'clifford.abbott'),('ziemann.an','fbosco@gmail.com','password','',NULL,NULL,'colten96'),('orland37','gjacobson@gmail.com','password','',NULL,NULL,'cormier.melisa'),('judy78','nolan.lonzo@hotmail.com','password','',NULL,NULL,'corrine.schmeler'),('jessika49','margret.abernathy@yost.com','password','',NULL,NULL,'crist.seamus'),('emmet24','adah34@hotmail.com','password','',NULL,NULL,'cristian.muller'),('phalvorson','beahan.collin@rohan.net','password','',NULL,NULL,'csteuber'),('nathaniel.','caleb84@hotmail.com','password','',NULL,NULL,'dach.darius'),('beverly64','desiree67@spinka.com','password','',NULL,NULL,'dale54'),('renner.oke','asa27@yahoo.com','password','',NULL,NULL,'damore.erin'),('kristina61','mossie24@klein.net','password','',NULL,NULL,'dana.emmerich'),('vada78','marcelle96@gutmann.net','password','',NULL,NULL,'daniella.altenwerth'),('dasfadsfad','asdfdasdsa@dasf.com',NULL,'',NULL,NULL,'dave2323'),('dasfadsfad','asdfdasdsa@dasf.com',NULL,'',NULL,NULL,'dave23232131'),('dasfadsfad','asdfdasdsa@dasf.com',NULL,'',NULL,NULL,'dave325'),('leannon.je','lela19@lang.org','password','',NULL,NULL,'deanna71'),('okon.brian','nash.halvorson@erdman.org','password','',NULL,NULL,'deja.jones'),('altenwerth','aaron62@gmail.com','password','',NULL,NULL,'delta.bergnaum'),('nyasia.mar','florida85@fisher.com','password','',NULL,NULL,'dibbert.jennings'),('von.bennie','billy.mayer@rosenbaum.com','password','',NULL,NULL,'dmurazik'),('cmueller','turcotte.margret@yahoo.com','password','',NULL,NULL,'dmurphy'),('nasir52','margarette.conroy@hotmail.com','password','',NULL,NULL,'domenico99'),('imoen','bhahn@yahoo.com','password','',NULL,NULL,'don74'),('ibrahim04','aklein@hessel.com','password','',NULL,NULL,'donnelly.esther'),('vernice42','odell.hodkiewicz@gmail.com','password','',NULL,NULL,'doug.turner'),('lilla.gisl','nestor.treutel@kuhic.org','password','',NULL,NULL,'dstrosin'),('jwisozk','ondricka.greta@hotmail.com','password','',NULL,NULL,'ebert.autumn'),('davis.delm','alyson.williamson@gmail.com','password','',NULL,NULL,'eboyle'),('wilfredo.y','hoppe.paul@yahoo.com','password','',NULL,NULL,'edyth04'),('candice54','annie.volkman@boyer.com','password','',NULL,NULL,'ehowe'),('talon.alte','omer.abbott@berge.net','password','',NULL,NULL,'eichmann.orlo'),('schmidt.al','mariah16@gmail.com','password','',NULL,NULL,'eino51'),('wilford.la','gabshire@yundt.com','password','',NULL,NULL,'eleonore09'),('demarcus87','gprice@hackett.net','password','',NULL,NULL,'elizabeth54'),('cordie.wil','hand.xavier@hotmail.com','password','',NULL,NULL,'elmira.ryan'),('karianne03','ethan.kautzer@mann.net','password','',NULL,NULL,'emery52'),('kroberts','fay.jacinto@ullrich.biz','password','',NULL,NULL,'emiliano52'),('melyssa.ha','smcclure@yahoo.com','password','',NULL,NULL,'ena.paucek'),('zanderson','nico.wiegand@gmail.com','password','',NULL,NULL,'enid.daugherty'),('ora.hirthe','ratke.delores@yahoo.com','password','',NULL,NULL,'erick16'),('amani37','xcarroll@gmail.com','password','',NULL,NULL,'ernser.ronny'),('modesto.br','stephany.kutch@gmail.com','password','',NULL,NULL,'esperanza64'),('collier.ta','zemlak.seth@yahoo.com','password','',NULL,NULL,'estel45'),('edward.bra','tobin.kulas@dickinson.com','password','',NULL,NULL,'fannie.muller'),('wellington','schamberger.jasmin@hane.info','password','',NULL,NULL,'felipa97'),('telly.lesc','abbey32@gmail.com','password','',NULL,NULL,'flatley.wendy'),('ihermann','ykassulke@hotmail.com','password','',NULL,NULL,'fleta.romaguera'),('bernadine.','robb.hyatt@bednar.org','password','',NULL,NULL,'florian.romaguera'),('ldenesik','ressie.emmerich@rogahn.net','password','',NULL,NULL,'florida47'),('cbahringer','kuhic.abby@bosco.com','password','',NULL,NULL,'ford.lynch'),('hkreiger','zdamore@hegmann.biz','password','',NULL,NULL,'frida11'),('zboehm','santina.bergstrom@cronin.com','password','',NULL,NULL,'gaylord.casey'),('zchristian','hschmitt@strosin.org','password','',NULL,NULL,'gbalistreri'),('yost.brian','sunny89@hotmail.com','password','',NULL,NULL,'gleichner.janis'),('conroy.ger','boyle.lavonne@welch.net','password','',NULL,NULL,'gloria.koch'),('karine77','aniyah91@gmail.com','password','',NULL,NULL,'gmurphy'),('champlin.k','ora02@gmail.com','password','',NULL,NULL,'gpowlowski'),('aimee.corm','bell08@reichert.com','password','',NULL,NULL,'grant.jocelyn'),('manuela78','westley.tillman@gmail.com','password','',NULL,NULL,'growe'),('arvid77','bartell.janessa@gmail.com','password','',NULL,NULL,'gstreich'),('kaela.funk','hmante@dach.com','password','',NULL,NULL,'gustave.schulist'),('juwan.casp','daryl60@stamm.com','password','',NULL,NULL,'hank.herman'),('lockman.so','xpowlowski@gmail.com','password','',NULL,NULL,'hdickinson'),('rbednar','tre03@hotmail.com','password','',NULL,NULL,'heaney.dorris'),('ignatius.w','pstroman@bailey.com','password','',NULL,NULL,'heller.andreane'),('alexandrea','ebeier@satterfield.com','password','',NULL,NULL,'herbert.ohara'),('acummerata','sipes.shakira@hotmail.com','password','',NULL,NULL,'hosea71'),('dallas39','cmcdermott@schamberger.com','password','',NULL,NULL,'howe.constance'),('trudie.sch','gflatley@strosin.com','password','',NULL,NULL,'humberto62'),('maegan.how','cormier.jodie@gmail.com','password','',NULL,NULL,'hyman01'),('murray.gle','pblock@cummings.info','password','',NULL,NULL,'iking'),('giles97','wmann@kulas.com','password','',NULL,NULL,'irving.beahan'),('barrows.cr','gwalter@sporer.info','password','',NULL,NULL,'isabel.schuppe'),('wolff.elen','betsy97@kshlerin.com','password','',NULL,NULL,'isabelle.dubuque'),('irippin','jazmin.bosco@yahoo.com','password','',NULL,NULL,'jabbott'),('coty.leffl','christ92@gmail.com','password','',NULL,NULL,'jacquelyn.lockman'),('grady79','mittie80@hotmail.com','password','',NULL,NULL,'jamal94'),('nathanial.','bcollins@murphy.info','password','',NULL,NULL,'janet.reichel'),('remington5','znader@yahoo.com','password','',NULL,NULL,'jaskolski.geovanni'),('dariana.an','ivah35@hotmail.com','password','',NULL,NULL,'jazmin14'),('sheridan39','emard.cecilia@gmail.com','password','',NULL,NULL,'jeff.schmitt'),('reuben.col','annette79@yahoo.com','password','',NULL,NULL,'jheller'),('ihauck','kian67@gmail.com','password','',NULL,NULL,'jkoelpin'),('celestino.','runolfsdottir.brant@deckow.com','password','',NULL,NULL,'jkulas'),('kaylee42','geovanni71@ruecker.com','password','',NULL,NULL,'joana.douglas'),('joey cheun','joeycheung0@gmail.com',NULL,'',NULL,NULL,'joey69'),('Joey Cheun','joeycheung0@gmail.com',NULL,'',NULL,NULL,'JoeyC'),('Joey Cheun','joeycheung0@gmail.com',NULL,'',NULL,NULL,'joeyCheung'),('hackett.ag','mckenna.nader@yahoo.com','password','',NULL,NULL,'josephine.mitchell'),('mhettinger','ivory.monahan@trantow.net','password','',NULL,NULL,'jromaguera'),('qlowe','bgorczany@kreiger.com','password','',NULL,NULL,'julie.kris'),('cblick','wlangworth@koelpin.org','password','',NULL,NULL,'jwilkinson'),('isaac82','fisher.rosendo@hotmail.com','password','',NULL,NULL,'jwilliamson'),('jordi.flat','zieme.alexandre@gmail.com','password','',NULL,NULL,'kaia.daniel'),('walker03','ihaley@gmail.com','password','',NULL,NULL,'karley.oberbrunner'),('mclaughlin','jconsidine@crist.com','password','',NULL,NULL,'kaycee34'),('wmitchell','lukas.weber@hotmail.com','password','',NULL,NULL,'kbrekke'),('maxine35','woreilly@reichert.net','password','',NULL,NULL,'keegan39'),('ernser.kad','ward.swift@hotmail.com','password','',NULL,NULL,'kelley.fay'),('vincent.ki','koss.enola@gmail.com','password','',NULL,NULL,'kelsie.hilll'),('jerde.nina','dorthy99@yahoo.com','password','',NULL,NULL,'kemmer.makenzie'),('hudson.mau','skertzmann@kuhic.com','password','',NULL,NULL,'kenya48'),('leola82','reese.lynch@gmail.com','password','',NULL,NULL,'kiara.schaden'),('obeahan','beahan.sammy@yahoo.com','password','',NULL,NULL,'klemke'),('roob.josep','nbatz@friesen.org','password','',NULL,NULL,'kmarvin'),('adibbert','collier.magnolia@yahoo.com','password','',NULL,NULL,'kohler.edison'),('rrice','florine.sipes@fay.org','password','',NULL,NULL,'krajcik.amely'),('jhilll','ralph.fritsch@hotmail.com','password','',NULL,NULL,'kristy.reinger'),('marlen.row','brown.helga@aufderhar.com','password','',NULL,NULL,'kulas.bethany'),('pagac.greg','audie.borer@hagenes.com','password','',NULL,NULL,'lakin.clotilde'),('joshua60','collier.julian@hotmail.com','password','',NULL,NULL,'ledner.colten'),('katelyn35','balistreri.bridie@gmail.com','password','',NULL,NULL,'leffler.stuart'),('clementine','hegmann.chase@bergnaum.com','password','',NULL,NULL,'leonor.quitzon'),('ricardo.em','allison77@yahoo.com','password','',NULL,NULL,'lesch.jerel'),('pagac.pabl','bradly.russel@ullrich.com','password','',NULL,NULL,'liana96'),('hjones','uzemlak@orn.com','password','',NULL,NULL,'littel.cleo'),('pouros.dav','ymiller@gmail.com','password','',NULL,NULL,'little.barton'),('wisozk.moh','torp.charles@hotmail.com','password','',NULL,NULL,'little.imogene'),('malcolm.wi','bahringer.jameson@bode.info','password','',NULL,NULL,'lockman.kailee'),('lind.evie','jenkins.idella@yahoo.com','password','',NULL,NULL,'lonny06'),('batz.willo','mavis.hilpert@yahoo.com','password','',NULL,NULL,'ltoy'),('crooks.abe','dmohr@lind.com','password','',NULL,NULL,'luz.douglas'),('bailey.geo','qdeckow@stamm.com','password','',NULL,NULL,'mackenzie17'),('rosa.rodri','blick.piper@haley.com','password','',NULL,NULL,'malcolm.leuschke'),('ymckenzie','holly15@stroman.com','password','',NULL,NULL,'maritza.kessler'),('goldner.jo','sawayn.freddie@gmail.com','password','',NULL,NULL,'marks.ezequiel'),('ward.art','kuhn.derek@morar.com','password','',NULL,NULL,'marvin.earnestine'),('vkirlin','elwyn.hintz@hotmail.com','password','',NULL,NULL,'maryjane24'),('mckayla70','paige.terry@dooley.com','password','',NULL,NULL,'mateo.anderson'),('dayne.dach','egleason@stehr.net','password','',NULL,NULL,'mavis72'),('yfranecki','ngerlach@schimmel.com','password','',NULL,NULL,'mayer.irwin'),('kenny47','timothy63@rohan.com','password','',NULL,NULL,'mayer.lydia'),('egrant','jaeden90@kiehn.biz','password','',NULL,NULL,'meggie33'),('oconnelly','iweimann@gmail.com','password','',NULL,NULL,'meghan.torp'),('ngottlieb','jeffrey57@yahoo.com','password','',NULL,NULL,'melany29'),('talia.park','dora.grant@cremin.net','password','',NULL,NULL,'melba.gleason'),('corwin.san','adam00@dibbert.org','password','',NULL,NULL,'meta.stracke'),('lindsay53','schmitt.kenya@yahoo.com','password','',NULL,NULL,'michaela.koss'),('kyra32','jroob@yahoo.com','password','',NULL,NULL,'michel57'),('ora01','francisca.sipes@yahoo.com','password','',NULL,NULL,'miller.elton'),('hstanton','zemlak.elissa@hotmail.com','password','',NULL,NULL,'milo.lindgren'),('abner.kieh','watson.hodkiewicz@morar.com','password','',NULL,NULL,'mohammed47'),('nherman','orn.albin@kulas.net','password','',NULL,NULL,'monty.rutherford'),('homenick.d','vincent45@gmail.com','password','',NULL,NULL,'mraz.bell'),('marjorie03','wheidenreich@hagenes.com','password','',NULL,NULL,'mrunolfsdottir'),('hills.lela','dennis.schumm@walter.com','password','',NULL,NULL,'mspinka'),('mary.strei','ernest04@gmail.com','password','',NULL,NULL,'myriam.krajcik'),('daugherty.','benny82@pfannerstill.org','password','',NULL,NULL,'nayeli04'),('leannon.ro','ttreutel@heller.org','password','',NULL,NULL,'nicole.feeney'),('ccarter','dare.sedrick@gmail.com','password','',NULL,NULL,'nokon'),('koss.issac','eabernathy@gmail.com','password','',NULL,NULL,'nshields'),('keffertz','dasia.oreilly@hotmail.com','password','',NULL,NULL,'ntoy'),('bennett14','sonny84@schumm.com','password','',NULL,NULL,'obeer'),('beau03','pasquale30@crooks.com','password','',NULL,NULL,'oberbrunner.gabrielle'),('larson.mol','dee59@kunde.com','password','',NULL,NULL,'okuneva.murphy'),('alberta.wa','green.helena@gmail.com','password','',NULL,NULL,'olson.leann'),('kmorissett','murazik.jayce@hotmail.com','password','',NULL,NULL,'oma.marvin'),('mcdermott.','sherwood.sporer@gmail.com','password','',NULL,NULL,'orn.mauricio'),('jayne.jaku','herman.melany@rath.com','password','',NULL,NULL,'osborne98'),('rory33','thomas35@roberts.com','password','',NULL,NULL,'oscar48'),('nfunk','roselyn97@okuneva.info','password','',NULL,NULL,'pagac.mckenna'),('gerlach.ro','nathan.nitzsche@gmail.com','password','',NULL,NULL,'pagac.velva'),('nbahringer','bernier.ayana@yahoo.com','password','',NULL,NULL,'pedro87'),('price.kayl','antwon59@windler.biz','password','',NULL,NULL,'perry.treutel'),('chelsey.zi','sammy24@yahoo.com','password','',NULL,NULL,'pete06'),('terrence87','hackett.dylan@yahoo.com','password','',NULL,NULL,'pfeffer.phoebe'),('beer.scott','chaya.herman@grady.info','password','',NULL,NULL,'porn'),('nitzsche.a','madge11@bashirian.org','password','',NULL,NULL,'pouros.anastasia'),('bartell.ja','mckenzie.upton@tillman.com','password','',NULL,NULL,'pouros.daija'),('herminio72','theresa.pfannerstill@hotmail.com','password','',NULL,NULL,'qhermiston'),('alvah.rayn','alvah44@gmail.com','password','',NULL,NULL,'qkling'),('kaylie83','esteban.gottlieb@gmail.com','password','',NULL,NULL,'qkub'),('west.crist','yesenia36@buckridge.info','password','',NULL,NULL,'qpagac'),('sawayn.eff','lockman.lukas@yahoo.com','password','',NULL,NULL,'qprosacco'),('huel.jada','sigrid01@gmail.com','password','',NULL,NULL,'queenie37'),('igorczany','waelchi.isom@gmail.com','password','',NULL,NULL,'ramona82'),('guido.reil','nadia.feest@veum.info','password','',NULL,NULL,'ratke.roel'),('schultz.ma','kayli.roob@yahoo.com','password','',NULL,NULL,'rcorwin'),('anastasia.','abshire.kaia@rodriguez.com','password','',NULL,NULL,'rick01'),('maci84','ypfeffer@okon.org','password','',NULL,NULL,'river.jones'),('ckessler','labadie.skyla@dickinson.biz','password','',NULL,NULL,'robel.nellie'),('dietrich.m','vwilderman@feeney.com','password','',NULL,NULL,'rodolfo.wisoky'),('ebba93','cbayer@gmail.com','password','',NULL,NULL,'rolando.schmeler'),('anika01','ford16@hotmail.com','password','',NULL,NULL,'romaguera.ila'),('yfeeney','monahan.ofelia@gmail.com','password','',NULL,NULL,'rossie.parker'),('furman92','pink27@gmail.com','password','',NULL,NULL,'rusty91'),('mkuhic','kyundt@yahoo.com','password','',NULL,NULL,'sandrine29'),('hermiston.','alexandrine.price@gmail.com','password','',NULL,NULL,'satterfield.chaz'),('alisa72','alessia.hansen@metz.com','password','',NULL,NULL,'satterfield.fabian'),('ystrosin','douglas.lenore@yahoo.com','password','',NULL,NULL,'savanna17'),('pskiles','ohahn@goyette.biz','password','',NULL,NULL,'sbashirian'),('cheyenne.w','strosin.titus@yahoo.com','password','',NULL,NULL,'schamberger.charlene'),('jlemke','kilback.terrence@bechtelar.com','password','',NULL,NULL,'sdurgan'),('colton.fra','simonis.eden@schamberger.biz','password','',NULL,NULL,'shields.nils'),('auer.mayra','conroy.rosalinda@ward.com','password','',NULL,NULL,'shudson'),('tara.muraz','obie80@gerlach.biz','password','',NULL,NULL,'sierra.hagenes'),('phickle','gkuphal@oberbrunner.com','password','',NULL,NULL,'sjacobi'),('chowell','goodwin.christopher@larson.biz','password','',NULL,NULL,'sporer.tamara'),('irippin','sanford.hansen@hotmail.com','password','',NULL,NULL,'stephon95'),('ewell.mann','ari36@pfannerstill.com','password','',NULL,NULL,'steve.zulauf'),('margarita4','hrowe@skiles.com','password','',NULL,NULL,'tdietrich'),('kmaggio','crystal.toy@hotmail.com','password','',NULL,NULL,'teagan42'),('harber.kir','gerald03@murphy.com','password','',NULL,NULL,'terrill05'),('jakubowski','okunde@ritchie.org','password','',NULL,NULL,'thammes'),('lueilwitz.','norberto69@gmail.com','password','',NULL,NULL,'theodore.jacobson'),('cremin.ved','abbigail.cronin@berge.com','password','',NULL,NULL,'therese18'),('isidro.cum','ulises20@hoppe.com','password','',NULL,NULL,'therese66'),('gonzalo.co','lrutherford@yahoo.com','password','',NULL,NULL,'tokeefe'),('alexandra4','gerald.gutmann@yahoo.com','password','',NULL,NULL,'toy15'),('maximillia','adela08@rutherford.com','password','',NULL,NULL,'tschoen'),('earl55','hoeger.simeon@hessel.com','password','',NULL,NULL,'twila.ziemann'),('zula27','lehner.agnes@gmail.com','password','',NULL,NULL,'uhaag'),('ethan67','boris30@yahoo.com','password','',NULL,NULL,'valentine49'),('jany.gleic','ckeeling@yahoo.com','password','',NULL,NULL,'vborer'),('edwina.lea','breana26@hotmail.com','password','',NULL,NULL,'vchristiansen'),('gust.brown','mitchel80@gmail.com','password','',NULL,NULL,'vdicki'),('sarmstrong','qdickens@willms.com','password','',NULL,NULL,'vella.borer'),('jeremie.tu','lenora.oreilly@gmail.com','password','',NULL,NULL,'velma93'),('thiel.fran','jayde.nitzsche@yahoo.com','password','',NULL,NULL,'vernie.bode'),('huels.lize','goodwin.dominic@roob.com','password','',NULL,NULL,'vidal82'),('akeem.wilk','cartwright.elouise@gmail.com','password','',NULL,NULL,'viva62'),('leonor17','sharon40@yahoo.com','password','',NULL,NULL,'vschinner'),('vada85','drake76@vonrueden.net','password','',NULL,NULL,'wava.medhurst'),('graham.tre','schroeder.jody@gutkowski.com','password','',NULL,NULL,'wendell.auer'),('hahn.zena','jameson.kutch@veum.com','password','',NULL,NULL,'west.beryl'),('dbergstrom','ksporer@hotmail.com','password','',NULL,NULL,'white.marilyne'),('zwintheise','nasir60@quitzon.com','password','',NULL,NULL,'wilkinson.loma'),('gwilderman','brown.darius@mayer.com','password','',NULL,NULL,'will.kathlyn'),('alanna.sta','alden.weber@gmail.com','password','',NULL,NULL,'willms.destini'),('norwood.fe','kwalker@hotmail.com','password','',NULL,NULL,'willms.haley'),('kelly.kris','ressie09@keeling.com','password','',NULL,NULL,'windler.rupert'),('tschuster','nasir35@yahoo.com','password','',NULL,NULL,'wisoky.rosalinda'),('davis.jenn','aimee.hamill@strosin.biz','password','',NULL,NULL,'wiza.yasmin'),('nicole.tra','dnienow@gmail.com','password','',NULL,NULL,'wmclaughlin'),('reed.donne','ojacobson@gmail.com','password','',NULL,NULL,'wmonahan'),('stroman.zu','newton.bernier@weimann.com','password','',NULL,NULL,'xweimann'),('era.mclaug','jeremy.hudson@yahoo.com','password','',NULL,NULL,'ynikolaus'),('funk.abiga','armani78@mcdermott.com','password','',NULL,NULL,'ywiegand'),('alf27','wisozk.carolyne@hotmail.com','password','',NULL,NULL,'zbeier'),('carmella96','bcollins@wolf.com','password','',NULL,NULL,'zemlak.brandyn'),('asmitham','lakin.lowell@yahoo.com','password','',NULL,NULL,'zena94'),('leonardo64','ujohns@stoltenberg.net','password','',NULL,NULL,'zoey23'),('emmanuel.b','kiara.senger@gmail.com','password','',NULL,NULL,'zoie.schmeler'),('bednar.dim','qsatterfield@yahoo.com','password','',NULL,NULL,'zparker'),('finn.farre','daugherty.antwon@bradtke.com','password','',NULL,NULL,'zrunolfsson'),('lydia.gran','trystan42@cassin.info','password','',NULL,NULL,'zveum');
/*!40000 ALTER TABLE `militaryusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monthavailability`
--

DROP TABLE IF EXISTS `monthavailability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monthavailability` (
  `monthid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `month` varchar(11) DEFAULT NULL,
  `username` varchar(11) DEFAULT NULL,
  `isavailable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`monthid`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monthavailability`
--

LOCK TABLES `monthavailability` WRITE;
/*!40000 ALTER TABLE `monthavailability` DISABLE KEYS */;
INSERT INTO `monthavailability` VALUES (2,'January','davetest',0),(12,'February','davetest',0),(22,'March','davetest',1),(32,'April','davetest',1),(42,'May','davetest',1),(52,'June','davetest',0),(62,'July','davetest',0),(72,'August','davetest',1),(82,'September','davetest',0),(92,'October','davetest',1),(102,'November','davetest',0),(112,'December','davetest',0);
/*!40000 ALTER TABLE `monthavailability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `previouscareerfields`
--

DROP TABLE IF EXISTS `previouscareerfields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `previouscareerfields` (
  `careerid` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
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
INSERT INTO `previouscareerfields` VALUES ('dave10',NULL,NULL,NULL,NULL,NULL),('dave11',NULL,NULL,NULL,NULL,NULL),('dave20','dave2',NULL,NULL,NULL,NULL),('dave21','dave2',NULL,NULL,NULL,NULL),('dave23230','dave2323',NULL,NULL,NULL,NULL),('dave23231','dave2323',NULL,NULL,NULL,NULL),('dave232321310','dave23232131',NULL,NULL,NULL,NULL),('dave232321311','dave23232131',NULL,NULL,NULL,NULL),('dave30',NULL,NULL,NULL,NULL,NULL),('dave31',NULL,NULL,NULL,NULL,NULL),('dave3250','dave325',NULL,NULL,NULL,NULL),('dave3251','dave325',NULL,NULL,NULL,NULL),('dave325940',NULL,NULL,NULL,NULL,NULL),('dave325941',NULL,NULL,NULL,NULL,NULL),('daveadmin0','daveadmin',NULL,NULL,NULL,NULL),('daveadmin1','daveadmin',NULL,NULL,NULL,NULL),('davetest0','davetest','David','Queens College','2018-01-01','0002-11-16'),('davetest1','davetest',NULL,NULL,NULL,NULL),('davetest10','davetest1',NULL,NULL,NULL,NULL),('davetest11','davetest1',NULL,NULL,NULL,NULL),('david1','dave325','OweYaa','Luke',NULL,NULL),('david2','dave325','OweYaa','Luke','0000-00-00',NULL),('joey690','joey69',NULL,NULL,'2018-04-01','2018-04-02'),('joey691','joey69',NULL,NULL,NULL,NULL),('JoeyC0','JoeyC',NULL,NULL,NULL,NULL),('JoeyC1','JoeyC',NULL,NULL,NULL,NULL),('joeyCheung0','joeyCheung','xxx-xxx-xxxx','None','1911-11-09','1911-11-09'),('joeyCheung1','joeyCheung','gjkdsgjkad','jsdjkdv',NULL,'1901-11-09');
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
  `username` varchar(255) DEFAULT NULL,
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
INSERT INTO `skills` VALUES ('abayer','react',3,'abayer0'),('abayer','nodejs',5,'abayer1'),('abayer','agile',1,'abayer2'),('abbigail.maggio','css',4,'abbigail.maggio0'),('abbigail.maggio','html',1,'abbigail.maggio1'),('abbigail.maggio','javascript',3,'abbigail.maggio2'),('abe12','agile',3,'abe120'),('abe12','c++',1,'abe121'),('abe12','nodejs',3,'abe122'),('adela.bartell','angular',3,'adela.bartell0'),('adela.bartell','php',1,'adela.bartell1'),('adela.bartell','css',5,'adela.bartell2'),('adela81','agile',3,'adela810'),('adela81','javascript',2,'adela811'),('adela81','css',3,'adela812'),('ahmad.cruickshank','agile',1,'ahmad.cruickshank0'),('ahmad.cruickshank','angular',1,'ahmad.cruickshank1'),('ahmad.cruickshank','c++',3,'ahmad.cruickshank2'),('aida46','angular',4,'aida460'),('aida46','javascript',1,'aida461'),('aida46','php',1,'aida462'),('alberta64','javascript',1,'alberta640'),('alberta64','c++',2,'alberta641'),('alberta64','angular',2,'alberta642'),('alessandro50','html',3,'alessandro500'),('alessandro50','c++',4,'alessandro501'),('alessandro50','javascript',1,'alessandro502'),('alexandria.hoeger','css',2,'alexandria.hoeger0'),('alexandria.hoeger','css',2,'alexandria.hoeger1'),('alexandria.hoeger','javascript',5,'alexandria.hoeger2'),('altenwerth.gonzalo','javascript',4,'altenwerth.gonzalo0'),('altenwerth.gonzalo','react',1,'altenwerth.gonzalo1'),('altenwerth.gonzalo','nodejs',1,'altenwerth.gonzalo2'),('alyson81','c++',1,'alyson810'),('alyson81','nodejs',3,'alyson811'),('alyson81','css',4,'alyson812'),('amorar','html',4,'amorar0'),('amorar','nodejs',2,'amorar1'),('amorar','c++',2,'amorar2'),('anastasia37','nodejs',3,'anastasia370'),('anastasia37','html',5,'anastasia371'),('anastasia37','html',5,'anastasia372'),('anastasia47','agile',5,'anastasia470'),('anastasia47','nodejs',5,'anastasia471'),('anastasia47','nodejs',2,'anastasia472'),('anderson.frami','agile',4,'anderson.frami0'),('anderson.frami','angular',1,'anderson.frami1'),('anderson.frami','css',4,'anderson.frami2'),('andre.pouros','nodejs',5,'andre.pouros0'),('andre.pouros','css',5,'andre.pouros1'),('andre.pouros','c++',4,'andre.pouros2'),('aniya41','react',3,'aniya410'),('aniya41','php',5,'aniya411'),('aniya41','agile',2,'aniya412'),('ansley63','php',4,'ansley630'),('ansley63','css',1,'ansley631'),('ansley63','css',1,'ansley632'),('ariane08','html',2,'ariane080'),('ariane08','html',4,'ariane081'),('ariane08','css',1,'ariane082'),('arnaldo.wisozk','react',4,'arnaldo.wisozk0'),('arnaldo.wisozk','javascript',3,'arnaldo.wisozk1'),('arnaldo.wisozk','react',5,'arnaldo.wisozk2'),('asa.hegmann','javascript',5,'asa.hegmann0'),('asa.hegmann','agile',2,'asa.hegmann1'),('asa.hegmann','php',4,'asa.hegmann2'),('austin.kshlerin','javascript',3,'austin.kshlerin0'),('austin.kshlerin','nodejs',1,'austin.kshlerin1'),('austin.kshlerin','react',5,'austin.kshlerin2'),('aylin46','agile',4,'aylin460'),('aylin46','angular',3,'aylin461'),('aylin46','react',1,'aylin462'),('bahringer.chesley','agile',4,'bahringer.chesley0'),('bahringer.chesley','nodejs',4,'bahringer.chesley1'),('bahringer.chesley','nodejs',2,'bahringer.chesley2'),('barton.george','react',4,'barton.george0'),('barton.george','nodejs',4,'barton.george1'),('barton.george','react',2,'barton.george2'),('baumbach.dudley','angular',2,'baumbach.dudley0'),('baumbach.dudley','c++',3,'baumbach.dudley1'),('baumbach.dudley','html',1,'baumbach.dudley2'),('baumbach.geovany','c++',2,'baumbach.geovany0'),('baumbach.geovany','agile',1,'baumbach.geovany1'),('baumbach.geovany','javascript',3,'baumbach.geovany2'),('bayer.kylie','react',4,'bayer.kylie0'),('bayer.kylie','css',5,'bayer.kylie1'),('bayer.kylie','agile',5,'bayer.kylie2'),('bcasper','css',3,'bcasper0'),('bcasper','html',5,'bcasper1'),('bcasper','c++',1,'bcasper2'),('becker.bonita','html',2,'becker.bonita0'),('becker.bonita','html',2,'becker.bonita1'),('becker.bonita','css',5,'becker.bonita2'),('berge.darron','css',1,'berge.darron0'),('berge.darron','agile',5,'berge.darron1'),('berge.darron','php',1,'berge.darron2'),('bernie.christiansen','html',4,'bernie.christiansen0'),('bernie.christiansen','c++',2,'bernie.christiansen1'),('bernie.christiansen','javascript',1,'bernie.christiansen2'),('bernier.giuseppe','javascript',3,'bernier.giuseppe0'),('bernier.giuseppe','css',5,'bernier.giuseppe1'),('bernier.giuseppe','react',1,'bernier.giuseppe2'),('berry.bosco','react',5,'berry.bosco0'),('berry.bosco','react',4,'berry.bosco1'),('berry.bosco','agile',4,'berry.bosco2'),('bertram.gusikowski','javascript',1,'bertram.gusikowski0'),('bertram.gusikowski','css',4,'bertram.gusikowski1'),('bertram.gusikowski','css',5,'bertram.gusikowski2'),('bo49','agile',4,'bo490'),('bo49','react',5,'bo491'),('bo49','html',2,'bo492'),('bode.jamar','html',1,'bode.jamar0'),('bode.jamar','react',2,'bode.jamar1'),('bode.jamar','html',5,'bode.jamar2'),('bogisich.elena','html',5,'bogisich.elena0'),('bogisich.elena','c++',3,'bogisich.elena1'),('bogisich.elena','javascript',5,'bogisich.elena2'),('bogisich.elisha','react',5,'bogisich.elisha0'),('bogisich.elisha','react',4,'bogisich.elisha1'),('bogisich.elisha','javascript',3,'bogisich.elisha2'),('bosco.alison','nodejs',3,'bosco.alison0'),('bosco.alison','php',5,'bosco.alison1'),('bosco.alison','css',4,'bosco.alison2'),('bosco.kevin','angular',4,'bosco.kevin0'),('bosco.kevin','react',2,'bosco.kevin1'),('bosco.kevin','php',5,'bosco.kevin2'),('botsford.aurore','c++',4,'botsford.aurore0'),('botsford.aurore','javascript',2,'botsford.aurore1'),('botsford.aurore','agile',1,'botsford.aurore2'),('boyer.jean','html',3,'boyer.jean0'),('boyer.jean','php',2,'boyer.jean1'),('boyer.jean','angular',1,'boyer.jean2'),('boyer.titus','react',5,'boyer.titus0'),('boyer.titus','angular',5,'boyer.titus1'),('boyer.titus','php',3,'boyer.titus2'),('boyle.kayli','php',5,'boyle.kayli0'),('boyle.kayli','nodejs',5,'boyle.kayli1'),('boyle.kayli','css',2,'boyle.kayli2'),('bpowlowski','c++',2,'bpowlowski0'),('bpowlowski','agile',5,'bpowlowski1'),('bpowlowski','react',5,'bpowlowski2'),('bradley.morissette','c++',2,'bradley.morissette0'),('bradley.morissette','javascript',5,'bradley.morissette1'),('bradley.morissette','c++',3,'bradley.morissette2'),('braun.jacynthe','javascript',3,'braun.jacynthe0'),('braun.jacynthe','javascript',1,'braun.jacynthe1'),('braun.jacynthe','angular',5,'braun.jacynthe2'),('bridgette29','javascript',2,'bridgette290'),('bridgette29','javascript',3,'bridgette291'),('bridgette29','php',4,'bridgette292'),('brigitte.osinski','angular',3,'brigitte.osinski0'),('brigitte.osinski','javascript',5,'brigitte.osinski1'),('brigitte.osinski','agile',1,'brigitte.osinski2'),('buckridge.guadalupe','javascript',3,'buckridge.guadalupe0'),('buckridge.guadalupe','agile',2,'buckridge.guadalupe1'),('buckridge.guadalupe','javascript',5,'buckridge.guadalupe2'),('bud74','agile',4,'bud740'),('bud74','agile',1,'bud741'),('bud74','agile',1,'bud742'),('casandra.hermiston','nodejs',1,'casandra.hermiston0'),('casandra.hermiston','nodejs',2,'casandra.hermiston1'),('casandra.hermiston','c++',5,'casandra.hermiston2'),('cathy.ward','nodejs',3,'cathy.ward0'),('cathy.ward','nodejs',5,'cathy.ward1'),('cathy.ward','agile',3,'cathy.ward2'),('cbayer','php',1,'cbayer0'),('cbayer','nodejs',3,'cbayer1'),('cbayer','agile',1,'cbayer2'),('cesar.runolfsson','css',2,'cesar.runolfsson0'),('cesar.runolfsson','react',4,'cesar.runolfsson1'),('cesar.runolfsson','agile',4,'cesar.runolfsson2'),('charlotte45','react',3,'charlotte450'),('charlotte45','nodejs',1,'charlotte451'),('charlotte45','php',5,'charlotte452'),('chase23','javascript',2,'chase230'),('chase23','html',3,'chase231'),('chase23','angular',1,'chase232'),('claude.quitzon','c++',1,'claude.quitzon0'),('claude.quitzon','php',2,'claude.quitzon1'),('claude.quitzon','javascript',5,'claude.quitzon2'),('clifford.abbott','html',3,'clifford.abbott0'),('clifford.abbott','agile',1,'clifford.abbott1'),('clifford.abbott','agile',4,'clifford.abbott2'),('colten96','nodejs',4,'colten960'),('colten96','html',1,'colten961'),('colten96','react',1,'colten962'),('cormier.melisa','nodejs',1,'cormier.melisa0'),('cormier.melisa','angular',3,'cormier.melisa1'),('cormier.melisa','javascript',4,'cormier.melisa2'),('corrine.schmeler','javascript',5,'corrine.schmeler0'),('corrine.schmeler','c++',3,'corrine.schmeler1'),('corrine.schmeler','c++',2,'corrine.schmeler2'),('crist.seamus','angular',3,'crist.seamus0'),('crist.seamus','react',1,'crist.seamus1'),('crist.seamus','react',5,'crist.seamus2'),('cristian.muller','react',3,'cristian.muller0'),('cristian.muller','c++',3,'cristian.muller1'),('cristian.muller','angular',5,'cristian.muller2'),('csteuber','react',3,'csteuber0'),('csteuber','react',4,'csteuber1'),('csteuber','angular',4,'csteuber2'),('dach.darius','angular',1,'dach.darius0'),('dach.darius','css',5,'dach.darius1'),('dach.darius','javascript',5,'dach.darius2'),('dale54','c++',5,'dale540'),('dale54','react',1,'dale541'),('dale54','agile',2,'dale542'),('damore.erin','nodejs',5,'damore.erin0'),('damore.erin','php',3,'damore.erin1'),('damore.erin','html',4,'damore.erin2'),('dana.emmerich','php',4,'dana.emmerich0'),('dana.emmerich','react',1,'dana.emmerich1'),('dana.emmerich','php',3,'dana.emmerich2'),('daniella.altenwerth','css',4,'daniella.altenwerth0'),('daniella.altenwerth','nodejs',5,'daniella.altenwerth1'),('daniella.altenwerth','nodejs',2,'daniella.altenwerth2'),('davetest','HTML',5,'davetest1'),('deanna71','react',5,'deanna710'),('deanna71','angular',4,'deanna711'),('deanna71','html',2,'deanna712'),('deja.jones','react',5,'deja.jones0'),('deja.jones','css',3,'deja.jones1'),('deja.jones','agile',1,'deja.jones2'),('delta.bergnaum','agile',4,'delta.bergnaum0'),('delta.bergnaum','javascript',2,'delta.bergnaum1'),('delta.bergnaum','php',1,'delta.bergnaum2'),('dibbert.jennings','angular',3,'dibbert.jennings0'),('dibbert.jennings','react',5,'dibbert.jennings1'),('dibbert.jennings','javascript',4,'dibbert.jennings2'),('dmurazik','c++',3,'dmurazik0'),('dmurazik','javascript',2,'dmurazik1'),('dmurazik','php',1,'dmurazik2'),('dmurphy','angular',3,'dmurphy0'),('dmurphy','angular',3,'dmurphy1'),('dmurphy','react',1,'dmurphy2'),('domenico99','php',5,'domenico990'),('domenico99','php',3,'domenico991'),('domenico99','angular',3,'domenico992'),('don74','agile',3,'don740'),('don74','css',3,'don741'),('don74','react',1,'don742'),('donnelly.esther','c++',3,'donnelly.esther0'),('donnelly.esther','javascript',5,'donnelly.esther1'),('donnelly.esther','angular',3,'donnelly.esther2'),('doug.turner','c++',1,'doug.turner0'),('doug.turner','html',2,'doug.turner1'),('doug.turner','css',5,'doug.turner2'),('dstrosin','css',4,'dstrosin0'),('dstrosin','angular',1,'dstrosin1'),('dstrosin','react',2,'dstrosin2'),('ebert.autumn','agile',5,'ebert.autumn0'),('ebert.autumn','html',4,'ebert.autumn1'),('ebert.autumn','html',3,'ebert.autumn2'),('eboyle','agile',2,'eboyle0'),('eboyle','html',2,'eboyle1'),('eboyle','php',5,'eboyle2'),('edyth04','angular',3,'edyth040'),('edyth04','nodejs',4,'edyth041'),('edyth04','angular',4,'edyth042'),('ehowe','javascript',4,'ehowe0'),('ehowe','c++',2,'ehowe1'),('ehowe','html',2,'ehowe2'),('eichmann.orlo','agile',3,'eichmann.orlo0'),('eichmann.orlo','agile',5,'eichmann.orlo1'),('eichmann.orlo','react',4,'eichmann.orlo2'),('eino51','angular',3,'eino510'),('eino51','php',5,'eino511'),('eino51','angular',5,'eino512'),('eleonore09','php',1,'eleonore090'),('eleonore09','react',2,'eleonore091'),('eleonore09','html',1,'eleonore092'),('elizabeth54','react',4,'elizabeth540'),('elizabeth54','html',5,'elizabeth541'),('elizabeth54','c++',2,'elizabeth542'),('elmira.ryan','c++',2,'elmira.ryan0'),('elmira.ryan','css',5,'elmira.ryan1'),('elmira.ryan','angular',3,'elmira.ryan2'),('emery52','angular',2,'emery520'),('emery52','javascript',3,'emery521'),('emery52','css',2,'emery522'),('emiliano52','nodejs',5,'emiliano520'),('emiliano52','javascript',1,'emiliano521'),('emiliano52','agile',4,'emiliano522'),('ena.paucek','angular',1,'ena.paucek0'),('ena.paucek','css',4,'ena.paucek1'),('ena.paucek','javascript',3,'ena.paucek2'),('enid.daugherty','nodejs',3,'enid.daugherty0'),('enid.daugherty','html',1,'enid.daugherty1'),('enid.daugherty','c++',5,'enid.daugherty2'),('erick16','nodejs',2,'erick160'),('erick16','javascript',1,'erick161'),('erick16','html',5,'erick162'),('ernser.ronny','javascript',5,'ernser.ronny0'),('ernser.ronny','javascript',1,'ernser.ronny1'),('ernser.ronny','angular',4,'ernser.ronny2'),('esperanza64','html',3,'esperanza640'),('esperanza64','css',4,'esperanza641'),('esperanza64','php',3,'esperanza642'),('estel45','css',5,'estel450'),('estel45','c++',5,'estel451'),('estel45','angular',3,'estel452'),('fannie.muller','html',3,'fannie.muller0'),('fannie.muller','php',1,'fannie.muller1'),('fannie.muller','react',5,'fannie.muller2'),('felipa97','c++',4,'felipa970'),('felipa97','css',2,'felipa971'),('felipa97','html',1,'felipa972'),('flatley.wendy','c++',3,'flatley.wendy0'),('flatley.wendy','javascript',2,'flatley.wendy1'),('flatley.wendy','html',3,'flatley.wendy2'),('fleta.romaguera','nodejs',4,'fleta.romaguera0'),('fleta.romaguera','nodejs',5,'fleta.romaguera1'),('fleta.romaguera','react',2,'fleta.romaguera2'),('florian.romaguera','angular',1,'florian.romaguera0'),('florian.romaguera','css',5,'florian.romaguera1'),('florian.romaguera','nodejs',4,'florian.romaguera2'),('florida47','agile',2,'florida470'),('florida47','php',3,'florida471'),('florida47','css',2,'florida472'),('ford.lynch','html',1,'ford.lynch0'),('ford.lynch','html',1,'ford.lynch1'),('ford.lynch','php',1,'ford.lynch2'),('frida11','css',2,'frida110'),('frida11','c++',2,'frida111'),('frida11','nodejs',5,'frida112'),('gaylord.casey','react',3,'gaylord.casey0'),('gaylord.casey','react',5,'gaylord.casey1'),('gaylord.casey','nodejs',2,'gaylord.casey2'),('gbalistreri','angular',2,'gbalistreri0'),('gbalistreri','c++',3,'gbalistreri1'),('gbalistreri','c++',4,'gbalistreri2'),('gleichner.janis','html',2,'gleichner.janis0'),('gleichner.janis','nodejs',3,'gleichner.janis1'),('gleichner.janis','javascript',4,'gleichner.janis2'),('gloria.koch','css',4,'gloria.koch0'),('gloria.koch','react',4,'gloria.koch1'),('gloria.koch','php',1,'gloria.koch2'),('gmurphy','css',1,'gmurphy0'),('gmurphy','css',4,'gmurphy1'),('gmurphy','html',2,'gmurphy2'),('gpowlowski','agile',1,'gpowlowski0'),('gpowlowski','php',1,'gpowlowski1'),('gpowlowski','react',4,'gpowlowski2'),('grant.jocelyn','html',3,'grant.jocelyn0'),('grant.jocelyn','javascript',2,'grant.jocelyn1'),('grant.jocelyn','javascript',2,'grant.jocelyn2'),('growe','react',3,'growe0'),('growe','html',3,'growe1'),('growe','javascript',2,'growe2'),('gstreich','php',3,'gstreich0'),('gstreich','angular',5,'gstreich1'),('gstreich','php',1,'gstreich2'),('gustave.schulist','javascript',1,'gustave.schulist0'),('gustave.schulist','agile',1,'gustave.schulist1'),('gustave.schulist','css',5,'gustave.schulist2'),('hank.herman','angular',4,'hank.herman0'),('hank.herman','c++',3,'hank.herman1'),('hank.herman','c++',4,'hank.herman2'),('hdickinson','agile',3,'hdickinson0'),('hdickinson','nodejs',5,'hdickinson1'),('hdickinson','nodejs',4,'hdickinson2'),('heaney.dorris','php',5,'heaney.dorris0'),('heaney.dorris','agile',1,'heaney.dorris1'),('heaney.dorris','php',1,'heaney.dorris2'),('heller.andreane','c++',1,'heller.andreane0'),('heller.andreane','c++',1,'heller.andreane1'),('heller.andreane','nodejs',5,'heller.andreane2'),('herbert.ohara','react',1,'herbert.ohara0'),('herbert.ohara','html',3,'herbert.ohara1'),('herbert.ohara','javascript',2,'herbert.ohara2'),('hosea71','php',3,'hosea710'),('hosea71','html',3,'hosea711'),('hosea71','javascript',4,'hosea712'),('howe.constance','react',4,'howe.constance0'),('howe.constance','html',5,'howe.constance1'),('howe.constance','react',3,'howe.constance2'),('humberto62','javascript',4,'humberto620'),('humberto62','react',1,'humberto621'),('humberto62','angular',3,'humberto622'),('hyman01','php',5,'hyman010'),('hyman01','javascript',3,'hyman011'),('hyman01','c++',1,'hyman012'),('iking','angular',2,'iking0'),('iking','html',4,'iking1'),('iking','agile',1,'iking2'),('irving.beahan','c++',3,'irving.beahan0'),('irving.beahan','html',5,'irving.beahan1'),('irving.beahan','javascript',2,'irving.beahan2'),('isabel.schuppe','agile',1,'isabel.schuppe0'),('isabel.schuppe','css',1,'isabel.schuppe1'),('isabel.schuppe','php',5,'isabel.schuppe2'),('isabelle.dubuque','php',3,'isabelle.dubuque0'),('isabelle.dubuque','javascript',4,'isabelle.dubuque1'),('isabelle.dubuque','nodejs',5,'isabelle.dubuque2'),('jabbott','html',2,'jabbott0'),('jabbott','agile',4,'jabbott1'),('jabbott','nodejs',4,'jabbott2'),('jacquelyn.lockman','css',2,'jacquelyn.lockman0'),('jacquelyn.lockman','agile',3,'jacquelyn.lockman1'),('jacquelyn.lockman','react',5,'jacquelyn.lockman2'),('jamal94','nodejs',2,'jamal940'),('jamal94','javascript',5,'jamal941'),('jamal94','angular',4,'jamal942'),('janet.reichel','nodejs',1,'janet.reichel0'),('janet.reichel','c++',3,'janet.reichel1'),('janet.reichel','nodejs',3,'janet.reichel2'),('jaskolski.geovanni','php',5,'jaskolski.geovanni0'),('jaskolski.geovanni','react',5,'jaskolski.geovanni1'),('jaskolski.geovanni','react',3,'jaskolski.geovanni2'),('jazmin14','angular',1,'jazmin140'),('jazmin14','react',5,'jazmin141'),('jazmin14','react',4,'jazmin142'),('jeff.schmitt','php',5,'jeff.schmitt0'),('jeff.schmitt','nodejs',2,'jeff.schmitt1'),('jeff.schmitt','c++',1,'jeff.schmitt2'),('jheller','css',1,'jheller0'),('jheller','agile',1,'jheller1'),('jheller','angular',4,'jheller2'),('jkoelpin','nodejs',2,'jkoelpin0'),('jkoelpin','react',4,'jkoelpin1'),('jkoelpin','agile',2,'jkoelpin2'),('jkulas','css',2,'jkulas0'),('jkulas','react',3,'jkulas1'),('jkulas','html',1,'jkulas2'),('joana.douglas','nodejs',3,'joana.douglas0'),('joana.douglas','javascript',2,'joana.douglas1'),('joana.douglas','html',1,'joana.douglas2'),('josephine.mitchell','javascript',4,'josephine.mitchell0'),('josephine.mitchell','javascript',1,'josephine.mitchell1'),('josephine.mitchell','nodejs',2,'josephine.mitchell2'),('jromaguera','agile',1,'jromaguera0'),('jromaguera','javascript',1,'jromaguera1'),('jromaguera','nodejs',1,'jromaguera2'),('julie.kris','php',2,'julie.kris0'),('julie.kris','c++',4,'julie.kris1'),('julie.kris','react',2,'julie.kris2'),('jwilkinson','nodejs',1,'jwilkinson0'),('jwilkinson','css',2,'jwilkinson1'),('jwilkinson','css',1,'jwilkinson2'),('jwilliamson','css',2,'jwilliamson0'),('jwilliamson','nodejs',2,'jwilliamson1'),('jwilliamson','php',2,'jwilliamson2'),('kaia.daniel','angular',4,'kaia.daniel0'),('kaia.daniel','html',1,'kaia.daniel1'),('kaia.daniel','php',1,'kaia.daniel2'),('karley.oberbrunner','javascript',2,'karley.oberbrunner0'),('karley.oberbrunner','css',4,'karley.oberbrunner1'),('karley.oberbrunner','css',2,'karley.oberbrunner2'),('kaycee34','javascript',5,'kaycee340'),('kaycee34','angular',1,'kaycee341'),('kaycee34','react',2,'kaycee342'),('kbrekke','php',5,'kbrekke0'),('kbrekke','angular',3,'kbrekke1'),('kbrekke','c++',2,'kbrekke2'),('keegan39','css',4,'keegan390'),('keegan39','php',2,'keegan391'),('keegan39','c++',1,'keegan392'),('kelley.fay','agile',5,'kelley.fay0'),('kelley.fay','angular',3,'kelley.fay1'),('kelley.fay','angular',2,'kelley.fay2'),('kelsie.hilll','angular',4,'kelsie.hilll0'),('kelsie.hilll','php',3,'kelsie.hilll1'),('kelsie.hilll','javascript',4,'kelsie.hilll2'),('kemmer.makenzie','react',4,'kemmer.makenzie0'),('kemmer.makenzie','css',4,'kemmer.makenzie1'),('kemmer.makenzie','nodejs',3,'kemmer.makenzie2'),('kenya48','php',1,'kenya480'),('kenya48','agile',2,'kenya481'),('kenya48','html',5,'kenya482'),('kiara.schaden','css',5,'kiara.schaden0'),('kiara.schaden','nodejs',3,'kiara.schaden1'),('kiara.schaden','javascript',3,'kiara.schaden2'),('klemke','javascript',5,'klemke0'),('klemke','css',3,'klemke1'),('klemke','angular',2,'klemke2'),('kmarvin','css',1,'kmarvin0'),('kmarvin','agile',5,'kmarvin1'),('kmarvin','angular',1,'kmarvin2'),('kohler.edison','php',2,'kohler.edison0'),('kohler.edison','angular',1,'kohler.edison1'),('kohler.edison','agile',2,'kohler.edison2'),('krajcik.amely','javascript',5,'krajcik.amely0'),('krajcik.amely','react',2,'krajcik.amely1'),('krajcik.amely','angular',1,'krajcik.amely2'),('kristy.reinger','angular',1,'kristy.reinger0'),('kristy.reinger','php',2,'kristy.reinger1'),('kristy.reinger','react',2,'kristy.reinger2'),('kulas.bethany','html',3,'kulas.bethany0'),('kulas.bethany','c++',2,'kulas.bethany1'),('kulas.bethany','c++',1,'kulas.bethany2'),('lakin.clotilde','agile',2,'lakin.clotilde0'),('lakin.clotilde','react',4,'lakin.clotilde1'),('lakin.clotilde','javascript',1,'lakin.clotilde2'),('ledner.colten','agile',4,'ledner.colten0'),('ledner.colten','css',5,'ledner.colten1'),('ledner.colten','nodejs',5,'ledner.colten2'),('leffler.stuart','angular',5,'leffler.stuart0'),('leffler.stuart','css',5,'leffler.stuart1'),('leffler.stuart','css',4,'leffler.stuart2'),('leonor.quitzon','javascript',1,'leonor.quitzon0'),('leonor.quitzon','php',4,'leonor.quitzon1'),('leonor.quitzon','nodejs',1,'leonor.quitzon2'),('lesch.jerel','react',2,'lesch.jerel0'),('lesch.jerel','php',2,'lesch.jerel1'),('lesch.jerel','css',4,'lesch.jerel2'),('liana96','php',5,'liana960'),('liana96','nodejs',3,'liana961'),('liana96','php',4,'liana962'),('littel.cleo','javascript',1,'littel.cleo0'),('littel.cleo','css',4,'littel.cleo1'),('littel.cleo','nodejs',3,'littel.cleo2'),('little.barton','html',5,'little.barton0'),('little.barton','html',2,'little.barton1'),('little.barton','angular',1,'little.barton2'),('little.imogene','agile',3,'little.imogene0'),('little.imogene','javascript',5,'little.imogene1'),('little.imogene','css',1,'little.imogene2'),('lockman.kailee','agile',4,'lockman.kailee0'),('lockman.kailee','css',3,'lockman.kailee1'),('lockman.kailee','react',5,'lockman.kailee2'),('lonny06','agile',2,'lonny060'),('lonny06','c++',1,'lonny061'),('lonny06','html',4,'lonny062'),('ltoy','react',5,'ltoy0'),('ltoy','nodejs',1,'ltoy1'),('ltoy','agile',4,'ltoy2'),('luz.douglas','agile',4,'luz.douglas0'),('luz.douglas','angular',4,'luz.douglas1'),('luz.douglas','javascript',2,'luz.douglas2'),('mackenzie17','javascript',4,'mackenzie170'),('mackenzie17','angular',2,'mackenzie171'),('mackenzie17','angular',1,'mackenzie172'),('malcolm.leuschke','nodejs',4,'malcolm.leuschke0'),('malcolm.leuschke','agile',4,'malcolm.leuschke1'),('malcolm.leuschke','css',1,'malcolm.leuschke2'),('maritza.kessler','php',4,'maritza.kessler0'),('maritza.kessler','html',1,'maritza.kessler1'),('maritza.kessler','html',3,'maritza.kessler2'),('marks.ezequiel','javascript',4,'marks.ezequiel0'),('marks.ezequiel','agile',4,'marks.ezequiel1'),('marks.ezequiel','c++',5,'marks.ezequiel2'),('marvin.earnestine','php',3,'marvin.earnestine0'),('marvin.earnestine','angular',5,'marvin.earnestine1'),('marvin.earnestine','css',2,'marvin.earnestine2'),('maryjane24','agile',1,'maryjane240'),('maryjane24','php',4,'maryjane241'),('maryjane24','html',5,'maryjane242'),('mateo.anderson','php',1,'mateo.anderson0'),('mateo.anderson','html',5,'mateo.anderson1'),('mateo.anderson','angular',2,'mateo.anderson2'),('mavis72','javascript',5,'mavis720'),('mavis72','nodejs',1,'mavis721'),('mavis72','php',1,'mavis722'),('mayer.irwin','c++',5,'mayer.irwin0'),('mayer.irwin','html',1,'mayer.irwin1'),('mayer.irwin','nodejs',1,'mayer.irwin2'),('mayer.lydia','css',4,'mayer.lydia0'),('mayer.lydia','c++',5,'mayer.lydia1'),('mayer.lydia','react',1,'mayer.lydia2'),('meggie33','react',1,'meggie330'),('meggie33','react',3,'meggie331'),('meggie33','css',3,'meggie332'),('meghan.torp','agile',1,'meghan.torp0'),('meghan.torp','css',4,'meghan.torp1'),('meghan.torp','html',2,'meghan.torp2'),('melany29','agile',1,'melany290'),('melany29','react',2,'melany291'),('melany29','php',2,'melany292'),('melba.gleason','angular',2,'melba.gleason0'),('melba.gleason','nodejs',5,'melba.gleason1'),('melba.gleason','angular',1,'melba.gleason2'),('meta.stracke','javascript',3,'meta.stracke0'),('meta.stracke','javascript',1,'meta.stracke1'),('meta.stracke','html',1,'meta.stracke2'),('michaela.koss','php',3,'michaela.koss0'),('michaela.koss','angular',1,'michaela.koss1'),('michaela.koss','javascript',4,'michaela.koss2'),('michel57','css',2,'michel570'),('michel57','nodejs',1,'michel571'),('michel57','react',4,'michel572'),('miller.elton','html',2,'miller.elton0'),('miller.elton','nodejs',2,'miller.elton1'),('miller.elton','php',5,'miller.elton2'),('milo.lindgren','react',3,'milo.lindgren0'),('milo.lindgren','html',1,'milo.lindgren1'),('milo.lindgren','php',1,'milo.lindgren2'),('mohammed47','javascript',3,'mohammed470'),('mohammed47','angular',2,'mohammed471'),('mohammed47','php',1,'mohammed472'),('monty.rutherford','react',1,'monty.rutherford0'),('monty.rutherford','agile',5,'monty.rutherford1'),('monty.rutherford','c++',2,'monty.rutherford2'),('mraz.bell','html',2,'mraz.bell0'),('mraz.bell','javascript',1,'mraz.bell1'),('mraz.bell','html',4,'mraz.bell2'),('mrunolfsdottir','nodejs',5,'mrunolfsdottir0'),('mrunolfsdottir','c++',5,'mrunolfsdottir1'),('mrunolfsdottir','angular',4,'mrunolfsdottir2'),('mspinka','php',2,'mspinka0'),('mspinka','javascript',4,'mspinka1'),('mspinka','html',1,'mspinka2'),('myriam.krajcik','react',2,'myriam.krajcik0'),('myriam.krajcik','react',2,'myriam.krajcik1'),('myriam.krajcik','angular',1,'myriam.krajcik2'),('nayeli04','angular',2,'nayeli040'),('nayeli04','agile',2,'nayeli041'),('nayeli04','nodejs',4,'nayeli042'),('nicole.feeney','c++',3,'nicole.feeney0'),('nicole.feeney','react',4,'nicole.feeney1'),('nicole.feeney','css',1,'nicole.feeney2'),('nokon','nodejs',3,'nokon0'),('nokon','css',4,'nokon1'),('nokon','agile',2,'nokon2'),('nshields','javascript',2,'nshields0'),('nshields','c++',1,'nshields1'),('nshields','agile',4,'nshields2'),('ntoy','react',5,'ntoy0'),('ntoy','agile',2,'ntoy1'),('ntoy','angular',3,'ntoy2'),('obeer','c++',1,'obeer0'),('obeer','nodejs',1,'obeer1'),('obeer','angular',3,'obeer2'),('oberbrunner.gabrielle','agile',5,'oberbrunner.gabrielle0'),('oberbrunner.gabrielle','react',3,'oberbrunner.gabrielle1'),('oberbrunner.gabrielle','react',4,'oberbrunner.gabrielle2'),('okuneva.murphy','css',4,'okuneva.murphy0'),('okuneva.murphy','nodejs',3,'okuneva.murphy1'),('okuneva.murphy','php',5,'okuneva.murphy2'),('olson.leann','agile',5,'olson.leann0'),('olson.leann','angular',1,'olson.leann1'),('olson.leann','nodejs',5,'olson.leann2'),('oma.marvin','react',1,'oma.marvin0'),('oma.marvin','react',1,'oma.marvin1'),('oma.marvin','html',4,'oma.marvin2'),('orn.mauricio','html',4,'orn.mauricio0'),('orn.mauricio','html',3,'orn.mauricio1'),('orn.mauricio','angular',1,'orn.mauricio2'),('osborne98','c++',2,'osborne980'),('osborne98','php',3,'osborne981'),('osborne98','html',3,'osborne982'),('oscar48','nodejs',5,'oscar480'),('oscar48','angular',2,'oscar481'),('oscar48','agile',4,'oscar482'),('pagac.mckenna','css',5,'pagac.mckenna0'),('pagac.mckenna','c++',4,'pagac.mckenna1'),('pagac.mckenna','react',5,'pagac.mckenna2'),('pagac.velva','html',1,'pagac.velva0'),('pagac.velva','nodejs',4,'pagac.velva1'),('pagac.velva','angular',2,'pagac.velva2'),('pedro87','html',4,'pedro870'),('pedro87','c++',1,'pedro871'),('pedro87','html',1,'pedro872'),('perry.treutel','nodejs',2,'perry.treutel0'),('perry.treutel','php',3,'perry.treutel1'),('perry.treutel','angular',3,'perry.treutel2'),('pete06','react',4,'pete060'),('pete06','angular',1,'pete061'),('pete06','php',3,'pete062'),('pfeffer.phoebe','html',3,'pfeffer.phoebe0'),('pfeffer.phoebe','nodejs',1,'pfeffer.phoebe1'),('pfeffer.phoebe','javascript',5,'pfeffer.phoebe2'),('porn','nodejs',4,'porn0'),('porn','agile',4,'porn1'),('porn','angular',1,'porn2'),('pouros.anastasia','c++',1,'pouros.anastasia0'),('pouros.anastasia','css',3,'pouros.anastasia1'),('pouros.anastasia','c++',4,'pouros.anastasia2'),('pouros.daija','nodejs',3,'pouros.daija0'),('pouros.daija','javascript',4,'pouros.daija1'),('pouros.daija','css',3,'pouros.daija2'),('qhermiston','html',4,'qhermiston0'),('qhermiston','css',2,'qhermiston1'),('qhermiston','nodejs',2,'qhermiston2'),('qkling','php',5,'qkling0'),('qkling','angular',5,'qkling1'),('qkling','css',2,'qkling2'),('qkub','react',1,'qkub0'),('qkub','angular',3,'qkub1'),('qkub','nodejs',1,'qkub2'),('qpagac','html',5,'qpagac0'),('qpagac','javascript',3,'qpagac1'),('qpagac','css',2,'qpagac2'),('qprosacco','agile',3,'qprosacco0'),('qprosacco','html',4,'qprosacco1'),('qprosacco','angular',1,'qprosacco2'),('queenie37','css',1,'queenie370'),('queenie37','c++',3,'queenie371'),('queenie37','react',3,'queenie372'),('ramona82','c++',5,'ramona820'),('ramona82','javascript',1,'ramona821'),('ramona82','javascript',1,'ramona822'),('ratke.roel','agile',1,'ratke.roel0'),('ratke.roel','angular',4,'ratke.roel1'),('ratke.roel','nodejs',5,'ratke.roel2'),('rcorwin','javascript',5,'rcorwin0'),('rcorwin','nodejs',3,'rcorwin1'),('rcorwin','html',2,'rcorwin2'),('rick01','nodejs',1,'rick010'),('rick01','angular',2,'rick011'),('rick01','react',3,'rick012'),('river.jones','php',3,'river.jones0'),('river.jones','c++',4,'river.jones1'),('river.jones','css',1,'river.jones2'),('robel.nellie','react',3,'robel.nellie0'),('robel.nellie','javascript',2,'robel.nellie1'),('robel.nellie','html',4,'robel.nellie2'),('rodolfo.wisoky','c++',5,'rodolfo.wisoky0'),('rodolfo.wisoky','react',3,'rodolfo.wisoky1'),('rodolfo.wisoky','javascript',2,'rodolfo.wisoky2'),('rolando.schmeler','javascript',3,'rolando.schmeler0'),('rolando.schmeler','nodejs',2,'rolando.schmeler1'),('rolando.schmeler','php',2,'rolando.schmeler2'),('romaguera.ila','angular',1,'romaguera.ila0'),('romaguera.ila','html',3,'romaguera.ila1'),('romaguera.ila','react',5,'romaguera.ila2'),('rossie.parker','c++',2,'rossie.parker0'),('rossie.parker','agile',4,'rossie.parker1'),('rossie.parker','agile',3,'rossie.parker2'),('rusty91','angular',5,'rusty910'),('rusty91','html',1,'rusty911'),('rusty91','php',2,'rusty912'),('sandrine29','php',2,'sandrine290'),('sandrine29','html',5,'sandrine291'),('sandrine29','agile',3,'sandrine292'),('satterfield.chaz','javascript',3,'satterfield.chaz0'),('satterfield.chaz','css',1,'satterfield.chaz1'),('satterfield.chaz','nodejs',2,'satterfield.chaz2'),('satterfield.fabian','nodejs',4,'satterfield.fabian0'),('satterfield.fabian','javascript',3,'satterfield.fabian1'),('satterfield.fabian','angular',3,'satterfield.fabian2'),('savanna17','c++',3,'savanna170'),('savanna17','react',2,'savanna171'),('savanna17','html',2,'savanna172'),('sbashirian','angular',5,'sbashirian0'),('sbashirian','c++',4,'sbashirian1'),('sbashirian','nodejs',1,'sbashirian2'),('schamberger.charlene','c++',2,'schamberger.charlene0'),('schamberger.charlene','agile',1,'schamberger.charlene1'),('schamberger.charlene','c++',2,'schamberger.charlene2'),('sdurgan','c++',1,'sdurgan0'),('sdurgan','php',1,'sdurgan1'),('sdurgan','angular',4,'sdurgan2'),('shields.nils','angular',5,'shields.nils0'),('shields.nils','nodejs',3,'shields.nils1'),('shields.nils','javascript',4,'shields.nils2'),('shudson','angular',1,'shudson0'),('shudson','agile',3,'shudson1'),('shudson','nodejs',4,'shudson2'),('sierra.hagenes','angular',3,'sierra.hagenes0'),('sierra.hagenes','css',3,'sierra.hagenes1'),('sierra.hagenes','c++',5,'sierra.hagenes2'),('sjacobi','c++',2,'sjacobi0'),('sjacobi','react',1,'sjacobi1'),('sjacobi','css',4,'sjacobi2'),('sporer.tamara','angular',5,'sporer.tamara0'),('sporer.tamara','html',4,'sporer.tamara1'),('sporer.tamara','angular',1,'sporer.tamara2'),('stephon95','css',2,'stephon950'),('stephon95','angular',2,'stephon951'),('stephon95','react',1,'stephon952'),('steve.zulauf','html',1,'steve.zulauf0'),('steve.zulauf','c++',5,'steve.zulauf1'),('steve.zulauf','html',5,'steve.zulauf2'),('tdietrich','html',2,'tdietrich0'),('tdietrich','agile',3,'tdietrich1'),('tdietrich','agile',3,'tdietrich2'),('teagan42','javascript',5,'teagan420'),('teagan42','angular',5,'teagan421'),('teagan42','php',5,'teagan422'),('terrill05','agile',5,'terrill050'),('terrill05','css',5,'terrill051'),('terrill05','c++',5,'terrill052'),('thammes','html',2,'thammes0'),('thammes','react',5,'thammes1'),('thammes','nodejs',2,'thammes2'),('theodore.jacobson','angular',1,'theodore.jacobson0'),('theodore.jacobson','css',2,'theodore.jacobson1'),('theodore.jacobson','c++',4,'theodore.jacobson2'),('therese18','c++',1,'therese180'),('therese18','c++',1,'therese181'),('therese18','angular',4,'therese182'),('therese66','angular',2,'therese660'),('therese66','angular',2,'therese661'),('therese66','javascript',4,'therese662'),('tokeefe','php',2,'tokeefe0'),('tokeefe','agile',3,'tokeefe1'),('tokeefe','css',4,'tokeefe2'),('toy15','php',1,'toy150'),('toy15','agile',2,'toy151'),('toy15','agile',1,'toy152'),('tschoen','php',2,'tschoen0'),('tschoen','react',4,'tschoen1'),('tschoen','react',2,'tschoen2'),('twila.ziemann','html',4,'twila.ziemann0'),('twila.ziemann','react',4,'twila.ziemann1'),('twila.ziemann','agile',1,'twila.ziemann2'),('uhaag','nodejs',4,'uhaag0'),('uhaag','angular',3,'uhaag1'),('uhaag','agile',5,'uhaag2'),('valentine49','javascript',4,'valentine490'),('valentine49','javascript',5,'valentine491'),('valentine49','php',3,'valentine492'),('vborer','agile',2,'vborer0'),('vborer','agile',3,'vborer1'),('vborer','react',5,'vborer2'),('vchristiansen','php',2,'vchristiansen0'),('vchristiansen','nodejs',4,'vchristiansen1'),('vchristiansen','nodejs',2,'vchristiansen2'),('vdicki','c++',4,'vdicki0'),('vdicki','c++',1,'vdicki1'),('vdicki','javascript',2,'vdicki2'),('vella.borer','javascript',3,'vella.borer0'),('vella.borer','html',2,'vella.borer1'),('vella.borer','css',2,'vella.borer2'),('velma93','angular',5,'velma930'),('velma93','agile',3,'velma931'),('velma93','angular',1,'velma932'),('vernie.bode','angular',3,'vernie.bode0'),('vernie.bode','angular',2,'vernie.bode1'),('vernie.bode','nodejs',3,'vernie.bode2'),('vidal82','javascript',5,'vidal820'),('vidal82','nodejs',4,'vidal821'),('vidal82','php',3,'vidal822'),('viva62','agile',2,'viva620'),('viva62','nodejs',4,'viva621'),('viva62','nodejs',3,'viva622'),('vschinner','html',4,'vschinner0'),('vschinner','javascript',3,'vschinner1'),('vschinner','html',1,'vschinner2'),('wava.medhurst','c++',3,'wava.medhurst0'),('wava.medhurst','react',5,'wava.medhurst1'),('wava.medhurst','html',1,'wava.medhurst2'),('wendell.auer','react',4,'wendell.auer0'),('wendell.auer','agile',1,'wendell.auer1'),('wendell.auer','agile',3,'wendell.auer2'),('west.beryl','css',4,'west.beryl0'),('west.beryl','javascript',3,'west.beryl1'),('west.beryl','css',4,'west.beryl2'),('white.marilyne','angular',2,'white.marilyne0'),('white.marilyne','agile',1,'white.marilyne1'),('white.marilyne','angular',3,'white.marilyne2'),('wilkinson.loma','javascript',3,'wilkinson.loma0'),('wilkinson.loma','nodejs',3,'wilkinson.loma1'),('wilkinson.loma','angular',2,'wilkinson.loma2'),('will.kathlyn','react',5,'will.kathlyn0'),('will.kathlyn','c++',5,'will.kathlyn1'),('will.kathlyn','html',3,'will.kathlyn2'),('willms.destini','react',1,'willms.destini0'),('willms.destini','javascript',1,'willms.destini1'),('willms.destini','c++',2,'willms.destini2'),('willms.haley','nodejs',2,'willms.haley0'),('willms.haley','css',4,'willms.haley1'),('willms.haley','angular',3,'willms.haley2'),('windler.rupert','html',5,'windler.rupert0'),('windler.rupert','nodejs',2,'windler.rupert1'),('windler.rupert','angular',1,'windler.rupert2'),('wisoky.rosalinda','c++',4,'wisoky.rosalinda0'),('wisoky.rosalinda','css',4,'wisoky.rosalinda1'),('wisoky.rosalinda','php',3,'wisoky.rosalinda2'),('wiza.yasmin','c++',3,'wiza.yasmin0'),('wiza.yasmin','angular',5,'wiza.yasmin1'),('wiza.yasmin','css',4,'wiza.yasmin2'),('wmclaughlin','css',1,'wmclaughlin0'),('wmclaughlin','c++',4,'wmclaughlin1'),('wmclaughlin','html',5,'wmclaughlin2'),('wmonahan','c++',1,'wmonahan0'),('wmonahan','css',5,'wmonahan1'),('wmonahan','react',5,'wmonahan2'),('xweimann','php',4,'xweimann0'),('xweimann','c++',2,'xweimann1'),('xweimann','nodejs',3,'xweimann2'),('ynikolaus','react',5,'ynikolaus0'),('ynikolaus','agile',2,'ynikolaus1'),('ynikolaus','angular',3,'ynikolaus2'),('ywiegand','nodejs',5,'ywiegand0'),('ywiegand','angular',3,'ywiegand1'),('ywiegand','agile',3,'ywiegand2'),('zbeier','c++',2,'zbeier0'),('zbeier','php',4,'zbeier1'),('zbeier','nodejs',3,'zbeier2'),('zemlak.brandyn','javascript',4,'zemlak.brandyn0'),('zemlak.brandyn','react',3,'zemlak.brandyn1'),('zemlak.brandyn','css',4,'zemlak.brandyn2'),('zena94','c++',4,'zena940'),('zena94','nodejs',4,'zena941'),('zena94','react',4,'zena942'),('zoey23','angular',1,'zoey230'),('zoey23','nodejs',2,'zoey231'),('zoey23','react',5,'zoey232'),('zoie.schmeler','html',3,'zoie.schmeler0'),('zoie.schmeler','angular',4,'zoie.schmeler1'),('zoie.schmeler','react',2,'zoie.schmeler2'),('zparker','nodejs',3,'zparker0'),('zparker','agile',4,'zparker1'),('zparker','css',1,'zparker2'),('zrunolfsson','react',3,'zrunolfsson0'),('zrunolfsson','html',1,'zrunolfsson1'),('zrunolfsson','agile',5,'zrunolfsson2'),('zveum','php',1,'zveum0'),('zveum','nodejs',3,'zveum1'),('zveum','agile',5,'zveum2');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social`
--

DROP TABLE IF EXISTS `social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `social` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `linkedin` varchar(15) NOT NULL,
  `skype` varchar(20) NOT NULL,
  `blog` varchar(100) NOT NULL,
  `github` varchar(20) NOT NULL,
  `portfolio` varchar(100) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES ('dave1','','','','',''),('dave2','','','','',''),('dave2323','','','','',''),('dave23232131','','','','',''),('dave3','','','','',''),('dave325','linkedin','skype','blog','github','portfolio'),('dave32594','','','','',''),('daveadmin','','','','',''),('davetest','hhjhjj','dfgdf','','',''),('davetest1','','','','',''),('davidtest','lik','','','',''),('joey69','','','','',''),('JoeyC','','','','',''),('joeyCheung','','','','','');
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
  `email` varchar(255) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('davetest','$2y$10$/Wk2hWNyDGB4.Dm98XJpiuXEtCix3TLTtkSdIvsQYyvbzitXENRDu',0,'davedataram@gmail.com',0),('davetest1','$2y$10$NcDZ658eK.EwDMo2QLtbr.TN6z6xO9TMSA8/f1pkx2cMnBeVUXz7q',0,'davedataram@gmail.com',0),('david234','$2y$10$kIpPJitZj90.NzRVbs.B9eBrQS3VZCi/.uEM1HZ6Elvr1i8Skh.Fq',1,'example@example.com',0),('dave3251','$2y$10$fjSY27olMudrtrEZFsvjdeI98xFMCSURVs2WXrPlKbbWCVYZGv4XK',1,'example@example.com',0),('dave1','$2y$10$MfB3KKiwBGPppb7pgPKjdemTm3ZFgVDnFSVmgbuMMU1AYmcKdn7g6',1,'example@example.com',0),('daveadmin','$2y$10$KhNL9jy9Znh1ELfa5gpWJ.xW9hqq4ckJDXYiT5e7NLGbCdZHcY8tS',2,'davedataram@gmail.com',1),('JoeyC','$2y$10$RHERiJJjCFhdEUqOgu770.wJMexYhemIlYgoQbXsff4L6vm.Kse/y',0,'joeycheung0@gmail.com',0),('JoeyC','$2y$10$ptpCIIYu3goMQU3v4WOn7.xiFvS4z8jRUyjkhmWTXm5alCrdtOw/y',0,'joeycheung0@gmail.com',0),('dave325','$2y$10$ftW7xFjZWHMb72bUWiuuMuHzhDApEEBVJOOLCah1Et4BonICDeJLy',0,'asdfdasdsa@dasf.com',0),('JoeyC','$2y$10$yr/mZmwTgTo9rKg902FMSe/xY93evpSu6n6EjxDj5GHtDI46UPW5i',0,'joeycheung0@gmail.com',0),('dave2323','$2y$10$LIlYVPpdT1DaAAm97QFZaOT11A1xJ7u/qLqmR/8BjtpKX5m4DivSq',0,'asdfdasdsa@dasf.com',0),('joeyCheung','$2y$10$86rXJh3YOmJtHMRaZiMN7ulhi8aeXSNT23F7QI/WeMP7xQIdylq6.',0,'joeycheung0@gmail.com',0),('dave23232131','$2y$10$CX85Jn9zckbhwHvLhWQKh.p.fyQuAeRo9u6Pn7g7GWeGwNduzZTGG',0,'asdfdasdsa@dasf.com',0),('joeyC','$2y$10$ihzfdbE7RouWYzYkvM/PjeQjmMMWbDYNfc1/rN0TDd9nV9uvp7iQ.',0,'joeycheung0@gmail.com',0),('joeyC','$2y$10$X5q/Oht2.QPDAowSSCUfn.942e7LaeCGH7hb2fHPsa3sNbZgY6V9u',1,'joeycheung0@gmail.com',0),('joeyC','$2y$10$wBn5Zk8iZPUTzgim/NiKdOtbgnstBUTFPcBYHS.T3Ko2hvV./6MQu',1,'joeycheung0@gmail.com',0),('joeyC','$2y$10$bi31HKVgO.s585XaAZ2kueJIn/oYbtYwZW8GPw6561/PTrvGvonYG',1,'joeycheung0@gmail.com',0),('joeyC','$2y$10$h6fCy2ttP9vuMHpNuU9TaOG2Ffq2CNfB9mfEmiTg1psxUkU//TfZ2',1,'joeycheung0@gmail.com',0),('joeyC','$2y$10$QzsFtvKdXD7Tyx.Fsm7ELuBUbqAMfNtEnmvA4DVPYBVmnQRql2efO',1,'joeycheung0@gmail.com',0),('joeyC','$2y$10$1oAywOVfOdlApX.hlxtteOD054/XKF6VrBLMytqu2lnJIzYHiqbi2',1,'joeycheung0@gmail.com',0),('joeycheung','$2y$10$OX70MIihttrCBCgPwTVsaOQUWM2SmX/g63wGbYBqKfsO06SRME.vi',1,'joeycheung0@gmail.com',0),('joeycheung1','$2y$10$euTckSGzpKu3RKyaoiV2weNktP/rCWod9ncz7zk9hg2HEl8fiq/rW',1,'joeycheung0@gmail.com',0),('joeycheung1','$2y$10$7yn/v6wj4tw/puJfKz6k1eBxQ0TD1b805JMPw/ZGMks28XOfMWJ3a',1,'joeycheung0@gmail.com',0),('dave325','$2y$10$SLKCVI29xv5CU7ddesvq7OQQCSQ1CdU6uqCTsoNt1mYoZEIrbIRTO',1,'david_dataram@aol.com',0),('joey69','$2y$10$4C1WuHCOguLIkwgE3K3OOe5PDzZkX0Nk51lqtDOVyR62Ye/AZUsWS',0,'joeycheung0@gmail.com',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wantedskill`
--

DROP TABLE IF EXISTS `wantedskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wantedskill` (
  `username` varchar(255) DEFAULT NULL,
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
INSERT INTO `wantedskill` VALUES ('davetest','html','davetest1'),('davetest','JAVA','david1'),('davetest','C++','david2'),('dave325','Hibernate','david3');
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

-- Dump completed on 2018-04-29 10:51:10
