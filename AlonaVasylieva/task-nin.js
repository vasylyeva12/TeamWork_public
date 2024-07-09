db.users.find(
    { fullname: { $nin: ['China', 'USA'] } },
    { fullname: 1, _id: 0}
)