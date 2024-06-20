db.videos.aggregate([
    { $match: { // на входе коллукция
        duration_secs: { $lt: 120*60}}},
        // на выходе ролики до 2 часов
    {$count: 'total_videos'}
        // общее количество роликов до 2 часов
])