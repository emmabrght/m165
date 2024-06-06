db.author.find({ birthdate: { $gt: new Date("1980-01-01") } });

db.books.find({
  $or: [{ publishedYear: { $lt: 2017 } }, { publishedYear: { $gt: 2020 } }],
});

db.author.find({
  $and: [{ nationality: "American" }, { birthdate: { $gt: new Date("1960-01-01") } } ],
});

db.genre.find({ name: { $regex: "a", $options: "i" } });

db.books.find({}, { _id: "665dcc6e431c07cd693cf0a6", title: "The Love Hypothesis", author_id: "665dcc6e431c07cd693cf0a3" });

db.books.find({}, { name: "The Cruel Prince" });
