const { Model, DataTypes } = require('sequelize');

class Mmm1b extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mm1b'
            })
    }
    static associate(models) {


    }
}

module.exports = Mmm1b;