const { Model, DataTypes } = require('sequelize');

class Results extends Model {
  static init(sequelize) {
    super.init({

    },
      {
        sequelize,
        tableName:'results'
      })
  }
  static associate(models) {
  }
}

module.exports = Results;