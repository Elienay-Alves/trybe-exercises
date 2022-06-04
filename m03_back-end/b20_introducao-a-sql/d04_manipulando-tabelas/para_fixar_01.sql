use sakila;
set  SQL_SAFE_UPDATES = 0;

select * from staff
order by staff_id desc;

insert into actor (first_name, last_name)
values('YOUR', 'NAME');

insert into actor (first_name, last_name)
select first_name, last_name from staff;

select * from staff;
insert into staff (first_name, last_name, address_id, store_id, active, username)
values ('JÃO', 'BRABO', 89, 1, 1, 'KILLER');

insert into staff (first_name, last_name, address_id, store_id, active, username) values
	('NEGIN', 'DA FEIJÃO', 111, 1, 1, 'PAITAON'),
    ('CACHORÃO', 'DO ZAP', 85, 1, 1, 'PEGA1PEGAGERAL');
    
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY  customer_id LIMIT 5;

INSERT INTO category (name) VALUES
	('borrei as calças'),
    ('tédioooo'),
    ('Vou assistir até morrer');
    
INSERT INTO store (manager_staff_id, address_id)
VALUES (10, 3);

UPDATE staff
SET first_name = 'LIL'
WHERE  staff_id = 7;

UPDATE actor
SET first_name = 'JULES'
WHERE  first_name = 'JULIA';
SELECT first_name FROM actor
WHERE first_name LIKE 'JUL%';

SELECT * FROM category;

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

SELECT * FROM film;
UPDATE film
SET rental_rate = 25.00
WHERE rating IN ('G', 'PG', 'PG-13')
AND length > 100
AND replacement_cost > 20.00;

UPDATE film
SET rental_rate = (
CASE
	WHEN length BETWEEN 1 AND 100 THEN 10
    WHEN length > 100 THEN 20
END
);

