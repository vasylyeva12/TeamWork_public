-- **Задача. Вывести общее ко-во активных постов для каждого автора**
-- проекция: `имя_автора`, `ко-во_постов`

SELECT 
users.fullname,
count(*) AS total_posts
FROM posts
Left JOIN Users ON posts.author_id = users.id
WHERE
is_published = true
Group BY 
users.fullname