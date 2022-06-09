-- EXERCICIO 1:
SELECT active, COUNT(*) FROM sakila.customer
GROUP BY(active);

-- EXERCICIO 2:
SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;

-- EXERCICIO 3:
SELECT AVG(rental_duration) AS avg_rental_duration, rating FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

-- EXERCICIO 4:
SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;