-- Задача. Вывести товары, которые ни разу не заказывали


SELECT DISTINCT
    Products.ProductName
FROM Products
LEFT JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
WHERE
    OrderDetails.ProductID IS NULL;