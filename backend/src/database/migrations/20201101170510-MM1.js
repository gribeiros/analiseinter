'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mm1', {
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
      pn: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      p_zero: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      cmu: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      p_fila: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enw: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      ens: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
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
    return queryInterface.dropTable('mm1');
  }
};
