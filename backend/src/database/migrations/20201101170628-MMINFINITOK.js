'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mminfinitok', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      lambdan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      un: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      ro: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      eN: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mminfinitok');
  }
};
