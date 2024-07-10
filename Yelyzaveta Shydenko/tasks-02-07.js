db.users.updateMany(
  { country: { $nin: ["China", "France"] } },
  {
    $inc: { balance: 100 },
    $set: { is_blocked: true },
  }
);

db.users.countDocuments({
  country: { $in: ["Germany", "USA"] },
  balance: { $gte: 10, $lte: 1000 },
  is_blocked: {$ne: true},
});

