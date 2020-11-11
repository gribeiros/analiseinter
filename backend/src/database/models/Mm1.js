const { Model, DataTypes } = require('sequelize');

class Mm1 extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mm1'
            })
    }
    static associate(models) {


    }
}

module.exports = Mm1;