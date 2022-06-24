-- EXERCICIO 1:
SELECT CONCAT(employee.first_name, ' ', employee.last_name) 'Nome Pessoa Colaboradora', CONCAT(manager.first_name, ' ', manager.last_name) 'Nome Gerente'
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager
ON employee.manager_id = manager.employee_id
WHERE employee.department_id <> manager.department_id;

-- EXERCICIO 2:
SELECT CONCAT(manager.first_name, ' ', manager.last_name) 'Nome Gerente', COUNT(*)
FROM hr.employees AS manager
INNER JOIN
hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;