const { Model, DataTypes } = require('sequelize');

class Mmmb extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.FLOAT,
            p0: DataTypes.FLOAT,
            pb: DataTypes.FLOAT,
            pn: DataTypes.FLOAT,
            loss: DataTypes.FLOAT,
            lambda_l: DataTypes.FLOAT,
            en: DataTypes.FLOAT,
            enw: DataTypes.FLOAT,
            es: DataTypes.FLOAT,
            ew: DataTypes.FLOAT
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