-- EXERCICIO 1:
SELECT MAX(salary) FROM hr.employees;

-- EXERCICIO 2:
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- EXERCICIO 3:
SELECT job_id, AVG(salary) AS 'average_salary' FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- EXERCICIO 4:
SELECT SUM(salary) FROM hr.employees;

-- EXERCICIO 5:
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

-- EXERCICIO 6:
SELECT job_id, COUNT(*) 'total' FROM hr.employees
WHERE  job_id = 'it_prog';

-- EXERCICIO 7:
SELECT job_id, SUM(salary) 'payment' FROM hr.employees
GROUP BY job_id;

-- EXERCICIO 8:
SELECT job_id, SUM(salary) 'payment' FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- EXERCICIO 9:
SELECT job_id, AVG(salary) 'average_salary' FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;

-- EXERCICIO 10:
SELECT department_id, AVG(salary) 'average_salary', COUNT(*) 'number_of_employees' FROM hr.employees
GROUP BY department_id
HAVING number_of_employees > 10;

-- EXERCICIO 11:
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- EXERCICIO 12:
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- EXERCICIO 13:
SELECT employee_id, first_name, YEAR(hire_date) 'hire_year' FROM hr.employees;

-- EXERCICIO 14:
SELECT employee_id, first_name, DAY(hire_date) 'hire_day' FROM hr.employees;

-- EXERCICIO 15:
SELECT employee_id, first_name, MONTH(hire_date) 'hire_month' FROM hr.employees;

-- EXERCICIO 16:
SELECT UPPER(CONCAT(first_name, " ", last_name)) FROM hr.employees;

-- EXERCICIO 17:
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date  BETWEEN '1987-07-01'  AND '1987-07-31';

-- EXERCICIO 18:
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked' FROM hr.employees;