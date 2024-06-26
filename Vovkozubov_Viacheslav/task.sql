-- Задача. Снять с публикации пост с id 1
UPDATE posts
SET is_published = 0
WHERE id = 1;