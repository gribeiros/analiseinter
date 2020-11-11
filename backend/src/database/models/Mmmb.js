const { Model, DataTypes } = require('sequelize');

class Mmmb extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mmmb'
            })
    }
    static associate(models) {


    }
}

module.exports = Mmmb;