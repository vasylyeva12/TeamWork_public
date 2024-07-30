db.products.updateMany(
    { price: { $gte: 100 } }, 
    { $inc: { price: 1.035 } }
);
