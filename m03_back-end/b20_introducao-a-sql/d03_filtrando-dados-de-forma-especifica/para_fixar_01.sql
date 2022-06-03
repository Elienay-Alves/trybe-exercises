use sakila;

-- Exercicio 1:
select * from customer
where email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Exercicio 2:
select first_name from customer
where active = 0 and store_id = 2 and first_name <> 'KENNETH'
order by first_name;

-- Exercicio 3:
select title, description, release_year, replacement_cost from film
where rating <> 'NC-17' and replacement_cost >= 18.00
order by replacement_cost desc, title
limit 100;

-- Exercicio 4:
select count(*) as quantidade_de_clientes_ativos from customer
where active = 0 and store_id = 1;

-- Exercicio 5:
select * from customer
where active = 0 and store_id = 1;

-- Exercicio 6:
select title from film
where rating = 'NC-17'
order by rental_rate, title
limit 50;