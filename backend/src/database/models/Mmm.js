const { Model, DataTypes } = require('sequelize');

class Mmm extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.FLOAT,
            p2: DataTypes.FLOAT,
            p1: DataTypes.FLOAT,
            c: DataTypes.FLOAT,
            e: DataTypes.FLOAT,
            p_fila: DataTypes.FLOAT,
            en: DataTypes.FLOAT,
            es: DataTypes.FLOAT,
            enn: DataTypes.FLOAT,
            ew: DataTypes.FLOAT
        },
            {
                sequelize,
                tableName: 'mmm'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mmm_id', as: 'results_mmm_id' })

    }
}

module.exports = Mmm;