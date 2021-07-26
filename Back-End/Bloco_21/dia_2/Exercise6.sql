SELECT movies.title FROM Movies as movies
INNER JOIN BoxOffice as rating
ON rating.movie_id = movies.id
WHERE rating.rating > 7.5;
-- cost 2,63

SELECT movies.title FROM Movies movies
WHERE (
SELECT rating 
FROM BoxOffice Box
WHERE Box.movie_id = movies.id
) > 7.5;

-- cost 1,35
