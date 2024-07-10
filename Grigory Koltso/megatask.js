<<<<<<< HEAD
db.products.insertMany(
    [
        {
            title: "pen",
            price: 104,
            quantity: 5
        },
        {
            title: "cap",
            price: 200,
            quantity: 2
        },
        {
            title: "ball",
            price: 300,
            quantity: 15
        }
    ]
=======
db.tracks.find(
    {duration_secs:{ $lte: 60 * 60}},
    {_id: 0, duration_secs:0}
>>>>>>> 8389b16826fcfb2c2fcaaed2192b8e50f4408ebe
)