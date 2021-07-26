SELECT box.rating, movies.year FROM BoxOffice box
INNER JOIN Movies movies
ON box.movie_id = movies.id
WHERE movies.year > 2009;

-- cost 2.63

SELECT box.rating FROM BoxOffice box
WHERE (
SELECT `year` FROM Movies as movies
WHERE movies.id = box.movie_id
) > 2009;

-- cost 1.35