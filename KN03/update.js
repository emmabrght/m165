
db.author.updateOne(
    { _id: ObjectId("665dcc6e431c07cd693cf0a4") },
    { $set: { name: "Another author" } }
  );
  
  db.books.updateMany(
    {
      $or: [
        { publish_date: { $lt: new Date("2021-01-01") } },
        { author_id: ObjectId("665dcc6e431c07cd693cf0a5") },
      ],
    },
    { $set: { publish_date: new Date("2024-01-01") } }
  );
  
  db.genre.replaceOne(
    { _id: ObjectId("665dcc6e431c07cd693cf0ab") },
    { _id: ObjectId("665dcc6e431c07cd693cf0ab"), name: "Fiction but newer" }
  );
  