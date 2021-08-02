CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) as actor, f.title FROM sakila.actor a
INNER JOIN sakila.film_actor fa ON fa.actor_id = a.actor_id 
INNER JOIN sakila.film f ON f.film_id = fa.film_id
ORDER BY actor;
