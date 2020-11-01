'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mm1b', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: 'mm1b',
        allowNull: false,
      },
      lambNM: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      pb: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      lamb1: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      pZero: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      pN: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      u1: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enW: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      ew: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm1b');
  }
};
