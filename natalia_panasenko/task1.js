db.users.find(
{ 
country: {$nin: ['China', 'USA']}
},
{fullname: 1, _id: 0}
)