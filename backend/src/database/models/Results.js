const { Model, DataTypes } = require('sequelize');

class Results extends Model {
  static init(sequelize) {
    super.init({

    },
      {
        sequelize,
        tableName: 'results'
      })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.belongsTo(models.Mm1, { foreignKey: 'mm1_id', as: 'mm1' })
    this.belongsTo(models.Mmmoneb, { foreignKey: 'mm1b_id', as: 'mmm1b' })
    this.belongsTo(models.Mm1k, { foreignKey: 'mm1k_id', as: 'mm1k' })
    this.belongsTo(models.Mminfinito, { foreignKey: 'mminfinito_id', as: 'mminfinito' })
    this.belongsTo(models.Mminfinitok, { foreignKey: 'mminfinitok_id', as: 'mminfinitok' })
    this.belongsTo(models.Mmm, { foreignKey: 'mmm_id', as: 'mmm' })
    this.belongsTo(models.Mmmb, { foreignKey: 'mmmb_id', as: 'mmmb' })
  }
}

module.exports = Results;