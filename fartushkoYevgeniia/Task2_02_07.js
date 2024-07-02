db.users.countDocuments(
    {
        country: { $nin: ['Germany', 'USA'] },
        balance: { $gte: 10, $lte: 1000 },
        is_blocked: {$ne: true}
    }
)