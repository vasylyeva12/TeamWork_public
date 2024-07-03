db.tracks.find(
    {durations_secs: {$lt: 60}}
    )