// Задача. Удалить всех заблокированных юзеров из China и Brazil с отрицательным балансом

db.users.deleteMany({
  country: ["China", "Brazil"],
  balance: { $lt: 0 },
  is_blocked: true,
});
