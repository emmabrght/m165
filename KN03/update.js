
db.author.updateOne(
    { _id: ObjectId("665dcc6e431c07cd693cf0a4") },
    { $set: { name: "Another author" } }
  );
  
  db.books.updateMany(
    {
      $or: [
        { publishedYear: { $lt: 2018 } },
        { authorId: ObjectId("665dcc6e431c07cd693cf0a5") },
      ],
    },
    { $set: { publishedYear: 2017 } }
  );
  
  db.genre.replaceOne(
    { _id: ObjectId("665dcc6e431c07cd693cf0ab") },
    { _id: ObjectId("665dcc6e431c07cd693cf0ab"), name: "Fiction but newer" }
  );
  