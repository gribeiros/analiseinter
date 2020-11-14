const { Model, DataTypes } = require('sequelize');

class Mm1k extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.FLOAT,
            p_zero: DataTypes.FLOAT,
            enw: DataTypes.FLOAT,
            lambdan: DataTypes.FLOAT,
            uti: DataTypes.FLOAT,
            lambdal: DataTypes.FLOAT,
            ew: DataTypes.FLOAT,
            en: DataTypes.FLOAT,
            pn: DataTypes.FLOAT,
            enw: DataTypes.FLOAT
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