const { Model, DataTypes } = require('sequelize');

class Mminfinitok extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mminfinitok'
            })
    }
    static associate(models) {


    }
}

module.exports = Mminfinitok;