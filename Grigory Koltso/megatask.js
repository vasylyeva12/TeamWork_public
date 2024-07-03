db.tracks.find(
    {duration_secs:{ $lte: 60 * 60}},
    {_id: 0, duration_secs:0}
)