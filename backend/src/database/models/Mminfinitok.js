const { Model, DataTypes } = require('sequelize');

class Mminfinitok extends Model {
    static init(sequelize) {
        super.init({
            lambdan: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            un: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            }
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

