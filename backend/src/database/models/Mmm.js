const { Model, DataTypes } = require('sequelize');

class Mmm extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.STRING,
            p2: DataTypes.STRING,
            p1: DataTypes.STRING,
            c: DataTypes.STRING,
            e: DataTypes.STRING,
            p_fila: DataTypes.STRING,
            en: DataTypes.STRING,
            es: DataTypes.STRING,
            enn: DataTypes.STRING,
            ew: DataTypes.STRING
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