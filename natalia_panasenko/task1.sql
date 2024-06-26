-- Снять с публикации пост с id 1

UPDATE posts
SET is_published false
WHERE id = 1