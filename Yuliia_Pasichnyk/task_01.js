db.videos.aggregate([
    {  // все видео-ролики
        $match: { duration_secs: { $gte: 2 * 60 * 60} }  
    },  
    { 
       $count: "total videos"
     }  // видео-ролики с продолжительностью  менее 2 часов
])