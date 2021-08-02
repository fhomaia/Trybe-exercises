CREATE VIEW address_info AS
SELECT a.address_id , a.address , a.district , c.city_id, c.city FROM sakila.city c
INNER JOIN sakila.address a ON a.city_id = c.city_id
ORDER BY c.city;
