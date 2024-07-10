db.users.deleteMany({
    is_blocked: true,
    country: { $in: ["China", "Brazil"] },
    balance: { $gt: 0 }
  });