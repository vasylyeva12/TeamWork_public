//Задача. Добавить три товара в коллекцию products

db.products.insertMany([
    {
        title: "Product_1",
        price: 10.99,
        quantity: 100
    },
    {
        title: "Product_2",
        price: 15.49,
        quantity: 50
    },
    {
        title: "Product_3",
        price: 7.99,
        quantity: 200
    }
])