'use strict';
module.exports = (sequelize, DataTypes) => {
  var booksdb_test = sequelize.define('booksdb_test', {
    author: DataTypes.STRING,
    bookid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return booksdb_test;
};