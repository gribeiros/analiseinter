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
        type: Sequelize.STRING,
        allowNull: false,
      },
      p2: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      p1: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      c: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      e: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      p_fila: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      enn: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      ew: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mmm');
  }
};
