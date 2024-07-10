db.users.deleteMany(
  { country: { $in: ['China', 'Brazil'] }, is_blocked: { $ne: true }, balance: { $lt: 0 } }
)