var author1 = new ObjectId();
var author2 = new ObjectId();
var author3 = new ObjectId();

db.author.insertMany([
  {
    _id: author1,
    name: "Ali Hazelwood",
    nationality: "Italian",
    birthdate: new Date("1989-11-12")
  },
  {
    _id: author2,
    name: "Holly Black",
    nationality: "American",
    birthdate: new Date("1971-10-11")
  },
  {
    _id: author3,
    name: "Neal Shusterman",
    nationality: "American",
    birthdate: new Date("1962-12-11")
  }
]);

var books1 = new ObjectId();
var books2 = new ObjectId();
var books3 = new ObjectId();

db.books.insertMany([
    {
        _id: books1,
        title: "The Love Hypothesis",
        authorId: author1,
        genre: "Romance",
        publishedYear: 2021
    },
    {
        _id: books2,
        title: "The Cruel Prince",
        authorId: author2,
        genre: "Fantasy",
        publishedYear: 2018
    },
    {
        _id: books3,
        title: "Scythe",
        authorId: author3,
        genre: "Fiction",
        publishedYear: 2016
    }
]);

var genre1 = new ObjectId();
var genre2 = new ObjectId();
var genre3 = new ObjectId();

db.genre.insertOne({
    _id: genre1,
    name: "Fantasy"
});

db.genre.insertOne({
    _id: genre2,
    name: "Romance"
});

db.genre.insertOne({
    _id: genre3,
    name: "Fiction"
});
