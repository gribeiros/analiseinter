  
const { Model, DataTypes } = require('sequelize');

class results extends Model {
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

module.exports = results;