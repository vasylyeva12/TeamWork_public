// Задача. Вывести имена всех юзеров, кроме тех, что из China и USA

db.users.find(
    {
        country: { $nin: ['China', 'USA'] }
    },
    {
        _id: 0,
        fullname: 1
    }
)