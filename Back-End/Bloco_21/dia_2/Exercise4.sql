SELECT cinema.id, cinema.name, cinema.location, movies.title  FROM Theater AS cinema
LEFT JOIN Movies movies
ON cinema.id = movies.theater_id
ORDER BY cinema.name;
