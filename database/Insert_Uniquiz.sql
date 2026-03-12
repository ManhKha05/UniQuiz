CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  email varchar(255) not null,
  phone varchar(100),
  role ENUM('USER','ADMIN'),
  status ENUM('ACTIVE','BLOCKED') DEFAULT 'ACTIVE',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subject (
  id INT PRIMARY KEY AUTO_INCREMENT,
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
  status ENUM('DRAFT','PUBLISHED') DEFAULT 'DRAFT',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE question (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subject_id INT NOT NULL,
  content TEXT NOT NULL,
  question_type ENUM('SINGLE', 'MULTIPLE') DEFAULT 'SINGLE',
  level ENUM('EASY','MEDIUM','HARD') DEFAULT 'MEDIUM',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (subject_id) REFERENCES subject(id)
);

CREATE TABLE exam_question (
  exam_id INT NOT NULL,
  question_id INT NOT NULL,
  PRIMARY KEY (exam_id, question_id),
  FOREIGN KEY (exam_id) REFERENCES exam(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES question(id)
);

CREATE TABLE answer (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question_id INT NOT NULL,
  content TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE,
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
  id INT AUTO_INCREMENT PRIMARY KEY, 
  result_id INT NOT NULL,
  question_id INT NOT NULL,
  answer_id INT NOT NULL,
  FOREIGN KEY (result_id) REFERENCES result(id),
  FOREIGN KEY (question_id) REFERENCES question(id),
  FOREIGN KEY (answer_id) REFERENCES answer(id)
);

CREATE TABLE contact_feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(10),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status ENUM('PENDING', 'RESOLVED') DEFAULT 'PENDING',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reset_password_token (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    used_at DATETIME NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USER (id)
);

CREATE TABLE refresh_tokens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(500) NOT NULL UNIQUE,
    user_id INT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    revoked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_refresh_user
      FOREIGN KEY (user_id)
      REFERENCES user(id)
      ON DELETE CASCADE
);

