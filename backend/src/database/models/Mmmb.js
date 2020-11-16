const { Model, DataTypes } = require('sequelize');

class Mmmb extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.STRING,
            p0: DataTypes.STRING,
            pb: DataTypes.STRING,
            pn: DataTypes.STRING,
            loss: DataTypes.STRING,
            lambda_l: DataTypes.STRING,
            en: DataTypes.STRING,
            enw: DataTypes.STRING,
            es: DataTypes.STRING,
            ew: DataTypes.STRING
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