DELIMITER $$
CREATE PROCEDURE FindClientStatus( IN client_email VARCHAR(300) , OUT `status` BOOL)
BEGIN
SET `status` = (
	SELECT active
	FROM sakila.customer
	WHERE email = client_email
);
END $$
DELIMITER ;


CALL FindClientStatus('SANDRA.MARTIN@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;
SELECT * FROM customer