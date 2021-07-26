SELECT movies.title, box.rating FROM Movies movies
INNER JOIN BoxOffice box
WHERE box.rating > 8;
