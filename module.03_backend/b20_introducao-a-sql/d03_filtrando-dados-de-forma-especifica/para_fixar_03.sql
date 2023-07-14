use sakila;

select * from address
where district in ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

select title, length from sakila.film
where length between 50 and 120;

select * from sakila.language
where name between 'Italian' and 'Mandarim'
order by name;

select rental_id, rental_date from rental
where rental_date
between '2005-05-27' and '2005-07-17';

-- Para Fixar
-- Exercicio 1:
select first_name, last_name, email from customer
where last_name in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
order by first_name;

-- Exercicio 2:
select email from customer
where address_id in (172, 173, 174, 175, 176)
order by email;

-- Exercicio 3:
select count(*) as total_payment from payment
where payment_date between '2005-05-01' and '2005-08-01';

-- Exercicio 4:
select title, release_year, rental_duration from film
where rental_duration between 3 and 6
order by rental_duration desc, title;

-- Exrecicio 5:
select title, rating from film
where rating in ('G', 'PG', 'PG-13')
order by title
limit 500;
