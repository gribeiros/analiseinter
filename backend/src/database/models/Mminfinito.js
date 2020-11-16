const { Model, DataTypes } = require('sequelize');

class Mminfinito extends Model {
    static init(sequelize) {
        super.init({
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            pn: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            es: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            }
        },
            {
                sequelize,
                tableName: 'mminfinito'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mminfinito_id', as: 'results_mminfinito_id' })

    }
}

module.exports = Mminfinito;