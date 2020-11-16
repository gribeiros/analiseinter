const { Model, DataTypes } = require('sequelize');

class Mm1k extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.STRING,
            p_zero: DataTypes.STRING,
            enw: DataTypes.STRING,
            lambdan: DataTypes.STRING,
            uti: DataTypes.STRING,
            lambdal: DataTypes.STRING,
            ew: DataTypes.STRING,
            en: DataTypes.STRING,
            pn: DataTypes.STRING,
            enw: DataTypes.STRING
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