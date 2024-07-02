db.users.aggregate([
    { $match: { balance: { $gt: 100, $lt: 2000 } } },
    {
        $lookup: {
            from: 'post_reactions',
            localField: '_id',
            foreignField: 'author_id',
            as: 'reactions'
        }
    },
    { $match: { reactions: { $ne: [] } } },
    { $project: { fullname: 1, _id: 0 } }
])