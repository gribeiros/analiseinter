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
      lamb_n_m: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pb: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      lamb1: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      p_zero: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      p_n: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      u1: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      en_w: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      es: {
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
    return queryInterface.dropTable('mm1b');
  }
};
