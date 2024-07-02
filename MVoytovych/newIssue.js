db.users.aggregate([
  
    {
      $lookup: {
        from: "post_reactions", 
        localField: "_id",
        foreignField: "author_id",
        as: "user_reactions"
      }
    },
  
    {
      $match: {
        user_reactions: { $ne: [] }, 
        balance: { $gt: 100, $lt: 2000 } 
      }
    },
   
    {
      $project: {
        _id: 0,
        fullname: 1
      }
    }
  ]);