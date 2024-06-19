--https://western-appeal-39b.notion.site/GenTech-Git-Summary-May-29-2024-97dcabaa9fb64f87b2853650e719058c

SELECT DISTINCT
Products.ProductName
FROM Products
left join OrderDetails 
on Products.ProductID = OrderDetails.ProductID
where OrderDetails.ProductID is NULL