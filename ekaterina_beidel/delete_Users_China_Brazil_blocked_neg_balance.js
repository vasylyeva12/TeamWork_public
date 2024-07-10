db.users.deleteMany(
    {
        country: { $in: ['China', 'Brazil'] },
        balance: { $lt: 0 },
        is_blocked: true
    }

)