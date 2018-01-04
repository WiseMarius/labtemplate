'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        surname: {
          allowNull: false,
          type: Sequelize.STRING
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
      queryInterface.createTable('status', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        status:
          {
            allowNull: false,
            type: Sequelize.STRING
          },
        rating:
          {
            type: Sequelize.INTEGER
          },
        uid: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key:'id' }
        }
      })
    }).then(function () {
      queryInterface.createTable('photo', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        photo:
          {
            allowNull: false,
            type: Sequelize.STRING
          },
        rating:
          {
            type: Sequelize.INTEGER
          },
        uid: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key:'id' }
        }
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}