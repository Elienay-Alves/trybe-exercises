use sakila;

select * from film
where title like 'E__%';

-- Exercicio 1:
select * from film
where title like '%ace%';

-- Exercicio 2:
select * from film
where description like '%china';

-- Exercicio 3:
select * from film
where description like '%girl%' and title like '%lord';

-- Exercicio 4:
select * from film
where title like '___gon%';

-- Exercicio 5:
select * from film
where title like '___gon%' and description like '%Documentary%';

-- Exercicio 6:
select * from film
where title like '%academy' or title like 'mosquito%';

-- Exercicio 7:
select * from film
where description like '%monkey%' and description like '%sumo%';