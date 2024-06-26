-- **Задача. Вывести общее ко-во активных постов для каждого автора, у которых их до 100 (не вкл.), в порядке убывания (по**

-- -- проекция: имя_автора, ко-во_постов

SELECT 
users.fullname,
count(*) AS total_posts
FROM posts
Left JOIN Users ON posts.author_id = users.id
WHERE
is_published = true
Group BY 
author_id
HAVING
total_posts < 100
order by
total_posts DESC