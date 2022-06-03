select * from sakila.payment;
select * from sakila.payment
where date(payment_date) = '2005-07-31';

-- PARA FIXAR
-- Exercicio 1:
use sakila;
select count(*) from payment
where date(payment_date) = '2005-05-25';

-- Exercicio 2:
select count(*) from payment
where payment_date between '2005-07-01' and '2005-08-22';

-- Exercicio 3:
select * from rental;

-- Exercicio 4:
select date(rental_date) as data,
year(rental_date) as ano,
month(rental_date) as mes,
day(rental_date) as dia,
hour(rental_date) as hora,
minute(rental_date) as minuto,
second(rental_date) as segundo
from rental
where rental_id = 10330;

-- Exercicio 5:
select * from payment
where date(payment_date) = '2005-07-28' and hour(payment_date) >=22;