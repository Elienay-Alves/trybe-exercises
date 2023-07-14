-- EXERCICIO 1:
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, CONCAT(a.first_name,' ', a.last_name), f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- EXERCICIO 2:
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT CONCAT(s.first_name, ' ', s.last_name), a.address_id
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id; 

-- EXERCICIO 3:
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name), c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY CONCAT(c.first_name, ' ', c.last_name) DESC LIMIT 100;

-- EXERCICIO 4:
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- EXERCICIO 5:
SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT c.first_name, COUNT(a.address) 'quantidade_de_enderços'
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;

-- EXERCICIO 6:
SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT CONCAT(s.first_name, ' ', s.last_name) 'nome_completo', AVG(p.amount) 'media_de_pagamento'
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE  YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

-- EXERCICIO 7:
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;