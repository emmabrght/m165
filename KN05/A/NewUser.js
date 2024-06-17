use m165

db.createUser({
  user: "user1",
  pwd: "1234",
  roles: [{ role: "read", db: "m165" }]
})

use admin

db.createUser({
  user: "user2",
  pwd: "1234",
  roles: [{ role: "readWrite", db: "m165" }]
})
