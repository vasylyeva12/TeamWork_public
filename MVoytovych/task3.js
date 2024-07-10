//Вывести данные о двух случайных видео-роликах, включая данные об их авторах

db.videos.aggregate([
    {
        $sample: { size: 2 }
    },
    {
        $lookup: {
            from: 'users', 
            localField: 'author_id', 
            foreignField: '_id', 
            as: 'authors' 
        }
    }
])
