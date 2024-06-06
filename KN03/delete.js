db.books.deleteOne({"_id": ObjectId("665dc5fe431c07cd693cf08b")})

db.author.deleteMany({ $or: [ { _id: ObjectId("665dc5fd431c07cd693cf088") }, { _id: ObjectId("665dc5fd431c07cd693cf08a") } ] })