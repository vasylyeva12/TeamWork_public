db.users.updateMany(
   { country: { $nin: ['China', 'France'] } }, // filter
    {
        $inc: { balance: 100 },
        $unset: { is_blocked: true }
    } // action


)