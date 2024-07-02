db.users.countDocuments(
    {
        country: { $in: ['Germany', 'USA'] },
        balance: { $gte: 10, $lte: 1000 },
        is_blocked: {$ne: true}
    }
)