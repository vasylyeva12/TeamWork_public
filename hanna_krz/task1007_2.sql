db.users.deleteMany(
	 {
        is_blocked: { $eq: true },
        country: { $eq: 'China' },
        country: { $eq: 'Brazil' },
        balance: { $lt: 0 }
    }
)