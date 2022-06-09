-- EXERCICIO 1:
    SELECT rating, AVG(length) duracao_media
    FROM sakila.film
    GROUP BY rating
    HAVING duracao_media BETWEEN 115.0 AND 121.50
    ORDER BY duracao_media DESC;
    
-- EXERCICIO 2:
    SELECT rating, SUM(replacement_cost) total_de_custo_de_substituicao
    FROM sakila.film
    GROUP by rating
    HAVING total_de_custo_de_substituicao > 3950.50
    ORDER BY total_de_custo_de_substituicao;