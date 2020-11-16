const { Model, DataTypes } = require('sequelize');

class Mmm extends Model {
    static init(sequelize) {
        super.init({
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p2: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p1: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            c: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            e: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p_fila: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            es: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            enn: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            ew: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            }
        },
            {
                sequelize,
                tableName: 'mmm'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mmm_id', as: 'results_mmm_id' })

    }
}

module.exports = Mmm;