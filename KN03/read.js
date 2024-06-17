db.author.find({ birthdate: { $gt: new Date("1980-01-01") } });

db.books.find({
  $or: [{ publishedYear: { $lt: 2017 } }, { publishedYear: { $gt: 2020 } }],
});

db.author.find({
  $and: [{ nationality: "American" }, { birthdate: { $gt: new Date("1960-01-01") } } ],
});

// i = case insensitive
db.genre.find({ name: { $regex: "a*", $options: "i" } });

db.books.find({}, { title: 1 });

db.books.find({}, { title: 1, _id: 0 });

db.books.find({}, { name: "The Cruel Prince" });