db.videos.aggregate([
   {
    $match: { duration_secs: { $lt: 120 * 60 } }
   },
   { 
      $count: 'total videos' 
   }
])