-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: employeemanagement
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKqftatm5oorav2hj3mvoyrlh7o` (`email_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (6,'veeraiah1989@gmail.com','Veeraiah','udgimatt',9243205403,'HR',25000),(8,'sathwik123@gmail.com','Sathwik','V U',9856321475,'Sales',35000),(9,'sanjanaudgimat@gmail.com','Sanjana','VU',8523697412,'HR',12354),(12,'dakshayanism@gmail.com','Dakshayani','SM',8426971354,'IT',52000),(13,'anuh123@gmail.com','Anushaka','H',9878563245,'IT',32000),(15,'dhruva@gmail.com','Dhruva','s',9243219940,'Sales',20000),(16,'madurapatil@gmail.com','madura','patil',6325147895,'Sales',10000),(17,'kushipatil@gmail.com','kushi','patil',6341147895,'IT',15000),(22,'sharanrao@gmail.com','sharan','rao',9842365175,'HR',0),(24,'santhoshkp@gmail.com','santhosh','k p',9842333175,'HR',35478),(25,'rahulpl@gmail.com','Rahul','P L',8996523104,'IT',100000),(26,'kavyasaddu@gmail.com','kavya','saddu',7412369854,'HR',98500),(27,'deekshavagi@gmail.com','deeksha','vagidar',9812369854,'IT',65740),(28,'pradeep@gmail.com','parddep','vagidar',9812364554,'IT',65000),(30,'anudeepad@gmail.com','Anudeepa','ds',6687412955,'HR',2500),(31,'veerappanayar','veerappa','nayar',7541236985,'IT',65000),(33,'janakih2000@gmail.com','Janaki','H',7413698524,'HR',26001);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'$2a$10$lNXjjA1xuU85Sa9haRCMu.I1n35Rb83MOJN2sS9zbi10kB9WLJhWy','ROLE_USER','sanjana'),(2,'$2a$10$FahOavgIEMHcB3j97NAHBeS2pLCIQ9cASl1FEK/Il0BtLuwO3xHdu','ROLE_USER','Sharath');
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

-- Dump completed on 2025-12-05 11:35:04
