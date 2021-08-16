DELIMITER $$
CREATE FUNCTION GetTotalPayments(client_id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE TotalPayments INT;
SELECT COUNT(*) FROM sakila.payment
WHERE customer_id = client_id INTO TotalPayments;
RETURN TotalPayments;
END $$
DELIMITER ;

SELECT GetTotalPayments(2);