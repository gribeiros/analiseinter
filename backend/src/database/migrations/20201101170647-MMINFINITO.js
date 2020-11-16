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
        type: Sequelize.STRING,
        allowNull: false,
      },
      pn: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      ro: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      ,
      es: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mminfinito');
  }
};
