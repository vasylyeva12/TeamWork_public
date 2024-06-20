db.videos.aggregate([
{//вход все ролики
     $match: {
            duration_secs: { $lt: 120 * 60 }}},

//выход ролики до 2ч продолжительностью

       { $count: 'total_videos'
    }
   //выход кол-во роликов до 2 ч длинной

])

