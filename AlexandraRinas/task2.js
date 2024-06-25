db.users.aggregate([
    {
        $sort: { balance: -1 }
    },
    {
        $limit: 2
    },
    {
        $project: { fullname: 1, balance: 1, _id: 0 }
    }
])