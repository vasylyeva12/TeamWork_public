// Задача. Вывести имена всех юзеров, кроме тех, что из China и USA

db.users.find(
    { country: { $nin: ["China", "USA"] } },
     { fullname: 1, _id: 0 });