  
const { Model, DataTypes } = require('sequelize');

class Person extends Model {
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

module.exports = Person;