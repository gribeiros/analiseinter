const { Model, DataTypes } = require('sequelize');

class Mmmb extends Model {
    static init(sequelize) {
        super.init({
            ro: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            p0: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            pb: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            pn: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            loss: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            lambda_l: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            en: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            enw: {
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
                tableName: 'mmmb'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mmmb_id', as: 'results_mmmb_id' })

    }
}

module.exports = Mmmb;