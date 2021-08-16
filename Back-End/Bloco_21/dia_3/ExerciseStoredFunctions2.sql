DELIMITER $$
CREATE FUNCTION GetMovieTitleById(inventory_id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
DECLARE movie_title VARCHAR(500);
SELECT movie.title FROM sakila.film AS movie
INNER JOIN sakila.inventory AS i ON i.film_id = movie.film_id
WHERE i.inventory_id = inventory_id
INTO movie_title;
RETURN movie_title;
END $$
DELIMITER ;

SELECT GetMovieTitleById(2);