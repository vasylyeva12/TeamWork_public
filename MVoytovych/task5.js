db.posts.aggregate([
   
    { $sample: { size: 2 } },
    { $project: { title: 1, _id: 0 } }
])