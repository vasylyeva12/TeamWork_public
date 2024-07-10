db.users.deleteMany(
  { country: { $in: ['China', 'USA'] }, is_blocked: true, balance: { $lt: 0 } }
)