'use strict';
module.exports = (sequelize, DataTypes) => {
  var status = sequelize.define('status', {
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.status.BelongsTo(models.user)
      }
    }
  });
  return status;
};