-- Задача. Вывести фамилии менеджеров, у которых есть заказы, исп. механизм вложенных запросов

SELECT
	LastName
FROM Employees

WHERE
	EmployeeID IN (
    SELECT DISTINCT EmployeeID
    FROM Orders
	)

   