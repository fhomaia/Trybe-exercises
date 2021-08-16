DELIMITER $$
CREATE TRIGGER OnDeleteMovie
BEFORE DELETE ON BeeMovies.movies
FOR EACH ROW
BEGIN
INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
VALUES(OLD.movie_id, 'DELETE', now());
END $$
DELIMITER ;