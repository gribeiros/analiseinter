'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mminfinito', {
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
      ro: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.FLOAT,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mminfinito');
  }
};
