/*	C - CREATE = INSERT
	R - READ   = SELECT
    U - UPDATE = UPDATE
    D - DELETE = DELETE
*/

USE sakila;
SELECT * FROM actor;

INSERT INTO actor (first_name, last_name)
VALUES ('ELIENAY', 'ALVES');

SELECT * FROM staff;

UPDATE staff
SET last_name = 'Travolta'
WHERE last_name = 'Stephens';

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM language;

DELETE FROM language
WHERE language_id = 5;

SELECT * FROM city;



DELETE FROM city
WHERE city_id = 3;

DROP SCHEMA sakila;