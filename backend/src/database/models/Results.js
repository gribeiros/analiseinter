  
const { Model, DataTypes } = require('sequelize');

class Results extends Model {
  static init(sequelize) {
    super.init({

    },
      {
        sequelize
      })
  }
  static associate(models) {

  }
}

module.exports = Results;