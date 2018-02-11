'use strict';
module.exports = (sequelize, DataTypes) => {
  var BooksByParthTheGre = sequelize.define('BooksByParthTheGre', {
    bookId: DataTypes.STRING,
    bookName: DataTypes.STRING,
    bookAuthor: DataTypes.STRING,
    bookRating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BooksByParthTheGre;
};