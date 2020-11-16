const { Model, DataTypes } = require('sequelize');

class Mmmoneb extends Model {
    static init(sequelize) {
        super.init({
            lamb_n_m: DataTypes.STRING,
            pb: DataTypes.STRING,
            lamb1: DataTypes.STRING,
            p_zero: DataTypes.STRING,
            p_n: DataTypes.STRING,
            u1: DataTypes.STRING,
            en: DataTypes.STRING,
            en_w: DataTypes.STRING,
            es: DataTypes.STRING,
            ew: DataTypes.STRING
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