const { Model, DataTypes } = require('sequelize');

class Mm1k extends Model {
    static init(sequelize) {
        super.init({

        },
            {
                sequelize,
                tableName:'mm1k'
            })
    }
    static associate(models) {


    }
}

module.exports = Mm1k;