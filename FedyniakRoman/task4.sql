-- Задача. Снять с публикации пост с id 1

UPDATE posts
SET is_published = FALSE
WHERE id = 1;