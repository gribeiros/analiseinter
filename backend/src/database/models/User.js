const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.NUMBER,
        allowNull: false,
      }
    },
      {
        sequelize,
        tableName: 'user'
      })
  }
  static associate(models) {

  }
}

module.exports = User;