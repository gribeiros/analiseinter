const { Model, DataTypes } = require('sequelize');

class Mm1k extends Model {
    static init(sequelize) {
        super.init({
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p_zero: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            enw: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            lambdan: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            uti: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            lambdal: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            ew: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            pn: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            enw: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            }
        },
            {
                sequelize,
                tableName: 'mm1k',
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mm1k_id', as: 'results_mm1k_id' })
    }
}

module.exports = Mm1k;