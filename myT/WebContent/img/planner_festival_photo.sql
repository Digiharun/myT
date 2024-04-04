-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: planner
-- ------------------------------------------------------
-- Server version	5.7.44-log

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
-- Table structure for table `festival_photo`
--

DROP TABLE IF EXISTS `festival_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `festival_photo` (
  `ex_no` int(11) DEFAULT NULL,
  `in_no` int(11) DEFAULT NULL,
  `ex_detail` text CHARACTER SET utf8,
  `ex_img` varchar(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `festival_photo`
--

LOCK TABLES `festival_photo` WRITE;
/*!40000 ALTER TABLE `festival_photo` DISABLE KEYS */;
INSERT INTO `festival_photo` VALUES (1,1,'축제에 모인 사람들이 테이블 위에서 춤을 추는 여인을 즐거운 표정으로 올려다보고 있다.','img/oktoberfest01.jpg'),(2,1,'엄청난 양의 맥주잔. 수많은 양의 맥주가 옥토버페스트에서 소비된다.','img/oktoberfest02.jpg'),(3,1,'맥주 여러 잔을 동시에 서빙하는 여인. 사람들은 감탄스러운 표정으로 지켜보고 있다.','img/oktoberfest03.jpg'),(4,1,'전통 의상을 입고 맥주잔으로 건배하는 사람들.','img/oktoberfest04.jpg'),(5,1,'무대에서 전통 춤을 추는 댄서들.','img/oktoberfest05.jpg'),(1,2,'엠파이어 스테이트 빌딩을 안은 거대한 킹콩 조형물이 거리를 행진하고 있다.','img/riocarnival01.jpg');
/*!40000 ALTER TABLE `festival_photo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03 17:57:39
