const { Model, DataTypes } = require('sequelize');

class Mmm extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mmm'
            })
    }
    static associate(models) {


    }
}

module.exports = Mmm;