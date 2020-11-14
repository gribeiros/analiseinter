const { Model, DataTypes } = require('sequelize');

class Mm1 extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.FLOAT,
            pn: DataTypes.FLOAT,
            p_zero: DataTypes.FLOAT,
            cmu: DataTypes.FLOAT,
            es: DataTypes.FLOAT,
            p_fila: DataTypes.FLOAT,
            enw: DataTypes.FLOAT,
            ens: DataTypes.FLOAT,
            en: DataTypes.FLOAT,
            ew: DataTypes.FLOAT
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