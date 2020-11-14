const { Model, DataTypes } = require('sequelize');

class Mmmoneb extends Model {
    static init(sequelize) {
        super.init({
            lamb_n_m: DataTypes.FLOAT,
            pb: DataTypes.FLOAT,
            lamb1: DataTypes.FLOAT,
            p_zero: DataTypes.FLOAT,
            p_n: DataTypes.FLOAT,
            u1: DataTypes.FLOAT,
            en: DataTypes.FLOAT,
            en_w: DataTypes.FLOAT,
            es: DataTypes.FLOAT,
            ew: DataTypes.FLOAT
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