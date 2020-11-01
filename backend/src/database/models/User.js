const { Model, DataTypes } = require('sequelize');

class user extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
      {
        sequelize
      })
  }
  static associate(models) {

  }
}

module.exports = user;