const { Model, DataTypes } = require('sequelize');

class Mm1 extends Model {
    static init(sequelize) {
        super.init({
            usage: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            zero_user: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            n_user: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            more_users: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            more_than_one_users: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            resposta: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            waiting: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            media_user1: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
            req_fila: {
                type: DataTypes.STRING,
                defaultValue: "Infinity"
            },
        },
            {
                sequelize,
                tableName: 'mm1'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mm1_id', as: 'results_mm1_id' })

    }
}

module.exports = Mm1;