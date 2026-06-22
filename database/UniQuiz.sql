-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: uniquiz
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `content` text NOT NULL,
  `is_correct` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,1,'Hệ thống các quan điểm lý luận, phản ánh những vấn đề có tính quy luật của cách mạng Việt Nam.',0),(2,1,'Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh: chủ nghĩa Mác – Lênin; giá trị văn hoá dân tộc, tinh hoa văn hoá nhân loại.',0),(3,1,'Nội dung cơ bản nhất của tư tưởng Hồ Chí Minh, bao gồm những vấn đề có liên quan trực tiếp đến cách mạng Việt Nam. Tư tưởng Hồ Chí Minh soi đường thắng lợi cho cách mạng Việt Nam, tài sản tinh thần to lớn của Đảng và dân tộc.',0),(4,1,'Bao gồm những vấn đề có liên quan đến cách mạng thế giới, tài sản tinh thần cho cách mạng thế giới',1),(5,2,'Lý luận và đường lối chính trị.',0),(6,2,'Tư tưởng và đường lối chính trị.',0),(7,2,'Tư tưởng và lý luận cách mạng.',1),(8,2,'Lý luận và thực tiễn cách mạng.',0),(9,3,'Đại hội lần thứ VI (1986).',0),(10,3,'Đại hội lần thứ VII (1991).',1),(11,3,'Đại hội lần thứ VIII (1996).',0),(12,3,'Đại hội lần thứ IX (2001).',0),(13,4,'Có cấu trúc đa tầng',1),(14,4,'Nhiều tầng',0),(15,4,'Theo lớp',0),(16,4,'Tập hợp',0),(17,5,'Chia sẻ tài nguyên (ổ cứng, cơ sở dữ liệu, máy in, các phần mềm tiện ích...)',0),(18,5,'Quản lý tập trung',0),(19,5,'Tận dụng năng lực xử lý của các máy tính rỗi kết hợp lại để thực hiện các công việc lớn',0),(20,5,'Tất cả đều đúng',1),(25,6,'Bit',0),(26,6,'Byte',0),(27,6,'Bps (bit per second)',1),(28,6,'Hz',0),(29,7,'Do có sự phân hóa lao động trong xã hội',0),(30,7,'Do có sự phân hóa giai cấp và đấu tranh giai cấp trong xã hội',1),(31,7,'Do địa hình, khí hậu không thuận lợi nên con người phải hợp sức lại để phát triển sản xuất',0),(32,7,'Do các thành viên trong xã hội lập ra',0),(33,8,'Hình thái kinh tế - xã hội Công xã nguyên thủy',0),(34,8,'Hình thái kinh tế - xã hội Cộng sản nguyên thủy',1),(35,8,'Hình thái kinh tế - xã hội Cộng sản chủ nghĩa',0),(36,8,'Hình thái kinh tế - xã hội Chiếm hữu nô lệ',0),(37,9,'Một tổ chức kinh tế',0),(38,9,'Một xã hội độc lập',0),(39,9,'Một tập đoàn người có cùng quan hệ huyết thống',1),(40,9,'Một đơn vị độc lập',0),(41,10,'Thị tộc là gia đình trong xã hội Cộng sản nguyên thủy',0),(42,10,'Trong thị tộc đã có sự phân công lao động chuyên môn hóa ngành nghề',0),(43,10,'Thị tộc là đơn vị kinh tế đầu tiên của xã hội cộng sản nguyên thủy',1),(44,10,'Tổ chức thị tộc gắn liền với nền kinh tế sản xuất',0),(45,11,'Nhà nước là hiện tượng tự nhiên',0),(46,11,'Nhà nước là hiện tượng xã hội mang tính lịch sử',0),(47,11,'Nhà nước là hiện tượng xã hội',0),(48,11,'Nhà nước là hiện tượng xuất hiện và tồn tại cùng với sự xuất hiện, tồn tại của lịch sử xã hộiloài người',1),(49,12,'Đại hội Đảng lần thứ IX (2001).',0),(50,12,'Đại hội Đảng lần thứ VII (1991).',0),(51,12,'Đại hội Đảng lần thứ XI (2011).',1),(52,12,'Đại hội Đảng lần thứ VI (1986).',0),(53,13,'Nghiên cứu cuộc đời, sự nghiệp của Chủ tịch Hồ Chí Minh.',0),(54,13,'Nghiên cứu hệ thống quan điểm, quan niệm, lý luận về cách mạng Việt Nam của Hồ Chí Minh.',1),(55,13,'Nghiên cứu kết quả vận dụng, phát triển sáng tạo tư tưởng Hồ Chí Minh của Đảng Cộng sản Việt Nam qua các giai đoạn cách mạng.',0),(56,13,'Nghiên cứu những đánh giá của các danh nhân trên thế giới về Hồ Chí Minh.',0),(73,14,'Những năm 30 của thế kỷ XIX.',0),(74,14,'Những năm 40 của thế kỷ XIX.',1),(75,14,'Những năm 50 của thế kỷ XIX.',0),(76,14,'Những năm 20 của thế kỷ XIX.',0),(77,15,'Chủ nghĩa duy tâm chủ quan.',1),(78,15,'Chủ nghĩa duy tâm khách quan.',0),(79,15,'Chủ nghĩa duy vật siêu hình.',0),(80,15,'Chủ nghĩa duy vật biện chứng.',0),(97,21,'Hệ thống các quy tắc xử sự chung do Nhà nước ban hành hoặc thừa nhận và bảo đảm thực hiện',1),(98,21,'Những quy tắc đạo đức do xã hội hình thành',0),(99,21,'Những thói quen được lặp lại nhiều lần trong xã hội',0),(100,21,'Những quy định do các tổ chức xã hội đặt ra',0),(101,22,'Tính quy phạm phổ biến',1),(102,22,'Tính xác định không chặt chẽ về mặt hình thức',0),(103,22,'Tính bắt buộc chung',1),(104,22,'Chỉ áp dụng cho một cá nhân cụ thể',0),(105,23,'Mọi quy phạm pháp luật đều áp dụng cho một cá nhân duy nhất.',1),(106,23,'Pháp luật được Nhà nước bảo đảm thực hiện bằng quyền lực Nhà nước.',0);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `status` enum('PENDING','RESOLVED') DEFAULT 'PENDING',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'Nguyễn Mạnh Kha','nguyenmanhkha3225@gmail.com','0382079152','Giao diện xấu','Giao diện trang Giới thiệu xấu quá, mong cải thiện','PENDING','2026-01-23 15:25:38'),(2,'Trần Thị Thùy Dung','tttdung@gmail.com',NULL,'Đáp án câu hỏi sai','Đáp án câu 2 trong đề Luyện tập 1 môn Lập trình Web đáp án phải là B nhưng trong đề lại là C','PENDING','2026-01-28 22:15:50'),(3,'Nguyễn Hoài An','nha@gmail.com','3542353','Yêu cầu thêm đề','Hiện tại trên web hơi ít đề luyện tập môn Triết học Mác - Leenin, mong admin bổ sung thêm ạ','RESOLVED','2026-02-04 14:40:45');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam`
--

DROP TABLE IF EXISTS `exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `duration` int NOT NULL,
  `status` enum('DRAFT','ACTIVE','INACTIVE') DEFAULT 'DRAFT',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `subject_id` (`subject_id`),
  CONSTRAINT `exam_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam`
--

LOCK TABLES `exam` WRITE;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` VALUES (1,1,'Luyện tập chương 1 - TTHCM',20,'ACTIVE','2026-02-03 22:01:50'),(2,2,'Đề 1 - MMT',12,'ACTIVE','2026-02-03 22:07:53'),(3,4,'Ôn tập chương 1 - PLDC',5,'ACTIVE','2026-02-04 14:53:06'),(4,1,'Chương 1 - TTHCM',15,'ACTIVE','2026-02-04 15:32:24'),(11,4,'Đề thi PLDC',12,'ACTIVE','2026-03-06 20:41:00');
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_question`
--

DROP TABLE IF EXISTS `exam_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_question` (
  `exam_id` int NOT NULL,
  `question_id` int NOT NULL,
  PRIMARY KEY (`exam_id`,`question_id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `exam_question_ibfk_1` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`id`) ON DELETE CASCADE,
  CONSTRAINT `exam_question_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_question`
--

LOCK TABLES `exam_question` WRITE;
/*!40000 ALTER TABLE `exam_question` DISABLE KEYS */;
INSERT INTO `exam_question` VALUES (1,1),(4,1),(1,2),(1,3),(4,3),(2,4),(2,5),(2,6),(4,12),(4,13),(3,21),(11,21),(11,22),(11,23);
/*!40000 ALTER TABLE `exam_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int NOT NULL,
  `content` text NOT NULL,
  `level` enum('EASY','MEDIUM','HARD') DEFAULT 'MEDIUM',
  `type` enum('SINGLE','MULTIPLE','BOOLEAN') DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_question_subject` (`subject_id`),
  CONSTRAINT `fk_question_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,1,'Khái niệm “Tư tưởng Hồ Chí Minh” không bao gồm nội dung nào sau','EASY','SINGLE',0,'2026-02-03 21:54:37'),(2,1,'Điền vào chỗ trống trong Văn kiện Đại hội lần thứ VI của Đảng Cộng sản Việt Nam (1986): “Muốn đổi mới tư duy, Đảng phải nắm vững bản chất cách mạng và khoa học của chủ nghĩa Mác – Lênin, kế thừa di sản quý báu về ……. của Hồ Chí Minh”:','EASY','SINGLE',0,'2026-02-03 21:55:50'),(3,1,'Khái niệm “Tư tưởng Hồ Chí Minh” lần đầu tiên được Đảng Cộng sản Việt Nam đưa ra tại đại hội lần thứ mấy?','MEDIUM','SINGLE',0,'2026-02-03 21:58:13'),(4,2,'Các mạng máy tính được thiết kế và cài đặt theo quan điểm:','EASY','SINGLE',0,'2026-02-03 21:58:58'),(5,2,'Khi sử dụng mạng máy tính ta sẽ thu được các lợi ích:','EASY','SINGLE',0,'2026-02-03 21:59:32'),(6,2,'Đơn vị cơ bản đo tốc độ truyền dữ liệu là:','MEDIUM','SINGLE',0,'2026-02-03 22:00:07'),(7,3,'Theo quan điểm của chủ nghĩa Mác-Lênin thì nguyên nhân chủ yếu làm xuất hiện Nhà nước là?','EASY','SINGLE',0,'2026-02-04 14:49:51'),(8,3,'Nhà nước chưa tồn tại trong hình thái kinh tế - xã hội nào?','EASY','SINGLE',0,'2026-02-04 14:50:50'),(9,3,'Tổ chức thị tộc trong xã hội Cộng sản nguyên thủy là?','MEDIUM','SINGLE',0,'2026-02-04 14:51:18'),(10,3,'Khi nghiên cứu về tổ chức thị tộc thì khẳng định nào sau đây là đúng?','MEDIUM','SINGLE',0,'2026-02-04 14:51:55'),(11,3,'Theo quan điểm của chủ nghĩa Mác-Lênin về Nhà nước thì?','HARD','SINGLE',0,'2026-02-04 14:52:25'),(12,1,'Đảng Cộng sản Việt Nam khẳng định: Tư tưởng Hồ Chí Minh “là tài sản tinh thần vô cùng to lớn và quý giá của Đảng và dân tộc ta, mãi mãi soi đường cho sự nghiệp cách mạng của nhân dân ta giành thắng lợi” là tại Đại hội lần thứ mấy?','EASY','SINGLE',0,'2026-02-04 15:31:15'),(13,1,'Đối tượng nghiên cứu của môn học tư tưởng Hồ Chí Minh là:','HARD','SINGLE',0,'2026-02-04 15:31:45'),(14,3,'Chủ nghĩa Mác nói chung, triết học Mác nói riêng ra đời vào những năm nào của thế kỷ XIX?','EASY','SINGLE',0,'2026-02-05 22:31:33'),(15,3,'Quan điểm nào cho rằng: mọi sự vật, hiện tượng chỉ là “phức hợp những cảm giác” của con người, của chủ thể nhận thức là quan điểm thể hiện lập trường triết học nào?','HARD','SINGLE',1,'2026-02-05 22:35:23'),(21,4,'Pháp luật được hiểu là gì?','EASY','SINGLE',0,'2026-03-06 20:34:22'),(22,4,'Những đặc điểm nào sau đây là đặc trưng của pháp luật?','MEDIUM','MULTIPLE',0,'2026-03-06 20:35:46'),(23,4,'Cho biết nhận định nào sau đây sai?','EASY','BOOLEAN',0,'2026-03-06 20:37:25');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refresh_tokens`
--

DROP TABLE IF EXISTS `refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL,
  `user_id` int NOT NULL,
  `expires_at` timestamp NOT NULL,
  `revoked` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  KEY `fk_refresh_user` (`user_id`),
  CONSTRAINT `fk_refresh_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_tokens`
--

LOCK TABLES `refresh_tokens` WRITE;
/*!40000 ALTER TABLE `refresh_tokens` DISABLE KEYS */;
INSERT INTO `refresh_tokens` VALUES (1,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MTkyMTcyNiwiZXhwIjoxNzcxOTI1MzI2fQ.X35Mj2IoUXJwPzKySsJ_UOIKyTumFWdlPLI01Pcn7j4',4,'2026-03-03 08:28:46',0,'2026-02-24 08:28:46'),(2,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbiIsImlhdCI6MTc3MTkyMjQ0OCwiZXhwIjoxNzcxOTI2MDQ4fQ.v-W5c8lQn0mYT3EsZLzw4l_ZtQ6IyoJGP0Hf-OgdHe8',16,'2026-03-03 08:40:49',1,'2026-02-24 08:40:48'),(3,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzE5MjI0NjYsImV4cCI6MTc3MTkyNjA2Nn0.hGFzWBcb9MZ-Etb5tIGiXQ5-HyJrx0jl3uWJN9vxMzs',15,'2026-03-03 08:41:06',1,'2026-02-24 08:41:06'),(4,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzE5MjMxNzIsImV4cCI6MTc3MTkyNjc3Mn0.JrrGmqkzFtxyQ82DKuFFBPN_w12aUJMHni0r5Tez_cE',15,'2026-03-03 08:52:53',1,'2026-02-24 08:52:52'),(5,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzE5MjQzNTEsImV4cCI6MTc3MTkyNzk1MX0.oz7bmbEoMm0bdWCnYP28tJS2qyzta6q3hPnXbnYxO74',15,'2026-03-03 09:12:32',0,'2026-02-24 09:12:31'),(6,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzE5MjQ0MjUsImV4cCI6MTc3MTkyODAyNX0.ia7kaLjiA55jw4uZgxG06_d6VczZOJ1qsWn7k4sDAMk',15,'2026-03-03 09:13:45',0,'2026-02-24 09:13:45'),(7,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MTkzNjI5MywiZXhwIjoxNzcxOTM5ODkzfQ.hz9UTqC4-5Fwk5xbPU033U6qvn0Gm9cDZzCeemBDY7Y',4,'2026-03-03 12:31:33',0,'2026-02-24 12:31:33'),(8,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIwMzA5MjcsImV4cCI6MTc3MjAzNDUyN30.3LTwC8cx8yeCXsb-oMICXY6IGkd9ohYJzqOntNhDHr0',3,'2026-03-04 14:48:48',0,'2026-02-25 14:48:47'),(9,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjAzMTAwMSwiZXhwIjoxNzcyMDM0NjAxfQ.Ias9nj0sBe5Q8v3xJoPiswTQSdGpZCS7qw1s5F4HSOI',4,'2026-03-04 14:50:01',1,'2026-02-25 14:50:01'),(10,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjAzMzc0NCwiZXhwIjoxNzcyMDM3MzQ0fQ.yXPhwG_2T6iAis10-yb6q0QQHoEQol1o3BN_UBcvhBM',4,'2026-03-04 15:35:44',0,'2026-02-25 15:35:44'),(11,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzIwMzQwNzMsImV4cCI6MTc3MjAzNzY3M30.j30vOVUBGYqBRpD3L5-CVG7v3Oa82owKFJ7UmE_dPqU',15,'2026-03-04 15:41:14',0,'2026-02-25 15:41:13'),(12,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIwMzQxMTUsImV4cCI6MTc3MjAzNzcxNX0.21GO7D-Tli8hGYQ71yjtmWCLTRWXyiuTQREuZXh13Oc',3,'2026-03-04 15:41:55',0,'2026-02-25 15:41:55'),(13,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIwMzQxNzcsImV4cCI6MTc3MjAzNzc3N30.0nES0S13NZUmrwqGTKHQvzi7FNGMFiGsOt3_PVZt-Xc',3,'2026-03-04 15:42:58',0,'2026-02-25 15:42:57'),(14,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjA3MDk5MywiZXhwIjoxNzcyMDc0NTkzfQ.Y8PjcLbZTfPA1iv7l0qGQ1gD97au0NN_ddmG2cezDPI',4,'2026-03-05 01:56:34',0,'2026-02-26 01:56:33'),(15,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjA3NjAwOCwiZXhwIjoxNzcyMDc5NjA4fQ.OJIqNXGcNeu8CBs5NbzFpeU7hxBqgVLD-iwoLLqXasY',4,'2026-03-05 03:20:09',0,'2026-02-26 03:20:08'),(16,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzIwOTM3MDYsImV4cCI6MTc3MjA5NzMwNn0.6eSbrwzh5G1fmSlH8O-KIy5MlNvOcmg8CcqkXbvdJ2s',15,'2026-03-05 08:15:06',0,'2026-02-26 08:15:06'),(17,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIwOTkyNTUsImV4cCI6MTc3MjEwMjg1NX0.Md2zyj1P8qOWvsaoR5Wbi8crrxBjLPQY_70bfbFacUM',3,'2026-03-05 09:47:35',1,'2026-02-26 09:47:35'),(18,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzIwOTkyNzcsImV4cCI6MTc3MjEwMjg3N30.UOgll_cDBao7xFzdF2R-M-7uperky0KYdAzNcY1NRSw',15,'2026-03-05 09:47:58',0,'2026-02-26 09:47:57'),(19,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbiIsImlhdCI6MTc3MjE3NDA3MiwiZXhwIjoxNzcyMTc3NjcyfQ.tLoiCVyOGk7vwpYfy2xHFR-H8SBea_CA0It5DFt9lPE',16,'2026-03-06 06:34:32',0,'2026-02-27 06:34:32'),(20,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjE3NDY3NywiZXhwIjoxNzcyMTc4Mjc3fQ.KOMdN7q73a1jmFgDpkxCrvUd6yq9BXmYHcpFKuiQu0o',4,'2026-03-06 06:44:38',1,'2026-02-27 06:44:37'),(21,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIxNzQ3ODEsImV4cCI6MTc3MjE3ODM4MX0.TCw_7pIV8j8RU-qRsv6qK3Hs10uUKHsLtzz0UGzIROE',3,'2026-03-06 06:46:22',1,'2026-02-27 06:46:21'),(22,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIxNzgwMzgsImV4cCI6MTc3MjE4MTYzOH0.r4LLB3mrZ_T0REObGIH4pqJtV6nLdhYnxYAZKJct9HA',3,'2026-03-06 07:40:39',0,'2026-02-27 07:40:38'),(23,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIyNTAwMTYsImV4cCI6MTc3MjI1MzYxNn0.TLjpNf9eiStOWHl671hz_iCnqx7x2yRJgqIo9HpUGJ4',3,'2026-03-07 03:40:16',1,'2026-02-28 03:40:16'),(24,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjI1MDA3OSwiZXhwIjoxNzcyMjUzNjc5fQ.G_BPXDFzF7WQiiv-P1SctqWQIl1qRTFA15Q-OspdKao',4,'2026-03-07 03:41:20',0,'2026-02-28 03:41:19'),(25,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjM0NTU1MywiZXhwIjoxNzcyMzQ5MTUzfQ.Mk-8aP66Zxv5bTVQn4qJPeCYh6hT5IaQerot25zOW7Y',4,'2026-03-08 06:12:33',0,'2026-03-01 06:12:33'),(26,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjM0NjExNywiZXhwIjoxNzcyMzQ5NzE3fQ.zoUctaZ5OhjXhYXltrzEPMnWH3Vh8eDT2svgsgP8Ba0',4,'2026-03-08 06:21:57',1,'2026-03-01 06:21:57'),(27,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzIzNDYzODAsImV4cCI6MTc3MjM0OTk4MH0.NwYv8c5BGZDbmCVq4zMQHykVvxRDdZWUBVSGmepcs20',3,'2026-03-08 06:26:20',1,'2026-03-01 06:26:20'),(28,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjM0NjU4NywiZXhwIjoxNzcyMzUwMTg3fQ.5AsB2si-4SlGKCFYij9UgRa_qy3xJNUzSfoFYfccBZ0',4,'2026-03-08 06:29:48',0,'2026-03-01 06:29:47'),(29,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzI1MjIyNjcsImV4cCI6MTc3MjUyNTg2N30.WOAGv5sO-Wr5OZvYHGAABwPu6iLoXqV5oDughzbRxYQ',3,'2026-03-10 07:17:48',1,'2026-03-03 07:17:47'),(30,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodXkiLCJpYXQiOjE3NzI1MjIzNTksImV4cCI6MTc3MjUyNTk1OX0.7s7Pt5pdjClb71MbyX7yY9P30g5VOJ_QKxxM46vkjjg',15,'2026-03-10 07:19:20',1,'2026-03-03 07:19:19'),(31,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbiIsImlhdCI6MTc3MjUyMjQ0MSwiZXhwIjoxNzcyNTI2MDQxfQ.FSexa1oDlx9xZ8e_U7_kVeyh-BN0chqtCKkYM7Yug4o',16,'2026-03-10 07:20:41',0,'2026-03-03 07:20:41'),(32,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjYzMDcwNSwiZXhwIjoxNzcyNjM0MzA1fQ.VQI9bn0-NYLj8-QFHze7zVPjqkpExt5P0kqKQjF4taw',4,'2026-03-11 13:25:06',1,'2026-03-04 13:25:05'),(33,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkdW5nIiwiaWF0IjoxNzcyNjM1ODYyLCJleHAiOjE3NzI2Mzk0NjJ9.GIPdFgHMWRtn_6U_PLD7PJZPZPLvYuXW5cmIFYmzlYE',5,'2026-03-11 14:51:02',0,'2026-03-04 14:51:02'),(34,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjY4Mjk4NCwiZXhwIjoxNzcyNjg2NTg0fQ.6RYRsYQCvE_0aA2OiUVKcAfK_d1G3cuqluwgORqX3MM',4,'2026-03-12 03:56:25',1,'2026-03-05 03:56:24'),(35,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjY5NDYwNiwiZXhwIjoxNzcyNjk4MjA2fQ.-zWL2yjbra4kJtrBhcmXcF_WyF_xROeL3JjgiwA7jeI',4,'2026-03-12 07:10:06',0,'2026-03-05 07:10:06'),(36,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjY5NDYxMSwiZXhwIjoxNzcyNjk4MjExfQ.DCcFsMuLgRb2xVgEw6Y_KXTOv8ia3p54kcbfCWecSI8',4,'2026-03-12 07:10:11',0,'2026-03-05 07:10:11'),(37,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjY5NDgyNiwiZXhwIjoxNzcyNjk4NDI2fQ.Vxfbnv2mYJVmMxgcBKV_6JtIS40KhpiSYU18ZxSJ68s',4,'2026-03-12 07:13:47',0,'2026-03-05 07:13:46'),(38,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjcwMzc5OCwiZXhwIjoxNzcyNzA3Mzk4fQ.9DqrNbouy1c_Iqi7Z-lB_rzO2wPMQS0tISu94tg-kJo',4,'2026-03-12 09:43:19',0,'2026-03-05 09:43:18'),(39,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzI3NjM1MzUsImV4cCI6MTc3Mjc2NzEzNX0.ZSG8UUcKcBEaBJ44DkQcHdAlw11WU8tje1c8P--YIsc',3,'2026-03-13 02:18:56',1,'2026-03-06 02:18:55'),(40,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzI3NjM2MDYsImV4cCI6MTc3Mjc2NzIwNn0.1oqD0-osAmI-FHcPrOXKM8qSwBd6r0X1EEI3IvQRefE',3,'2026-03-13 02:20:07',1,'2026-03-06 02:20:06'),(41,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MjgwMzgxNCwiZXhwIjoxNzcyODA3NDE0fQ.PljwexGzJwrIOtIJwJpR9SwhhGHZkil91z21D8FBiqc',4,'2026-03-13 13:30:15',0,'2026-03-06 13:30:15'),(42,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3Mjg5MzA4MCwiZXhwIjoxNzcyODk2NjgwfQ.8mrqxwtWnLznRX6qMZ8PgXzsgcbAXMgoaoREh3Xv64Q',4,'2026-03-14 14:18:01',0,'2026-03-07 14:18:01'),(43,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3Mjk1Njk1NCwiZXhwIjoxNzcyOTYwNTU0fQ.gwS14QcNFbqN97mY12lQG0XDkubruLe05hqiuDW_mEM',4,'2026-03-15 08:02:34',0,'2026-03-08 08:02:34'),(44,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGEiLCJpYXQiOjE3NzMyNDQ3NTYsImV4cCI6MTc3MzI0ODM1Nn0.-6UZTLBXGveX5HURXcJqaoaoAHNdEzx0z62QeXyIkEg',3,'2026-03-18 15:59:17',1,'2026-03-11 15:59:16'),(45,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MzI0NDc4MSwiZXhwIjoxNzczMjQ4MzgxfQ.CsCreteA1n5o9bmpgzpJrzFs0ND098SR7hGH1ynyFhg',4,'2026-03-18 15:59:42',0,'2026-03-11 15:59:41'),(46,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc3MzI4NTcyNywiZXhwIjoxNzczMjg5MzI3fQ.1R7sCC5zBfreHM6bMAcM-iuDj8Alj5F6VblD46JCus4',4,'2026-03-19 03:22:08',0,'2026-03-12 03:22:07');
/*!40000 ALTER TABLE `refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password_token`
--

DROP TABLE IF EXISTS `reset_password_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_password_token` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `token_hash` varchar(255) NOT NULL,
  `expires_at` datetime NOT NULL,
  `used_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `reset_password_token_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password_token`
--

LOCK TABLES `reset_password_token` WRITE;
/*!40000 ALTER TABLE `reset_password_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_password_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `exam_id` int NOT NULL,
  `score` float DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `submit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `exam_id` (`exam_id`),
  CONSTRAINT `result_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `result_ibfk_2` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
INSERT INTO `result` VALUES (1,5,1,6.66667,'2026-02-03 22:10:32','2026-02-03 22:11:25'),(2,7,2,3.33333,'2026-02-04 11:50:54','2026-02-04 11:51:18'),(5,15,2,10,'2026-02-19 14:33:33','2026-02-19 14:33:39'),(7,16,2,10,'2026-02-20 15:06:46','2026-02-20 15:06:53'),(9,15,4,5,'2026-02-20 15:33:25','2026-02-20 15:33:31'),(10,16,4,7.5,'2026-02-20 16:34:29','2026-02-20 16:34:52'),(11,3,1,3.33333,'2026-02-20 22:31:42','2026-02-20 22:32:01'),(23,3,1,6.66667,'2026-02-21 21:35:24','2026-02-21 21:35:38'),(24,16,4,0,'2026-02-21 17:16:34','2026-02-21 17:16:52'),(25,15,1,0,'2026-02-24 16:15:43','2026-02-24 16:17:16'),(26,3,2,10,'2026-02-25 22:44:20','2026-02-25 22:45:31'),(27,15,2,3.33333,'2026-02-27 13:24:36','2026-02-27 13:25:03'),(29,3,1,3.33333,'2026-02-28 10:40:18','2026-02-28 10:40:28'),(30,5,2,3.33333,'2026-03-04 21:51:14','2026-03-04 21:51:23'),(46,4,11,10,'2026-03-06 20:44:16','2026-03-06 20:44:41'),(48,4,11,3.33333,'2026-03-06 20:52:01','2026-03-06 20:52:11');
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `image_url` text,
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'INACTIVE',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES (1,'Tư tưởng Hồ Chí Minh','Bộ câu hỏi trắc nghiệm môn Tư tưởng Hồ Chí Minh giúp sinh viên hệ thống hóa kiến thức lý luận, nắm vững các nội dung trọng tâm và ôn tập hiệu quả cho các bài kiểm tra, thi giữa kỳ và cuối kỳ.','https://res.cloudinary.com/dcjraarbb/image/upload/v1768718140/10017b5c-fcea-4fc9-94ec-ab8b8130cd55.png','ACTIVE'),(2,'Mạng máy tính','Hệ thống câu hỏi trắc nghiệm môn Mạng máy tính bao gồm các kiến thức nền tảng và chuyên sâu, giúp sinh viên hiểu rõ nguyên lý hoạt động mạng, củng cố lý thuyết và chuẩn bị tốt cho các kỳ thi học phần.','https://res.cloudinary.com/dcjraarbb/image/upload/v1768717775/358e188a-1e19-41b4-ac9f-33594d7d33f8.png','ACTIVE'),(3,'Triết học Mác - Lênin','Bộ đề trắc nghiệm Triết học Mác – Lênin hỗ trợ sinh viên ôn tập các khái niệm, quy luật và nguyên lý triết học cơ bản, giúp ghi nhớ kiến thức dễ dàng và nâng cao kết quả học tập.','https://res.cloudinary.com/dcjraarbb/image/upload/v1768717978/2a3833b3-0949-4644-89d1-2cee4ef58bb5.png','ACTIVE'),(4,'Pháp luật đại cương','Ngân hàng câu hỏi trắc nghiệm môn Pháp luật đại cương hỗ trợ sinh viên hiểu rõ các khái niệm pháp lý cơ bản, rèn luyện khả năng ghi nhớ và vận dụng kiến thức vào bài thi.','https://res.cloudinary.com/dcjraarbb/image/upload/v1768718066/b3b12c32-2fde-4c55-838c-54443d23ad53.png','ACTIVE');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT 'USER',
  `status` enum('ACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'kha','$2a$10$k9NbEpu9o2nYzDhNL0wYO.sAmHiKxFfeFUuo4sZrURgSZ.f.2Jbpu','Nguyễn Mạnh Kha','kha1@gmail.com',NULL,'USER','ACTIVE','2026-01-17 21:33:21'),(4,'admin','$2a$10$V6fVgbmYKGB5XlRGiId5oOj7vbQ9brrNQLf6jxxfR9idoZ50RfKhW','Nguyễn Mạnh Kha','nguyenmanhkha3225@gmail.com',NULL,'ADMIN','ACTIVE','2026-01-18 21:30:43'),(5,'dung','$2a$10$r36rKY/JZWrAjgaVi.4cq.3Snl.oxqdKtEKpqqidBT0d4y.9FdTDm','Trần Thùy Dung','kha3@gmail.com',NULL,'USER','ACTIVE','2026-01-18 21:32:40'),(7,'duc','$2a$10$Mh33xflG6W0ZyYDAFxT8R.rIZSDTrfftDNZ02NkqP9LvtUvn.S4xe','Nguyễn Mạnh Đức','kha4@gmail.com','0382079152','USER','ACTIVE','2026-01-18 21:33:21'),(15,'huy','$2a$10$0higc7DaPzCIFDGy0Y8aKOrFJbDbb0FP6LWWlPmba5cVsAALwdAO.','Lê Văn Huy','lvh@gmail.com','09872323','USER','ACTIVE','2026-02-04 14:33:07'),(16,'an','$2a$10$ZX4b9/JhhdeN9ETUwg86dexGZ2KZI/TcT3BoI1.OR7h1vjSbb07Qu','Nguyễn Hoài An','nha@gmail.com','03242424','USER','ACTIVE','2026-02-04 14:38:57'),(18,'test','$2a$10$S3l2CY5s.59YnfCeeWtWou/kgbdKZqObYqBBUBhTBzCmayPbIy54O','test','123','000','USER','ACTIVE','2026-02-05 13:09:35');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_answer`
--

DROP TABLE IF EXISTS `user_answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `result_id` int NOT NULL,
  `question_id` int NOT NULL,
  `answer_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `result_id` (`result_id`),
  KEY `question_id` (`question_id`),
  KEY `answer_id` (`answer_id`),
  CONSTRAINT `user_answer_ibfk_1` FOREIGN KEY (`result_id`) REFERENCES `result` (`id`),
  CONSTRAINT `user_answer_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `user_answer_ibfk_3` FOREIGN KEY (`answer_id`) REFERENCES `answer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_answer`
--

LOCK TABLES `user_answer` WRITE;
/*!40000 ALTER TABLE `user_answer` DISABLE KEYS */;
INSERT INTO `user_answer` VALUES (1,1,1,4),(2,1,2,6),(3,1,3,10),(4,2,4,13),(5,2,6,26),(10,5,4,13),(11,5,5,20),(12,5,6,27),(18,7,4,13),(19,7,5,20),(20,7,6,27),(21,9,1,3),(22,9,3,10),(23,9,13,54),(24,10,1,4),(25,10,3,10),(26,10,12,49),(27,10,13,54),(28,11,1,4),(29,11,2,6),(30,11,3,9),(37,23,1,4),(38,23,2,7),(39,23,3,11),(40,24,1,2),(41,24,3,9),(42,24,12,49),(43,24,13,53),(44,25,1,3),(45,25,2,5),(46,25,3,12),(47,26,4,13),(48,26,5,20),(49,26,6,27),(50,27,4,13),(51,27,5,18),(52,27,6,26),(53,29,1,1),(54,29,2,7),(55,29,3,12),(56,30,4,14),(57,30,5,20),(58,30,6,28),(77,46,21,97),(78,46,22,101),(79,46,22,103),(80,46,23,105),(81,48,21,97),(82,48,22,101),(83,48,22,102);
/*!40000 ALTER TABLE `user_answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-22 21:06:30
