db.tracks.find(
  { duration_secs: { $lte: 60 } }
)