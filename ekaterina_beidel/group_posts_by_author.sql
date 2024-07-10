SELECT author_id, count(*) AS total_posts
from posts
         JOIN social_network.users on users.id = posts.author_id
WHERE is_published is true
GROUP BY users.id
HAVING total_posts < 100
ORDER BY total_posts DESC;
