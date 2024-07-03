db.tracks.find(
    { duration_secs: { $lt: 60 * 60 } }
)