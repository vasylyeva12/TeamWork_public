db.users.deleteMany(
  { country: { $in: ['China', 'Brazil'] }, is_blocked: { $ne: true }, balance: { $gte: 0 } },
  { _id: 0 }
)