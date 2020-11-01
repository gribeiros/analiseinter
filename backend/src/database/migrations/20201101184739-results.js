'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('results', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'user', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      mm1: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mm1', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mm1b: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mm1b', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mm1k: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mm1k', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mminfinitok: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mminfinitok', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mminfinito: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mminfinito', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mmm: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mmm', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
      ,
      mmmb: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'mmmb', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('results');
  }
};
