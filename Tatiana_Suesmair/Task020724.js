db.users.updateMany(
   { country: { $nin: ['China', 'France'] } }, // filter
   {
        $inc: { balance: 100 },
        $set: { is_blocked: true }
    } // action
)