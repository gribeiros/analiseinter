const { Model, DataTypes } = require('sequelize');

class Mminfinito extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mminfinito'
            })
    }
    static associate(models) {


    }
}

module.exports = Mminfinito;