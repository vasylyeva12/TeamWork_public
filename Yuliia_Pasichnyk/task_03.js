db.users.aggregate([
    {
        $sort: {
            balance: -1
        }
    },
    {
        $limit: 2
    },
    {
        $project: {
            _id: 0,
            fullname: 1,
            balance: 1
        }
    }
])