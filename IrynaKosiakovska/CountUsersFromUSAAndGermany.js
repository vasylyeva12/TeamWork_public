db.users.countDocuments(
    {
        country: { $in: ['USA', 'Germany '] },
        is_blocked: { $ne: true },
        balance: { $gte: 10, $lte: 1000 }
    }
)