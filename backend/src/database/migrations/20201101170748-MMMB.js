'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mmmb', {
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
      p0: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      pb: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      pn: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      loss: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      lambda_l: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      enw: {
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
    return queryInterface.dropTable('mmmb');
  }
};
