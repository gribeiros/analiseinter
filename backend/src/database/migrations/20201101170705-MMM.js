'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mmm', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ro: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      p2: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      p1: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      e: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      p_fila: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enn: {
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
    return queryInterface.dropTable('mmm');
  }
};
