CREATE DATABASE IF NOT EXISTS rabiabee;

-- Use the 'rabiabee' database
USE rabiabee;

-- Create a table named 'customers'
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- Consider using a secure hashing algorithm for passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example record
INSERT INTO customers (first_name, last_name, email, password)
VALUES ('John', 'Doe', 'john@example.com', 'hashed_password');