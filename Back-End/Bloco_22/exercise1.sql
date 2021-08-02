CREATE VIEW film_with_categories AS 
SELECT f.title as title, fc.category_id as category_id , c.name as `name`
FROM sakila.film f
INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
INNER JOIN sakila.category c ON c.category_id = fc.category_id
ORDER BY title;
