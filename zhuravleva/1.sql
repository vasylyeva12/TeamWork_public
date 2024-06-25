SELECT * FROM Products
                  LEFT JOIN OrderDetails ON OrderDetails.ProductID = Products.ProductID
WHERE OrderDetails.ProductID IS NULL