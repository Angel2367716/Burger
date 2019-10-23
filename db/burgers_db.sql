CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Fried burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baconator Sr.', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bcaonator Jr.', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('BigMac Jr.', FALSE);


select * from burgers;

