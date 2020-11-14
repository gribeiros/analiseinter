const { Model, DataTypes } = require('sequelize');

class Mminfinito extends Model {
    static init(sequelize) {
        super.init({
            ro: DataTypes.FLOAT,
            pn: DataTypes.FLOAT,
            ro: DataTypes.FLOAT,
            es: DataTypes.FLOAT
        },
            {
                sequelize,
                tableName: 'mminfinito'
            })
    }
    static associate(models) {
        this.hasMany(models.Results, { foreignKey: 'mminfinito_id', as: 'results_mminfinito_id' })

    }
}

module.exports = Mminfinito;