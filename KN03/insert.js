var genre1 = new ObjectId();
var genre2 = new ObjectId();
var genre3 = new ObjectId();

var books1 = new ObjectId();
var books2 = new ObjectId();
var books3 = new ObjectId();

var author1 = new ObjectId();
var author2 = new ObjectId();
var author3 = new ObjectId();

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

db.books.insertMany([
    {
        _id: books1,
        name: "The Love Hypothesis",
        authorId: author1,
        genre: [genre2],
        rating: [
            { bookId: books1, rating: 4.5 },
            { bookId: books1, rating: 4.0 }
        ],
        publishedYear: 2021
    },
    {
        _id: books2,
        name: "The Cruel Prince",
        authorId: author2,
        genre: [genre1],
        rating: [
            { bookId: books2, rating: 4.8 },
            { bookId: books2, rating: 4.7 }
        ],
        publishedYear: 2018
    },
    {
        _id: books3,
        name: "Scythe",
        authorId: author3,
        genre: [genre3],
        rating: [
            { bookId: books3, rating: 4.9 },
            { bookId: books3, rating: 4.6 }
        ],
        publishedYear: 2016
    }
]);

db.author.insertMany([
    {
        _id: author1,
        name: "Ali Hazelwood",
        nationality: "Italian",
        birthdate: new Date("1989-11-12"),
        books: [books1]
    },
    {
        _id: author2,
        name: "Holly Black",
        nationality: "American",
        birthdate: new Date("1971-10-11"),
        books: [books2]
    },
    {
        _id: author3,
        name: "Neal Shusterman",
        nationality: "American",
        birthdate: new Date("1962-12-11"),
        books: [books3]
    }
]);

