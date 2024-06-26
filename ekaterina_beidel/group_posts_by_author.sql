SELECT
    author_id, COUNT(*) AS total_posts
FROM
    posts
GROUP BY
    author_id
