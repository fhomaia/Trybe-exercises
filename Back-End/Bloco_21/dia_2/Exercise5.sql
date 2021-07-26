SELECT 
	movies.id, movies.title, movies.director, movies.year, movies.length_minutes, movies.theater_id,
    cinema.name
FROM 
	Theater AS cinema
RIGHT JOIN Movies movies
ON cinema.id = movies.theater_id
ORDER BY movies.title;