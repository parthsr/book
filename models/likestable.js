'use strict';
module.exports = (sequelize, DataTypes) => {
  var likestable = sequelize.define('likestable', {
    bookid: DataTypes.INTEGER,
    likestatus: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return likestable;
};