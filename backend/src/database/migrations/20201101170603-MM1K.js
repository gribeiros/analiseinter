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
      ro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      p_zero: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      enw: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      lambdan: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      uti: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      lambdal: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      ew: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      en: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      pn: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      enw: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    },
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm1k');
  }
};
