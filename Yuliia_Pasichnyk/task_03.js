db.users.aggregate([
    {
        $sort: {
            баланс_юзера: -1
        }
    },
    {
        $limit: 2
    },
    {
        $project: {
            _id: 0,
            имя_юзера: 1,
            баланс_юзера: 1
        }
    }
])