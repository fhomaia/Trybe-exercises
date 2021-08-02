CREATE VIEW movies_languages AS
SELECT f.title, f.language_id , l.name FROM sakila.film f
INNER JOIN sakila.language l ON l.language_id = f.language_id;
