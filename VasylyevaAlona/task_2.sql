select
fullname
from users
where id  in (select id from posts);