SELECT movies.title, sales.rating AS Rating FROM Movies movies
INNER JOIN BoxOffice as sales
ON movies.id = sales.movie_id
ORDER BY Rating DESC;