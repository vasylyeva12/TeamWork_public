db.users.find(
    { country: { $in: ['China', 'USA'] } },
    {fullname: 1, _id: 0}
)