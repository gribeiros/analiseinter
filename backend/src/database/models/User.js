const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      login: DataTypes.STRING,
      password: DataTypes.STRING,
    },
      {
        sequelize
      })
  }
  static associate(models) {

  }
}

module.exports = User;