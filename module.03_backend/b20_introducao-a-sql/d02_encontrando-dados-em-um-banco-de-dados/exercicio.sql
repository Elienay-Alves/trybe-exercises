-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution". -- 
use Scientists;
select "This is SQL Exercise, Practice and Solution";

-- Escreva uma query para exibir três números em três colunas.
select 1, 2, 3;

-- Escreva uma query para exibir a soma dos números 10 e 15.
select 10 + 15;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
select (10 * 15) + 12;

-- Escreva uma query para exibir todas as informações de todos os cientistas.
select * from Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
select name as 'Nome do Projeto', hours as 'Tempo de Trabalho' from Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
select name from Scientists
order by name asc;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
select name from Projects
order by name desc;

-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
select concat('O projeto', name, ' precisou de ', hours, ' horas para ser concluido.') as resultado from Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
select name, hours from Projects
order by hours desc limit 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
select distinct Project from AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
select name from Projects
order by hours desc limit 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
select name from Projects
order by hours asc limit 1 offset 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
select * from Projects
order by hours asc limit 5;

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
select concat('Existem ', count(name), ' cientistas na tabela Scientists.') as resultado from Scientists;
