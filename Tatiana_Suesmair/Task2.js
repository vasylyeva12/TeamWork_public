db.users.aggregate([
    {
        $lookup: {
            from: 'videos',
            localField: '_id',
            foreignField: 'author_id',
            as: 'videos'
        }
    },
     { $sample: { size: 2 } },
       {
        $project: {
            _id: 0,
            fullname: 1
        }
    }
])
