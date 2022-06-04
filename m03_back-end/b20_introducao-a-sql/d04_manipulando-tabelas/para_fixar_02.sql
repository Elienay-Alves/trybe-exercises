USE sakila;

DELETE FROM film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM film_actor
WHERE actor_id = 7;

DELETE FROM actor
WHERE first_name = 'GRACE';

-- PARA FIXAR
-- EXERCICIO 1:
SELECT * FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = '12';

DELETE FROM actor
WHERE first_name = 'KARL';

-- EXERCICIO 2;
SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- EXERCICIO 3:
SELECT * FROM film_category;

DELETE FROM film_text
WHERE description LIKE '%saga%';

-- EXERCICIO 4:
TRUNCATE film_actor;
TRUNCATE film_category;

-- EXERCICIO 6:
DROP SCHEMA sakila;