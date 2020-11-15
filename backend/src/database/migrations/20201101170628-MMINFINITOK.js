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
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      un: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      ro: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mminfinitok');
  }
};
