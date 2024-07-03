db.tracks.find(
  { duration_secs: { $lte: 3600 } },
  { _id: 0, title: 1 }
)