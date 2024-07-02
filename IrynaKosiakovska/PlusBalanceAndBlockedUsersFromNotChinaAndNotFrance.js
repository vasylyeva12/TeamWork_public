db.users.updateMany(
    { country: { $nin: ['China', 'France'] } },
    {
        $inc: { balance: 100 },
        $set: { is_blocked: true }
    }
)