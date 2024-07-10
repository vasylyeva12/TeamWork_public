// Задача. Добавить три товара в коллекцию 

db.products.insertMany([
    {
      title: "Product 1",
      price: 100,
      quantity: 10
    },
    {
      title: "Product 2",
      price: 200,
      quantity: 20
    },
    {
      title: "Product 3",
      price: 300,
      quantity: 30
    }
  ]);