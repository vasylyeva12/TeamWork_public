-- Вывести общее ко-во активных постов для каждого автора, у которых их до 100 (не вкл.), в порядке убывания (по ко-ву постов)
-- проекция: имя_автора, ко-во_постов



SELECT
	users.fullname,
  COUNT(*) AS total_posts
FROM posts
JOIN posts ON users.id = posts.author_id
GROUP BY posts.author_id
HAVING total_posts < 100
ORDER BY total_posts DESC