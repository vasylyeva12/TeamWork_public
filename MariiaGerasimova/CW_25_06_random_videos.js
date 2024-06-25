db.videos.aggregate([
  {
    "$sample": {
      "size": 2
    }
  },
  {
    "$lookup": {
      "from": "users",
      "localField": "author_id",
      "foreignField": "_id",
      "as": "authors"
    }
  },

  {
    "$project": {
      "_id": 0,
      "title": 1,
      "description": 1,
      "author.name": 1,
      "author.email": 1
    }
  }
])