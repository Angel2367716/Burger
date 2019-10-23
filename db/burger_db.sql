CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burger;

-- Create the burger table
CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burger (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Pizza Burger', FALSE);
INSERT INTO burger (burger_name, devoured) VALUES ('Bacon Cheese Burger', FALSE);

 select * from burger;










