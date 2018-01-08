'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    status: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  status.associate = (models) => {
    //status.BelongsTo(models.user, { foreignKey: 'uid' });
  }

  return status;
};