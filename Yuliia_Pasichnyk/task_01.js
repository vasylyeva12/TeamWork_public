db.videos.aggregate([
    {  // все видео-ролики
        $match: { duration_secs: { $gte: 2 * 60 * 60} }  
    },  // видео-ролики с продолжительностью  менее 2 часов
    { 
       $count: "total videos"
     }  //колличество роликов до 2 часов
])