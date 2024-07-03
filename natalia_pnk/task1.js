// Вывести названия треков с продолжительностью до 1 ч (вкл.)


db.tracks.find(
  {duration_secs: {$lte: 60 * 60}},
  {title: 1, _id: 0}
  )