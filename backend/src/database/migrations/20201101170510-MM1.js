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
      usage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zero_user: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      n_user: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      more_users: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      more_than_one_users: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      resposta: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      waiting: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      media_user1: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      req_fila: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm1');
  }
};
