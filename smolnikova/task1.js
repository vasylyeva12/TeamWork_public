db.videos.aggregate([
    {// на входе коллeкция
     $match: { duration_secs: { $lt: 120*60}}
     // на выходе ролики до 2 часов
        },
    {
     $count: 'total_videos'
     }   // общее количество роликов до 2 часов
])