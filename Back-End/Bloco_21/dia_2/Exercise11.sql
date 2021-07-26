SELECT movieA.title, movieA.length_minutes, movieA.director FROM Movies as movieA, Movies as movieB
WHERE  movieA.director = movieB.director;
