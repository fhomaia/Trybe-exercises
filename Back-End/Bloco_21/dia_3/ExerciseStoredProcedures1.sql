DELIMITER $$
CREATE PROCEDURE ShowMostPopularActors()
BEGIN
SELECT actor_id, COUNT(*) AS `NumberofFilms` FROM sakila.film_actor
GROUP BY actor_id
ORDER BY NumberofFilms DESC
LIMIT 10;
END $$
DELIMITER ;

CALL ShowMostPopularActors();

