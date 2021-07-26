SELECT movies.title, sales.international_sales + sales.domestic_sales AS `Total de Vendas` FROM Movies movies
INNER JOIN BoxOffice as sales
ON movies.id = sales.movie_id
WHERE sales.international_sales > sales.domestic_sales ;