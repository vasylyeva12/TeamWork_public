db.users.updateMany(
    { country: { $ne: 'China'} }, // filter
    {
        $inc: { balance: 100 },
        $unset: { is_blocked: true }
    } // action


)