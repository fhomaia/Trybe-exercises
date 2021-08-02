ALTER TABLE category ADD FULLTEXT INDEX category_name(name);
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- cost 0.35
DROP INDEX  category_name ON sakila.category ;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- cost 1.85