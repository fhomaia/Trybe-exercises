SELECT movies.id, movies.title, sales.international_sales, sales.domestic_sales FROM Movies movies
INNER JOIN BoxOffice as sales
ON movies.id = sales.movie_id;