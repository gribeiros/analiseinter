const { Model, DataTypes } = require('sequelize');

class Mminfinitok extends Model {
    static init(sequelize) {
        super.init({
            lambdan: DataTypes.STRING,
            un: DataTypes.STRING,
            ro: DataTypes.STRING,
            en: DataTypes.STRING
        },
            {
                sequelize,
                tableName: 'mminfinitok'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mminfinitok_id', as: 'results_mminfinitok_id' })

    }
}

module.exports = Mminfinitok;