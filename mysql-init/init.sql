CREATE DATABASE IF NOT EXISTS sunshinelaundry1;

CREATE TABLE IF NOT EXISTS sunshinelaundry1.orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(225) NOT NULL,
    email VARCHAR(225) NOT NULL,
    contactNumber VARCHAR(225) NOT NULL,
    includeDetergent BOOL NOT NULL,
    includeFabcon BOOL NOT NULL,
    type VARCHAR(20) NOT NULL,
    deliverAddress VARCHAR(225),
    deliverDateTime VARCHAR(225),
    pickupDateTime VARCHAR(225),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);