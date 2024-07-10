// Задача. Для всех товаров с ценой до 1000 EUR (не вкл.) уменьшить цену на 15%, а также уменьшить ко-во на 1 ед.
db.products.updateMany(
    {
        price: { $lt: 1000 }
    },
    {
        $mul: { price: 0.85 },
        $inc: { quantity: -1 }
    }
)