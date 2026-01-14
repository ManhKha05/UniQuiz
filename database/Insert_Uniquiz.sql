CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  role ENUM('USER','ADMIN'),
  status int,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subject (
  id INT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(20) UNIQUE,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT,
  status ENUM('ACTIVE', 'INACTIVE') DEFAULT 'INACTIVE'
);

CREATE TABLE exam (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subject_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  status ENUM('DRAFT','PUBLISHED'),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE question (
  id INT PRIMARY KEY AUTO_INCREMENT,
  exam_id INT NOT NULL,
  content TEXT NOT NULL,
  question_type ENUM('SINGLE', 'MULTIPLE') DEFAULT 'SINGLE',
  FOREIGN KEY (exam_id) REFERENCES exam(id)
);

CREATE TABLE answer (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT NOT NULL,
  content TEXT NOT NULL,
  is_correct BOOLEAN,
  FOREIGN KEY (question_id) REFERENCES question(id)
);

CREATE TABLE result (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  exam_id INT NOT NULL,
  score FLOAT,
  start_time DATETIME,
  submit_time DATETIME,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (exam_id) REFERENCES exam(id)
);

CREATE TABLE user_answer (
  result_id INT NOT NULL,
  question_id INT NOT NULL,
  answer_id INT NOT NULL,
  PRIMARY KEY (result_id, question_id, answer_id),
  FOREIGN KEY (result_id) REFERENCES result(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES question(id),
  FOREIGN KEY (answer_id) REFERENCES answer(id)
);
