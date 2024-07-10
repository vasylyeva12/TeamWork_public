db.videos.aggregate([
    {
        $lookup: {
            from: 'users',
            localField: 'author_id',
            foreignField: '_id',
            as: 'author'
        }
    },
    { $sample: { size: 2 } },
    {
        $project: {
            author: 1, _id: 0
        }
    }
])