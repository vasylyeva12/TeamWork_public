-- Задача. Вывести товары, которые ни разу не заказывали
SELECT * 
FROM Products
Left Join OrderDetails On OrderDetails.ProductID = Products.ProductID
WHERE OrderDetails.OrderID IS NULL