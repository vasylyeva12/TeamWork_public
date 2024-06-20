db.videos.aggregate([
    // вход: коллекция videos
    { $match: { duration_secs: { $lt: 2 * 60 * 60 } } },
    // выход: все видео продолжительностью до 2 часов
    { $count: 'total videos' }
    // выход: количество видео, поступивших на вход
])


db.videos.countDocuments(
    { duration_secs: { $lt: 2 * 60 * 60 } },
)