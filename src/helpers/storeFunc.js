const getBooksWithRating = require('../helpers/getBooksWithRating');
const Models = require('../../models');

const storeFunc = () => {
  getBooksWithRating().then((bookArray) => {
    console.log(typeof bookArray[0].Author);
    const newBookArray = bookArray.map((book) => {
      const newBook = {
        author: book.Author,
        bookid: book.id,
        name: book.Name,
        rating: book.rating,
      };
      return newBook;
    });
    Models.booksdb.destroy({ truncate: true });
    Models.booksdb.bulkCreate(newBookArray).then(() => console.log('database updated'));
  });
};

module.exports = storeFunc;

