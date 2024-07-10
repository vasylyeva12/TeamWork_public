SELECT fullname, count(*) AS total_posts
from posts
         JOIN social_network.users u on u.id = posts.author_id
WHERE is_published is true
GROUP BY u.id
HAVING total_posts < 100
ORDER BY total_posts DESC;