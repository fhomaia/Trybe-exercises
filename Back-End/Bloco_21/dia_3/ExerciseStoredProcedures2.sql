DELIMITER $$
CREATE PROCEDURE FindFilmFromCategory(IN category VARCHAR(200))
BEGIN
SELECT movies.film_id, movies.title, cID.category_id, c.name FROM sakila.film AS movies
INNER JOIN film_category AS cID ON movie.film_id = cID.film_id
INNER JOIN category AS c ON c.category_id = cID.category_id
WHERE c.name = category;
END $$
DELIMITER ;