const { Model, DataTypes } = require('sequelize');

class Mm1 extends Model {
    static init(sequelize) {
        super.init({
            usage: DataTypes.STRING,
            zero_user: DataTypes.STRING,
            n_user: DataTypes.STRING,
            more_users: DataTypes.STRING,
            more_than_one_users: DataTypes.STRING,
            resposta: DataTypes.STRING,
            waiting: DataTypes.STRING,
            media_user1: DataTypes.STRING,
            req_fila: DataTypes.STRING,
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