DELIMITER $$
CREATE TRIGGER OnInsertMovie
BEFORE INSERT ON BeeMovies.movies
FOR EACH ROW 
BEGIN
SET NEW.release_year = YEAR(now());
END $$

CREATE TRIGGER OnInsertMovieGetId
AFTER INSERT ON BeeMovies.movies
FOR EACH ROW 
BEGIN
INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
VALUES (NEW.movie_id, 'INSERT', now());
END $$
DELIMITER ;