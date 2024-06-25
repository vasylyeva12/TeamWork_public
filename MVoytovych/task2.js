// Вывести данные двух юзеров с самым максимальным балансом//
//проекция: имя_юзера, баланс_юзера//

db.users.aggregate([

    {
        $sort: { balance: -1 }
    },

    {
        $limit: 2
    },

    {
        $project: {
            _id: 0, fullname: 1, balance: 1
        }
    }
]);