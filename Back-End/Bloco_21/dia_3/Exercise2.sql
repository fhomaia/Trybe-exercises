DELIMITER $$
CREATE TRIGGER OnUpdateMovie
BEFORE UPDATE ON BeeMovies.movies
FOR EACH ROW
BEGIN
IF OLD.ticket_price > NEW.ticket_price
THEN 
SET NEW.ticket_price_estimation = 'Increasing';
ELSE
SET NEW.ticket_price_estimation = 'Decreasing';
END IF;
INSERT INTO BeeMovies.movies_logs(movie_id, executed_action, log_date)
VALUES(NEW.movie_id, 'UPDATE', now());
END $$
DELIMITER ;