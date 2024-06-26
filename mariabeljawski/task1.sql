-- Задача. Снять с публикации пост с id 1
Update posts
set is_published = False
Where id = 1