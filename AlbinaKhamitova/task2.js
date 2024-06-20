db.videos.aggregate([{}])(
    //input: collection of videos;
    {$match:{duration_secs:{$lt:120 * 60}}},
    //ouput: collection of videos filtered by duration
    {$count: "total_videos"}
    )
    //output: counted number of filtered videos