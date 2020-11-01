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
      name: {
        type: Sequelize.STRING,
        defaultValue: 'mmmb',
        allowNull: false,
      },
      ro: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      p0: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      pb: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      pn: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      loss: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      lambda_l: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enw: {
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
    return queryInterface.dropTable('mmmb');
  }
};
