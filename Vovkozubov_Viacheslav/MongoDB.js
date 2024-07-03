// Задача. Вывести юзеров не из Germany
// (проекция: все поля, кроме страны)
db.users.find(
    { country: { $ne: 'Germany' } },
    { country: 0 }
)