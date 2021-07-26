SELECT movies.title, 
sales.domestic_sales + sales.international_sales as Profit,
movies.length_minutes
FROM Movies movies
INNER JOIN BoxOffice sales
ON sales.movie_id = movies.id
WHERE sales.domestic_sales + sales.international_sales >= 500000000
AND movies.length_minutes > 110;

SELECT movies.title FROM Movies movies
WHERE movies.id IN (
SELECT movie_id FROM BoxOffice as sales
WHERE sales.domestic_sales + sales.international_sales >= 500000000
)
AND movies.length_minutes > 110;