'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mm1k', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: 'mm1k',
        allowNull: false,
      },
      ro: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      p_zero: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enw: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      lambdan: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      uti: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      lambdal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      ew: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      pn: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      enw: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm1k');
  }
};
