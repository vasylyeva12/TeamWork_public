db.users.deleteMany(
  { country: { $in: ['China', 'Brazil'] }, is_blocked: { $ne: true }, balance: { $lt: 0 } },
  { _id: 0 }
)