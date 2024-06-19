SELECT * 
FROM Products
LEFT JOIN OrderDetails ON Products.ProductID = OrderDetails.ProductID
WHERE
OrderDetails.OrderID IS NULL