SELECT cinema.name, cinema.location FROM Theater cinema
WHERE EXISTS ( 
SELECT * FROM Movies movies
WHERE cinema.id = movies.theater_id
);