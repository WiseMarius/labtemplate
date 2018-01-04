'use strict';
module.exports = (sequelize, DataTypes) => {
  var photo = sequelize.define('photo', {
      photo:DataTypes.STRING,
      rating:DataTypes.INTEGER    
  }, {
    classMethods: {
      associate: function(models) {
        models.photo.belongsTo(models.user)
      }
    }
  });
  return photo;
};