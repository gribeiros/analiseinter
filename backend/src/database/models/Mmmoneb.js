const { Model, DataTypes } = require('sequelize');

class Mmmoneb extends Model {
    static init(sequelize) {
        super.init({
            lamb_n_m: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            pb: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            lamb1: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p_zero: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p_n: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            u1: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en_w: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            es: {
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
                tableName: 'mm1b'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mm1b_id', as: 'results_mm1b_id' })

    }
}

module.exports = Mmmoneb;