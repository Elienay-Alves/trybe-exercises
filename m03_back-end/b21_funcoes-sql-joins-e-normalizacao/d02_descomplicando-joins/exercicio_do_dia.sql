select * from box_office;

-- EXERCICIO 1:
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM movies m
INNER JOIN box_office bo ON bo.movie_id = m.id;

-- EXERCICIO 2:
SELECT m.title, bo.domestic_sales + bo.international_sales 'sales'
FROM movies m
INNER JOIN box_office bo
ON bo.movie_id = m.id
WHERE bo.international_sales > bo.domestic_sales;

-- EXERCICIO 3:
SELECT m.title, bo.rating
FROM movies m
INNER JOIN box_office bo ON bo.movie_id = m.id
ORDER BY bo.rating DESC;

-- EXERCICIO 4:
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater t
LEFT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;

-- EXERCICIO 5:
SELECT t.id, t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater t
RIGHT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;