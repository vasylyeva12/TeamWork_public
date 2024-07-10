// Задача. Добавить три товара в коллекцию products
db.products.insertMany(
    [
        {
            title: "title 2",price: 5.4,quantity: 2
        },
        {
            title: "title 1",price: 4.4,quantity: 1
        },
        {
            title: "title 3",price: 2.2, quantity: 3
        }
    ]
)