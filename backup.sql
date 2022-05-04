-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add Token',7,'add_token'),(26,'Can change Token',7,'change_token'),(27,'Can delete Token',7,'delete_token'),(28,'Can view Token',7,'view_token'),(29,'Can add token',8,'add_tokenproxy'),(30,'Can change token',8,'change_tokenproxy'),(31,'Can delete token',8,'delete_tokenproxy'),(32,'Can view token',8,'view_tokenproxy'),(33,'Can add address',9,'add_address'),(34,'Can change address',9,'change_address'),(35,'Can delete address',9,'delete_address'),(36,'Can view address',9,'view_address'),(37,'Can add fullname',10,'add_fullname'),(38,'Can change fullname',10,'change_fullname'),(39,'Can delete fullname',10,'delete_fullname'),(40,'Can view fullname',10,'view_fullname'),(41,'Can add customer',11,'add_customer'),(42,'Can change customer',11,'change_customer'),(43,'Can delete customer',11,'delete_customer'),(44,'Can view customer',11,'view_customer'),(45,'Can add cart',12,'add_cart'),(46,'Can change cart',12,'change_cart'),(47,'Can delete cart',12,'delete_cart'),(48,'Can view cart',12,'view_cart'),(49,'Can add cart item',13,'add_cartitem'),(50,'Can change cart item',13,'change_cartitem'),(51,'Can delete cart item',13,'delete_cartitem'),(52,'Can view cart item',13,'view_cartitem'),(53,'Can add book',14,'add_book'),(54,'Can change book',14,'change_book'),(55,'Can delete book',14,'delete_book'),(56,'Can view book',14,'view_book'),(57,'Can add clothes',15,'add_clothes'),(58,'Can change clothes',15,'change_clothes'),(59,'Can delete clothes',15,'delete_clothes'),(60,'Can view clothes',15,'view_clothes'),(61,'Can add electronic',16,'add_electronic'),(62,'Can change electronic',16,'change_electronic'),(63,'Can delete electronic',16,'delete_electronic'),(64,'Can view electronic',16,'view_electronic'),(65,'Can add laptop',17,'add_laptop'),(66,'Can change laptop',17,'change_laptop'),(67,'Can delete laptop',17,'delete_laptop'),(68,'Can view laptop',17,'view_laptop'),(69,'Can add product item',18,'add_productitem'),(70,'Can change product item',18,'change_productitem'),(71,'Can delete product item',18,'delete_productitem'),(72,'Can view product item',18,'view_productitem');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$320000$bqC995mYAZ8tCd2pYDZKLm$0q5ZsZT1mi+5/tV/1M/oDU3ZO1yoh1F+wDoqWPB7lhY=','2022-05-02 13:55:25.884335',1,'admin','','','',1,1,'2022-04-13 15:38:22.661720'),(2,'pbkdf2_sha256$320000$aaui0y3U5iMIwNxZMLvAxM$EtJ2M2Kp6h3iKSO3X79nb62xPzkN/ad8vIkzcz42tUI=',NULL,0,'tan','','','',0,1,'2022-04-13 16:25:15.819478'),(3,'pbkdf2_sha256$320000$aYSXueNsPKGrPbRrGIVJoU$LoADib8OUh/GQchPZ0TGs7m1k5FbG9g0QmESOvg+LXU=',NULL,0,'tan1','','','',0,1,'2022-04-15 05:02:02.889830'),(5,'pbkdf2_sha256$320000$ITGSvY8wtx4Ec9RxUKNLvN$9ulqvC+ehg5eauICIlY967ANF0PwG/GwiOs0e1Z6fao=',NULL,0,'tane','','','',0,1,'2022-04-15 05:04:12.920325'),(6,'pbkdf2_sha256$320000$F9PdlKWzTL9k94J1lcYFVM$zdDImXVXVcZFp7E2VdhewCr9HuA3dLwvkiuYHEDz94s=',NULL,0,'tadsdsn','','','',0,1,'2022-04-15 05:05:06.337295'),(7,'pbkdf2_sha256$320000$Sja7c6a3tsW8YZeVWe3DKQ$m8+C32OCwqoUiMxMnTSQjMeoYFLf83zkCcZezchFyWQ=',NULL,0,'tandddds','','','',0,1,'2022-04-15 05:05:45.839288'),(8,'pbkdf2_sha256$320000$jcH522nTzBvfre30wyrm9p$DcaAhqYWYEOvbHTHbSsPUyu7r4+rShjes9FKcjPijJs=',NULL,0,'tanddddsf','','','',0,1,'2022-04-15 08:03:11.013260'),(9,'pbkdf2_sha256$320000$I3sWrhEFZT0HeGTTUXlKYL$iGRtt+mo4LQ5u0grGVuT66wEO9wUNzv13xXRMcuSQ5Q=','2022-05-02 14:06:00.553232',0,'mai','','','',0,1,'2022-04-15 08:04:07.976384'),(10,'pbkdf2_sha256$320000$E5XnvrhbOyVRlKwtYCAED3$xMjS5wBq9uP2flljvKd+8juLm1EBZbphTy1sFziqAjo=','2022-04-15 08:17:01.335782',0,'mai1','','','',0,1,'2022-04-15 08:08:49.230775'),(12,'pbkdf2_sha256$320000$trvNQIfBVs3pVymW01AKvh$n6ogIcLBFfwmmziTROqYvzGxVIQZIs88m3fRl6vJeOg=',NULL,0,'tanff','','','',0,1,'2022-04-15 08:47:17.648365'),(13,'pbkdf2_sha256$320000$rhV7L4NqLrFjl7S0av7tgp$K69UamhuRoe4yLWRVTaaPTVUDj7Um03PktRxOhcfvt8=',NULL,0,'tanfff','','','',0,1,'2022-04-15 08:48:28.941664'),(14,'pbkdf2_sha256$320000$Mlh1Ve51jYudm4uq9jbrkg$9Ugkt6WaXoGp+GKS2N7zaXuJKo+4uFoiyOoyrDu4eS4=',NULL,0,'tanffff','','','',0,1,'2022-04-15 08:53:27.287191'),(15,'pbkdf2_sha256$320000$wdkYdkVR0lM8RYoUbGFwdt$WCEkjbD1JeFQzkf6UtkAodR8GZBXiNt8P2mpgehiCDU=',NULL,0,'tanfcffff','','','',0,1,'2022-04-15 08:54:30.469038'),(16,'pbkdf2_sha256$320000$nH8uvVO1y2GGcoLCNqDv6C$hCfWrjVVtyDDKvXyATOp7Y2nnJh6f69CI172wP2JrrA=',NULL,0,'tanffc','','','tan@gmail.com',0,1,'2022-04-15 08:56:15.619773'),(17,'pbkdf2_sha256$320000$QICeCbUq0lrAGprHUqYpww$dHGPvqUDOIN+8bxMD6ezU7kTEL0hTMaZhKBDO3BXK0A=',NULL,0,'tanfcdffff','','','tan1@gmail.com',0,1,'2022-04-15 08:56:36.893055'),(18,'pbkdf2_sha256$320000$E5eOXLH8aMYxlnNPG5NRzp$9EHC7L45eeD4Hv5kzVhg+okztqBOp4AIHPQspnNUR5w=',NULL,0,'mai2','','','mai@gmail.com',0,1,'2022-04-15 08:57:53.080975'),(19,'pbkdf2_sha256$320000$ufB5J7FN9PqjaAgxXiGHfO$L35kgL/MjCz3hzv34e20IQGpzRUDhWj7Pc48OTIL8YY=',NULL,0,'maimai','','','',0,1,'2022-04-15 09:00:59.067894'),(20,'pbkdf2_sha256$320000$sEaV6zWcHaUTYr4k3Oyk49$0iuEgqMLitzVyqlWXlY1nzOgfO+jNifKfwGA5YisWuo=',NULL,0,'maimaimai','','','',0,1,'2022-04-15 09:01:19.675157'),(21,'pbkdf2_sha256$320000$usyMLbYYr8UReN02O1SQ5G$GfrB3TFUv72cBBjHkNm7TAy1JTz00H7RccdWmxCTUVs=',NULL,0,'maimaimaim','','','',0,1,'2022-04-15 09:01:33.590651'),(22,'pbkdf2_sha256$320000$PIySOHLRWOb8mImRG6D2Vb$X4syD2zOtZmTX1omHLWWSzOi6KQ6a8KAL5RxPF3bBxQ=',NULL,0,'maimaim','','','mai123@gmail.com',0,1,'2022-04-15 09:02:08.871782'),(23,'pbkdf2_sha256$320000$lhaod4wtrDy5Wvi0lHwQPO$Bpyx6mLGhSmAqcPxQy5VhtnO8Sk1/XeoaqPFlIQ3I5E=','2022-04-29 06:57:59.726803',0,'hoa','','','hoa@gmail.com',0,1,'2022-04-15 09:07:26.534331');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authtoken_token`
--

DROP TABLE IF EXISTS `authtoken_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authtoken_token` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`key`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `authtoken_token_user_id_35299eff_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authtoken_token`
--

LOCK TABLES `authtoken_token` WRITE;
/*!40000 ALTER TABLE `authtoken_token` DISABLE KEYS */;
INSERT INTO `authtoken_token` VALUES ('3cfe39c7ecafdaf847f0f52e4100da7f715f5759','2022-04-15 08:04:27.616607',9),('6a5d5bee8641fc638ba327284cc52b334f900c0d','2022-04-15 09:07:41.772268',23),('b30fdaf36fb7ec6b44a9be99185f80bd841b5663','2022-04-15 08:09:16.951504',10),('ba263a79474576fff23ddc970418aefe38fd702c','2022-04-13 15:38:37.574153',1);
/*!40000 ALTER TABLE `authtoken_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_cart`
--

DROP TABLE IF EXISTS `cart_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_cart` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `cart_cart_user_id_9b4220b9_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_cart`
--

LOCK TABLES `cart_cart` WRITE;
/*!40000 ALTER TABLE `cart_cart` DISABLE KEYS */;
INSERT INTO `cart_cart` VALUES (1,1),(2,9),(3,23);
/*!40000 ALTER TABLE `cart_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_cartitem`
--

DROP TABLE IF EXISTS `cart_cartitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_cartitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `cart_id` bigint NOT NULL,
  `item_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_cartitem_cart_id_370ad265_fk_cart_cart_id` (`cart_id`),
  KEY `cart_cartitem_item_id_f315a26e_fk_product_productitem_id` (`item_id`),
  CONSTRAINT `cart_cartitem_cart_id_370ad265_fk_cart_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `cart_cart` (`id`),
  CONSTRAINT `cart_cartitem_item_id_f315a26e_fk_product_productitem_id` FOREIGN KEY (`item_id`) REFERENCES `product_productitem` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_cartitem`
--

LOCK TABLES `cart_cartitem` WRITE;
/*!40000 ALTER TABLE `cart_cartitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_cartitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-04-14 15:25:43.035829','1','Book object (1)',1,'[{\"added\": {}}]',14,1),(2,'2022-04-14 15:28:57.430759','2','Book object (2)',1,'[{\"added\": {}}]',14,1),(3,'2022-04-14 15:29:40.898409','1','Book object (1)',2,'[{\"changed\": {\"fields\": [\"Weight\"]}}]',14,1),(4,'2022-04-14 15:29:49.048839','2','Book object (2)',2,'[{\"changed\": {\"fields\": [\"Weight\"]}}]',14,1),(5,'2022-04-14 15:33:10.661162','3','Book object (3)',1,'[{\"added\": {}}]',14,1),(6,'2022-04-14 15:34:50.428797','4','Book object (4)',1,'[{\"added\": {}}]',14,1),(7,'2022-04-14 15:37:12.717001','5','Book object (5)',1,'[{\"added\": {}}]',14,1),(8,'2022-04-14 15:41:24.087350','1','Clothes object (1)',1,'[{\"added\": {}}]',15,1),(9,'2022-04-14 15:42:44.409780','2','Clothes object (2)',1,'[{\"added\": {}}]',15,1),(10,'2022-04-14 15:45:38.533595','3','Clothes object (3)',1,'[{\"added\": {}}]',15,1),(11,'2022-04-14 15:50:13.270815','4','Clothes object (4)',1,'[{\"added\": {}}]',15,1),(12,'2022-04-14 15:51:25.083466','5','Clothes object (5)',1,'[{\"added\": {}}]',15,1),(13,'2022-04-14 15:51:54.656870','1','Clothes object (1)',2,'[{\"changed\": {\"fields\": [\"Details\"]}}]',15,1),(14,'2022-04-14 15:52:24.584844','2','Clothes object (2)',2,'[]',15,1),(15,'2022-04-14 15:52:57.057068','3','Clothes object (3)',2,'[{\"changed\": {\"fields\": [\"Details\"]}}]',15,1),(16,'2022-04-14 15:53:10.392993','4','Clothes object (4)',2,'[{\"changed\": {\"fields\": [\"Details\"]}}]',15,1),(17,'2022-04-14 15:53:58.652019','2','Clothes object (2)',2,'[{\"changed\": {\"fields\": [\"Details\"]}}]',15,1),(18,'2022-04-14 16:03:29.213748','1','Laptop object (1)',1,'[{\"added\": {}}]',17,1),(19,'2022-04-14 16:10:10.505071','2','Laptop object (2)',1,'[{\"added\": {}}]',17,1),(20,'2022-04-14 16:12:11.630562','1','Laptop object (1)',2,'[]',17,1),(21,'2022-04-14 16:14:02.022633','3','Laptop object (3)',1,'[{\"added\": {}}]',17,1),(22,'2022-04-14 16:15:30.393967','4','Laptop object (4)',1,'[{\"added\": {}}]',17,1),(23,'2022-04-14 16:17:18.231102','5','Laptop object (5)',1,'[{\"added\": {}}]',17,1),(24,'2022-04-15 02:45:22.228600','6','Book object (6)',1,'[{\"added\": {}}]',14,1),(25,'2022-04-15 02:45:43.773461','6','Book object (6)',3,'',14,1),(26,'2022-04-15 02:51:09.801911','1','Electronic object (1)',1,'[{\"added\": {}}]',16,1),(27,'2022-04-15 02:53:21.233676','2','Electronic object (2)',1,'[{\"added\": {}}]',16,1),(28,'2022-04-15 02:55:48.799593','3','Electronic object (3)',1,'[{\"added\": {}}]',16,1),(29,'2022-04-15 02:56:38.863994','4','Electronic object (4)',1,'[{\"added\": {}}]',16,1),(30,'2022-04-15 02:58:01.386855','5','Electronic object (5)',1,'[{\"added\": {}}]',16,1),(31,'2022-04-15 09:15:22.100754','1','dac nhan tam giam 50%',1,'[{\"added\": {}}]',18,1),(32,'2022-04-15 09:17:12.628453','2','Cách nghĩ để thành công',1,'[{\"added\": {}}]',18,1),(33,'2022-04-15 09:18:45.249280','3','Tủ lạnh panasonic ưu đãi hấp dẫn',1,'[{\"added\": {}}]',18,1),(34,'2022-04-15 09:19:49.431807','4','Tủ lạnh Hitachi tiện lợi',1,'[{\"added\": {}}]',18,1),(35,'2022-04-15 09:21:01.483222','5','Quần jeans nam phong cách',1,'[{\"added\": {}}]',18,1),(36,'2022-04-15 09:22:28.124203','6','Quần kaki nữ phong cách',1,'[{\"added\": {}}]',18,1),(37,'2022-04-15 09:23:53.855316','7','Dell xps 15 siêu xịn',1,'[{\"added\": {}}]',18,1),(38,'2022-04-15 09:25:16.770090','8','Macbook air 2020 cao cấp',1,'[{\"added\": {}}]',18,1),(39,'2022-04-26 15:42:33.846196','1','CartItem object (1)',1,'[{\"added\": {}}]',13,1),(40,'2022-04-26 15:48:23.099255','2','CartItem object (2)',3,'',13,1),(41,'2022-04-29 08:44:35.659666','13','CartItem object (13)',3,'',13,1),(42,'2022-04-29 08:44:35.766541','12','CartItem object (12)',3,'',13,1),(43,'2022-04-29 08:44:35.870510','11','CartItem object (11)',3,'',13,1),(44,'2022-04-29 08:44:35.970706','10','CartItem object (10)',3,'',13,1),(45,'2022-04-29 08:44:36.074659','9','CartItem object (9)',3,'',13,1),(46,'2022-04-29 08:44:36.170652','8','CartItem object (8)',3,'',13,1),(47,'2022-04-29 08:44:36.274610','7','CartItem object (7)',3,'',13,1),(48,'2022-04-29 08:44:36.379364','6','CartItem object (6)',3,'',13,1),(49,'2022-04-29 08:44:36.486280','5','CartItem object (5)',3,'',13,1),(50,'2022-04-29 08:44:36.591669','4','CartItem object (4)',3,'',13,1),(51,'2022-04-29 08:44:36.687749','3','CartItem object (3)',3,'',13,1),(52,'2022-04-29 08:44:36.783742','1','CartItem object (1)',3,'',13,1),(53,'2022-04-29 08:49:31.145888','19','CartItem object (19)',3,'',13,1),(54,'2022-04-29 08:49:31.233920','18','CartItem object (18)',3,'',13,1),(55,'2022-04-29 08:49:31.273924','17','CartItem object (17)',3,'',13,1),(56,'2022-04-29 08:49:31.337818','16','CartItem object (16)',3,'',13,1),(57,'2022-04-29 08:49:31.449882','15','CartItem object (15)',3,'',13,1),(58,'2022-04-29 08:49:31.540116','14','CartItem object (14)',3,'',13,1),(59,'2022-04-29 09:22:53.667685','21','CartItem object (21)',3,'',13,1),(60,'2022-04-29 09:22:53.765967','20','CartItem object (20)',3,'',13,1),(61,'2022-05-01 03:43:45.915761','23','CartItem object (23)',3,'',13,1),(62,'2022-05-01 03:43:45.957691','22','CartItem object (22)',3,'',13,1),(63,'2022-05-02 14:13:26.916284','32','CartItem object (32)',3,'',13,1),(64,'2022-05-02 14:13:26.980293','31','CartItem object (31)',3,'',13,1),(65,'2022-05-02 14:13:27.117626','30','CartItem object (30)',3,'',13,1),(66,'2022-05-02 14:13:27.221683','29','CartItem object (29)',3,'',13,1),(67,'2022-05-02 14:13:27.326060','28','CartItem object (28)',3,'',13,1),(68,'2022-05-02 14:13:27.426105','27','CartItem object (27)',3,'',13,1),(69,'2022-05-02 14:13:27.530079','26','CartItem object (26)',3,'',13,1),(70,'2022-05-02 14:13:27.634133','25','CartItem object (25)',3,'',13,1),(71,'2022-05-02 14:13:27.714029','24','CartItem object (24)',3,'',13,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(7,'authtoken','token'),(8,'authtoken','tokenproxy'),(12,'cart','cart'),(13,'cart','cartitem'),(5,'contenttypes','contenttype'),(14,'product','book'),(15,'product','clothes'),(16,'product','electronic'),(17,'product','laptop'),(18,'product','productitem'),(6,'sessions','session'),(9,'users','address'),(11,'users','customer'),(10,'users','fullname');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-04-13 15:36:13.345528'),(2,'auth','0001_initial','2022-04-13 15:36:15.114439'),(3,'admin','0001_initial','2022-04-13 15:36:15.569096'),(4,'admin','0002_logentry_remove_auto_add','2022-04-13 15:36:15.661326'),(5,'admin','0003_logentry_add_action_flag_choices','2022-04-13 15:36:15.748545'),(6,'contenttypes','0002_remove_content_type_name','2022-04-13 15:36:16.158619'),(7,'auth','0002_alter_permission_name_max_length','2022-04-13 15:36:16.369005'),(8,'auth','0003_alter_user_email_max_length','2022-04-13 15:36:16.519435'),(9,'auth','0004_alter_user_username_opts','2022-04-13 15:36:16.619432'),(10,'auth','0005_alter_user_last_login_null','2022-04-13 15:36:16.804364'),(11,'auth','0006_require_contenttypes_0002','2022-04-13 15:36:16.887921'),(12,'auth','0007_alter_validators_add_error_messages','2022-04-13 15:36:16.973443'),(13,'auth','0008_alter_user_username_max_length','2022-04-13 15:36:17.166482'),(14,'auth','0009_alter_user_last_name_max_length','2022-04-13 15:36:17.392481'),(15,'auth','0010_alter_group_name_max_length','2022-04-13 15:36:17.539889'),(16,'auth','0011_update_proxy_permissions','2022-04-13 15:36:17.742874'),(17,'auth','0012_alter_user_first_name_max_length','2022-04-13 15:36:17.946672'),(18,'authtoken','0001_initial','2022-04-13 15:36:18.211500'),(19,'authtoken','0002_auto_20160226_1747','2022-04-13 15:36:18.336785'),(20,'authtoken','0003_tokenproxy','2022-04-13 15:36:18.420387'),(21,'product','0001_initial','2022-04-13 15:36:19.338876'),(22,'cart','0001_initial','2022-04-13 15:36:19.972357'),(23,'sessions','0001_initial','2022-04-13 15:36:20.212469'),(24,'users','0001_initial','2022-04-13 15:36:20.737346'),(25,'product','0002_productitem_title','2022-04-13 15:59:00.865451');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2hbw17183w9af6qik9mdbovwk54kq86f','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1nf0zF:JlVMfdKPEc_SkAT-82oneaszR7ShTVlpnyZw_DikQIE','2022-04-28 15:02:21.297607'),('4obdo6yepxkzsrkrjtf617y0xi34axj2','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1neofv:S7vrTWZXS-IpSB2nqPPsP2NhDmyStImYE9-PV46aq7s','2022-04-28 01:53:35.120537'),('fqj1yi8afn52glmpbg6jfjoh91neivm7','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1njNKH:2YFknjMJed_-8dTqPVST9-y9HTHWDbWfv4SHhx0V1lQ','2022-05-10 15:42:05.522484'),('gnjs3syybgl6r4trqtdentyuehmlbg94','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1neoMz:Ga9PBt1Dy_U5lf46TRhEiBjygfgbgm1mHqmWwjiiyfU','2022-04-28 01:34:01.284251'),('k7g3gkbskbdlh83waln852yj052s910f','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1nf1Fo:uLf0CYZ52Yba37Mhj1vkoCulbpVdcNyFeA7jBsLflMs','2022-04-28 15:19:28.247582'),('n38qqgezhkazglxpjkbzh8wjcdwyngq4','.eJxVjDsOwjAQBe_iGllx1p-Ekj5nsHa9Ng4gW4qTCnF3EikFtG_mzVt43NbstxYXP7O4CiUuvxtheMZyAH5guVcZalmXmeShyJM2OVWOr9vp_gUytry_U3C2A2IHGBVZnXpyYJCHcYxu6JM2wey1RIAKrHUhMCijrFPE2nInPl_2ojgt:1nkMDW:toGbbsU-M1mxOYgH_EGL40YbX_G59dIpFMY-K29rBCI','2022-05-13 08:43:10.671584');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_book`
--

DROP TABLE IF EXISTS `product_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_book` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `weight` longtext NOT NULL,
  `details` text,
  `publicationYear` int NOT NULL,
  `author` longtext NOT NULL,
  `publisher` longtext NOT NULL,
  `detail` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_book`
--

LOCK TABLES `product_book` WRITE;
/*!40000 ALTER TABLE `product_book` DISABLE KEYS */;
INSERT INTO `product_book` VALUES (1,'Đắc Nhân Tâm','350 gram','Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống',1936,'Dale Carnegie','Simon and Schuster',NULL),(2,'Cách nghĩ để thành công','440 gram','Cuốn sách viết về bí quyết thành công của Andrew Carnegie, những bí quyết đã được kiểm chứng qua thời gian bởi hàng ngàn người trong khắp các ngành nghề khác nhau',2012,'Napoleon Hill','NXB Trẻ',NULL),(3,'Cuộc sống không giới hạn','350 gram','Câu Chuyện Diệu Kỳ Của Chàng Trai Đặc Biệt Nhất Hành Tinh',2007,'Nick Vujic','Nhà Xuất Bản Tổng hợp TP.HCM',NULL),(4,'Hành trình về Phương Đông','400 gram','Hành Trình Về Phương Đông ghi nhận đầy đủ về cuộc hành trình gay go nhưng lý thú và tràn đầy sự huyền bí ở Ấn Độ, Tây Tạng, Trung Hoa và Ba Tư',1924,'Blair T. Spalding','NXB Adyar',NULL),(5,'Thói quen thứ 8','400 gram','Cuốn sách là sự kết tinh của những giá trị sống có ích với những ai đang là người lãnh đạo, khẳng định được vị trí của họ trong lĩnh vực',2004,'Stephen R. Covey','NXB Trẻ',NULL);
/*!40000 ALTER TABLE `product_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_clothes`
--

DROP TABLE IF EXISTS `product_clothes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_clothes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `weight` longtext NOT NULL,
  `details` longtext NOT NULL,
  `sex` longtext NOT NULL,
  `designer` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_clothes`
--

LOCK TABLES `product_clothes` WRITE;
/*!40000 ALTER TABLE `product_clothes` DISABLE KEYS */;
INSERT INTO `product_clothes` VALUES (1,'Quần Jeans','400 gram','Quần jean là một loại quần, thường được làm từ vải denim hoặc dungaree','Nam','Levi Strauss & Co'),(2,'Quần Kaki','400 gram','Quần kaki hay những đồng phục \"khakis\" được dùng để mặc hằng ngày và bất kể màu sắc','Nam','Owen Fashion'),(3,'Áo thun croptop','270 gram','CropTop là một kiểu áo có thiết kế độ dài ngắn lửng tới eo hoặc là dài hơn một chút và nó để lộ nguyên phần eo','Nam, Nữ','Sixty Eight'),(4,'Yoke Skirt','300 gram','Váy có phần hông ôm nhưng ranh giới giữa phần hông ôm và phần xòe rõ ràng hơn bởi chúng thường được may từ hai phần vải tách rời.','Nữ','One Boutique'),(5,'Jumper','250 gram','Váy khoét nách cổ xẻ sâu','Nữ','One Boutique');
/*!40000 ALTER TABLE `product_clothes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_electronic`
--

DROP TABLE IF EXISTS `product_electronic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_electronic` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `weight` longtext NOT NULL,
  `details` longtext NOT NULL,
  `manufacture` longtext NOT NULL,
  `lifespan` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_electronic`
--

LOCK TABLES `product_electronic` WRITE;
/*!40000 ALTER TABLE `product_electronic` DISABLE KEYS */;
INSERT INTO `product_electronic` VALUES (1,'Tủ lạnh Panasonic','71 kg','Tủ lạnh Panasonic được sản xuất theo tiêu chuẩn công nghệ hàng đầu, tích hợp nhiều tính năng hiện đại. Vì vậy, bạn hoàn toàn có thể yên tâm về độ hoàn thiện sản phẩm cho đến chất lượng, cũng như độ bền bỉ của thiết bị.','2020','8 - 10 năm'),(2,'Tủ lạnh Hitachi 2 cánh R-VG440PGV3:','65 kg','Là dòng tủ lạnh multidoor có dung tích lớn lên tới 638 lít, đáp ứng nhu cầu sử dụng của gia đình có đông thành viên.\r\nCông nghệ làm lạnh nhanh với hệ thống quạt kép\r\nCông nghệ bộ lọc mùi Triple Power 3 lớp có khả năng loại bỏ đến 99% các mùi khó chịu và vi khuẩn gây hại.','2020','8 - 10 năm'),(3,'TV LG Smart OLED G1 65 inch 4K OLED65G1PTA','5 kg','Thật ấn tượng khi ngắm nhìn LG OLED TV. Các điểm ảnh tự phát sáng cho phép chất lượng hình ảnh trở nên thật ngoạn mục và giúp bạn thỏa sức sáng tạo trong việc thiết kế nội thất tại gia','2021','8 - 10 năm'),(4,'Smart Tivi LG MiniLED 4K 86 inch 86QNED91TPA','5 kg','Smart Tivi QNED LG 4K 86 inch 75QNED91TPA sở hữu tấm nền QNED, một sự kết hợp hoàn hảo của Quantum Dot + NanoCell + Mini LED gia tăng hiệu quả từ độ sâu, độ sáng và màu sắc rực rỡ của khung hình, đồng thời cân bằng hiệu quả tỷ lệ tương phản, dễ dàng đưa người xem đắm chìm vào không gian sống động thể hiện trên màn hình.','2021','8 - 10 năm'),(5,'Android Tivi Sony 4K 85 inch XR-85X95J','5 kg','Tivi Sony 85 inch sở hữu màn hình lớn thiết kế tối giản với khung viền siêu mỏng liền mạch ôm trọn màn hình cách tự nhiên, gia tăng sự tập trung tầm nhìn cho hình ảnh, một lựa chọn hoàn hảo cho những phòng lớn, phòng họp, sảnh hội nghị…','2021','8 - 10 năm');
/*!40000 ALTER TABLE `product_electronic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_laptop`
--

DROP TABLE IF EXISTS `product_laptop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_laptop` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` longtext NOT NULL,
  `weight` longtext NOT NULL,
  `details` longtext NOT NULL,
  `ram` longtext NOT NULL,
  `cpu` longtext NOT NULL,
  `type` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_laptop`
--

LOCK TABLES `product_laptop` WRITE;
/*!40000 ALTER TABLE `product_laptop` DISABLE KEYS */;
INSERT INTO `product_laptop` VALUES (1,'MacBook Air 2020 13 inch Apple M1 8GB RAM 256GB SSD','2 kg','Bộ xử lý CPU: Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine\r\nBộ nhớ RAM: 8GB\r\nỔ cứng: 256 GB\r\nMàn hình: Retina display with True Tone\r\nCard màn hình: 7-core GPU','8GB - 16GB','Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine','Laptop'),(2,'Microsoft Surface Laptop 4','2 kg','Surface Laptop 4 13.5 inch Intel Core i7 RAM 32GB SSD 1TB','32 GB','Intel® Core ™ i7-1185G7 thế hệ thứ 11','Laptop'),(3,'Dell XPS 15','2 kg','Intel® Core™ i7 11800H (2.3GHz Turbo Boost 4.6GHz, 24 MB Cache)\r\nRam 16 GB DDR4 3200MHz\r\nSSD 512 GB PCIe\r\nVGA NVIDIA® GeForce RTX™ 3050 Ti 4GB GDDR6\r\n15.6″ FHD+ (1920 x 1200) InfinityEdge Non-Touch Anti-Glare 500-Nit Display\r\nPin 86WHr','16 GB DDR4','Intel® Core i7 11800H (16x 2.3GHz, Turbo Boost 4.6GHz, 24MB Cache)','Laptop'),(4,'HP Spectre x360','2 kg','CPU: Intel Core i7 1165G7\r\nRAM: 16GB\r\nỔ cứng: 1GB SSD\r\nVGA: Onboard\r\nMàn hình: 13.3 inch 4k','16 GB','Core™ i7-1165G7	16 GB','Laptop'),(5,'Dell XPS 13','2 kg','CP Intel Core i5-1135G7 4C-8T, upto 4.2Ghz, 8MB Cache \r\nIntel Core i7-1165G7 4C-8T, upto 4.7GHz, 12MB Cache\r\nRAM: 8GB LPDDR4x 4267MHz\r\nHard Drive:  SSD 256GB\r\nGPU: Intel Iris Xe Graphics\r\nDisplay: 13.4 inch FHD 1920x1080','8GB LPDDR4','Intel Core i7-1165G7 4C-8T, upto 4.7GHz, 12MB Ca','Laptop');
/*!40000 ALTER TABLE `product_laptop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_productitem`
--

DROP TABLE IF EXISTS `product_productitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_productitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` longtext NOT NULL,
  `description` longtext NOT NULL,
  `price` double NOT NULL,
  `book_id` bigint DEFAULT NULL,
  `clothes_id` bigint DEFAULT NULL,
  `electronic_id` bigint DEFAULT NULL,
  `laptop_id` bigint DEFAULT NULL,
  `title` longtext NOT NULL DEFAULT (_utf8mb3''),
  `detail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `book_id` (`book_id`),
  UNIQUE KEY `clothes_id` (`clothes_id`),
  UNIQUE KEY `electronic_id` (`electronic_id`),
  UNIQUE KEY `laptop_id` (`laptop_id`),
  CONSTRAINT `product_productitem_book_id_d0ef50fe_fk_product_book_id` FOREIGN KEY (`book_id`) REFERENCES `product_book` (`id`),
  CONSTRAINT `product_productitem_clothes_id_c47643ab_fk_product_clothes_id` FOREIGN KEY (`clothes_id`) REFERENCES `product_clothes` (`id`),
  CONSTRAINT `product_productitem_electronic_id_c4a7af0a_fk_product_e` FOREIGN KEY (`electronic_id`) REFERENCES `product_electronic` (`id`),
  CONSTRAINT `product_productitem_laptop_id_a611c898_fk_product_laptop_id` FOREIGN KEY (`laptop_id`) REFERENCES `product_laptop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_productitem`
--

LOCK TABLES `product_productitem` WRITE;
/*!40000 ALTER TABLE `product_productitem` DISABLE KEYS */;
INSERT INTO `product_productitem` VALUES (1,'https://investing.vn/home/wp-content/uploads/2018/05/Da%CC%86%CC%81c-nha%CC%82n-ta%CC%82m-%E2%80%93-Dale-Carnegie.jpeg','sach selfhelp',123,1,NULL,NULL,NULL,'dac nhan tam giam 50%','sach selfhelp rat hieu qua'),(2,'https://salt.tikicdn.com/cache/400x400/media/catalog/product/c/a/cach_nghi_de_thanh_cong.jpg','sách selfhelp',100000,NULL,NULL,NULL,NULL,'Cách nghĩ để thành công','Cải thiện tư duy'),(3,'https://images.samsung.com/is/image/samsung/p6pim/vn/rf48a4010m9-sv/gallery/vn-non-plumbing-water-dispenser-382489-rf48a4010m9-sv-517976506?$684_547_PNG$','Đồ dùng gia đình',1000000,NULL,NULL,1,NULL,'Tủ lạnh panasonic ưu đãi hấp dẫn','Đồ dùng gia đình'),(4,'https://images.samsung.com/is/image/samsung/p6pim/vn/rs64r5301b4-sv/gallery/vn-side-by-side-rs64r5301b4-rs64r5301b4-sv-530349817?$684_547_PNG$','Đồ gia dụng',1500000,NULL,NULL,2,NULL,'Tủ lạnh Hitachi tiện lợi','Đồ gia dụng'),(5,'https://tokyolife.vn/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/q/u/qu_n_jeans_nam_d_ng_m_i7jea009i_xanh-01_490000_2_.jpg','Thời trang',200000,NULL,1,NULL,NULL,'Quần jeans nam phong cách','Thời trang'),(6,'https://cf.shopee.vn/file/13d499451fe92a6d5968f5d517aefad8','Thời trang nữ',300000,NULL,2,NULL,NULL,'Quần kaki nữ phong cách','Thời trang nữ'),(7,'https://bizweb.dktcdn.net/thumb/large/100/082/878/products/21149-laptop-dell-xps-9310-70273578-1.jpg?v=1645843775980','Hàng điện tử',20000000,NULL,NULL,NULL,3,'Dell xps 15 siêu xịn','Hàng điện tử'),(8,'https://www.techone.vn/wp-content/uploads/2021/10/gray-500x500.jpg','Hàng điện tử',2500000,NULL,NULL,NULL,1,'Macbook air 2020 cao cấp','Hàng điện tử');
/*!40000 ALTER TABLE `product_productitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_address`
--

DROP TABLE IF EXISTS `users_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` longtext NOT NULL,
  `district` longtext NOT NULL,
  `ward` longtext NOT NULL,
  `details` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_address`
--

LOCK TABLES `users_address` WRITE;
/*!40000 ALTER TABLE `users_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_customer`
--

DROP TABLE IF EXISTS `users_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_customer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dob` date NOT NULL,
  `account_id` int NOT NULL,
  `address_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_id` (`account_id`),
  KEY `users_customer_address_id_4709eb81_fk_users_address_id` (`address_id`),
  CONSTRAINT `users_customer_account_id_c8804512_fk_auth_user_id` FOREIGN KEY (`account_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `users_customer_address_id_4709eb81_fk_users_address_id` FOREIGN KEY (`address_id`) REFERENCES `users_address` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_customer`
--

LOCK TABLES `users_customer` WRITE;
/*!40000 ALTER TABLE `users_customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_fullname`
--

DROP TABLE IF EXISTS `users_fullname`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_fullname` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `firstname` longtext NOT NULL,
  `lastname` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_fullname`
--

LOCK TABLES `users_fullname` WRITE;
/*!40000 ALTER TABLE `users_fullname` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_fullname` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-04 15:30:54
