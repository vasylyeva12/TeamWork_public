-- Задача. Вывести названия и цены товаров, которые не были ни разу проданы

SELECT
	ProductName,
	Price
FROM Products

WHERE
	ProductID NOT IN (
    SELECT ProductID
    FROM OrderDetails
	)